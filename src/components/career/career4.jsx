import React from "react";
import { FiPhone, FiMail, FiMapPin, FiBriefcase } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      {/* 3D Ladder Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-[200%] h-[200%] bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 blur-3xl animate-pulse transform rotate-45"></div>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
        {/* Left Section - Contact Form */}
        <div className="lg:w-1/2 backdrop-blur-xl bg-gradient-to-br from-gray-800/80 to-black/60 p-8 rounded-3xl border border-gray-700 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Let's collaborate! Share your details and we'll craft digital magic together.
          </p>
          
          <form className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your full name*"
                className="w-full p-4 bg-gray-700/40 backdrop-blur-sm rounded-xl border border-gray-600 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />
              <input
                type="email"
                placeholder="Your email*"
                className="w-full p-4 bg-gray-700/40 backdrop-blur-sm rounded-xl border border-gray-600 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
              />
              <select className="w-full p-4 bg-gray-700/40 backdrop-blur-sm rounded-xl border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent appearance-none">
                <option className="bg-gray-800">Select Country</option>
                <option className="bg-gray-800">India</option>
                <option className="bg-gray-800">USA</option>
              </select>
              <textarea
                placeholder="How can we help you?"
                className="w-full p-4 bg-gray-700/40 backdrop-blur-sm rounded-xl border border-gray-600 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent h-32 resize-none transition-all"
              ></textarea>
            </div>

            <button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/30">
              Submit
            </button>

            <p className="text-gray-500 text-sm text-center">
              By submitting, you agree to our {' '}
              <a href="#" className="text-blue-400 hover:text-teal-400 transition-colors">Terms</a> and {' '}
              <a href="#" className="text-blue-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
            </p>
          </form>
        </div>

        {/* Right Section - Contact Info */}
        <div className="lg:w-1/2 space-y-8">
          <div className="backdrop-blur-xl bg-gradient-to-br from-gray-800/80 to-black/60 p-8 rounded-3xl border border-gray-700 shadow-xl">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-8">
              Connect Directly
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-lg group-hover:bg-teal-500/30 transition-all">
                  <FiPhone className="text-2xl text-teal-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-200 mb-2">Call Us</h3>
                  <p className="text-gray-400">USA: +1-855-572-2777</p>
                  <p className="text-gray-400">IND: +91-858-600-8627</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg group-hover:bg-purple-500/30 transition-all">
                  <FiMail className="text-2xl text-purple-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Emails</h3>
                  <p className="text-gray-400">business@mobisoftinfotech.com</p>
                  <p className="text-gray-400">info@mobisoftinfotech.com</p>
                  <p className="text-gray-400">jobs@mobisoftinfotech.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg group-hover:bg-blue-500/30 transition-all">
                  <FiMapPin className="text-2xl text-blue-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-200 mb-2">Locations</h3>
                  <p className="text-gray-400">5718, Westheimer Rd Suite 1000 Houston, TX 77057</p>
                  <p className="text-gray-400">Level 2, Trident Business Center, Baner, Pune – 411045</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-lg group-hover:bg-teal-500/30 transition-all">
                  <FiBriefcase className="text-2xl text-teal-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-200 mb-2">Careers</h3>
                  <p className="text-gray-400">Join our team of innovators</p>
                  <p className="text-teal-400 hover:text-blue-400 transition-colors cursor-pointer">
                    View Open Positions →
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;