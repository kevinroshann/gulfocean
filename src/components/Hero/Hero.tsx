"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sentences = [
  "Your journey starts here.",
  "Unlock endless possibilities.",
  "Create. Innovate. Inspire."
];

export default function HeroPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/image3.jpg')" }}
    >
      {/* Large Title */}
      <h1 className="text-4xl md:text-8xl font-bold text-center drop-shadow-lg">
        Your Trusted Partner in Construction MEP and  Trading
      </h1>

      {/* Rotating Subtitle */}
      <div className="h-10 mt-4 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-3xl text-center font-light"
          >
            {sentences[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
