import React from "react";
import T1 from "../../../images/david.png";
import T2 from "../../../images/philip.png";
import T3 from "../../../images/brett.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "David Carta",
      title: "CEO/President of Telaeris, Inc.",
      heading: "Timezone is Not a Boundary",
      quote:
        "The communication is brilliant and they stayed very consistent. The coder puts in a phenomenal amount of effort to ensure he is available given the time difference between India and the USA.",
      img: T1, // Replace with actual image
    },
    {
      name: "Philip Gomez",
      title: "Co-owner of Patty’s Cakes & Desserts",
      heading: "Interview Before Hiring Developers",
      quote:
        "The team at Bacancy is reliable and accommodating to my business needs. We had the option to Interview Before Hiring. Their account management is a pleasant experience and I highly recommend them.",
      img: T2,
    },
    {
      name: "Brett Williams",
      title: "Founder of Aegis",
      heading: "Quick-Onboarding",
      quote:
        "Bacancy's expertise shines in seamlessly transitioning software to a SaaS. Their responsive team maintains excellent communication with daily reports and regular project update calls.",
      img: T3,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center  text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-purple-400">
        We Are Trusted By Businesses Worldwide
      </h2>
      <p className="text-gray-300 text-center mt-2 max-w-2xl">
        Leading companies trust us and our staff augmentation model to fulfill their IT needs.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#222244] shadow-lg p-6 rounded-xl border border-[#4c669f] transform transition duration-300 hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full border-2 border-purple-500"
              />
              <div>
                <h3 className="text-purple-400 font-semibold">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </div>
            <h4 className="text-blue-300 font-semibold mt-4">{testimonial.heading}</h4>
            <p className="text-gray-300 mt-2 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>

      <button className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
        TALK TO OUR EXPERT
      </button>
    </div>
  );
};

export default Testimonials;
