import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Positions = () => {
  const positions = [
    {
      title: "Salesforce Developer",
      experience: "Experience: 0-3 Years",
      openings: "Openings: 5",
      skills: ["Aura, LWC", "SOQL", "Flow, Apex", "VS Code", "Git"],
    },
    {
      title: "Odoo Developer",
      experience: "Experience: 1-5 Years",
      openings: "Openings: 3",
      skills: ["Git, JavaScript", "SQL", "HTML, CSS", "PHP", "Python"],
    },
    {
      title: "React Developer",
      experience: "Experience: 2-6 Years",
      openings: "Openings: 4",
      skills: ["React.js", "Redux", "JavaScript", "CSS", "Git"],
    },
    {
      title: "Python Developer",
      experience: "Experience: 1-4 Years",
      openings: "Openings: 3",
      skills: ["Django", "Flask", "SQL", "REST API", "Git"],
    },
    {
      title: "Data Scientist",
      experience: "Experience: 2-5 Years",
      openings: "Openings: 2",
      skills: ["Python", "Machine Learning", "Deep Learning", "SQL", "Pandas"],
    },
    {
      title: "Full Stack Developer",
      experience: "Experience: 3-7 Years",
      openings: "Openings: 5",
      skills: ["Node.js", "React.js", "MongoDB", "Express.js", "Docker"],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center text-white py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl w-full">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-7xl font-mono tracking-tighter font-bold bg-gradient-to-r from-purple-500 via-purple-300 to-white bg-clip-text text-transparent">
            Featured Positions
          </h2>
          <p className="text-lg text-blue-300/70 max-w-2xl mx-auto">
            Leading organizations rely on our expertise for their digital transformation
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative group"
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {positions.map((position, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-purple-900/60 to-blue-900/60 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/10">
                  <h1 className="text-2xl font-bold font-mono text-purple-100/90">{position.title}</h1>

                  <div className="mt-3">
                    <p className="text-md font-bold text-blue-200/80">{position.experience}</p>
                    <p className="text-md font-bold text-blue-200/80">{position.openings}</p>
                  </div>

                  <h2 className="mt-4 space-y-2 text-base text-white">
                    {position.skills.map((skill, i) => (
                      <h2 key={i} className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        <span>{skill}</span>
                      </h2>
                    ))}
                  </h2>

                  <button className="mt-6 w-full py-2 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg">
                    Apply Now
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="hidden md:flex prev-btn absolute -left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-xl border border-white/10 transition-all duration-300 z-20">
            <ChevronLeft size={28} className="text-white" />
          </button>
          <button className="hidden md:flex next-btn absolute -right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl border border-white/10 transition-all duration-300 z-20">
            <ChevronRight size={28} className="text-white" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Positions;