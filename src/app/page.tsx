"use client"
import Navbar from "@/components/Navbar";
import HeroPage from "@/components/Hero/Hero";
import About from "@/components/About";
import WhoAreWe from "@/components/whoarewe";
import OurTeam from "@/components/ourteams";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="w-full">
        {/* Full-Screen Hero Section */}
        <section className="w-full h-screen">
          <HeroPage />
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-10 bg-[#282230]">
          <FadeInSection>
            <About />
          </FadeInSection>
        </section>

        <section className="w-full py-10 bg-[#282230]">
          <FadeInSection>
            <WhoAreWe />
          </FadeInSection>
        </section>

        <section id="team" className="w-full py-10 bg-[#282230]">
          <FadeInSection>
            <OurTeam />
          </FadeInSection>
        </section>

        <section id="contact" className="w-full py-10 bg-[#282230]">
          <FadeInSection>
            <Contact />
          </FadeInSection>
        </section>

        <footer className="bottom-0 left-0 w-full h-16 bg-[#282230] text-white flex items-center justify-center text-sm sm:text-base shadow-md">
          <p>© 2025 GulfOcean All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}
