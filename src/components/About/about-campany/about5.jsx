import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // For stylish icons
import T1 from "../../../../public/images/t1.png";
import T2 from "../../../../public/images/t2.png";
import T3 from "../../../../public/images/t3.png";
import T4 from "../../../../public/images/t4.png";
import T5 from "../../../../public/images/t5.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Barbra Mwendwa",
      quote:
        "Working with Infinoid Technologies felt like having an in-house team. Despite the time zone difference, their engineers were always responsive, and we never had to wait for updates. The project delivery was spot-on, and the support team is incredibly proactive.",
      img: T1,
    },
    {
      name: "Dr.Munish Jindal",
      quote:
        "Infinoid brought our creative concepts to life with amazing UI/UX and seamless backend support. They managed everything from wireframes to launch. Super impressed by their dedication and communication!",
      img: T2,
    },
    {
      name: "Vivek Kumar ",
      title: "Founder & CTO, FMPG ",
      quote:"We went to Infinoid mainly because of the pricing, but stayed because of their work. The output was solid and didn’t feel like 'budget work'. Great value for startups like ours.",
      img: T3,
    },
    {
      name: "Dr.Nancy Juneja ",
      title: "Founder : Revup Skills & Mentor of Change- Niti Aayog, Government of India ",
      quote:"Honestly, I wasn’t expecting such professionalism from such a young team. They know their stuff, especially in design and frontend dev. Very open to feedback and super quick to respond.",
      img: T4,
    },
    {
      name: "Kapil Jain ",
      title: "Founder & Ceo  ",
      quote:"The team was always a WhatsApp or email away. Even on weekends, if something critical came up, they were on it. That kind of responsiveness really helped during our launch week.",
      img: T5,
    },
    {
      name: "Abhishek Khanna ",
      quote:"From day one, I liked how clear and transparent the team was. No beating around the bush — they told us what’s possible, gave timelines, and stuck to them. Our Shopify site turned out even better than we imagined.",
      img: T1,
    }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center text-white py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl w-full">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r  from-purple-800 via-purple-300  to-white bg-clip-text text-transparent font-mono tracking-tighter">
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
                    <h4 className="text-blue-200/90 font-medium mt-6 mb-3">{testimonial.heading}</h4>
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

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group border border-white/10">
            <span className="relative z-10">CONNECT WITH EXPERTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials