import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 md:px-20 py-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">Contact Me</h2>
      <motion.form
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-6 border border-cyan-400"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
          required
        />
        <button
          type="submit"
          className="bg-cyan-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-cyan-300 transition-colors"
        >
          Send Message
        </button>
      </motion.form>
      <motion.div
        className="flex gap-6 mt-8"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
      </motion.div>
    </section>
  );
};

export default Contact;
