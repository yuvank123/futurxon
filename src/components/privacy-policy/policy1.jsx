import React, { useEffect, useState } from "react";
import Mammoth from "mammoth";

const PrivacyPolicy = () => {
  const [policyContent, setPolicyContent] = useState("");

  useEffect(() => {
    fetch("/privacy-policy.docx")
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onload = async (event) => {
          const { value } = await Mammoth.convertToHtml({ arrayBuffer: event.target.result });
          setPolicyContent(value);
        };
        reader.readAsArrayBuffer(blob);
      })
      .catch((error) => console.error("Error loading the privacy policy:", error));
  }, []);

  return (
    <div className="min-h-screen pt-20 flex justify-center items-center bg-gradient-to-br from-purple-950 via-blue-950 to-indigo-950">
      {/* Glowing Container */}
      <div className="max-w-4xl w-full mx-4 p-8 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30 backdrop-blur-lg rounded-3xl shadow-2xl relative overflow-hidden mt-10">
        {/* Animated Border Gradient */}
        <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-400 animate-gradient-rotate">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-blue-950 to-indigo-950 rounded-3xl" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center p-2 bg-gradient-to-r from-purple-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent mb-8">
            Infinoid Technologies Privacy Policy
          </h1>
          
          {/* Content Container with Custom Scroll */}
          <div className="text-gray-200 text-lg leading-relaxed max-h-[70vh] overflow-y-auto custom-scroll">
            <div 
              className="prose prose-invert prose-lg max-w-none p-6"
              dangerouslySetInnerHTML={{ __html: policyContent }} 
              style={{
                '--tw-prose-headings': '#e0e7ff',
                '--tw-prose-links': '#a5b4fc',
                '--tw-prose-bold': '#ffffff',
              }}
            />
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes gradient-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-gradient-rotate {
          animation: gradient-rotate 10s linear infinite;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
        }

        .custom-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .custom-scroll::-webkit-scrollbar {
          width: 0;
          height: 0;
        }

        .prose-invert {
          max-width: 100%;
        }

        .prose-invert h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 2rem 0 1rem;
          background: linear-gradient(90deg, #7e5bef 0%, #4f46e5 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .prose-invert p {
          margin-bottom: 1.25rem;
          line-height: 1.7;
          color: #e5e7eb;
        }

        .prose-invert a {
          transition: all 0.3s ease;
          text-decoration: underline;
          color: #a78bfa;
        }

        .prose-invert a:hover {
          color: #8b5cf6;
        }

        .prose-invert strong {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;