import React, { useState } from "react";

const Review2 = () => {
  const [reviewIndex, setReviewIndex] = useState(0);

  const reviews = [
    { rating: 4.0, headline: "We haven't had issues so far.", authorPosition: "Software Engineering Mngr, Digital Agriculture Solutions Co", isVerified: true },
    { rating: 5.0, headline: "They've been very professional, and we're very happy.", authorPosition: "Technical Director, Logical Office Ltd", isVerified: true },
    { rating: 5.0, headline: "Bacancy's high-quality work makes them stand out from other vendors.", authorPosition: "CEO, Fanbasis", isVerified: true },
    { rating: 4.9, headline: "I am very happy with their work to date.", authorPosition: "Executive, HealthTech Company", isVerified: true },
    { rating: 4.5, headline: "They delivered exactly what was promised.", authorPosition: "Founder, Startup Inc", isVerified: true },
    { rating: 4.7, headline: "Great communication and on-time delivery.", authorPosition: "Product Manager, Retail Solutions", isVerified: true },
  ];

  const reviewsPerSlide = 4;

  const nextReviewSlide = () => {
    setReviewIndex((prev) => (prev + reviewsPerSlide >= reviews.length ? 0 : prev + reviewsPerSlide));
  };

  const prevReviewSlide = () => {
    setReviewIndex((prev) => (prev === 0 ? reviews.length - (reviews.length % reviewsPerSlide || reviewsPerSlide) : prev - reviewsPerSlide));
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.4 4.304a1 1 0 00.95.69h4.525c.969 0 1.371 1.24.588 1.81l-3.658 2.66a1 1 0 00-.364 1.118l1.4 4.303c.3.92-.755 1.688-1.54 1.118l-3.658-2.659a1 1 0 00-1.176 0l-3.658 2.66c-.784.57-1.84-.198-1.54-1.119l1.4-4.303a1 1 0 00-.364-1.118L2.586 9.73c-.783-.57-.38-1.81.588-1.81h4.525a1 1 0 00.95-.69l1.4-4.303z" />
      </svg>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto p-8 md:p-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Your Journey with Us: 
            <span className="block mt-2">Crafted for Excellence!</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            <h2 className="text-2xl font-bold text-white">
              Bacancy Reviews 
              <span className="ml-2 text-purple-400">4.6</span>
            </h2>
            <p className="text-gray-400">(60 Reviews)</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-8 md:mt-0">
          <span className="text-gray-400">Powered by</span>
          <span className="font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Clutch
          </span>
        </div>
      </div>

      {/* Reviews Carousel */}
      <div className="relative py-2">
        <div className="flex items-center justify-center gap-6">
          <button 
            onClick={prevReviewSlide} 
            className="p-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {reviews.slice(reviewIndex, reviewIndex + reviewsPerSlide).map((rev, i) => (
              <div 
                key={reviewIndex + i} 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4 gap-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {rev.rating.toFixed(1)}
                  </span>
                  <div className="flex">{renderStars(rev.rating)}</div>
                </div>
                <h3 className="text-gray-100 font-semibold mb-4 text-lg leading-snug">
                  {rev.headline}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {rev.authorPosition}
                </p>
                {rev.isVerified && (
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-emerald-400 text-sm font-medium">Verified Review</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button 
            onClick={nextReviewSlide} 
            className="p-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-16 text-center">
        <div className="relative inline-block group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
          <button className="relative px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            HIRE DEDICATED DEVELOPERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review2;