"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Search, ChevronDown } from "lucide-react";
import PropTypes from "prop-types";


const servicesData = [
  {
    id: 1,
    title: "Professional Web Development",
    category: "Web Development",
    price: 75,
    rating: 4.8,
    description: "Custom web development services tailored to your business needs.",
    provider: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4.9,
    },
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Mobile App Design",
    category: "UI/UX Design",
    price: 60,
    rating: 4.7,
    description: "Create stunning and user-friendly mobile app interfaces.",
    provider: {
      name: "Emily Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4.8,
    },
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "SEO Optimization",
    category: "Digital Marketing",
    price: 50,
    rating: 4.6,
    description: "Boost your website's search engine rankings and visibility.",
    provider: {
      name: "Michael Smith",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4.7,
    },
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Content Writing",
    category: "Writing",
    price: 40,
    rating: 4.5,
    description: "High-quality, engaging content for your website or blog.",
    provider: {
      name: "Sarah Brown",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4.6,
    },
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Logo Design",
    category: "Graphic Design",
    price: 80,
    rating: 4.9,
    description: "Create a unique and memorable logo for your brand.",
    provider: {
      name: "David Lee",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5.0,
    },
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Social Media Management",
    category: "Digital Marketing",
    price: 55,
    rating: 4.7,
    description: "Manage and grow your social media presence across platforms.",
    provider: {
      name: "Jessica Taylor",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4.8,
    },
    image: "/placeholder.svg?height=200&width=300",
  },
];

const categories = ["All", "Web Development", "UI/UX Design", "Digital Marketing", "Writing", "Graphic Design"];

const FilterOptions = ({ filters, setFilters }) => {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-[#333333]">Filters</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#333333] mb-2">Service Type</label>
          <div className="relative">
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#333333] mb-2">Price Range</label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
              className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
              placeholder="Min"
            />
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
              className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
              placeholder="Max"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#333333] mb-2">Minimum Rating</label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-6 h-6 cursor-pointer ${star <= filters.minRating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
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
    minPrice: PropTypes.number.isRequired,
    maxPrice: PropTypes.number.isRequired,
    minRating: PropTypes.number.isRequired,
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
};

const ServiceCard = ({ service }) => (
  <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-[#6200EA]">{service.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{service.description}</p>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={service.provider.avatar} alt={service.provider.name} className="w-10 h-10 rounded-full mr-2" />
          <div>
            <p className="font-medium">{service.provider.name}</p>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm">{service.provider.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-[#6200EA]">${service.price}/hr</p>
          <div className="flex items-center mt-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{service.rating.toFixed(1)} ({Math.floor(Math.random() * 100) + 1} reviews)</span>
          </div>
        </div>
      </div>
      <button className="w-full bg-[#6200EA] text-white py-2 rounded-lg hover:bg-[#3700B3] transition-colors duration-300">
        View Details
      </button>
    </div>
  </motion.div>
);

ServiceCard.propTypes = {
  service: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    provider: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default function ServicesPage() {
  const [services, setServices] = useState(servicesData);
  const [filters, setFilters] = useState({
    category: "All",
    minPrice: 0,
    maxPrice: 1000,
    minRating: 0,
  });
  const [sortBy, setSortBy] = useState("popularity");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let filteredServices = servicesData.filter(
      (service) =>
        (filters.category === "All" || service.category === filters.category) &&
        service.price >= filters.minPrice &&
        service.price <= filters.maxPrice &&
        service.rating >= filters.minRating &&
        service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (sortBy) {
      case "price-low-high":
        filteredServices.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filteredServices.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filteredServices.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setServices(filteredServices);
  }, [filters, sortBy, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h1 className="text-2xl font-semibold mb-4 text-[#6200EA]">Browse Services</h1>
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
              placeholder="Search services..."
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
          >
            <option value="popularity">Sort by: Popularity</option>
            <option value="price-low-high">Sort by: Price (Low to High)</option>
            <option value="price-high-low">Sort by: Price (High to Low)</option>
            <option value="rating">Sort by: Rating</option>
          </select>
        </div>
      </motion.div>

      <FilterOptions filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
