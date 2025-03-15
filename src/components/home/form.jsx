import React, { useState, useMemo } from 'react';

const FormWithDragDrop = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [team, setTeam] = useState([]);
  const talents = useMemo(() => [
    'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
    'Project Manager', 'Product Manager', 'Scrum Master',
    'Data Scientist', 'Data Analyst', 'ML Engineer',
    'UI Designer', 'UX Designer', 'Graphic Designer',
    'DevOps Engineer', 'Cloud Architect', 'SysAdmin',
    'QA Engineer', 'Test Automation Engineer', 'Security Specialist',
    'Content Writer', 'Technical Writer', 'Marketing Specialist'
  ], []);

  const filteredTalents = useMemo(() => 
    talents.filter(talent =>
      talent.toLowerCase().includes(searchQuery.toLowerCase())
    ), [talents, searchQuery]
  );

  const handleDragStart = (e, talent) => {
    e.dataTransfer.setData('text/plain', talent);
    e.target.classList.add('opacity-50');
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove('opacity-50');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const talent = e.dataTransfer.getData('text/plain');
    setTeam(prev => [...new Set([...prev, talent])]);
  };

  const removeTalent = (talent) => {
    setTeam(prev => prev.filter(t => t !== talent));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, team });
    alert('Form submitted successfully!');
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a021a] to-[#020515] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            🚀 Build Your Dream Team
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Drag and drop team members to create your perfect project setup and get instant cost estimates
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Your Name', name: 'name', type: 'text' },
              { label: 'Email Address', name: 'email', type: 'email' },
              { label: 'Phone Number', name: 'phone', type: 'tel' },
              { label: 'Project Name', name: 'project', type: 'text' }
            ].map((field) => (
              <div key={field.name} className="space-y-1">
                <label className="text-gray-300 text-sm font-bold p-1">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 mt-2"
                />
              </div>
            ))}
          </div>

          <div className="space-y-1">
            <label className="text-gray-300 text-sm font-bold">Project Description</label>
            <textarea
              name="description"
              onChange={handleInputChange}
              placeholder="Describe your project goals, timeline, and special requirements..."
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px] mt-2"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Talents Pool */}
            <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="🔍 Search roles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="h-96 overflow-y-auto pr-2 space-y-2">
                  {filteredTalents.map((talent) => (
                    <div
                      key={talent}
                      draggable
                      onDragStart={(e) => handleDragStart(e, talent)}
                      onDragEnd={handleDragEnd}
                      className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg cursor-grab active:cursor-grabbing text-gray-200 transition-colors"
                    >
                      {talent}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Team Board */}
            <div 
              className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-gray-200 font-medium">Your Team</h2>
                <span className="text-purple-400 text-sm">{team.length} members</span>
              </div>
              <div className="h-96 overflow-y-auto pr-2 space-y-2">
                {team.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-gray-400 text-center p-4">
                    Drag roles here to build your team
                    <div className="mt-2 text-3xl">↓</div>
                  </div>
                ) : (
                  team.map((talent) => (
                    <div
                      key={talent}
                      className="group flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-200 transition-colors"
                    >
                      <span>{talent}</span>
                      <button
                        onClick={() => removeTalent(talent)}
                        className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ✕
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-gray-100 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Generate Project Estimate →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormWithDragDrop;