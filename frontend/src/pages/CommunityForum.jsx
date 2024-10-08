"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, Flag, Trash2, ChevronDown, ChevronUp } from "lucide-react";

const initialThreads = [
  {
    id: 1,
    title: "Best practices for freelance web developers",
    author: "Alice",
    posts: [
      {
        id: 1,
        author: "Alice",
        content:
          "What are some best practices you follow as a freelance web developer? I'm just starting out and would love some advice!",
        likes: 5,
        replies: 2,
        timestamp: "2 hours ago",
        isLiked: false,
        isFlagged: false,
      },
      {
        id: 2,
        author: "Bob",
        content:
          "Always have a contract in place before starting any work. It protects both you and the client.",
        likes: 3,
        replies: 0,
        timestamp: "1 hour ago",
        isLiked: false,
        isFlagged: false,
      },
    ],
    timestamp: "2 hours ago",
    category: "Freelancing",
  },
  {
    id: 2,
    title: "React vs Vue: Which one to learn in 2023?",
    author: "Charlie",
    posts: [
      {
        id: 3,
        author: "Charlie",
        content:
          "I'm torn between learning React or Vue. Which one do you think has better job prospects in 2023?",
        likes: 7,
        replies: 3,
        timestamp: "3 hours ago",
        isLiked: false,
        isFlagged: false,
      },
    ],
    timestamp: "3 hours ago",
    category: "Web Development",
  },
];

export default function CommunityForum() {
  const [threads, setThreads] = useState(initialThreads);
  const [activeThread, setActiveThread] = useState(null);
  const [newPost, setNewPost] = useState("");

  const handleLike = (threadId, postId) => {
    setThreads(
      threads.map((thread) => {
        if (thread.id === threadId) {
          return {
            ...thread,
            posts: thread.posts.map((post) => {
              if (post.id === postId) {
                return {
                  ...post,
                  likes: post.isLiked ? post.likes - 1 : post.likes + 1,
                  isLiked: !post.isLiked,
                };
              }
              return post;
            }),
          };
        }
        return thread;
      })
    );
  };

  const handleFlag = (threadId, postId) => {
    setThreads(
      threads.map((thread) => {
        if (thread.id === threadId) {
          return {
            ...thread,
            posts: thread.posts.map((post) => {
              if (post.id === postId) {
                return { ...post, isFlagged: !post.isFlagged };
              }
              return post;
            }),
          };
        }
        return thread;
      })
    );
  };

  const handleDelete = (threadId, postId) => {
    setThreads(
      threads.map((thread) => {
        if (thread.id === threadId) {
          return {
            ...thread,
            posts: thread.posts.filter((post) => post.id !== postId),
          };
        }
        return thread;
      })
    );
  };

  const handleSubmitPost = (threadId) => {
    if (newPost.trim() === "") return;

    setThreads(
      threads.map((thread) => {
        if (thread.id === threadId) {
          const newPostObj = {
            id: Math.max(...thread.posts.map((p) => p.id)) + 1,
            author: "You",
            content: newPost,
            likes: 0,
            replies: 0,
            timestamp: "Just now",
            isLiked: false,
            isFlagged: false,
          };
          return {
            ...thread,
            posts: [...thread.posts, newPostObj],
          };
        }
        return thread;
      })
    );
    setNewPost("");
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-gray-800"
      >
        Community Forum
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        {threads.map((thread) => (
          <motion.div
            key={thread.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6 bg-gray-100 rounded-lg shadow-md overflow-hidden"
          >
            <div
              className="p-4 cursor-pointer hover:bg-gray-200 transition duration-300"
              onClick={() =>
                setActiveThread(activeThread === thread.id ? null : thread.id)
              }
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {thread.title}
                </h2>
                {activeThread === thread.id ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Posted by {thread.author} · {thread.timestamp} ·{" "}
                {thread.category}
              </div>
            </div>

            <AnimatePresence>
              {activeThread === thread.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {thread.posts.map((post) => (
                    <div key={post.id} className="p-4 border-t border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="font-semibold">{post.author}</span>
                          <span className="text-sm text-gray-600 ml-2">
                            {post.timestamp}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleLike(thread.id, post.id)}
                            className={`text-sm flex items-center ${
                              post.isLiked ? "text-[#6200EA]" : "text-gray-600"
                            }`}
                          >
                            <ThumbsUp size={16} className="mr-1" />
                            {post.likes}
                          </button>
                          <button
                            onClick={() => handleFlag(thread.id, post.id)}
                            className={`text-sm ${
                              post.isFlagged ? "text-red-500" : "text-gray-600"
                            }`}
                          >
                            <Flag size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(thread.id, post.id)}
                            className="text-sm text-gray-600"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-800">{post.content}</p>
                    </div>
                  ))}
                  <div className="p-4 border-t border-gray-200">
                    <textarea
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      placeholder="Write a reply..."
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
                      rows={3}
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSubmitPost(thread.id)}
                      className="mt-2 bg-[#6200EA] text-white py-2 px-4 rounded-md font-semibold hover:bg-opacity-90 transition duration-300"
                    >
                      Post Reply
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
