"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Mock data for the blog post
const blogPost = {
  title: "The Future of Artificial Intelligence in Web Development",
  content: `
    <p>Artificial Intelligence (AI) is rapidly transforming various industries, and web development is no exception. As we move into a new era of technological advancement, AI is poised to revolutionize the way we create, manage, and interact with websites and web applications.</p>
    <h2>1. AI-Powered Design Systems</h2>
    <p>One of the most exciting applications of AI in web development is in the realm of design. AI algorithms can analyze vast amounts of design data and generate unique, aesthetically pleasing layouts tailored to specific brand guidelines and user preferences. This not only speeds up the design process but also ensures consistency across different pages and platforms.</p>
    <h2>2. Intelligent Content Management</h2>
    <p>AI can significantly enhance content management systems by automating tasks such as content categorization, tagging, and even generating meta descriptions. Natural Language Processing (NLP) algorithms can analyze content and suggest improvements for SEO, readability, and engagement.</p>
    <h2>3. Personalized User Experiences</h2>
    <p>By leveraging machine learning algorithms, websites can offer highly personalized experiences to users. AI can analyze user behavior, preferences, and historical data to dynamically adjust content, product recommendations, and even the layout of the website in real-time.</p>
    <h2>Conclusion</h2>
    <p>As AI continues to evolve, its impact on web development will only grow stronger. Developers who embrace these technologies will be well-positioned to create more efficient, engaging, and intelligent web experiences in the future.</p>
  `,
  author: {
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Jane is a tech enthusiast and web developer with over 10 years of experience in the industry.",
    profileLink: "/author/jane-doe"
  },
  publishDate: "2023-07-15",
  readTime: "5 min read"
}

const relatedPosts = [
  { id: 1, title: "10 Essential Web Development Tools for 2023", link: "/blog/web-dev-tools-2023" },
  { id: 2, title: "The Rise of Progressive Web Apps", link: "/blog/progressive-web-apps" },
  { id: 3, title: "Mastering CSS Grid Layout", link: "/blog/css-grid-layout" },
]

const comments = [
  { id: 1, author: "John Smith", content: "Great article! I'm excited to see how AI will shape the future of web development.", date: "2023-07-16" },
  { id: 2, author: "Emily Brown", content: "I'm particularly interested in AI-powered design systems. Do you have any recommendations for tools or platforms that are currently implementing this technology?", date: "2023-07-17" },
]

export default function BlogPostPage() {
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the comment to your backend
    console.log("New comment:", newComment);
    setNewComment("");
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{blogPost.title}</h1>
        <div className="flex items-center mb-6">
          <Image 
            src={blogPost.author.avatar} 
            alt={blogPost.author.name} 
            width={40} 
            height={40} 
            className="rounded-full mr-4"
          />
          <div>
            <Link href={blogPost.author.profileLink} className="font-semibold text-[#6200EA] hover:underline">
              {blogPost.author.name}
            </Link>
            <p className="text-sm text-gray-600">{blogPost.publishDate} · {blogPost.readTime}</p>
          </div>
        </div>
        <div 
          className="prose max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
      </motion.article>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">About the Author</h2>
        <div className="flex items-center bg-gray-100 p-6 rounded-lg">
          <Image 
            src={blogPost.author.avatar} 
            alt={blogPost.author.name} 
            width={80} 
            height={80} 
            className="rounded-full mr-6"
          />
          <div>
            <h3 className="font-semibold text-lg mb-2">{blogPost.author.name}</h3>
            <p className="text-gray-600 mb-2">{blogPost.author.bio}</p>
            <Link href={blogPost.author.profileLink} className="text-[#6200EA] hover:underline">
              View Profile
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Related Posts</h2>
        <ul className="space-y-4">
          {relatedPosts.map((post) => (
            <li key={post.id}>
              <Link href={post.link} className="text-[#6200EA] hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Leave a comment..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
            rows={4}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-2 bg-[#6200EA] text-white py-2 px-4 rounded-md font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Post Comment
          </motion.button>
        </form>
        <ul className="space-y-6">
          {comments.map((comment) => (
            <li key={comment.id} className="bg-gray-100 p-4 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{comment.author}</h3>
                <span className="text-sm text-gray-600">{comment.date}</span>
              </div>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  )
}
