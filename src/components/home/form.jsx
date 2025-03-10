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

  // Extended list of talents with categories
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
    <div className="min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 mb-16 text-center">
          🚀 Build Your Team for Precise Project Costing
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input-field border-2 border-gray-300 bg-white p-2 rounded-4xl"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input-field border-2 border-gray-300  bg-white p-2 rounded-4xl"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number "
              className="input-field border-2 border-gray-300  bg-white p-2 rounded-4xl"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            name="description"
            placeholder="Project Description..."
            className="input-field w-full border-2 border-gray-300  bg-white p-3 rounded-3xl "
            value={formData.description}
            onChange={handleInputChange}
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
            >
              Get Project Estimate →
            </button>
          </div>
        </form>

        <div className="flex flex-col md:flex-row gap-6 h-[500px]">
          {/* Talents Pool */}
          <div className="w-full md:w-1/3 bg-white rounded-xl shadow-lg p-6">
            <div className="mb-4">
              <input
                type="text"
                placeholder="🔍 Search talents..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <h2 className="text-purple-700 font-semibold mb-4">Available Talents</h2>
            <div className="h-[380px] overflow-y-auto pr-2">
              <ul className="space-y-2">
                {filteredTalents.map((talent) => (
                  <li
                    key={talent}
                    className="talent-item"
                    draggable
                    onDragStart={(e) => handleDragStart(e, talent)}
                  >
                    {talent}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Team Board */}
          <div 
            className="w-full md:w-2/3 bg-white rounded-xl shadow-lg p-6"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <h2 className="text-purple-700 font-semibold mb-4">Your Team ({team.length})</h2>
            <div className="h-[380px] overflow-y-auto pr-2">
              {team.length === 0 ? (
                <div className="h-full flex items-center justify-center text-gray-400">
                  Drag talents here to build your team
                </div>
              ) : (
                <ul className="space-y-2">
                  {team.map((talent) => (
                    <li
                      key={talent}
                      className="group flex items-center justify-between bg-purple-50 p-3 rounded-lg hover:bg-purple-100 transition-colors"
                    >
                      <span className="text-purple-800">{talent}</span>
                      <button
                        onClick={() => removeTalent(talent)}
                        className="text-purple-500 hover:text-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 mt-8"
            >
              Submit →
            </button>
          </div>
      </div>

      <style jsx>{`
        .input-field {
          @apply w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all;
        }

        .search-input {
          @apply w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all;
        }

        .talent-item {
          @apply px-4 py-3 bg-purple-50 text-purple-800 rounded-lg cursor-move 
                 hover:bg-purple-100 hover:shadow-sm transition-all 
                 active:scale-95 active:shadow-inner;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f5f3ff;
        }

        ::-webkit-scrollbar-thumb {
          background: #c4b5fd;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #a78bfa;
        }
      `}</style>
    </div>
  );
};

export default FormWithDragDrop;