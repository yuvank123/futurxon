import React from 'react';
import { FiShoppingCart, FiTool, FiCloud, FiCpu } from 'react-icons/fi';

const OnlinePetShopCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-6xl md:text-7xl font-bold bg-gradient-to-r p-2 from-purple-400 via-blue-300 to-red-400 bg-clip-text text-transparent">
            Online Pet Shop – Case Study by Infinoid
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent mb-8">
            Overview
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            Infinoid Technology developed a robust online pet shop platform that brings pet lovers closer to quality pet products and services. This solution offers a seamless shopping experience with personalized recommendations, secure transactions, and efficient inventory management.
          </p>
          <p className="text-xl italic text-purple-300">
            "Where pet care meets convenience — transforming the online pet shopping experience."
          </p>
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
                title: "Inconsistent User Experience",
                content: "Users experienced varying performance and layout issues across devices and browsers.",
                icon: <FiTool className="text-2xl text-red-400" />
              },
              {
                title: "Slow Page Loads",
                content: "Heavy images and unoptimized content led to slow loading times and frustrated shoppers.",
                icon: <FiCloud className="text-2xl text-purple-400" />
              },
              {
                title: "Complex Inventory Management",
                content: "Keeping track of a large catalog of pet products required a dynamic and scalable solution.",
                icon: <FiShoppingCart className="text-2xl text-red-400" />
              },
              {
                title: "Limited Payment Integration",
                content: "Multiple payment gateways were needed to accommodate diverse customer preferences.",
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
                "Responsive design for seamless multi-device experience",
                "Optimized image loading and caching strategies",
                "Dynamic inventory management system for real-time updates"
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
                "Integrated multiple secure payment gateways",
                "User review and rating system for enhanced trust",
                "SEO-optimized storefront to drive organic traffic"
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="border-l-4 border-purple-400 pl-4">
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
          <h2 className="text-3xl font-bold bg-gradient-to-r p-2 from-purple-300 to-blue-200 bg-clip-text text-transparent mb-8">
            💻 Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                items: [
                  "React.js + Next.js (App Router), Tailwind CSS",
                  "Gatsby/Next.js for SEO optimization",
                  "RESTful APIs for dynamic content",
                  "Redux for state management"
                ],
                color: "purple"
              },
              {
                items: [
                  "Node.js, Express.js",
                  "MongoDB for inventory and user data",
                  "Stripe, PayPal for payment integration",
                  "AWS for hosting and storage"
                ],
                color: "purple"
              },
              {
                items: [
                  "Google Analytics for performance tracking",
                  "Contentful or Strapi for CMS",
                  "Firebase for real-time updates",
                  "Vercel for fast deployment"
                ],
                color: "purple"
              }
            ].map((section, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                <ul className="space-y-3 text-gray-300">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 bg-${section.color}-400 rounded-full`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose infinoid Section */}
      <section className="py-16 px-6 lg:px-24 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-orange-200 bg-clip-text text-transparent mb-12">
            🌟 Why Infinoid?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Personalized Shopping Experience",
                content: "Tailored recommendations and a user-friendly interface ensure each pet owner finds what they need."
              },
              {
                title: "Seamless Multi-Device Integration",
                content: "Optimized for both mobile and desktop, ensuring a consistent experience across platforms."
              },
              {
                title: "Secure & Scalable Architecture",
                content: "Built to handle high traffic and secure transactions, ensuring trust and reliability."
              },
              {
                title: "Comprehensive Product Catalog",
                content: "From pet food to accessories, our platform offers an extensive range of quality products."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500 to-blue-500 p-px rounded-2xl">
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

export default OnlinePetShopCaseStudy;
