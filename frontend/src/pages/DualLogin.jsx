import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHistory } from "react-router-dom"; // Ensure you have react-router-dom installed

export default function DualLogin() {
  const [isFreelancer, setIsFreelancer] = useState(true);
  const history = useHistory(); // Use useHistory for navigation

  const toggleRole = () => setIsFreelancer(!isFreelancer);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Redirect based on the selected role
    if (isFreelancer) {
      // Perform freelancer login logic here (e.g., API call)
      history.push("/provider-home"); // Redirect to ProviderHomePage
    } else {
      // Perform learner login logic here (e.g., API call)
      history.push("/student-home"); // Redirect to StudentHomepage
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Welcome Back
            </h2>
            <div className="flex items-center justify-center mb-6">
              <label htmlFor="role-toggle" className="mr-2 text-sm font-medium">
                Learner
              </label>
              <input
                type="checkbox"
                id="role-toggle"
                checked={isFreelancer}
                onChange={toggleRole}
                className="toggle-input"
              />
              <label htmlFor="role-toggle" className="ml-2 text-sm font-medium">
                Freelancer
              </label>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={isFreelancer ? "freelancer" : "learner"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  {isFreelancer ? <FreelancerForm /> : <LearnerForm />}
                  <button
                    type="submit"
                    className="w-full bg-[#6200EA] hover:bg-[#3700B3] text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Login as {isFreelancer ? "Freelancer" : "Learner"}
                  </button>
                </form>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FreelancerForm() {
  return (
    <>
      <div className="space-y-2">
        <label htmlFor="freelancer-email">Email</label>
        <input
          id="freelancer-email"
          type="email"
          placeholder="Enter your email"
          required
          className="input-field"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="freelancer-password">Password</label>
        <input
          id="freelancer-password"
          type="password"
          placeholder="Enter your password"
          required
          className="input-field"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="freelancer-skill">Primary Skill</label>
        <input
          id="freelancer-skill"
          type="text"
          placeholder="E.g., Web Development"
          required
          className="input-field"
        />
      </div>
    </>
  );
}

function LearnerForm() {
  return (
    <>
      <div className="space-y-2">
        <label htmlFor="learner-email">Email</label>
        <input
          id="learner-email"
          type="email"
          placeholder="Enter your email"
          required
          className="input-field"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="learner-password">Password</label>
        <input
          id="learner-password"
          type="password"
          placeholder="Enter your password"
          required
          className="input-field"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="learner-interest">Learning Interest</label>
        <input
          id="learner-interest"
          type="text"
          placeholder="E.g., Data Science"
          required
          className="input-field"
        />
      </div>
    </>
  );
}
