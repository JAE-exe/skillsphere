"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  MessageCircle,
  Search as SearchIcon,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home },
  { name: "Users", icon: User },
  { name: "Chat", icon: MessageCircle },
  { name: "Search", icon: SearchIcon },
];

const courses = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the basics of React",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master JavaScript concepts",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "CSS Fundamentals",
    description: "Style your web applications",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Node.js Essentials",
    description: "Build server-side applications",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Python for Data Science",
    description: "Analyze data with Python",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Machine Learning Basics",
    description: "Get started with ML algorithms",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const recommendations = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 2,
    title: "UI/UX Design Principles",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 3,
    title: "Data Structures and Algorithms",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 4,
    title: "Mobile App Development",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 5,
    title: "Cloud Computing Fundamentals",
    image: "/placeholder.svg?height=150&width=200",
  },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    photo: "/placeholder.svg?height=100&width=100",
    feedback:
      "The courses here are amazing! I learned so much in such a short time.",
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "/placeholder.svg?height=100&width=100",
    feedback:
      "The instructors are top-notch and the content is always up-to-date.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    photo: "/placeholder.svg?height=100&width=100",
    feedback:
      "I love how interactive and engaging the courses are. Highly recommended!",
  },
];

export default function StudentHomepage() {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const filtered = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchTerm]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#333333]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#6200EA]">StudentHub</div>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                className={`flex items-center space-x-1 ${
                  activeNavItem === item.name
                    ? "text-[#6200EA]"
                    : "text-[#333333]"
                }`}
                onClick={() => setActiveNavItem(item.name)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="hidden md:inline">{item.name}</span>
              </motion.button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-purple-100 to-indigo-100 py-20 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to StudentHub
        </h1>
        <p className="text-xl mb-8">
          Discover amazing courses and boost your skills!
        </p>
        <motion.button
          className="bg-[#6200EA] text-white px-8 py-3 rounded-full font-semibold"
          whileHover={{ scale: 1.05, backgroundColor: "#7C4DFF" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Courses
        </motion.button>
      </motion.section>

      {/* All Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">All Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <motion.button
                      className="bg-[#6200EA] text-white px-4 py-2 rounded-full font-semibold"
                      whileHover={{ scale: 1.05, backgroundColor: "#7C4DFF" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Web-Scraped Recommendations Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Recommended for You
          </h2>
          <motion.div
            className="flex space-x-6 overflow-x-auto pb-4"
            drag="x"
            dragConstraints={{ right: 0, left: -1000 }}
          >
            {recommendations.map((course) => (
              <motion.div
                key={course.id}
                className="bg-white rounded-lg shadow-md overflow-hidden min-w-[250px]"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="relative max-w-xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-md p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonials[currentTestimonial].photo}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">
                "{testimonials[currentTestimonial].feedback}"
              </p>
              <h4 className="text-lg font-semibold">
                {testimonials[currentTestimonial].name}
              </h4>
            </motion.div>
            <button
              className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 StudentHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
