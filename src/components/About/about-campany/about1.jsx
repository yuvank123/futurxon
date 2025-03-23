import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-us");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="about-us" className="text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          About Us: Our Journey and Values
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 mb-6"
        >
          We do not consider ourselves just another software development company; rather, we consider ourselves the true torchbearers of digital transformation.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="text-gray-400 mb-8"
        >
          Bacancy is one of the leading software development companies that started its journey back in 2011. We started with a small team of tech enthusiasts, all having a common purpose - to inject innovation into businesses worldwide and stretch the limits of traditional tech solutions. Bacancy is a formidable force of over 1,050+ IT experts, each specializing in their unique tech domains. In our journey, we evolved and embraced the change positively. We are still evolving from initial mobile and web app development to next-gen technologies like AI, ML, Data Science, AR, VR, and more.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUs;
