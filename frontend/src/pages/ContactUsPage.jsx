"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What are your business hours?",
    answer: "Our business hours are Monday to Friday, 9:00 AM to 5:00 PM EST.",
  },
  {
    question: "How long does it take to respond to inquiries?",
    answer: "We aim to respond to all inquiries within 24-48 business hours.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer refunds within 30 days of purchase. Please refer to our refund policy for more details.",
  },
];

export default function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openFAQ, setOpenFAQ] = useState(null); // Use null to indicate no open FAQ

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Contact Us
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-100 p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send us a message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#6200EA] text-white py-2 px-4 rounded-md font-semibold hover:bg-opacity-90 transition duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Company Info and FAQs */}
        <div className="space-y-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-100 p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Our Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="text-[#6200EA]" />
                <span>123 Business St, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-[#6200EA]" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-[#6200EA]" />
                <span>contact@example.com</span>
              </div>
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-100 p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-[#6200EA] focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    {openFAQ === index ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-gray-600"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
