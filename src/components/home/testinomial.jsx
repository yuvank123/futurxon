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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a021a] to-[#020515] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Leading start-ups, SMEs and large-scale organizations have trusted us.
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-6">
            {/* Navigation - Previous */}
            <button
              onClick={prevSlide}
              className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-purple-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Videos Container */}
            <div className="flex gap-6 overflow-hidden w-full max-w-4xl">
              {visibleVideos.map((video) => (
                <div
                  key={video.title}
                  onClick={() => handleVideoSelect(video)}
                  className="w-1/3 flex-shrink-0 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-4 transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-white/10"
                >
                  <div className="relative aspect-video mb-4 rounded-xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white/90 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-400">{video.comment}</p>
                </div>
              ))}
            </div>

            {/* Navigation - Next */}
            <button
              onClick={nextSlide}
              className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-purple-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

        <div className="mt-8 text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <button className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              HIRE DEDICATED DEVELOPERS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
