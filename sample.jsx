// import React, { useState, useEffect, useRef } from "react";
// import Bgvideo from "../../../public/video/bgvideo.mp4";
// import Bgimg from "../../../public/images/bgimg.png";

// const Background = () => {
//   const [loadingState, setLoadingState] = useState({
//     isImageLoaded: false,
//     isVideoLoaded: false,
//     isInView: false
//   });
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Preload critical resources
//     const resources = [
//       { rel: 'preload', href: Bgimg, as: 'image' },
//       { rel: 'preconnect', href: Bgvideo }
//     ];

//     const links = resources.map(({ rel, href, as }) => {
//       const link = document.createElement('link');
//       link.rel = rel;
//       link.href = href;
//       if (as) link.as = as;
//       return document.head.appendChild(link);
//     });

//     // Optimized Intersection Observer
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setLoadingState(prev => ({ ...prev, isInView: true }));
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1, rootMargin: '50px' }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     // Cleanup
//     return () => {
//       observer.disconnect();
//       links.forEach(link => document.head.removeChild(link));
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden">
//       <div className="relative w-full h-full">

//         {/* Gradient & Blur Overlays */}
//         <div className='fixed inset-0 z-0 bg-gradient-to-br from-black via-[#0F0A2E] to-[#1A0933]'>
//           <div className='absolute inset-0 overflow-hidden'>
//             <div className='absolute -top-20 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-blue-400/30 rounded-full blur-3xl animate-pulse' />
//             <div className='absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl' />
//             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-10" />
//           </div>
//         </div>

//         {/* Progressive Image Loading */}
//         <img
//           src={Bgimg}
//           alt="Background"
//           loading="eager"
//           fetchpriority="high"
//           onLoad={() => setLoadingState(prev => ({ ...prev, isImageLoaded: true }))}
//           className={absolute inset-0 w-full h-full object-cover will-change-transform ${
//             loadingState.isVideoLoaded ? 'opacity-0' : 'opacity-100'
//           } transition-opacity duration-500}
//           style={{ zIndex: 10 }}
//         />

//         {/* Optimized Video Loading */}
//         {loadingState.isInView && (
//           <video
//             ref={videoRef}
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="auto"
//             onLoadedData={() => setLoadingState(prev => ({ ...prev, isVideoLoaded: true }))}
//             className={absolute inset-0 w-full h-full object-cover will-change-transform ${
//               loadingState.isVideoLoaded ? 'opacity-100' : 'opacity-0'
//             } transition-opacity duration-500}
//             style={{
//               aspectRatio: "16/9",
//               transform: "scale(1.2)",
//               zIndex: 20,
//             }}
//           >
//             <source src={Bgvideo} type="video/mp4" />
//           </video>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Background;