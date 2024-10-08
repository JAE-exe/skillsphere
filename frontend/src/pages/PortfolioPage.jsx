"use client"

import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <Header />
      <Skills />
      <Services />
      <Experience />
      <CallToAction />
    </div>
  )
}

function Header() {
  return (
    <motion.header className="text-center mb-12" {...fadeInUp}>
      <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4" />
      <h1 className="text-4xl font-bold mb-2">My Portfolio</h1>
      <p className="text-xl text-gray-600">Showcasing my skills and services</p>
    </motion.header>
  )
}

function Skills() {
  const skills = [
    { name: "Web Development", level: "Expert" },
    { name: "UI/UX Design", level: "Advanced" },
    { name: "Mobile App Development", level: "Intermediate" },
    { name: "Data Analysis", level: "Beginner" },
  ]

  return (
    <motion.section className="mb-12" {...fadeInUp}>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 bg-[#6200EA] text-white rounded-full"
          >
            {skill.name}
            <span className="ml-2 text-xs opacity-75">{skill.level}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites tailored to your needs",
      price: "Starting at $1000",
    },
    {
      title: "UI/UX Design",
      description: "Create intuitive and beautiful user interfaces",
      price: "Starting at $800",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      price: "Starting at $1500",
    },
  ]

  return (
    <motion.section className="mb-12" {...fadeInUp}>
      <h2 className="text-2xl font-bold mb-4">Services Offered</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div key={index} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <div className="border rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="font-semibold">{service.price}</p>
              <button className="w-full bg-[#6200EA] hover:bg-[#3700B3] text-white py-2 rounded transition">
                Inquire
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function Experience() {
  const experiences = [
    {
      jobTitle: "Senior Web Developer",
      company: "Tech Innovators Inc.",
      duration: "2019 - Present",
      description: "Led development of multiple high-traffic websites and web applications.",
    },
    {
      jobTitle: "UI/UX Designer",
      company: "Creative Solutions LLC",
      duration: "2017 - 2019",
      description: "Designed user interfaces for mobile apps and websites, improving user engagement by 40%.",
    },
    {
      jobTitle: "Junior Developer",
      company: "StartUp Ventures",
      duration: "2015 - 2017",
      description: "Contributed to the development of innovative web and mobile applications.",
    },
  ]

  return (
    <motion.section className="mb-12" {...fadeInUp}>
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="border rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold">{exp.jobTitle}</h3>
              <p className="text-gray-600 mb-2">{exp.company} | {exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function CallToAction() {
  return (
    <motion.section className="text-center" {...fadeInUp}>
      <button
        className="bg-[#6200EA] hover:bg-[#3700B3] text-white text-lg px-8 py-3 rounded"
      >
        Book a Consultation
      </button>
    </motion.section>
  )
}
