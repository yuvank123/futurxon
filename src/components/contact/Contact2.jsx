import React from "react";
import { FiPhone, FiMail, FiMapPin, FiBriefcase } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900/30 via-blue-900/10  py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Section - Contact Form */}
        <div className="lg:w-1/2 backdrop-blur-xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 rounded-3xl border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-blue-300 to-purple-400 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-300/90 text-lg mb-8">
            Let's collaborate! Share your details and we'll craft digital magic together.
          </p>
          
          <form className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your full name*"
                className="w-full p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
              />
              <input
                type="email"
                placeholder="Your email*"
                className="w-full p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />
              <select className="w-full p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent appearance-none">
                <option className="bg-gray-800">Select Country</option>
                <option className="bg-gray-800">India</option>
                <option className="bg-gray-800">USA</option>
              </select>
              <textarea
                placeholder="Your vision...*"
                className="w-full p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent h-32 resize-none transition-all"
              ></textarea>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/30">
              Launch Project
            </button>

            <p className="text-gray-400/80 text-sm text-center">
              By submitting, you agree to our {' '}
              <a href="#" className="text-blue-300 hover:text-pink-300 transition-colors">Terms</a> and {' '}
              <a href="#" className="text-blue-300 hover:text-pink-300 transition-colors">Privacy Policy</a>
            </p>
          </form>
        </div>

        {/* Right Section - Contact Info */}
        <div className="lg:w-1/2 space-y-8">
          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-900/20 to-purple-900/30 p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-8">
              Connect Directly
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg group-hover:bg-purple-500/30 transition-all">
                  <FiPhone className="text-2xl text-purple-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Call Us</h3>
                  <p className="text-gray-300">USA: +1-855-572-2777</p>
                  <p className="text-gray-300">IND: +91-858-600-8627</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg group-hover:bg-pink-500/30 transition-all">
                  <FiMail className="text-2xl text-pink-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-200 mb-2">Emails</h3>
                  <p className="text-gray-300">business@mobisoftinfotech.com</p>
                  <p className="text-gray-300">info@mobisoftinfotech.com</p>
                  <p className="text-gray-300">jobs@mobisoftinfotech.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-lg group-hover:bg-blue-500/30 transition-all">
                  <FiMapPin className="text-2xl text-blue-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-200 mb-2">Locations</h3>
                  <p className="text-gray-300">5718, Westheimer Rd Suite 1000 Houston, TX 77057</p>
                  <p className="text-gray-300">Level 2, Trident Business Center, Baner, Pune – 411045</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg group-hover:bg-purple-500/30 transition-all">
                  <FiBriefcase className="text-2xl text-purple-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Careers</h3>
                  <p className="text-gray-300">Join our team of innovators</p>
                  <p className="text-blue-300 hover:text-pink-300 transition-colors cursor-pointer">
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
