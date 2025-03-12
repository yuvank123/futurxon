import React from 'react';

const LeadershipTeam = () => {
  const teamMembers = [
    {
      name: "Alexandra Chen",
      position: "Chief Executive Officer",
      profession: "Business Strategy Leader",
      image: "https://i.pravatar.cc/300?img=1"
    },
    {
      name: "Marcus Johnson",
      position: "CTO & Innovation Lead",
      profession: "Tech Visionary",
      image: "https://i.pravatar.cc/300?img=2"
    },
    {
      name: "Sophia Rodriguez",
      position: "Chief Creative Officer",
      profession: "Design Innovator",
      image: "https://i.pravatar.cc/300?img=3"
    }
  ];

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 50 0 100 50 L 100 100 L 0 100 Z" fill="rgba(255,255,255,0.05)" />
          <path d="M0 30 Q 50 0 100 30 L 100 100 L 0 100 Z" fill="rgba(255,255,255,0.03)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 text-white py-2 px-6 text-sm uppercase font-bold rounded-full mb-6">
            Visionary Leadership
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-pink-200 mb-4">
            Meet Our Leadership Team
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Pioneering innovation through diverse expertise and unified vision
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative bg-white/5 rounded-2xl p-8 transition-all hover:bg-white/10 hover:shadow-xl flex-1">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col items-center">
                {/* Image with Gradient Border */}
                <div className="relative mb-8 w-full">
                  <div className="absolute -inset-2 rounded-xl blur opacity-10 group-hover:opacity-50 transition-opacity" />
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover rounded-xl border-4 border-transparent group-hover:border-white/10 transition-all"
                  />
                </div>

                {/* Member Details */}
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-blue-300 font-semibold mb-1 text-center">{member.position}</p>
                <span className="text-sm text-pink-200 bg-pink-900/30 px-4 py-2 rounded-full">
                  {member.profession}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;