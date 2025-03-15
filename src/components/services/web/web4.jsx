import React from "react";
import { FiCode, FiCloud, FiBox, FiTool, FiDatabase } from 'react-icons/fi';

const WebTechnologyStack = () => {
  const categories = [
    {
      title: "Front-end",
      icon: FiCode,
      items: ["-HTML5", "-CSS3", "-jQuery", "-jQuery Mobile", "-JavaScript", "-Ajax", "-Bootstrap", "-AngularJS", "-RequireJS"],
      borderColor: "border-purple-500"
    },
    {
      title: "Platforms",
      icon: FiCloud,
      items: ["-Amazon Web Services", "-Microsoft Azure", "-Google Cloud", "-Heroku"],
      borderColor: "border-blue-500"
    },
    {
      title: "Frameworks",
      icon: FiBox,
      items: ["-.NET MVC", "-.NET Web API", "-Spring", "-Spark", "-Jersey", "-Laravel", "-Next.js"],
      borderColor: "border-pink-500"
    },
    {
      title: "Dev Tools",
      icon: FiTool,
      items: ["-Visual Studio", "-Eclipse", "-Xcode", "-Android Studio"],
      borderColor: "border-purple-500"
    },
    {
      title: "Databases",
      icon: FiDatabase,
      items: ["-MongoDB", "-Apache Cassandra", "-Neo4j", "-MySQL", "-PostgreSQL", "-MS SQL Server", "-Oracle", "-SQLite"],
      borderColor: "border-blue-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 sm:px-8 border-0 border-amber-50">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-3xl border-0 border-amber-50">
        <h1 className="text-5xl h-[70px] font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent border-0 border-amber-50">
          Our Technology Stack
        </h1>
        <p className="text-lg text-gray-300">
          Leveraging cutting-edge technologies to power your digital transformation
        </p>
      </div>

      {/* Technology Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index}
            className={`group p-6 rounded-xl backdrop-blur-sm bg-gradient-to-b from-gray-800/30 to-gray-900/20 border ${category.borderColor}/20 hover:${category.borderColor}/50 transition-all duration-300 hover:-translate-y-2`}
          >
            <div className="flex items-center mb-4 space-x-3">
              <category.icon className={`text-2xl ${
                category.borderColor === 'border-purple-500' ? 'text-purple-400' :
                category.borderColor === 'border-blue-500' ? 'text-blue-400' : 'text-pink-400'
              }`} />
              <h2 className={`text-xl font-semibold ${
                category.borderColor === 'border-purple-500' ? 'text-purple-300' :
                category.borderColor === 'border-blue-500' ? 'text-blue-300' : 'text-pink-300'
              }`}>
                {category.title}
              </h2>
            </div>
            
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex}
                  className="text-gray-300 text-[17px] hover:text-white transition-colors duration-200 pl-2 border-l-2 border-transparent hover:border-purple-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-blue-600/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default WebTechnologyStack;