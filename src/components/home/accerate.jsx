import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Accerate = () => {
  return (
    <section className="min-h-screen relative z-10 py-24 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 relative z-10">
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-mono">
                Digital Future
              </span>
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-2xl opacity-20 -z-10" />
          </div>
          <p className="text-lg text-purple-200/90 font-light max-w-2xl mx-auto mt-6">
            Harness next-gen AI capabilities to revolutionize your development workflow.
          </p>
        </motion.header>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[1, 2, 3, 4].map((item) => (
            <motion.article
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-transparent transition-all duration-300 cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 glow-shadow" />

              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xl">{item}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    {[
                      "AI-Driven Automation",
                      "Data-Driven Insights",
                      "Scalable Cloud Solutions",
                      "Real-Time Team Collaboration",
                    ][item - 1]}
                  </h2>
                </div>
                <p className="text-sm text-purple-100/80 font-light leading-relaxed">
                  {[
                    "Boost efficiency with intelligent workflow automation and process optimization.",
                    "Utilize advanced AI-powered analytics for smarter, real-time business decisions.",
                    "Seamlessly integrate with cloud infrastructure for enhanced flexibility and security.",
                    "Enhance productivity with seamless, AI-enhanced collaboration across global teams.",
                  ][item - 1]}
                </p>
              </div>
            </motion.article>
          ))}
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center flex justify-center items-center"
        >
          <a href="/get-started" aria-label="Start Free Trial">
            <button className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold 
            hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300
            flex items-center gap-3 group overflow-hidden ">
              <span className="relative z-10">Get Started for Free</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              {/* Button Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-shine" />
              </div>
            </button>
          </a>
        </motion.div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skew(-15deg); }
          100% { transform: translateX(200%) skew(-15deg); }
        }

        .animate-shine {
          animation: shine 1.5s infinite;
        }

        .glow-shadow {
          box-shadow: inset 0 0 40px rgba(192, 132, 252, 0.05);
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Accerate;
