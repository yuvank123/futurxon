import { useState, useRef, useEffect } from 'react';
import Bgvideo from "../../../../public/video/bgvideo.mp4";

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
    const [videoQuality, setVideoQuality] = useState("high"); // Placeholder state
    const [showArrows, setShowArrows] = useState({ left: false, right: true });
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
            if (window.innerWidth < 480) setItemsPerPage(1);
            else if (window.innerWidth < 768) setItemsPerPage(2);
            else setItemsPerPage(3);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (containerRef.current) {
            const scrollWidth = containerRef.current.scrollWidth;
            const containerWidth = containerRef.current.clientWidth;
            const maxScroll = scrollWidth - containerWidth;
            
            const newScrollPosition = Math.min(
                containerRef.current.scrollLeft + containerWidth,
                maxScroll
            );
            
            containerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });

            // Update current index for dots
            const newIndex = Math.floor(newScrollPosition / (containerWidth / itemsPerPage));
            setCurrentIndex(newIndex);
        }
    };

    const prevSlide = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.clientWidth;
            const newScrollPosition = Math.max(
                containerRef.current.scrollLeft - containerWidth,
                0
            );
            
            containerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });

            // Update current index for dots
            const newIndex = Math.floor(newScrollPosition / (containerWidth / itemsPerPage));
            setCurrentIndex(newIndex);
        }
    };

    // Add scroll event listener to update arrows visibility
    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
                setShowArrows({
                    left: scrollLeft > 0,
                    right: scrollLeft < scrollWidth - clientWidth - 1
                });
            }
        };

        containerRef.current?.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => containerRef.current?.removeEventListener('scroll', handleScroll);
    }, []);

    // To support snap scrolling without showing scrollbar
    const visibleVideos = videos.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <div className="min-h-screen py-4 sm:py-8 md:py-16 px-2 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden flex justify-center items-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
            {/* Background Effects */}

            {/* Content */}
            <div className="relative z-10 w-full">
                {/* Header */}
                <div className="max-w-7xl mx-auto text-center mb-4 sm:mb-8 md:mb-16">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-red-400 bg-clip-text text-transparent mb-2 md:mb-4 px-2 sm:px-4">
                        Client Testimonials
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto px-2">
                        Leading start-ups, SMEs and large-scale organizations have trusted us.
                    </p>
                </div>
                {/* Video Carousel */}
                <div className="relative max-w-6xl mx-auto px-2 sm:px-4">
                    <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
                        {/* Updated Previous button */}
                        <button
                            onClick={prevSlide}
                            className={`hidden sm:flex p-2 md:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${
                                !showArrows.left ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
                            }`}
                            disabled={!showArrows.left}
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
                            className="flex gap-2 sm:gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
                            style={{
                                msOverflowStyle: 'none',  /* IE and Edge */
                                scrollbarWidth: 'none',   /* Firefox */
                                WebkitOverflowScrolling: 'touch'
                            }}
                        >
                            {videos.map((video) => (
                                <div
                                    key={video.title}
                                    onClick={() => handleVideoSelect(video)}
                                    className="w-[85vw] sm:w-[45vw] md:w-[30vw] flex-shrink-0 snap-center bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl border border-white/10 p-2 sm:p-3 md:p-4 transition-all duration-300 hover:bg-white/10"
                                >
                                    <div className="relative aspect-video rounded-md overflow-hidden">
                                        {/* Video thumbnail or preview */}
                                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                            <source src={video.videoUrl} type="video/mp4" />
                                        </video>
                                    </div>
                                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white/90 mt-2">
                                        {video.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-400 mt-1">{video.comment}</p>
                                </div>
                            ))}
                        </div>

                        {/* Updated Next button */}
                        <button
                            onClick={nextSlide}
                            className={`hidden sm:flex p-2 md:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${
                                !showArrows.right ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
                            }`}
                            disabled={!showArrows.right}
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
                </div>

                {/* Mobile Navigation Dots */}
                <div className="md:hidden flex justify-center gap-2 mt-6">
                    {Array(Math.ceil(videos.length / itemsPerPage)).fill().map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i * itemsPerPage)}
                            className={`w-2 h-2 rounded-full transition-all ${currentIndex === i * itemsPerPage ? 'bg-purple-400 scale-150' : 'bg-white/20'
                                }`}
                        />
                    ))}
                </div>

                {/* Modal for Selected Video */}
                {selectedVideo && (
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4">
                        <div className="bg-gray-900 p-2 sm:p-4 rounded-lg relative w-full max-w-3xl">
                            <div className="relative aspect-video rounded-lg overflow-hidden">
                                <video
                                    ref={videoRef}
                                    src={selectedVideo.videoUrl}
                                    className="w-full h-full object-contain"
                                    muted={isMuted}
                                    controls
                                />
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 mt-2 sm:mt-4">
                                <div className="flex gap-1 sm:gap-2">
                                    <button
                                        onClick={handlePlayPause}
                                        className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-blue-600 text-white rounded"
                                    >
                                        {isPlaying ? "Pause" : "Play"}
                                    </button>
                                    <button
                                        onClick={handleMuteUnmute}
                                        className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-blue-600 text-white rounded"
                                    >
                                        {isMuted ? "Unmute" : "Mute"}
                                    </button>
                                </div>
                                <div className="flex gap-1 sm:gap-2">
                                    <button
                                        onClick={decreaseSpeed}
                                        className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-green-600 text-white rounded"
                                    >
                                        -
                                    </button>
                                    <span className="px-2 py-1 text-xs sm:text-sm text-white">
                                        {playbackSpeed.toFixed(2)}x
                                    </span>
                                    <button
                                        onClick={increaseSpeed}
                                        className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-green-600 text-white rounded"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-red-600 text-white rounded"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Button */}
                <div className="mt-4 sm:mt-6 md:mt-8 text-center">
                    <div className="relative inline-block group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200" />
                        <button className="relative px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300">
                            HIRE DEDICATED DEVELOPERS
                        </button>
                    </div>
                </div>
            </div>

            {/* Add this style block at the end of your component */}
            <style jsx>{`
                /* Hide scrollbar for Chrome, Safari and Opera */
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }

                /* Hide scrollbar for IE, Edge and Firefox */
                .no-scrollbar {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </div>
    );
};

export default Testimonial;
