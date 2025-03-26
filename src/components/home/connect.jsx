import React from "react";
import { motion } from "framer-motion";

// Example icons (you can replace these with your own)
import { 
  MegaphoneIcon, 
  CubeIcon, 
  PencilIcon, 
  CubeTransparentIcon, 
  DocumentCheckIcon, 
  CurrencyDollarIcon 
} from "@heroicons/react/24/outline";

// Framer Motion variants for fade-up effect
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const steps = [
  {
    id: 1,
    title: "Discover",
    description:
      "Conduct in-depth market research, analyze competitors, and identify high-impact digital opportunities for business growth.",
    Icon: MegaphoneIcon,
    // Cylinder colors: top & bottom vs. side
    cylinderTop: "#2dd4bf", // Teal
    cylinderSide: "#14b8a6", // Darker teal
  },
  {
    id: 2,
    title: "Define",
    description:
      "Develop a data-driven SEO and IT strategy, optimizing for high-ranking keywords, user intent, and technical scalability.",
    Icon: CubeIcon,
    cylinderTop: "#86efac", // Light green
    cylinderSide: "#4ade80", // Darker green
  },
  {
    id: 3,
    title: "Design",
    description:
      "Arrange for the return of items from the customer to the designated location.",
    Icon: PencilIcon,
    cylinderTop: "#bef264", // Lime
    cylinderSide: "#a3e635", // Darker lime
  },
  {
    id: 4,
    title: "Develop",
    description:
      "Implement high-performance, scalable, and AI-powered digital solutions optimized for speed, security, and search engine rankings.",
    Icon: CubeTransparentIcon,
    cylinderTop: "#fde047", // Yellow
    cylinderSide: "#facc15", // Darker yellow
  },
  {
    id: 5,
    title: "Deploy",
    description:
      "Launch, test, and refine solutions using analytics, ensuring maximum visibility, performance, and organic reach.",
    Icon: DocumentCheckIcon,
    cylinderTop: "#fbbf24", // Amber
    cylinderSide: "#f59e0b", // Darker amber
  },
  {
    id: 6,
    title: "Deliver",
    description:
      "Continuously optimize, scale, and leverage AI-powered automation to drive long-term business growth and industry leadership.",
    Icon: CurrencyDollarIcon,
    cylinderTop: "#fb923c", // Orange
    cylinderSide: "#f97316", // Darker orange
  },
];

const SixDProcess = () => {
  return (
    <div className="relative w-full overflow-hidden py-24 px-4 md:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-white font-mono tracking-tighter">
            Our 6D Framework
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A systematic approach to digital transformation and sustainable growth
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              className="group relative p-6 bg-gradient-to-b from-gray-800/30 to-transparent rounded-2xl border border-gray-700/50 hover:border-purple-400/30 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10 flex flex-col items-center space-y-6">
                {/* Animated Icon */}
                <div className="p-4 bg-gradient-to-br from-purple-800 to-blue-900 rounded-2xl shadow-xl group-hover:shadow-purple-500/20 transition-shadow duration-300">
                  <step.Icon className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors duration-300" />
                </div>

                {/* Step Number & Title */}
                <div className="space-y-2 text-center">
                  <div className="text-sm font-semibold text-purple-400">
                    Step {step.id}
                  </div>
                  <h3 className="text-xl font-semibold font-mono text-gray-200">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 text-center leading-relaxed">
                  {step.description}
                </p>

                {/* Animated Cylinder */}
                <motion.div 
                  className="relative w-16 h-20 mt-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 flex flex-col justify-between">
                    <div 
                      className="w-full h-4 rounded-full bg-opacity-80"
                      style={{ backgroundColor: step.cylinderTop }}
                    />
                    <div 
                      className="w-full h-4 rounded-full bg-opacity-80"
                      style={{ backgroundColor: step.cylinderTop }}
                    />
                  </div>
                  <motion.div
                    className="w-full h-full origin-bottom rounded-4xl"
                    initial={{ scaleY: 0.8 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut"
                    }}
                    style={{ backgroundColor: step.cylinderSide }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default SixDProcess;