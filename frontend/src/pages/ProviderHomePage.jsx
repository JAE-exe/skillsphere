"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search, Globe, DollarSign, Users, Star } from "lucide-react";

export default function ProviderHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#333333]">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-[#6200EA]/10">
        <a className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 text-[#6200EA]" />
          <span className="ml-2 text-2xl font-bold text-[#6200EA]">
            SkillSphere
          </span>
        </a>
        <nav className="hidden md:flex gap-6">
          <a
            className="text-sm font-medium hover:text-[#6200EA] transition-colors"
            href="#"
          >
            Explore
          </a>
          <a
            className="text-sm font-medium hover:text-[#6200EA] transition-colors"
            href="#"
          >
            Teach
          </a>
          <a
            className="text-sm font-medium hover:text-[#6200EA] transition-colors"
            href="#"
          >
            About
          </a>
          <a
            className="text-sm font-medium hover:text-[#6200EA] transition-colors"
            href="#"
          >
            Login
          </a>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-[#6200EA]/10 py-4"
        >
          <nav className="flex flex-col items-center gap-4">
            <a
              className="text-sm font-medium hover:text-[#6200EA] transition-colors"
              href="#"
            >
              Explore
            </a>
            <a
              className="text-sm font-medium hover:text-[#6200EA] transition-colors"
              href="#"
            >
              Teach
            </a>
            <a
              className="text-sm font-medium hover:text-[#6200EA] transition-colors"
              href="#"
            >
              About
            </a>
            <a
              className="text-sm font-medium hover:text-[#6200EA] transition-colors"
              href="#"
            >
              Login
            </a>
          </nav>
        </motion.div>
      )}

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              {...fadeIn}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Share Your Skills, Grow Your Career
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                SkillSphere connects skilled professionals with learners
                worldwide. Teach what you know, learn what you need.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-[#6200EA] bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#6200EA] disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Search for skills or courses"
                    type="text"
                  />
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-[#6200EA] text-white hover:bg-[#6200EA]/90 transition-colors">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-[#6200EA]/5"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Why Choose SkillSphere?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  icon: Globe,
                  title: "Global Reach",
                  description:
                    "Connect with learners and experts from around the world.",
                },
                {
                  icon: DollarSign,
                  title: "Flexible Pricing",
                  description:
                    "Set your own rates and earn money sharing your expertise.",
                },
                {
                  icon: Users,
                  title: "Supportive Community",
                  description:
                    "Join a network of passionate learners and skilled professionals.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="h-12 w-12 mb-4 text-[#6200EA]" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Popular Categories
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Web Development",
                "Digital Marketing",
                "Graphic Design",
                "Data Science",
                "Business",
                "Language Learning",
                "Music",
                "Photography",
              ].map((category, index) => (
                <motion.button
                  key={index}
                  className="h-20 text-lg border-2 border-[#6200EA] rounded-md hover:bg-[#6200EA] hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-[#6200EA]/5"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Join SkillSphere Today
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                Whether you are here to learn or to teach, SkillSphere has
                everything you need to succeed.
              </p>
              <div className="space-x-4">
                <motion.button
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-[#6200EA] text-white hover:bg-[#6200EA]/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Star className="h-4 w-4 mr-2" />
                  Get Started
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-[#6200EA] text-white py-6 text-center">
        <p>&copy; 2024 SkillSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}
