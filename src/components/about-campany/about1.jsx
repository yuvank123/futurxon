import React from "react";

const AboutUs = () => {
  return (
    <div className=" text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          About Us: Our Journey and Values
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          We do not consider ourselves just another software development company; rather, we consider ourselves the true torchbearers of digital transformation.
        </p>
        <p className="text-gray-400 mb-8">
          Bacancy is one of the leading software development companies that started its journey back in 2011. We started with a small team of tech enthusiasts, all having a common purpose - to inject innovation into businesses worldwide and stretch the limits of traditional tech solutions. Bacancy is a formidable force of over 1,050+ IT experts, each specializing in their unique tech domains. In our journey, we evolved and embraced the change positively. We are still evolving from initial mobile and web app development to next-gen technologies like AI, ML, Data Science, AR, VR, and more.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Info Cards */}
        {[
          { icon: "\ud83d\udcbc", label: "13+ Years of Experience" },
          { icon: "\ud83d\udc65", label: "1050+ IT Professionals" },
          { icon: "\ud83d\udcd6", label: "2500+ Success Stories" },
          { icon: "\ud83c\udfe2", label: "14 Industries Served" },
          { icon: "\ud83c\udf0d", label: "12+ Countries Where We Served" },
          { icon: "\ud83c\udfe9", label: "06 Worldwide Offices" },
        ].map((item, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg flex flex-col items-center text-center shadow-md">
            <span className="text-4xl mb-3">{item.icon}</span>
            <p className="text-lg font-semibold text-white">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
