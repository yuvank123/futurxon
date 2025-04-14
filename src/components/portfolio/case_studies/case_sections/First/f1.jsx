import React from 'react';
import { FiServer, FiCpu, FiCloud, FiTool } from 'react-icons/fi';
import OverviewImg1 from '../../../../../../public/images/3.png';

const ARVRCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-6xl md:text-7xl font-bold bg-gradient-to-r p-2 from-purple-400 via-blue-300 to-red-400 bg-clip-text text-transparent">
            AR/VR Experience Platform
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent mb-8">
            🚀 Overview
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            Infinoid Technology developed a cutting-edge AR/VR experience platform that redefined immersive customer engagement. Built for entertainment, education, and retail, this project offered real-time 3D visualization, AR integration, and VR-enabled simulations for next-gen interaction.
          </p>
          <p className="text-xl italic text-purple-300">
            "Enter a world beyond reality — with Infinoid's immersive AR/VR solutions."
          </p>
        </div>
        {/* Overview Image */}
        <div className="flex justify-center mt-20">
            <img
              src={OverviewImg1}
              alt="AR/VR Overview"
              className="rounded-2xl w-full max-w-4xl"
            />
          </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-purple-300 bg-clip-text text-transparent mb-8">
            ❌ Challenges Faced
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "High Latency & Poor Frame Rendering",
                content: "Legacy VR platforms suffered from high latency and poor frame rendering, degrading the user experience.",
                icon: <FiTool className="text-2xl text-red-400" />
              },
              {
                title: "Inadequate Mobile AR Support",
                content: "Existing solutions did not effectively support mobile AR experiences.",
                icon: <FiCloud className="text-2xl text-blue-400" />
              },
              {
                title: "Complex Cross-Device Deployment",
                content: "Deploying content across web, VR headsets, and mobile devices was a significant challenge.",
                icon: <FiServer className="text-2xl text-red-400" />
              },
              {
                title: "Lack of Personalization",
                content: "User experiences were generic due to the absence of personalized interaction data.",
                icon: <FiCpu className="text-2xl text-purple-400" />
              }
            ].map((item, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implemented Solutions Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent mb-8">
            ✅ Implemented Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                "Built cross-platform AR/VR with WebXR and Unity 3D",
                "Added gesture and voice recognition using TensorFlow.js",
                "Created a web-based VR portal using Three.js"
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <p className="text-gray-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                "Personalized experiences using user session tracking",
                "Integrated real-time multiplayer support using Socket.io",
                "Deployed with CDN for fast access worldwide"
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="text-gray-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r p-2 from-purple-300 to-red-200 bg-clip-text text-transparent mb-8">
            💻 Technology Stack
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-600">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xl font-semibold text-gray-300">Layer</th>
                  <th className="px-6 py-3 text-left text-xl font-semibold text-gray-300">Tech Used</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {[
                  { layer: "AR/VR Engine", tech: "Unity 3D, WebXR, Three.js" },
                  { layer: "Frontend", tech: "React.js, Tailwind CSS" },
                  { layer: "Backend", tech: "Node.js, Express.js" },
                  { layer: "Tracking", tech: "TensorFlow.js, A-Frame" },
                  { layer: "Deployment", tech: "Firebase, Netlify, Vercel" }
                ].map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">{item.layer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">{item.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose infinoid Section */}
      <section className="py-16 px-6 lg:px-24 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-red-200 bg-clip-text text-transparent mb-12">
            🌟 Why Infinoid?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cross-Device Compatibility",
                content: "Delivering seamless experiences on web, mobile, and VR headsets from day one."
              },
              {
                title: "Low-Latency Performance",
                content: "Advanced compression and optimized rendering for smooth and responsive visuals."
              },
              {
                title: "Scalable 3D CMS",
                content: "A robust content management system designed to grow with your immersive needs."
              },
              {
                title: "Deep Personalization",
                content: "ML-enhanced interaction logs drive custom experiences for every user."
              }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-br from-purple-500 to-blue-500 p-px rounded-2xl`}>
                <div className="bg-gray-900 rounded-2xl p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ARVRCaseStudy;
