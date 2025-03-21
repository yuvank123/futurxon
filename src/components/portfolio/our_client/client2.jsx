import { useState, useRef, useEffect } from 'react';
import C1 from '../../../images/c-1.svg';
import C2 from '../../../images/c-2.svg';
import C3 from '../../../images/c-3.svg';
import C4 from '../../../images/c-4.svg';
import C5 from '../../../images/c-5.svg';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const [transitionType, setTransitionType] = useState('ease-linear');


  const images = [
    { id: 1, imageUrl: C1 },
    { id: 2, imageUrl: C2 },
    { id: 3, imageUrl: C3 },
    { id: 4, imageUrl: C4 },
    { id: 5, imageUrl: C5 },
  ];

  //Clone of Images
  const clonedImages = [C1,C2,C3,C4,C5];

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
        setTransitionType('ease-linear');
      }, 3000);
    };

    if (!isPaused) {
      startAutoScroll();
    }
    
    return () => clearInterval(intervalRef.current);
  }, [isPaused, images.length]);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(2);
      else if (window.innerWidth < 1024) setItemsPerPage(3);
      else setItemsPerPage(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleHover = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const handleLeave = () => {
    setIsPaused(false);
  };

  const handleNext = () => {
    setTransitionType('ease-in-out');
    setCurrentIndex(prev => (prev + 1) % images.length);
    resetAutoScroll();
  };

  const handlePrev = () => {
    setTransitionType('ease-in-out');
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
        setTransitionType('ease-linear');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen py-8 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex justify-center items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-xl md:blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-xl md:blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl xl:text-8xl font-bold bg-gradient-to-r from-purple-800  via-blue-300 to-red-500 bg-clip-text text-transparent mb-4">
            Our Clients
          </h1>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 ml-2 md:ml-4"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-purple-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 mr-2 md:mr-4"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-purple-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            ref={containerRef}
            className="flex transition-transform duration-1000"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              width: `${(images.length * 100) / itemsPerPage}%`,
              transitionTimingFunction: transitionType
            }}
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className="w-full flex-shrink-0 p-2 md:p-3"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="relative aspect-square bg-white/5 backdrop-blur-lg rounded-lg md:rounded-xl border border-white/10 overflow-hidden hover:scale-105 transition-transform duration-300 mx-auto max-w-[200px]">
                  <img 
                    src={image.imageUrl}
                    alt={`Client logo ${index + 1}`}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex % images.length 
                  ? 'w-8 bg-purple-400' 
                  : 'w-4 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;