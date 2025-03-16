import React from "react";

const Contact1 = () => {
    return (
      <div className="relative h-[60vh] flex items-center justify-center text-white">
        {/* Background Image */}
        <img
          data-src="https://assets.bacancytechnology.com/main-boot-5/images/contact-us/banner.jpg?v-1"
          src="https://assets.bacancytechnology.com/main-boot-5/images/contact-us/banner.jpg?v-1"
          alt="Let us know what's on your mind"
          title="We would love to hear from you."
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Text Content */}
        <div className="relative text-center">
          <h1 className="text-5xl font-bold">Let us know what's on your mind</h1>
          <p className="text-xl mt-2">We would love to hear from you!</p>    
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl shadow-purple-900/50 hover:shadow-blue-900/40">
            Consult Us →
          </button>
        </div>

        </div>
  );
};

export default Contact1;