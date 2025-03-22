import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
//WEB/BACKEND
import W1 from '../../../public/images/w1.svg';
import W2 from "../../../public/images/w2.svg";
import W3 from "../../../public/images/w3.svg";
import W4 from "../../../public/images/w4.svg";
import W5 from "../../../public/images/w5.svg";
import W6 from "../../../public/images/w6.svg";
import W7 from "../../../public/images/w7.svg";
import W8 from "../../../public/images/w8.svg";
//WEB/FRONTEND
import WF1 from '../../../public/images/wf1.svg';
import WF2 from "../../../public/images/wf2.svg";
import WF3 from "../../../public/images/wf3.svg";
import WF4 from "../../../public/images/wf4.svg";
import WF5 from "../../../public/images/wf5.svg";
import WF6 from "../../../public/images/wf6.svg";
import WF7 from "../../../public/images/wf8.svg";
//mobile/frontend
import MOBF1 from '../../../public/images/mobf1.svg';
import MOBF2 from "../../../public/images/mobf2.svg";
import MOBF3 from "../../../public/images/mobf3.svg";
import MOBF4 from "../../../public/images/mobf4.svg";
//mobile/backend
import MOB1 from '../../../public/images/mob1.svg';
import MOB2 from "../../../public/images/mob2.svg";
import MOB3 from "../../../public/images/mob3.svg";

// Updated categories including the new "Desktop" and renamed "Information Security"
const categories = [
  "Web Solutions",
  "Mobile Technology",
  "DevOps & CI/CD",
  "Cloud Computing",
  "Digital Platforms",
  "SQL Databases",
  "Data Engineering",
  "AI & ML",
  "Workflow Automation",
  "Cybersecurity",
  "Desktop Solutions",
];

// Tech stack data. Each category is rendered as either:
// 1) { backend: [...], frontend: [...] } (e.g. Web, Mobile)
// 2) { subcategories: { ... } } (e.g. DevOps, Machine Learning, Automation Tools)
// 3) { icons: [...] } (e.g. Cloud, Platforms, etc.)
const techStack = {
  "Web Solutions": {
    backend: [
      W1,W2,W3,W4,W5,W6,W7,W8
    ],
    frontend: [
      WF1,WF2,WF3,WF4,WF5,WF6,WF7
    ],
  },
  "Mobile Technology": {
    backend: [MOB1,MOB2,MOB3],
    frontend: [MOBF1,MOBF2,MOBF3,MOBF4],
  },
  // DevOps split into multiple subcategories
  "DevOps & CI/CD": {
    subcategories: {
      CONTAINERIZATION: ["/images/docker.png", "/images/kubernetes.png"],
      AUTOMATION: ["/images/terraform.png", "/images/ansible.png"],
      "CI/CD TOOLS": ["/images/jenkins.png", "/images/gitlab-ci.png"],
      MONITORING: ["/images/prometheus.png", "/images/grafana.png"],
    },
  },
  // Cloud, Platforms, Relational Databases, Big Data, etc. will just show icons
  "Cloud Computing": {
    icons: [
      "/images/aws.png",
      "/images/azure.png",
      "/images/google-cloud.png",
      "/images/digitalocean.png",
    ],
  },
  "Digital Platforms": {
    icons: ["/images/wordpress.png", "/images/shopify.png", "/images/magento.png"],
  },
  "SQL Databases": {
    icons: ["/images/mysql.png", "/images/postgresql.png", "/images/sqlserver.png"],
  },
  "Data Engineering": {
    icons: ["/images/hadoop.png", "/images/spark.png", "/images/kafka.png"],
  },
  // Machine Learning now split into four subcategories
  "AI & ML": {
    subcategories: {
      "PROGRAMMING LANGUAGES": ["/images/python.png", "/images/r.png"],
      FRAMEWORKS: ["/images/tensorflow.png", "/images/pytorch.png"],
      LIBRARIES: ["/images/scikit-learn.png", "/images/keras.png"],
      "CLOUD SERVICES": ["/images/aws-ml.png", "/images/azure-ml.png"],
    },
  },
  // Automation Tools now only has TEST AUTOMATION TOOLS subcategory
  "Workflow Automation": {
    subcategories: {
      "TEST AUTOMATION TOOLS": [
        "/images/selenium.png",
        "/images/puppeteer.png",
        "/images/cypress.png",
      ],
    },
  },
  // Renamed Information Security with its own icons
  "Cybersecurity": {
    icons: ["/images/firewall.png", "/images/encryption.png", "/images/antivirus.png"],
  },
  // New Desktop category (using direct icons)
  "Desktop Solutions": {
    icons: ["/images/electron.png", "/images/qt.png", "/images/dotnet-desktop.png"],
  },
};

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web");
  const tabsContainerRef = useRef(null);
  const [showArrows, setShowArrows] = useState({ left: false, right: true });

  const handleScroll = () => {
    if (tabsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
      setShowArrows({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth - 1,
      });
    }
  };

  const scrollTabs = (direction) => {
    if (tabsContainerRef.current) {
      const scrollAmount = 300;
      tabsContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const data = techStack[selectedCategory] || {};

  return (
    <div className="w-full text-white py-20 px-4 sm:px-6 relative overflow-hidden backdrop-blur-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl -top-40 -left-40 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-l from-blue-600 to-purple-600 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent p-2">
            Our Technology Expertise
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Harnessing cutting-edge technologies to deliver innovative solutions across multiple platforms and domains.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollTabs("left")}
            className={`hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 z-20 ${
              !showArrows.left && "opacity-50 cursor-not-allowed"
            }`}
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scrollTabs("right")}
            className={`hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 z-20 ${
              !showArrows.right && "opacity-50 cursor-not-allowed"
            }`}
          >
            <FaChevronRight className="w-6 h-6" />
          </button>

          {/* Tabs Container */}
          <div
            ref={tabsContainerRef}
            onScroll={handleScroll}
            className="flex space-x-4 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-6 py-3 rounded-xl font-medium border-2 backdrop-blur-lg transition-all
                  ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500/40 to-blue-500/40 border-purple-400/50 text-white shadow-lg"
                      : "bg-gray-900/20 border-gray-700 hover:border-purple-400/30 hover:bg-purple-900/30 text-gray-300"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Content */}
        <div className="mt-12 space-y-12">
          {/* Subcategories Section */}
          {data.subcategories && Object.entries(data.subcategories).map(([subCat, icons]) => (
            <div key={subCat} className="glass-card">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                {subCat}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-6">
                {icons.map((icon, idx) => (
                  <div key={idx} className="tech-icon-wrapper">
                    <div className="tech-icon-container">
                      <img src={icon} alt="Technology Icon" className="tech-icon" />
                      <div className="tech-icon-overlay" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Backend/Frontend Section */}
          {data.backend && data.frontend && (
            <>
              <div className="glass-card">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  Backend Technologies
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-6">
                  {data.backend.map((icon, idx) => (
                    <div key={idx} className="tech-icon-wrapper">
                      <div className="tech-icon-container">
                        <img src={icon} alt="Technology Icon" className="tech-icon" />
                        <div className="tech-icon-overlay" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Frontend Technologies
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-6">
                  {data.frontend.map((icon, idx) => (
                    <div key={idx} className="tech-icon-wrapper">
                      <div className="tech-icon-container">
                        <img src={icon} alt="Technology Icon" className="tech-icon" />
                        <div className="tech-icon-overlay" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Direct Icons Section */}
          {data.icons && (
            <div className="glass-card">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {data.icons.map((icon, idx) => (
                  <div key={idx} className="tech-icon-wrapper">
                    <div className="tech-icon-container">
                      <img src={icon} alt="Technology Icon" className="tech-icon" />
                      <div className="tech-icon-overlay" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .glass-card {
          background: rgba(23, 23, 23, 0.25);
          backdrop-filter: blur(16px);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
        }

        .tech-icon-wrapper {
          position: relative;
          aspect-ratio: 1/1;
        }

        .tech-icon-container {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.75rem;
          transition: all 0.3s ease;
        }

        .tech-icon-container:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.1);
        }

        .tech-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(100%) brightness(0.8);
          transition: filter 0.3s ease;
        }

        .tech-icon-container:hover .tech-icon {
          filter: grayscale(0) brightness(1);
        }

        .tech-icon-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1));
          border-radius: 0.75rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tech-icon-container:hover .tech-icon-overlay {
          opacity: 1;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TechStack;
