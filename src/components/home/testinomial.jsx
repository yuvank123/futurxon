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
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const videos = [
    { title: "Client Success Story 1", comment: "Amazing experience", videoUrl: Bgvideo, thumbnail: "path/to/thumbnail1.jpg" },
    { title: "Client Success Story 2", comment: "Exceeded expectations", videoUrl: Bgvideo, thumbnail: "path/to/thumbnail2.jpg" },
    { title: "Client Success Story 3", comment: "Very professional", videoUrl: Bgvideo, thumbnail: "path/to/thumbnail3.jpg" }
  ];

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

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setIsPlaying(false);
    if (videoRef.current) videoRef.current.pause();
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a021a] to-[#020515] py-8 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="relative w-full max-w-7xl mx-auto">
        <motion.div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
            Client Testimonials
          </h1>
          <p className="text-sm md:text-lg text-gray-400 mt-2">
            Leading start-ups and enterprises trust us.
          </p>
        </motion.div>

        <motion.div className="relative w-full mx-auto">
          <div className="flex justify-center items-center gap-4">
            <button onClick={() => setCurrentIndex((prev) => prev === 0 ? videos.length - itemsPerPage : prev - itemsPerPage)}
              className="hidden md:block p-3 rounded-full bg-white/5 hover:bg-white/10">
              &#8592;
            </button>

            <div ref={containerRef} className="flex gap-4 overflow-x-auto w-full px-2 scrollbar-hide">
              {videos.map((video, index) => (
                <div key={video.title} className={`w-[calc(100%-16px)] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-24px)] flex-shrink-0 snap-center bg-white/5 rounded-xl p-4 transition-all ${
                    index >= currentIndex && index < currentIndex + itemsPerPage ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                  }`}>
                  <div className="relative aspect-video mb-3 rounded-lg overflow-hidden">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src={video.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-400">{video.comment}</p>
                </div>
              ))}
            </div>

            <button onClick={() => setCurrentIndex((prev) => prev + itemsPerPage >= videos.length ? 0 : prev + itemsPerPage)}
              className="hidden md:block p-3 rounded-full bg-white/5 hover:bg-white/10">
              &#8594;
            </button>
          </div>
        </motion.div>

        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-4 rounded-xl w-full max-w-4xl mx-2">
              <video ref={videoRef} src={selectedVideo.videoUrl} className="w-full rounded-lg" muted={isMuted} controls />
              <div className="flex justify-center gap-3 mt-3">
                <button onClick={handlePlayPause} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button onClick={() => setSelectedVideo(null)} className="px-4 py-2 bg-red-600 text-white rounded-lg">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
