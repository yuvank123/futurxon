import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // For stylish icons
import { motion } from "framer-motion"; // <-- Added import for motion
import T1 from "../../../../public/images/t1.png";
import T2 from "../../../../public/images/t2.png";
import T3 from "../../../../public/images/t3.png";
import T4 from "../../../../public/images/t4.png";
import T5 from "../../../../public/images/t5.png";
import T6 from "../../../../public/images/t6.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr.Munish Jindal",
      title: "Founding President : MentorX",
      quote:
        "Infinoid turned our concept into a polished digital experience with exceptional UI/UX design. They maintained excellent communication and handled every detail with care. Their responsiveness and commitment stood out. From idea to execution, it truly felt like a seamless, collaborative partnership.",
      img: T2,
    },
    {
      name: "Vivek Kumar",
      title: "Founder & CTO, FMPG",
      quote:
        "We initially approached Infinoid for their competitive pricing, but the quality of their work is what made us stay. They never compromised on creativity or timelines. The team's dedication, clean design choices, and proactive suggestions made our startup journey smooth and successful.",
      img: T3,
    },
    {
      name: "Rajeev Kumar",
      title: "ARD Secure Facility Management LLP",
      quote:
        "Working with Infinoid felt like having an in-house tech team. Their ability to adapt quickly, handle changes on the fly, and maintain quality was outstanding. The development cycle was smooth, the communication clear, and the final product exceeded our expectations in every way.",
      img: T1,
    },
    {
      name: "Dr.Nancy Juneja",
      title: "Founder : Revup Skills",
      quote:
        "The team at Infinoid truly exceeded expectations. Their sense of design, fast turnaround, and openness to ideas made the entire process enjoyable. Their professionalism and creativity came through in every discussion. It was a pleasure to collaborate with such a skilled group.",
      img: T4,
    },
    {
      name: "Kapil Jain",
      title: "Founder & CEO, K.S.Jain & Co.",
      quote:
        "Infinoid’s team was always available, even on short notice. Their consistent support, attention to detail, and patience stood out. From initial discussions to final deployment, they ensured everything was smooth, stress-free, and built exactly as envisioned. We couldn't ask for more.",
      img: T5,
    },
    {
      name: "Vishnu Chandran CS",
      title: "Managing Director, 360 DEGREE SIMS PVT. LTD.",
      quote:
        "We trusted Infinoid with our Payroll Management System and were impressed with their professionalism. They delivered a modern UI and automated features that worked flawlessly. Their team was detail-oriented, responsive, and added real value to our operations from day one.",
      img: T6,
    },
  ];
  
  
  return (
    <div className="w-full flex flex-col items-center justify-center text-white py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl w-full">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-800 via-purple-300 to-white bg-clip-text text-transparent font-mono tracking-tighter">
            Trusted By Global Businesses
          </h2>
          <p className="text-lg text-blue-300/70 max-w-2xl mx-auto">
            Leading organizations rely on our expertise for their digital transformation
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet bg-blue-400/20",
              bulletActiveClass: "!bg-gradient-to-r from-purple-500 to-blue-500"
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-purple-900/60 to-blue-900/60 p-1 rounded-2xl shadow-2xl shadow-purple-900/30 hover:shadow-blue-900/40 transition-all duration-300 hover:-translate-y-2">
                  <div className="h-full bg-gray-900/80 rounded-2xl p-6 border border-white/10 backdrop-blur-xl">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full blur-sm opacity-100" />
                        <img
                          src={testimonial.img}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full border-2 border-purple-500/30 object-cover shadow-lg shadow-purple-900/30"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-purple-100/90">{testimonial.name}</h3>
                        <p className="text-sm text-blue-300/70">{testimonial.title}</p>
                      </div>
                    </div>
                    {/* Optional Heading - Remove or add as needed */}
                    {testimonial.heading && (
                      <h4 className="text-blue-200/90 font-medium mt-6 mb-3">
                        {testimonial.heading}
                      </h4>
                    )}
                    <p className="text-purple-100/80 leading-relaxed italic relative pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-purple-600 to-blue-600">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="hidden md:flex prev-btn absolute -left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-xl shadow-purple-500/20 border border-white/10 transition-all duration-300 z-20">
            <ChevronLeft size={28} className="text-white" />
          </button>
          <button className="hidden md:flex next-btn absolute -right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-500/20 border border-white/10 transition-all duration-300 z-20">
            <ChevronRight size={28} className="text-white" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button className="prev-btn p-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg border border-white/10">
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button className="next-btn p-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg border border-white/10">
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Button Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center flex justify-center items-center mt-10"
        >
          <a href="/contact" aria-label="Start Free Trial">
            <button className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold 
                    hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300
                    flex items-center gap-3 group overflow-hidden">
              <span className="relative z-10">Connect With Us</span>
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20" />
              </div>
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
