import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

const Home = () => {
  const textLines = [
    "I create modern and responsive web applications.",
    "Passionate about frontend development and UI/UX design.",
    "Always learning new technologies to deliver high-quality code."
  ];
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = textLines[index];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // pause before deleting
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
          setIndex((index + 1) % textLines.length);
        }
      }
    }, deleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center">
        <motion.div
          className="flex-1 space-y-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400">
            Frontend Developer
          </h1>
          <p className="text-lg md:text-xl">
            <span className="border-r-2 border-cyan-400 pr-1 animate-pulse">
              {displayText}
            </span>
          </p>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-cyan-400 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
