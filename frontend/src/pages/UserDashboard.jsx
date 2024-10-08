// UserDashboard.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Settings, Book, ShoppingBag, CheckSquare } from "lucide-react";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const tabContent = {
    overview: (
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h2 className="text-2xl font-semibold mb-4">Activity Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <Book className="text-[#6200EA] mr-2" />
              <h3 className="text-lg font-semibold">Enrolled Courses</h3>
            </div>
            <p className="text-3xl font-bold">3</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <ShoppingBag className="text-[#6200EA] mr-2" />
              <h3 className="text-lg font-semibold">Purchased Services</h3>
            </div>
            <p className="text-3xl font-bold">2</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <CheckSquare className="text-[#6200EA] mr-2" />
              <h3 className="text-lg font-semibold">Completed Tasks</h3>
            </div>
            <p className="text-3xl font-bold">15</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b">
            <p className="font-semibold">
              Completed lesson in &quot;Web Development Basics&quot;
            </p>
            <p className="text-sm text-gray-600">2 hours ago</p>
          </div>
          <div className="p-4 border-b">
            <p className="font-semibold">
              Purchased &quot;Logo Design&quot; service
            </p>
            <p className="text-sm text-gray-600">1 day ago</p>
          </div>
          <div className="p-4">
            <p className="font-semibold">
              Enrolled in &quot;Advanced JavaScript&quot; course
            </p>
            <p className="text-sm text-gray-600">3 days ago</p>
          </div>
        </div>
      </motion.div>
    ),
    progress: (
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h2 className="text-2xl font-semibold mb-4">Course Progress</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">
              Web Development Basics
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#6200EA] h-2.5 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">70% complete</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Advanced JavaScript</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#6200EA] h-2.5 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">30% complete</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">
              UI/UX Design Principles
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#6200EA] h-2.5 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">50% complete</p>
          </div>
        </div>
      </motion.div>
    ),
    settings: (
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="bg-[#6200EA] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Save Changes
          </button>
        </div>
      </motion.div>
    ),
  };

  return (
    <div className="bg-gray-100 min-h-screen text-[#333333]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome, {name}!</h1>
          <div className="flex space-x-4">
            <button
              className="text-[#6200EA] hover:text-opacity-80"
              aria-label="Notifications"
            >
              <Bell size={24} />
            </button>
            <button
              className="text-[#6200EA] hover:text-opacity-80"
              aria-label="Settings"
            >
              <Settings size={24} />
            </button>
          </div>
        </div>
        <div className="flex mb-8 border-b" role="tablist">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "overview"
                ? "text-[#6200EA] border-b-2 border-[#6200EA]"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("overview")}
            role="tab"
            aria-selected={activeTab === "overview"}
          >
            Overview
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "progress"
                ? "text-[#6200EA] border-b-2 border-[#6200EA]"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("progress")}
            role="tab"
            aria-selected={activeTab === "progress"}
          >
            Progress
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "settings"
                ? "text-[#6200EA] border-b-2 border-[#6200EA]"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("settings")}
            role="tab"
            aria-selected={activeTab === "settings"}
          >
            Settings
          </button>
        </div>
        <div className="mt-4">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default UserDashboard;
