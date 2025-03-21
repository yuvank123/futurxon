import React, { useState } from "react";

const positions = [
  {
    title: "Business Analyst",
    location: "Pune, Maharashtra, India",
    description:
      "Demonstrate experience in requirement elicitation, system analysis, and translating business problems to functional specifications. Thorough skills in ...",
  },
  {
    title: "Inside Sales Executive",
    location: "Pune City, Maharashtra, India",
    description:
      "Roles and Responsibilities: Build relationships with prospective clients. Maintain consistent contact with existing clients. Make cold calls for new bus...",
  },
  {
    title: "DevOps Engineer",
    location: "Pune, Maharashtra, India",
    description:
      "Continuous Integration and Continuous Delivery (CI/CD): Establishing and maintaining CI/CD pipelines to automate the build, testing, and deploy...",
  },
  {
    title: "Content Strategist",
    location: "Pune, Maharashtra, India",
    description:
      "We are looking for qualified and ambitious content writing professionals who are resourceful and sharp to deliver interactive content. Someone who bel...",
  },
  {
    title: "Angular Developer",
    location: "Pune City, Maharashtra, India",
    description:
      "We are seeking a skilled Angular Developer with 3–6 years of experience to join our development team. As an Angular Developer, you will be responsib...",
  },
  {
    title: "Project Manager",
    location: "Pune, Maharashtra, India",
    description:
      "Job Responsibilities: To lead a team that comprises project personnel, designers, researchers, and engineers. To act as the first point of...",
  },
];

const FeaturedPositions = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Featured Positions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover exciting career opportunities that match your aspirations and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer group ${
                selectedPosition?.title === position.title
                  ? "bg-gradient-to-br scale-[1.02] shadow-2xl"
                  : "hover:bg-gray-800/30 shadow-lg bg-gray-900/40"
              } border border-gray-700/30`}
              onClick={() =>
                setSelectedPosition((prev) =>
                  prev?.title === position.title ? null : position
                )
              }
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <h2
                    className={`text-lg font-semibold ${
                      selectedPosition?.title === position.title
                        ? "text-white"
                        : "text-blue-400 group-hover:text-white transition-colors"
                    }`}
                  >
                    {position.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-400 mt-1">{position.location}</p>

                {selectedPosition?.title === position.title && (
                  <div className="mt-4 overflow-hidden">
                    <p className="text-gray-300 text-base leading-relaxed animate-fadeIn">
                      {position.description}
                    </p>
                  </div>
                )}

                <div className="mt-auto">
                  <button
                    className="text-blue-400 group-hover:text-white transition-colors text-sm mt-4"
                    onClick={() => alert(`More details about ${position.title}`)}
                  >
                    Job Details →
                  </button>
                </div>
              </div>

              {selectedPosition?.title === position.title && (
                <div className="absolute inset-0 -z-10 animate-gradient-rotate opacity-30">
                  <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPositions;