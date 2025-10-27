import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-800 text-white px-4 md:px-20"
    >
      <motion.div
        className="max-w-3xl space-y-6"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          I am a passionate Frontend Developer with 2 years of experience in building modern, responsive, and user-friendly web applications using ReactJS and other cutting-edge web technologies. I specialize in creating seamless user interfaces, optimizing performance, and ensuring a smooth user experience. My expertise includes React, Tailwind CSS, JavaScript, HTML, and CSS, with a strong focus on clean, maintainable code. I am always eager to learn new tools and frameworks to deliver high-quality solutions that meet client requirements and industry standards.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          I enjoy collaborating with designers and backend developers to bring ideas to life and continuously improve my skills. I am motivated by challenges and aim to deliver solutions that are both visually appealing and technically robust.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
