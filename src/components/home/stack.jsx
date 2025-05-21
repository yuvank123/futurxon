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
//devops
import Dev11 from '../../../public/images/dev11.svg';
import Dev12 from '../../../public/images/dev12.svg';
import Dev13 from '../../../public/images/dev13.svg';
import Dev14 from '../../../public/images/dev14.svg';
import Dev21 from '../../../public/images/dev21.svg';
import Dev22 from '../../../public/images/dev22.svg';
import Dev23 from '../../../public/images/dev23.svg';
import Dev24 from '../../../public/images/dev24.svg';
import Dev25 from '../../../public/images/dev25.svg';
import Dev26 from '../../../public/images/dev26.svg';
import Dev31 from '../../../public/images/dev31.svg';
import Dev32 from '../../../public/images/dev32.svg';
import Dev33 from '../../../public/images/dev33.svg';
import Dev34 from '../../../public/images/dev34.svg';
import Dev35 from '../../../public/images/dev35.svg';
import Dev36 from '../../../public/images/dev36.svg';
import Dev41 from '../../../public/images/dev41.svg';
import Dev42 from '../../../public/images/dev42.svg';
import Dev43 from '../../../public/images/dev43.svg';
import Dev44 from '../../../public/images/dev44.svg';
import Dev45 from '../../../public/images/dev45.svg';
//cloud
import Cl11 from '../../../public/images/cl11.svg';
import Cl12 from '../../../public/images/cl12.svg';
import Cl13 from '../../../public/images/cl13.svg';
import Cl14 from '../../../public/images/cl14.svg';
import Cl15 from '../../../public/images/cl15.svg';
//databaase
import Da11 from '../../../public/images/da11.svg';
import Da12 from '../../../public/images/da12.svg';
import Da13 from '../../../public/images/da13.svg';
import Da14 from '../../../public/images/da14.svg';
import Da15 from '../../../public/images/da15.svg';
import Da16 from '../../../public/images/da16.svg';
import Da17 from '../../../public/images/da17.svg';
import Da18 from '../../../public/images/da18.svg';
//big data
import Bd1 from '../../../public/images/bd1.svg';
import Bd2 from '../../../public/images/bd2.svg';
import Bd3 from '../../../public/images/bd3.svg';
import Bd4 from '../../../public/images/bd4.svg';
import Bd5 from '../../../public/images/bd5.svg';
import Bd6 from '../../../public/images/bd6.svg';
import Bd7 from '../../../public/images/bd7.svg';
import Bd8 from '../../../public/images/bd8.svg';
import Bd9 from '../../../public/images/bd9.svg';
import Bd10 from '../../../public/images/bd10.svg';
import Bd11 from '../../../public/images/bd11.svg';
import Bd12 from '../../../public/images/bd12.svg';
import Bd13 from '../../../public/images/bd13.svg';
//aiml
import Ai11 from '../../../public/images/ai11.svg';
import Ai12 from '../../../public/images/ai12.svg';
import Ai13 from '../../../public/images/ai13.svg';
import Ai21 from '../../../public/images/ai21.svg';
import Ai22 from '../../../public/images/ai22.svg';
import Ai23 from '../../../public/images/ai23.svg';
import Ai24 from '../../../public/images/ai24.svg';
import Ai25 from '../../../public/images/ai25.svg';
import Ai26 from '../../../public/images/ai26.svg';
import Ai27 from '../../../public/images/ai27.svg';
import Ai28 from '../../../public/images/ai28.svg';
import Ai31 from '../../../public/images/ai31.svg';
import Ai32 from '../../../public/images/ai32.svg';
import Ai33 from '../../../public/images/ai33.svg';
import Ai34 from '../../../public/images/ai34.svg';
import Ai41 from '../../../public/images/ai41.svg';
import Ai42 from '../../../public/images/ai42.svg';
import Ai43 from '../../../public/images/ai43.svg';
import Ai44 from '../../../public/images/ai44.svg';
//cybersecurity
import Cy1 from '../../../public/images/cy1.svg';
import Cy2 from '../../../public/images/cy2.svg';
import Cy3 from '../../../public/images/cy3.svg';
import Cy4 from '../../../public/images/cy4.svg';
import Cy5 from '../../../public/images/cy5.svg';
import Cy6 from '../../../public/images/cy6.svg';
import Cy7 from '../../../public/images/cy7.svg';
import Cy8 from '../../../public/images/cy8.svg';
import Cy9 from '../../../public/images/cy9.svg';
import Cy10 from '../../../public/images/cy10.svg';
import Cy11 from '../../../public/images/cy11.svg';
//desktop
import D1 from '../../../public/images/d1.svg';
import D2 from '../../../public/images/d2.svg';
import D3 from '../../../public/images/d3.svg';
import D4 from '../../../public/images/d4.svg';
import D5 from '../../../public/images/d5.svg';
import D6 from '../../../public/images/d6.svg';
// Updated categories including the new "Desktop" and renamed "Information Security"
const categories = [
  "Web Solutions",
  "Mobile Technology",
  "DevOps & CI/CD",
  "Cloud Computing",
  "SQL Databases",
  "Data Engineering",
  "AI & ML",
  "Cybersecurity",
  "Desktop Solutions",
];

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
      CONTAINERIZATION: [Dev11,Dev12,Dev13,Dev14],
      AUTOMATION: [Dev21,Dev22,Dev23,Dev24,Dev25,Dev26],
      "CI/CD TOOLS": [Dev31,Dev32,Dev33,Dev34,Dev35,Dev36],
      MONITORING: [Dev41,Dev42,Dev43,Dev44,Dev45],
    },
  },
  // Cloud, Platforms, Relational Databases, Big Data, etc. will just show icons
  "Cloud Computing": {
    icons: [Cl11,Cl12,Cl13,Cl14,Cl15],
  },
  "SQL Databases": {
    icons: [Da11,Da12,Da13,Da14,Da15,Da16,Da17,Da18],
  },
  "Data Engineering": {
    icons: [Bd1,Bd2,Bd3,Bd4,Bd5,Bd6,Bd7,Bd8,Bd9,Bd10,Bd11,Bd12,Bd13],
  },
  // Machine Learning now split into four subcategories
  "AI & ML": {
    subcategories: {
      "PROGRAMMING LANGUAGES": [Ai11,Ai12,Ai13],
      FRAMEWORKS: [Ai21,Ai22,Ai23,Ai24,Ai25,Ai26,Ai27,Ai28],
      LIBRARIES: [Ai31,Ai32,Ai33,Ai34],
      "CLOUD SERVICES": [Ai41,Ai42,Ai43,Ai44],
    },
  },
  // Renamed Information Security with its own icons
  "Cybersecurity": {
    icons: [Cy1,Cy2,Cy3,Cy4,Cy5,Cy6,Cy7,Cy8,Cy9,Cy10,Cy11],
  },
  // New Desktop category (using direct icons)
  "Desktop Solutions": {
    icons: [D1,D2,D3,D4,D5,D6],
  },
};

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Solutions");
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
    <div className="w-full text-white py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent p-6 font-mono">
            Our Technology Expertise
          </h1>
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
                      <img src={icon} alt="Technology Icon" className="tech-icon h-22 w-22" />
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
                        <img src={icon} alt="Technology Icon" className="tech-icon h-22 w-22" />
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
                        <img src={icon} alt="Technology Icon" className="tech-icon w-22 h-22"/>
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
                      <img src={icon} alt="Technology Icon" className="w-22 h-22"/>
                      <div/>
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
