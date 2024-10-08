import { useState } from "react"; // Import useState from React
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using this platform, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this platform's particular services, you shall be subject to any posted guidelines or rules applicable to such services.",
  },
  {
    title: "2. Description of Service",
    content:
      "Our platform provides users with access to a rich collection of resources, including various communications tools, forums, shopping services, personalized content, and branded programming through its network of properties which may be accessed through any various medium or device now known or hereafter developed.",
  },
  {
    title: "3. User Conduct",
    content:
      "You agree to use our services for lawful purposes only. You shall not post or transmit through our platform any material which violates or infringes in any way upon the rights of others, or any material that is unlawful, threatening, abusive, defamatory, invasive of privacy or publicity rights, vulgar, obscene, profane or otherwise objectionable.",
  },
  {
    title: "4. Modifications to Terms",
    content:
      "We reserve the right to change these terms or policies at any time. Changes will be posted on this page and your use of the platform after such changes have been posted will constitute your agreement to the modified terms and all of the changes.",
  },
  {
    title: "5. Termination",
    content:
      "We may terminate your access to the platform, without cause or notice, which may result in the forfeiture and destruction of all information associated with your account. All provisions of this agreement that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.",
  },
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState(null); // Corrected state initialization

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-gray-800"
      >
        Terms of Service
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md"
      >
        <p className="mb-6 text-gray-600">
          Please read these terms of service carefully before using our
          platform. By accessing or using our service, you agree to be bound by
          these terms.
        </p>

        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="mb-6"
          >
            <button
              onClick={() =>
                setActiveSection(activeSection === index ? null : index)
              }
              className="flex justify-between items-center w-full text-left font-semibold text-gray-800 hover:text-[#6200EA] focus:outline-none transition duration-300"
            >
              <span>{section.title}</span>
              <span>{activeSection === index ? "−" : "+"}</span>
            </button>
            {activeSection === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-600"
              >
                {section.content}
              </motion.p>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 text-center text-gray-600"
      >
        Last updated: {new Date().toLocaleDateString()}
      </motion.p>
    </div>
  );
}
