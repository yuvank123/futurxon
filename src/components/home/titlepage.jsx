import { motion } from "framer-motion";
import React, { useMemo } from "react";
import "../../../src/style/titlepage.css";

// Generate N random star positions
const generateStars = (count) =>
  Array.from({ length: count }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 6 + 2}px`,
    delay: Math.random() * 3,
  }));

const TitlePage = () => {
  const stars = useMemo(() => generateStars(40), []);

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const colorTransition = {
    hidden: { color: "#ffffff" },
    visible: {
      color: "#3b82f6",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* iPad Pro–only overrides with !important */}
      <style>{`
        @media only screen and (min-width: 1024px) and (max-width: 1279px) {
          .ipad-title {
            font-size: 3.75rem !important; /* ~60px */
          }
          .ipad-main-title {
            font-size: 6rem !important;   /* ~80px */
          }
          .ipad-subtitle {
            font-size: 1.875rem !important; /* ~30px */
          }
        }
           @media only screen and (min-width: 912px) and (max-width: 1024px) {
          .ipad-title {
            font-size: 3.75rem !important; /* ~60px */
          }
          .ipad-main-title {
            font-size: 6rem !important;   /* ~80px */
          }
          .ipad-subtitle {
            font-size: 1.875rem !important; /* ~30px */
          }
        }
      `}</style>

      <header className="relative top-20 pb-[20%] md:pb-0 left-0 w-full h-[90vh] z-20 flex flex-col justify-center items-center p-4 md:pl-20 bg-opacity-50 gap-2 overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 z-0 flex flex-col justify-center items-center">
          {stars.map((star, idx) => (
            <motion.div
              key={idx}
              className="absolute bg-white rounded-full blur-[2px] shadow-lg"
              style={{
                width: star.size,
                height: star.size,
                top: star.top,
                left: star.left,
                opacity: 0.6,
              }}
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              }}
            />
          ))}
        </div>

        {/* First Line */}
        <motion.div className="mb-4 mt-1" variants={slideInLeft}>
          <h2 className="text-3xl md:text-4xl source-code-pro drop-shadow-lg font-extralight bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-white ipad-title">
            AI-Powered Innovation
          </h2>
        </motion.div>

        {/* Main Title */}
        <motion.section
          className="w-full mb-3 md:w-[100vw] h-auto flex flex-col justify-center items-center"
          variants={itemVariants}
        >
          <h2 className="text-5xl md:text-7xl p-2 font-bold unbounded-816 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-300 to-white mb-4 scale-y-110 drop-shadow-2xl ipad-main-title">
            Agile & Scalable IT Services
          </h2>
          <h2 className="text-5xl md:text-7xl font-bold unbounded-816 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-white mb-4 scale-y-110 drop-shadow-2xl ipad-main-title">
            <motion.span
              className="bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-white playwrite-dk-loopet rounded-2xl"
              variants={colorTransition}
            >
              for Business{" "}
            </motion.span>
            Growth
          </h2>
        </motion.section>

        {/* Subtitle */}
        <motion.section className="mb-4" variants={itemVariants}>
          <h2 className="text-xl md:text-2xl source-code-pro font-extralight text-white drop-shadow-md ipad-subtitle">
            Your Trusted Partner for Innovative Technology Solutions
          </h2>
        </motion.section>

        {/* Call to Action */}
        <div className="z-10 flex flex-col md:flex-row gap-6 items-center justify-center">
          {/* Button 1 */}
          <motion.a
            href="/contact"
            aria-label="Contact-us"
            className="mb-4 hidden md:block"
            variants={itemVariants}
            whileHover={{ scale: 1.45 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-6 py-6 font-bold bg-gradient-to-r from-purple-900 via-purple-400 blur-[3px] hover:blur-none to-purple-200 rounded-4xl shadow-lg hover:shadow-xl transition-all duration-300" />
          </motion.a>

          {/* Blue Button */}
          <motion.a
            href="/contact"
            aria-label="Contact-us"
            className="mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-6 py-3 font-semibold bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-4xl shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </button>
          </motion.a>

          {/* Button 3 */}
          <motion.a
            href="/contact"
            aria-label="Contact-us"
            className="mb-4 hidden md:block"
            variants={itemVariants}
            whileHover={{ scale: 1.45 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-8 py-6 font-semibold bg-gradient-to-r from-purple-300 to-purple-500 blur-[3px] hover:blur-none text-white rounded-4xl shadow-lg hover:shadow-xl transition-all duration-300" />
          </motion.a>

          {/* Button 4 */}
          <motion.a
            href="/contact"
            aria-label="Contact-us"
            className="mb-4 hidden md:block px-5 py-4 rounded-full border-1 border-b-purple-600 border-t-purple-200 border-l-purple-700 border-r-purple-100"
            variants={itemVariants}
          >
            <button className="px-4 py-5 animate-spin font-semibold blur-[0px] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white rounded-4xl shadow-lg hover:shadow-xl transition-all duration-300" />
          </motion.a>
        </div>
      </header>
    </>
  );
};

export default TitlePage;
