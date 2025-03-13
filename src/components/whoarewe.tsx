"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "../components/ui/wobble-card";
import { FaBuilding, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WhoAreWe() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-16 px-4 md:px-8 lg:px-12 bg-[#282230] flex flex-col items-center"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-white text-center mb-12"
      >
        Who Are We
      </motion.h2>

      {/* First Grid (Mission & Vision) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <WobbleCard containerClassName="bg-blue-900 min-h-[250px]">
            <h2 className="text-xl md:text-2xl font-semibold text-white">Our Mission</h2>
            <p className="mt-4 text-base text-neutral-200">
              Our mission is to revolutionize the construction and MEP industry by
              integrating cutting-edge technology and sustainable solutions.
            </p>
          </WobbleCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <WobbleCard containerClassName="bg-pink-800 min-h-[250px]">
            <h2 className="text-xl md:text-2xl font-semibold text-white">Our Vision</h2>
            <p className="mt-4 text-base text-neutral-200">
              We envision a future where smart infrastructure and intelligent
              building systems drive efficiency, safety, and sustainability.
            </p>
          </WobbleCard>
        </motion.div>
      </div>

      {/* Second Grid (Construction & MEP) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto w-full mt-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <WobbleCard containerClassName="bg-gray-800 flex flex-col lg:flex-row items-center min-h-[250px]">
            <FaBuilding className="text-white text-5xl lg:mr-6" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Construction</h2>
              <p className="mt-4 text-base text-neutral-200">
                We specialize in high-quality construction projects, from
                commercial buildings to residential complexes, ensuring
                top-tier engineering and design.
              </p>
            </div>
          </WobbleCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <WobbleCard containerClassName="bg-gray-900 flex flex-col lg:flex-row items-center min-h-[250px]">
            <FaTools className="text-white text-5xl lg:mr-6" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">MEP</h2>
              <p className="mt-4 text-base text-neutral-200">
                Our MEP services ensure seamless integration of mechanical,
                electrical, and plumbing systems to enhance functionality and
                efficiency in every project.
              </p>
            </div>
          </WobbleCard>
        </motion.div>
      </div>
    </motion.section>
  );
}
