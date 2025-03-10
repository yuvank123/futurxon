import { useState, useRef } from 'react';
import Bgvideo from "../../../src/video/bgvideo.mp4";

const Testimonial = () => {
  // ------------------
  // VIDEO CAROUSEL LOGIC
  // ------------------
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const videos = [
    {
      title: 'pablo uklulu',
      videoUrl: Bgvideo,
      comment: 'Amazing service and support!'
    },
    {
      title: 'foko utumi',
      videoUrl: Bgvideo,
      comment: 'Outstanding results!'
    },
    {
      title: 'lamao uima',
      videoUrl: Bgvideo,
      comment: 'Professional team!'
    },
    {
      title: 'kaskdhdhd pepe',
      videoUrl: Bgvideo,
      comment: 'Innovative solutions!'
    },
    {
      title: 'Fifth ceremony',
      videoUrl: Bgvideo,
      comment: 'Exceptional quality!'
    },
    {
      title: 'Sixth naxa',
      videoUrl: Bgvideo,
      comment: 'Highly recommended!'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 3 >= videos.length ? 0 : prev + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? videos.length - 3 : prev - 3
    );
  };

  const visibleVideos = videos.slice(currentIndex, currentIndex + 3);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setIsPlaying(false);
    setIsMuted(true);
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // ------------------
  // REVIEWS CAROUSEL LOGIC
  // ------------------
  const [reviewIndex, setReviewIndex] = useState(0);

  // Example data structure for textual reviews:
  const reviews = [
    {
      rating: 4.0,
      headline: "We haven't had issues so far.",
      authorPosition: "Software Engineering Mngr, Digital Agriculture Solutions Co",
      isVerified: true
    },
    {
      rating: 5.0,
      headline: "They've been very professional, and we're very happy.",
      authorPosition: "Technical Director, Logical Office Ltd",
      isVerified: true
    },
    {
      rating: 5.0,
      headline: "Bacancy's high-quality work makes them stand out from other vendors.",
      authorPosition: "CEO, Fanbasis",
      isVerified: true
    },
    {
      rating: 4.9,
      headline: "I am very happy with their work to date.",
      authorPosition: "Executive, HealthTech Company",
      isVerified: true
    },
    // Add more reviews if you like:
    {
      rating: 4.5,
      headline: "They delivered exactly what was promised.",
      authorPosition: "Founder, Startup Inc",
      isVerified: true
    },
    {
      rating: 4.7,
      headline: "Great communication and on-time delivery.",
      authorPosition: "Product Manager, Retail Solutions",
      isVerified: true
    },
  ];

  const reviewsPerSlide = 4;
  const nextReviewSlide = () => {
    setReviewIndex((prev) => {
      if (prev + reviewsPerSlide >= reviews.length) {
        return 0;
      }
      return prev + reviewsPerSlide;
    });
  };

  const prevReviewSlide = () => {
    setReviewIndex((prev) => {
      if (prev === 0) {
        // Jump to the last chunk
        return reviews.length - (reviews.length % reviewsPerSlide || reviewsPerSlide);
      }
      return prev - reviewsPerSlide;
    });
  };

  const visibleReviews = reviews.slice(reviewIndex, reviewIndex + reviewsPerSlide);

  // A small helper to render star icons for the rating
  const renderStars = (rating) => {
    // Round rating if needed or just use Math.floor for full stars
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.4 4.304a1 1 0 00.95.69h4.525c.969 0 1.371 1.24.588 1.81l-3.658 2.66a1 1 0 00-.364 1.118l1.4 4.303c.3.92-.755 1.688-1.54 1.118l-3.658-2.659a1 1 0 00-1.176 0l-3.658 2.66c-.784.57-1.84-.198-1.54-1.119l1.4-4.303a1 1 0 00-.364-1.118L2.586 9.73c-.783-.57-.38-1.81.588-1.81h4.525a1 1 0 00.95-.69l1.4-4.303z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-gray-300 inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.4 4.304a1 1 0 00.95.69h4.525c.969 0 1.371 1.24.588 1.81l-3.658 2.66a1 1 0 00-.364 1.118l1.4 4.303c.3.92-.755 1.688-1.54 1.118l-3.658-2.659a1 1 0 00-1.176 0l-3.658 2.66c-.784.57-1.84-.198-1.54-1.119l1.4-4.303a1 1 0 00-.364-1.118L2.586 9.73c-.783-.57-.38-1.81.588-1.81h4.525a1 1 0 00.95-.69l1.4-4.303z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* ----------------
          VIDEO CAROUSEL
          ---------------- */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-7xl font-bold text-gray-900 mb-4">
          Client Testimonials
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Leading start-ups, SMEs and large-scale organizations have trusted us.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto mb-20">
        <div className="flex items-center justify-center gap-4">
          {/* Navigation Arrow - Previous */}
          <button
            onClick={prevSlide}
            className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Videos Container */}
          <div className="flex gap-6 overflow-hidden w-full max-w-4xl rounded-xl">
            {visibleVideos.map((video) => (
              <div
                key={video.title}
                onClick={() => handleVideoSelect(video)}
                className="w-1/3 flex-shrink-0 bg-white rounded-2xl shadow-xl p-4 transition-all cursor-pointer hover:scale-105"
              >
                <div className="relative aspect-video mb-4 rounded-xl overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.comment}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrow - Next */}
          <button
            onClick={nextSlide}
            className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal for selected video */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative w-full max-w-3xl mx-4">
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                src={selectedVideo.videoUrl}
                className="absolute inset-0 w-full h-full object-contain"
                muted={isMuted}
              />
            </div>
            <div className="flex justify-center mt-2 space-x-4">
              <button
                onClick={handlePlayPause}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                onClick={handleMuteUnmute}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                {isMuted ? "Unmute" : "Mute"}
              </button>
              <button
                onClick={() => setSelectedVideo(null)}
                className="px-4 py-2 bg-gray-600 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ----------------
          REVIEWS CAROUSEL
          ---------------- */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Bacancy Reviews <span className="text-red-500">4.6</span>
            </h2>
            <p className="text-gray-600">60 Reviews</p>
          </div>
          <div className="mt-2 sm:mt-0">
            <span className="text-gray-500">Powered by </span>
            <span className="font-semibold text-gray-800">Clutch</span>
          </div>
        </div>

        {/* Reviews Carousel Container */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            {/* Previous Arrow */}
            <button
              onClick={prevReviewSlide}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-8 h-8 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Review Cards */}
            <div className="flex gap-6 overflow-hidden w-full max-w-5xl">
              {visibleReviews.map((rev, i) => (
                <div
                  key={reviewIndex + i}
                  className="w-1/4 flex-shrink-0 bg-white rounded-lg shadow-md p-4"
                >
                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <span className="text-xl font-bold text-gray-800 mr-2">
                      {rev.rating.toFixed(1)}
                    </span>
                    <div>{renderStars(rev.rating)}</div>
                  </div>
                  {/* Headline */}
                  <p className="text-gray-800 font-semibold mb-4">
                    {rev.headline}
                  </p>
                  {/* Author / Position */}
                  <p className="text-sm text-gray-600 mb-2">
                    {rev.authorPosition}
                  </p>
                  {/* Verified Review */}
                  {rev.isVerified && (
                    <p className="text-xs text-green-600 font-semibold">
                      &#10003; Verified Review
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextReviewSlide}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-8 h-8 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors">
            HIRE DEDICATED DEVELOPERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
