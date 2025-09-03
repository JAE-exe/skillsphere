const events = require("events");
const fs = require("fs");

const TRAILING_LINES = 10;

class Watcher extends events.EventEmitter {
  constructor(watchFile) {
    super();
    this.watchFile = watchFile;
    this.store = [];
    this._frag = '';              
  }

  getLogs() { return this.store; }

  _seedLast10(cb) {
    const BLOCK = 64 * 1024;
    fs.open(this.watchFile, 'r', (err, fd) => {
      if (err) { this.store = []; return cb && cb(); }
      fs.fstat(fd, (e, st) => {
        if (e) { fs.close(fd, ()=>{}); this.store = []; return cb && cb(); }
        let pos = st.size, acc = '';
        const step = () => {
          if (pos <= 0) return done();
          const toRead = Math.min(BLOCK, pos);
          pos -= toRead;
          const buf = Buffer.allocUnsafe(toRead);
          fs.read(fd, buf, 0, toRead, pos, (re, br) => {
            if (re) { fs.close(fd, ()=>{}); this.store = []; return cb && cb(); }
            acc = buf.slice(0, br).toString('utf8') + acc;
            const nl = (acc.match(/\n/g) || []).length;
            if (nl >= TRAILING_LINES + 1 || pos === 0) return done();
            step();
          });
        };
        const done = () => {
          fs.close(fd, ()=>{});
          let lines = acc.replace(/\r\n/g, '\n').split('\n');
          if (lines.at(-1) === '') lines.pop();
          this.store = lines.filter(l => l.trim() !== '').slice(-TRAILING_LINES);
          this._frag = '';
          cb && cb();
        };
        step();
      });
    });
  }

  watch(curr, prev) {
    if (curr.size < prev.size) {
      this._seedLast10(() => this.emit('process', this.store));
      return;
    }
    if (curr.size === prev.size) return;

    const readSize = curr.size - prev.size;
    const buffer = Buffer.alloc(readSize);

    fs.open(this.watchFile, 'r', (err, fd) => {
      if (err) { console.error(err); return; }

      fs.read(fd, buffer, 0, readSize, prev.size, (err, bytesRead) => {
        fs.close(fd, () => {});
        if (err) { console.error(err); return; }
        if (!bytesRead) return;

        const data = buffer.toString('utf8', 0, bytesRead).replace(/\r\n/g, '\n');
        const combined = this._frag + data;
        const parts = combined.split('\n');
        this._frag = parts.pop() || '';

        parts.filter(l => l.trim() !== '').forEach(l => {
          this.store.push(l);
          while (this.store.length > TRAILING_LINES) this.store.shift();
        });

        if (parts.length) this.emit("process", this.store);
      });
    });
  }

  start() {
    this._seedLast10(() => {
      fs.watchFile(this.watchFile, { interval: 200 }, (curr, prev) => {
        this.watch(curr, prev);
      });
      this.emit("process", this.store);
    });
  }
}

module.exports = Watcher;
