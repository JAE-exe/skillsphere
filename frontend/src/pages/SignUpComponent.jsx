"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Facebook, ArrowLeft } from "lucide-react";

// Define custom Google icon as it's not available in lucide-react
const GoogleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export default function SignUpComponent() {
  const [selectedRole, setSelectedRole] = useState(null);

  const roleData = {
    freelancer: {
      title: "Sign Up as a Freelancer",
      description: "Showcase your skills and find exciting projects",
      icon: <Briefcase className="w-12 h-12 text-accent" />,
      fields: [
        { name: "skills", label: "Skills", type: "text" },
        { name: "portfolio", label: "Portfolio URL", type: "url" },
      ],
    },
    learner: {
      title: "Sign Up as a Learner",
      description: "Expand your knowledge and boost your career",
      icon: <GraduationCap className="w-12 h-12 text-accent" />,
      fields: [
        { name: "interests", label: "Interests", type: "text" },
        {
          name: "coursePreferences",
          label: "Course Preferences",
          type: "text",
        },
      ],
    },
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleSwitchRole = () => {
    setSelectedRole(null);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {!selectedRole ? (
          <motion.div
            key="role-selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl"
          >
            <div className="border rounded-lg shadow-lg p-6 bg-white">
              <div className="text-2xl text-center mb-4 text-gray-800">
                Choose Your Role
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.keys(roleData).map((role) => (
                  <motion.div
                    key={role}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer"
                    onClick={() => handleRoleSelect(role)}
                  >
                    <div className="border rounded-lg shadow-lg p-4 bg-white">
                      <div className="flex items-center justify-center mb-2">
                        {roleData[role].icon}
                      </div>
                      <div className="text-gray-800 font-semibold">
                        {roleData[role].title}
                      </div>
                      <div className="text-gray-600">
                        {roleData[role].description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="registration-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md"
          >
            <div className="border rounded-lg shadow-lg p-6 bg-white">
              <div className="flex items-center justify-between mb-2">
                <motion.button
                  onClick={handleSwitchRole}
                  className="text-accent hover:text-accent/90 focus:outline-none"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowLeft className="w-6 h-6" />
                </motion.button>
                <div className="text-gray-800 font-semibold">
                  {roleData[selectedRole].title}
                </div>
              </div>
              <div className="text-gray-600">
                {roleData[selectedRole].description}
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4 mt-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent text-gray-800"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent text-gray-800"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="password" className="block text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent text-gray-800"
                  />
                </motion.div>
                {roleData[selectedRole].fields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <label htmlFor={field.name} className="block text-gray-700">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      type={field.type}
                      placeholder={`Enter your ${field.name}`}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent text-gray-800"
                    />
                  </motion.div>
                ))}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 focus:outline-none focus:bg-accent/90"
                  >
                    Sign Up
                  </button>
                </motion.div>
              </form>
              <div className="pt-4 text-center">
                <div className="text-gray-600">Or sign up with</div>
                <div className="flex justify-center space-x-4 mt-2">
                  <motion.button
                    className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    className="p-2 rounded-full bg-gray-600 hover:bg-gray-700 text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <GoogleIcon />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
