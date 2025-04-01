import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";

const OuterWireframeGlobe = ({ rotationSpeed }) => {
  const globeRef = useRef();

  // Continuous rotation using the provided rotationSpeed.
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += rotationSpeed / 2;
    }
  });

  return (
    <mesh ref={globeRef}>
      {/* Outer globe geometry */}
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial
        color="#7B3FE4"       // Purple tone.
        metalness={4}         // Highly metallic look.
        roughness={0.2}       // Smooth, polished surface.
        wireframe={true}      // Wireframe style.
        emissive="#4B0082"    // Subtle purple glow.
      />
    </mesh>
  );
};

const InnerWireframeGlobe = ({ rotationSpeed, isMobile }) => {
  const globeRef = useRef();

  // Continuous rotation in the opposite direction using the provided rotationSpeed.
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y -= rotationSpeed;
    }
  });

  // Use a smaller radius for mobile devices.
  const radius = isMobile ? 2 : 3;

  return (
    <mesh ref={globeRef}>
      {/* Inner globe geometry (smaller than outer) */}
      <sphereGeometry args={[radius, 60, 60]} />
      <meshStandardMaterial
        color="#7B3FE4"       // Same purple tone.
        metalness={4}         // Highly metallic look.
        roughness={0.2}       // Smooth, polished surface.
        wireframe={true}      // Wireframe style.
        emissive="#4B0082"    // Subtle purple glow.
      />
    </mesh>
  );
};

const Background = () => {
  const [rotationSpeed, setRotationSpeed] = useState(0.002);
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport width and update isMobile state.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSpeedChange = (e) => {
    setRotationSpeed(parseFloat(e.target.value));
  };

  return (
    <div className="absolute top-0 left-0 w-full h-screen z-0 overflow-hidden">
      {/* Background gradient and decorative layers */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-black via-[#0F0A2E] to-[#1A0933]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-blue-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-10" />
        </div>
      </div>

      {/* 3D Canvas with interactive wireframe globes, sparkles, and stars */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={200} color="#7B3FE4" />

          {/* Render the outer globe only if not on mobile */}
          {!isMobile && <OuterWireframeGlobe rotationSpeed={rotationSpeed} />}
          <InnerWireframeGlobe rotationSpeed={rotationSpeed} isMobile={isMobile} />

          {/* OrbitControls with autoRotate enabled */}
          <OrbitControls
            enableZoom
            enablePan
            enableRotate
            autoRotate
            autoRotateSpeed={rotationSpeed * 300} // Scale auto-rotate speed.
          />

          {/* Sparkles add shiny background elements */}
          <Sparkles count={300} scale={5} size={3} speed={0.5} color="#ffffff" />

          {/* Additional stars layers with purple and blue hues */}
          <Stars
            radius={100}
            depth={50}
            count={800}
            factor={4}
            saturation={0.5}
            fade
            color="#7B3FE4"
          />
          <Stars
            radius={100}
            depth={50}
            count={300}
            factor={4}
            saturation={0.5}
            fade
            color="#00B0FF"
          />
        </Canvas>
      </div>

      {/* UI Control for rotation speed */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-50 p-2 rounded text-xs sm:text-base">
        <label htmlFor="speed" className="text-white mr-2">
          Rotation Speed:
        </label>
        <input
          id="speed"
          type="range"
          min="0.001"
          max="0.01"
          step="0.001"
          value={rotationSpeed}
          onChange={handleSpeedChange}
          className="accent-purple-700"
        />
      </div>
    </div>
  );
};

export default Background;
