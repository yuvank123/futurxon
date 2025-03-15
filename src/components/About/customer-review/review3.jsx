import React from "react";

const ReviewForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg shadow-xl rounded-lg p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-6">How Can We Help?</h2>

        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-white/10 text-white placeholder-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-white/10 text-white placeholder-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 bg-white/10 text-white placeholder-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <textarea
            rows="4"
            placeholder="Message"
            className="w-full p-3 bg-white/10 text-white placeholder-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>

          <div className="flex justify-end">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-4xl hover:opacity-80 transition-opacity">
              INQUIRE NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
