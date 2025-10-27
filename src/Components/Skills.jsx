import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaJs, FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skillsData = [
  { name: "ReactJS", icon: <FaReact size={30} className="text-cyan-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={30} className="text-cyan-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={30} className="text-cyan-400" /> },
  { name: "JavaScript", icon: <FaJs size={30} className="text-yellow-400" /> },
  { name: "HTML", icon: <FaHtml5 size={30} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={30} className="text-blue-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-4 md:px-20 py-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">Skills</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-700 p-4 rounded-xl shadow-lg border border-cyan-400 w-32 h-32 justify-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {skill.icon}
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
