import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, Search } from "lucide-react";
import PropTypes from "prop-types";

const coursesData = [
  {
    id: 1,
    title: "Introduction to React",
    category: "Web Development",
    price: 49.99,
    rating: 4.5,
    description: "Learn the basics of React and build modern web applications.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    category: "Programming",
    price: 79.99,
    rating: 4.8,
    description: "Master advanced JavaScript concepts and patterns.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "UX Design Fundamentals",
    category: "Design",
    price: 59.99,
    rating: 4.2,
    description: "Understand the principles of user experience design.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Python for Data Science",
    category: "Data Science",
    price: 89.99,
    rating: 4.7,
    description: "Use Python to analyze and visualize data effectively.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Mobile App Development with Flutter",
    category: "Mobile Development",
    price: 69.99,
    rating: 4.4,
    description: "Build cross-platform mobile apps with Flutter.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Machine Learning Basics",
    category: "Data Science",
    price: 99.99,
    rating: 4.6,
    description: "Get started with machine learning algorithms and techniques.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    title: "Full Stack Web Development",
    category: "Web Development",
    price: 129.99,
    rating: 4.9,
    description:
      "Become a full stack developer with this comprehensive course.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "iOS App Development with Swift",
    category: "Mobile Development",
    price: 89.99,
    rating: 4.5,
    description: "Create powerful iOS apps using Swift and Xcode.",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const categories = [
  "All",
  "Web Development",
  "Programming",
  "Design",
  "Data Science",
  "Mobile Development",
];

const FilterOptions = ({ filters, setFilters }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6 p-6 bg-white rounded-xl shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-[#333333]">Filters</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#333333] mb-2">
            Category
          </label>
          <div className="relative">
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#333333] mb-2">
            Price Range
          </label>
          <input
            type="range"
            min="0"
            max="200"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: Number(e.target.value) })
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-[#333333] mt-1 block">
            Max: ${filters.maxPrice}
          </span>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#333333] mb-2">
            Minimum Rating
          </label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-6 h-6 cursor-pointer ${
                  star <= filters.minRating
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
                onClick={() => setFilters({ ...filters, minRating: star })}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

FilterOptions.propTypes = {
  filters: PropTypes.shape({
    category: PropTypes.string.isRequired,
    maxPrice: PropTypes.number.isRequired,
    minRating: PropTypes.number.isRequired,
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
};

const CoursesPage = () => {
  const [courses, setCourses] = useState(coursesData);
  const [filters, setFilters] = useState({
    category: "All",
    maxPrice: 200,
    minRating: 0,
  });
  const [sortBy, setSortBy] = useState("popularity");
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const coursesPerPage = 4;

  useEffect(() => {
    let filteredCourses = coursesData.filter(
      (course) =>
        (filters.category === "All" || course.category === filters.category) &&
        course.price <= filters.maxPrice &&
        course.rating >= filters.minRating &&
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (sortBy) {
      case "newest":
        filteredCourses.sort((a, b) => b.id - a.id);
        break;
      case "highest-rated":
        filteredCourses.sort((a, b) => b.rating - a.rating);
        break;
      default: // popularity
        filteredCourses.sort((a, b) => a.id - b.id);
    }

    setCourses(filteredCourses);
    setPage(1);
  }, [filters, sortBy, searchTerm]);

  const pageCount = Math.ceil(courses.length / coursesPerPage);
  const displayedCourses = courses.slice(
    (page - 1) * coursesPerPage,
    page * coursesPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3E5F5] to-[#EDE7F6] text-[#333333] p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-[#6200EA]"
      >
        Explore Our Courses
      </motion.h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <FilterOptions filters={filters} setFilters={setFilters} />
        </div>
        <div className="lg:w-3/4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="newest">Sort by Newest</option>
              <option value="highest-rated">Sort by Highest Rated</option>
            </select>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-4 text-center text-gray-600"
          >
            {courses.length} courses found
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {displayedCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-lg p-4 text-center"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#333333] font-medium">
                      ${course.price.toFixed(2)}
                    </span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= course.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <button className="w-full py-2 px-4 bg-[#6200EA] text-white rounded-lg hover:bg-[#5e00d1] focus:outline-none focus:ring-2 focus:ring-[#6200EA]">
                    Enroll Now
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 flex justify-center"
          >
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`py-2 px-4 rounded-l-lg bg-white border border-gray-300 text-[#333333] ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>
            {[...Array(pageCount).keys()].map((num) => (
              <button
                key={num + 1}
                onClick={() => setPage(num + 1)}
                className={`py-2 px-4 border-t border-b border-gray-300 text-[#333333] ${
                  page === num + 1 ? "bg-[#6200EA] text-white" : "bg-white"
                }`}
              >
                {num + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, pageCount))}
              disabled={page === pageCount}
              className={`py-2 px-4 rounded-r-lg bg-white border border-gray-300 text-[#333333] ${
                page === pageCount ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
