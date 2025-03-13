"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-20 flex flex-col items-center bg-[#282230]"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-white text-center mb-12"
      >
        About
      </motion.h2>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col md:flex-row items-center justify-center rounded-2xl p-2 md:p-2 w-11/12 max-w-full"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full md:w-1/2"
        >
          <img
            src="/image.jpg" // Replace with your actual image path
            alt="About Us"
            className="w-full h-auto rounded-xl"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 text-white text-lg"
        >
          <p className="leading-relaxed">
            Welcome to our website! We are dedicated to providing high-quality solutions that make
            a difference. Our team is passionate about innovation, excellence, and delivering the
            best experience to our customers.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
