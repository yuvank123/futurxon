import React from "react";

const AboutUs = () => {
  return (
    <div className=" text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-mono tracking-tighter">
          About Us: Our Journey and Values
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          We do not consider ourselves just another software development company; rather, we consider ourselves the true torchbearers of digital transformation.
        </p>
        <p className="text-gray-400 mb-8">
          Infinoid is one of the leading software development companies. We started with a small team of tech enthusiasts, all having a common purpose - to inject innovation into businesses worldwide and stretch the limits of traditional tech solutions. In our journey, we evolved and embraced the change positively. We are still evolving from initial mobile and web app development to next-gen technologies like AI, ML, Data Science, AR, VR, and more.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;