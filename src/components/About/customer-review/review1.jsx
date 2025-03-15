import React, { useState } from "react";
import Vid1 from "../../../video/Bgvideo.mp4";

const videos = [
  { 
    id: 1, 
    video: Vid1, 
    thumbnail: "https://via.placeholder.com/300",
    title: "Client Experience" 
  },
  { id: 2, thumbnail: "https://via.placeholder.com/300", title: "Project Review" },
  { id: 3, thumbnail: "https://via.placeholder.com/300", title: "Success Story" },
  { id: 4, thumbnail: "https://via.placeholder.com/300", title: "Success Story" },
  { id: 5, thumbnail: "https://via.placeholder.com/300", title: "Success Story" },
  { id: 6, thumbnail: "https://via.placeholder.com/300", title: "Success Story" },
  { id: 7, thumbnail: "https://via.placeholder.com/300", title: "Success Story" },
  // ... keep other video objects
];

const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen  p-8 relative">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-300 bg-clip-text text-transparent mb-4">
          Client Experience
        </h2>
        <p className="text-gray-300 text-lg">Exceptional Experiences! Every Time!</p>
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {videos.map((video) => (
          <div 
            key={video.id} 
            onClick={() => handleVideoClick(video)}
            className="group relative bg-white/10 rounded-2xl backdrop-blur-lg shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
          >
            <div className="overflow-hidden rounded-t-2xl relative h-48">
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors"
            >
              Close
            </button>
            <video
              key={selectedVideo?.video} // Force remount when video changes
              controls
              autoPlay
              className="w-full rounded-lg shadow-2xl"
            >
              <source src={selectedVideo?.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;