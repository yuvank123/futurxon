import React from "react";
import { FaVrCardboard, FaCube, FaGamepad, FaMobileAlt, FaTools, FaPaintBrush } from 'react-icons/fa';

const ARVR3DTechnologyStack = () => {
  const categories = [
    {
      title: "AR Platforms",
      icon: FaMobileAlt,
      items: [
        "ARKit",
        "ARCore",
        "Vuforia",
        "Wikitude",
        "EasyAR"
      ],
      color: "purple"
    },
    {
      title: "VR Platforms",
      icon: FaVrCardboard,
      items: [
        "Oculus SDK",
        "SteamVR",
        "OpenVR",
        "Google VR",
        "Unity XR"
      ],
      color: "purple"
    },
    {
      title: "3D Modeling Software",
      icon: FaCube,
      items: [
        "Blender",
        "Autodesk Maya",
        "3ds Max",
        "Cinema 4D",
        "ZBrush"
      ],
      color: "purple"
    },
    {
      title: "Game Engines",
      icon: FaGamepad,
      items: [
        "Unity",
        "Unreal Engine",
        "Godot",
        "CryEngine",
        "Amazon Lumberyard"
      ],
      color: "purple"
    },
    {
      title: "Hardware Devices",
      icon: FaTools,
      items: [
        "HTC Vive",
        "Oculus Rift",
        "Valve Index",
        "Microsoft HoloLens",
        "Magic Leap"
      ],
      color: "purple"
    },
    {
      title: "Creative Tools",
      icon: FaPaintBrush,
      items: [
        "Adobe Substance 3D",
        "Sketchfab",
        "Marmoset Toolbag",
        "Substance Painter",
        "Quixel Mixer"
      ],
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter bg-gradient-to-r from-red-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 p-1">
            AR/VR &amp; 3D Modeling Ecosystem
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore cutting-edge platforms, tools, and hardware powering the AR, VR, and 3D modeling industries.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-${category.color}-400/20 hover:border-${category.color}-400/40 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-${category.color}-500/10`}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br from-${category.color}-400/30 to-transparent -z-10`} />
              
              {/* Category Header */}
              <div className="flex items-center mb-6 space-x-4">
                <div className={`p-3 rounded-xl bg-${category.color}-400/10 backdrop-blur-sm`}>
                  <category.icon className={`text-3xl text-${category.color}-400 animate-icon-hover`} />
                </div>
                <h2 className={`text-2xl font-bold font-mono bg-${category.color}-400 bg-clip-text text-transparent`}>
                  {category.title}
                </h2>
              </div>

              {/* Technology Items */}
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center space-x-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default"
                  >
                    <div className={`h-2 w-2 rounded-full bg-${category.color}-400 animate-pulse`} />
                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ARVR3DTechnologyStack;
