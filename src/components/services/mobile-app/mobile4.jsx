import React from "react";
import { FiSmartphone, FiTablet, FiCodesandbox, FiTool, FiServer, FiCloud, FiDatabase } from 'react-icons/fi';

const MobileTechnologyStack = () => {
  const categories = [
    {
      title: "Platforms",
      icon: FiSmartphone,
      items: ["iOS", "Android", "HarmonyOS", "KaiOS", "WatchOS", "Wear OS", "Android TV", "iPadOS"],
      color: "purple"
    },
    {
      title: "Cross-Platform",
      icon: FiTablet,
      items: ["React Native", "Flutter", "Ionic", "Xamarin", "NativeScript", "Kotlin Multiplatform", "SwiftUI", "Jetpack Compose"],
      color: "purple"
    },
    {
      title: "Dev Tools",
      icon: FiTool,
      items: ["Android Studio", "Xcode", "AppCode", "Expo", "Firebase Console", "React Native Debugger", "Genymotion", "Charles Proxy"],
      color: "purple"
    },
    {
      title: "Backend Services",
      icon: FiCloud,
      items: ["Firebase", "AWS Amplify", "Supabase", "Appwrite", "GraphQL", "Auth0", "Contentful", "OneSignal"],
      color: "purple"
    },
    {
      title: "State Management",
      icon: FiCodesandbox,
      items: ["Redux", "MobX", "Riverpod", "BLoC", "Provider", "GetX", "ViewModel", "Recoil"],
      color: "purple"
    },
    {
      title: "Mobile Databases",
      icon: FiDatabase,
      items: ["Realm", "SQLite", "Room DB", "WatermelonDB", "ObjectBox", "PouchDB", "Couchbase Lite", "Hive"],
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-white font-mono tracking-tighter bg-clip-text text-transparent mb-4 p-1">
            Mobile Tech Ecosystem
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full-stack mobile development capabilities from native to cross-platform solutions
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
                <h2 className={`text-2xl font-bold font-mono bg-gradient-to-r from-${category.color}-300 to-${category.color}-300 bg-clip-text text-transparent`}>
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

export default MobileTechnologyStack;