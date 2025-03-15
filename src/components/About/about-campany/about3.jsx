import React from "react";
import C1 from "../../../images/c-1.svg";
import C2 from "../../../images/c-2.svg";
import C3 from "../../../images/c-3.svg";
import C4 from "../../../images/c-4.svg";
import C5 from "../../../images/c-5.svg";
import C6 from "../../../images/c-6.svg";

const About3 = () => {
  const certificateImages = [
    C1, // Replace with actual image URLs
    C2,
    C3,
    C4,
    C5,
    C6,
  ];

  return (
    <div className="h-[60vh] flex flex-col justify-center items-center p-10">
      <h1 className="text-5xl font-bold text-purple-400 mb-8">Certificates</h1>
      
      <div className="grid grid-cols-6 gap-6">
        {certificateImages.map((src, index) => (
          <div
            key={index}
            className=" p-4 rounded-xl shadow-md transform transition duration-300 hover:scale-105"
          >
            <img
              src={src}
              alt={`Certificate ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About3;
