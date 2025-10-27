import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    university: "University of Sialkot",
    degree: "BSCS (Computer Science)",
    year: "Graduation 2025",
    details:
      "Completed BSc in Computer Science with a focus on modern web technologies.",
  },
  {
    university: "Punjab College",
    degree: "FSc Pre-Engineering",
    year: "2020 - 2021",
    details:
      "Completed intermediate in Pre-Engineering with strong foundation in Mathematics and Physics.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 md:px-20 py-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">
        Education
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-cyan-400"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-cyan-300">
              {edu.university}
            </h3>
            <p className="text-lg mt-2">{edu.degree}</p>
            <p className="text-sm text-gray-300">{edu.year}</p>
            <p className="mt-4 text-gray-200">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
