import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Bgvideo from "../../../public/video/bgvideo.mp4";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [videoQuality, setVideoQuality] = useState("high"); // Placeholder state
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const videos = [
    {
      title: "Client Success Story 1",
      comment: "Amazing experience working with the team",
      videoUrl: Bgvideo,
      thumbnail: "path/to/thumbnail1.jpg"
    },
    {
      title: "Client Success Story 2",
      comment: "Exceeded our expectations",
      videoUrl: Bgvideo,
      thumbnail: "path/to/thumbnail2.jpg"
    },
    {
      title: "Client Success Story 3",
      comment: "Professional and efficient service",
      videoUrl: Bgvideo,
      thumbnail: "path/to/thumbnail3.jpg"
    }
  ];

  // Video selection handler
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.playbackRate = 1.0;
      setPlaybackSpeed(1.0);
    }
  };

  // Play / Pause handler
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Mute / Unmute handler
  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Increase playback speed handler
  const increaseSpeed = () => {
    if (videoRef.current) {
      const newSpeed = videoRef.current.playbackRate + 0.25;
      videoRef.current.playbackRate = newSpeed;
      setPlaybackSpeed(newSpeed);
    }
  };

  // Decrease playback speed handler
  const decreaseSpeed = () => {
    if (videoRef.current) {
      let newSpeed = videoRef.current.playbackRate - 0.25;
      if (newSpeed < 0.25) newSpeed = 0.25;
      videoRef.current.playbackRate = newSpeed;
      setPlaybackSpeed(newSpeed);
    }
  };

  // Placeholder for quality change (requires multiple sources/adaptive streaming)
  const handleQualityChange = (e) => {
    setVideoQuality(e.target.value);
    // In a real scenario, you would change the video source here
  };

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev + itemsPerPage >= videos.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? videos.length - itemsPerPage : prev - itemsPerPage
    );
  };

  // To support snap scrolling without showing scrollbar
  const visibleVideos = videos.slice(currentIndex, currentIndex + itemsPerPage);

  // Framer Motion Variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a021a] to-[#020515] py-8 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex justify-center items-center">

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto text-center mb-8 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-red-400 bg-clip-text text-transparent mb-2 md:mb-4 px-4 leading-tight sm:leading-snug transition-all duration-300">
            Client Testimonials
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 max-w-2xl mx-auto px-2 md:px-4 leading-relaxed md:leading-loose">
            Leading start-ups, SMEs and large-scale organizations have trusted us.
          </p>
        </motion.div>

        {/* Video Carousel */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 md:gap-6">
            {/* Navigation - Previous */}
            <button
              onClick={prevSlide}
              className="hidden md:flex p-2 md:p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-4 h-4 md:w-6 md:h-6 text-purple-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Videos Container - Scrollbar Hidden */}
            <div
              ref={containerRef}
              className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory w-full max-w-4xl"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              {videos.map((video) => (
                <div
                  key={video.title}
                  onClick={() => handleVideoSelect(video)}
                  className="w-[80vw] md:w-1/2 lg:w-1/3 flex-shrink-0 snap-center bg-white/5 backdrop-blur-lg rounded-xl md:rounded-2xl border border-white/10 p-2 md:p-4 transition-all duration-300 cursor-pointer hover:scale-95 md:hover:scale-105 hover:bg-white/10"
                >
                  <div className="relative aspect-video mb-2 md:mb-4 rounded-lg overflow-hidden group">
                    {/* Video thumbnail or preview */}
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src={video.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white/90 mb-1 md:mb-2">
                    {video.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400">{video.comment}</p>
                </div>
              ))}
            </div>

            {/* Navigation - Next */}
            <button
              onClick={nextSlide}
              className="hidden md:flex p-2 md:p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-4 h-4 md:w-6 md:h-6 text-purple-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Mobile Navigation Dots */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:hidden flex justify-center gap-2 mt-6"
        >
          {Array(Math.ceil(videos.length / itemsPerPage))
            .fill()
            .map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerPage)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === i * itemsPerPage ? 'bg-purple-400 scale-150' : 'bg-white/20'
                  }`}
              />
            ))}
        </motion.div>

        {/* Modal for Selected Video */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-2 md:p-4 rounded-lg relative w-full max-w-3xl">
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  src={selectedVideo.videoUrl}
                  className="absolute inset-0 w-full h-full object-contain rounded-lg"
                  muted={isMuted}
                  controls
                />
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-2 mt-2">
                <button
                  onClick={handlePlayPause}
                  className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-base bg-blue-600 text-white rounded"
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button
                  onClick={handleMuteUnmute}
                  className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-base bg-blue-600 text-white rounded"
                >
                  {isMuted ? "Unmute" : "Mute"}
                </button>
                <button
                  onClick={decreaseSpeed}
                  className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-base bg-green-600 text-white rounded"
                >
                  - Speed
                </button>
                <button
                  onClick={increaseSpeed}
                  className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-base bg-green-600 text-white rounded"
                >
                  + Speed
                </button>
                <select
                  value={videoQuality}
                  onChange={handleQualityChange}
                  className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-base bg-gray-200 text-black rounded"
                >
                  <option value="low">Low Quality</option>
                  <option value="medium">Medium Quality</option>
                  <option value="high">High Quality</option>
                </select>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-base bg-gray-600 text-white rounded"
                >
                  Close
                </button>
              </div>
              <div className="mt-1 text-center text-xs text-gray-500">
                Playback Speed: {playbackSpeed.toFixed(2)}x
              </div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 md:mt-8 text-center"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg md:rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200" />
            <button className="relative px-4 py-2 md:px-8 md:py-4 text-sm md:text-base bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg md:rounded-xl font-semibold transition-all duration-300 hover:shadow-md">
              HIRE DEDICATED DEVELOPERS
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
