import React from "react";
import { motion } from "framer-motion";

const certificatesData = [
  {
    name: "Front-End Software Engineering Job Simulation",
    organization: "Aneeb Ahmad",
    date: "October 9th, 2025",
    description:
      "Certificate of Completion for successfully finishing the Front-End Software Engineering Job Simulation.",
  },
  {
    name: "ReactJS Certificate",
    organization: "Meta / Coursera",
    date: "October 2025",
    description:
      "Certificate of completion awarded to Aneeb Ahmad for successfully completing the ReactJS course offered by Meta through Coursera.",
  },
  {
    name: "Bringing Websites to Life with JavaScript",
    organization: "IBM SkillBuild",
    date: "October 2025",
    description:
      "Certificate awarded to Aneeb Ahmad for completing 'Bringing Websites to Life with JavaScript (MDLPT-271)' according to the Moodle system of record.",
  },
  {
    name: "Introduction to Front End Development",
    organization: "Simplilearn",
    date: "16th September 2025",
    description:
      "Certificate of completion awarded to Aneeb Ahmad. Certificate code: 8993050",
  },
  {
    name: "ReactJS for Beginners",
    organization: "Simplilearn",
    date: "14th September 2025",
    description:
      "Certificate of completion awarded to Aneeb Ahmad. Certificate code: 8977231",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-4 md:px-20 py-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">
        Certificates
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-6 rounded-xl shadow-lg border border-cyan-400"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-cyan-300">{cert.name}</h3>
            <p className="text-lg mt-2">{cert.organization}</p>
            <p className="text-sm text-gray-300">{cert.date}</p>
            <p className="mt-4 text-gray-200">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
