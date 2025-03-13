"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scrolling function
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white/30 backdrop-blur-md shadow-md flex items-center justify-between px-6 sm:px-16 z-50">
      {/* Website Name / Logo */}
      <h1 className="text-xl md:text-2xl font-bold">
  <span className="text-blue-600">GULF</span> 
  <span className="text-white"> OCEAN</span>
</h1>


      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex gap-6 text-white text-lg transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 md:opacity-100 md:scale-y-100"
        } origin-top`}
      >
        <li
          className="hover:text-gray-900 cursor-pointer transition p-4 md:p-0"
          onClick={() => handleScroll("about")}
        >
          About
        </li>
        <li
          className="hover:text-white cursor-pointer transition p-4 md:p-0"
          onClick={() => handleScroll("team")}
        >
          Team
        </li>
        <li
          className="hover:text-white cursor-pointer transition p-4 md:p-0"
          onClick={() => handleScroll("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}