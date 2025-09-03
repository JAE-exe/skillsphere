import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

import readLastLines from 'read-last-lines';
import TailFile from '@logdna/tail-file';
import split2 from 'split2';
import fs from 'fs';
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, { cors: { origin: '*' } });

app.use('/log', express.static(path.join(process.cwd(), 'public')));

const LOGPATH = process.env.LOG_PATH || "C:/Users/Aarya/OneDrive/Desktop/TestLog/test.log";

// Helper: read “last 10 NON-BLANK lines” efficiently
async function readLast10NonBlank(file) {
  // Read more than 10 so filtering blanks still yields 10 lines
  const raw = await readLastLines.read(file, 200).catch(() => '');
  const lines = raw.split(/\r?\n/).filter(l => l.trim() !== '');
  return lines.slice(-10).join('\n');
}

// On connect: push the initial 10 non-blank lines
io.on('connection', async (socket) => {
  try {
    const initial = await readLast10NonBlank(LOGPATH);
    socket.emit('log:init', initial);
  } catch (e) {
    socket.emit('log:error', e?.message || String(e));
  }
});

const startPos = fs.existsSync(LOGPATH) ? fs.statSync(LOGPATH).size : 0;
const tail = new TailFile(LOGPATH, { startPos, encoding: 'utf8' });

tail
  .on('tail_error', (err) => {
    // Log and keep running; TailFile will retry on next poll.
    console.error('[tail_error]', err);
  })
  .on('error', (err) => {
    // Stream error; keep server alive so the page still loads.
    console.error('[tail_stream_error]', err);
  });

tail.start().catch((err) => {
  console.error('Cannot start tail. Does the file exist?', err);
});

// Split into lines and broadcast; ignore blanks
tail
  .pipe(split2())
  .on('data', (line) => {
    if (!line || !line.trim()) return;   // ignore blank/whitespace-only lines
    console.log('TAIL:', JSON.stringify(line)); // debug: prove tail is firing
    io.emit('log:append', line);
  });

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Socket.IO server started at http://localhost:${PORT}/log`);
});
