import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Positions = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const openModal = (role) => {
    setSelectedRole(role);
    setShowModal(true);
    setFormData({ name: '', email: '', message: '' });
    setStatus({ loading: false, success: false, error: null });
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRole("");
    setFormData({ name: '', email: '', message: '' });
    setStatus({ loading: false, success: false, error: null });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      console.log('Submitting application:', {
        position: selectedRole,
        ...formData
      });

      const response = await fetch('https://infinoid.com/backend/process_application.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
          position: selectedRole,
          ...formData
        })
      });

      // First try to get the response as text
      const responseText = await response.text();
      console.log('Raw response:', responseText);

      // Try to parse it as JSON
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (error) {
        console.error('Failed to parse response:', responseText);
        throw new Error('Invalid server response');
      }

      if (!response.ok) {
        throw new Error(data.message || `Server error: ${response.status}`);
      }

      if (data.success) {
        setStatus({ loading: false, success: true, error: null });
        // Show success message for 2 seconds before closing
        setTimeout(closeModal, 2000);
      } else {
        throw new Error(data.message || 'Application submission failed');
      }

    } catch (error) {
      console.error('Application submission error:', error);
      setStatus({
        loading: false,
        success: false,
        error: error.message || 'Failed to submit application. Please try again.'
      });
    }
  };

  const positions = [
    {
      title: "Salesforce Developer",
      experience: "Experience: 0-3 Years",
      skills: ["Aura, LWC", "SOQL", "Flow, Apex", "VS Code", "Git"],
    },
    {
      title: "Odoo Developer",
      experience: "Experience: 1-5 Years",
      skills: ["Git, JavaScript", "SQL", "HTML, CSS", "PHP", "Python"],
    },
    {
      title: "React Developer",
      experience: "Experience: 2-6 Years",
      skills: ["React.js", "Redux", "JavaScript", "CSS", "Git"],
    },
    {
      title: "Python Developer",
      experience: "Experience: 1-4 Years",
      skills: ["Django", "Flask", "SQL", "REST API", "Git"],
    },
    {
      title: "Data Scientist",
      experience: "Experience: 2-5 Years",
      skills: ["Python", "Machine Learning", "Deep Learning", "SQL", "Pandas"],
    },
    {
      title: "Full Stack Developer",
      experience: "Experience: 3-7 Years",
      skills: ["Node.js", "React.js", "MongoDB", "Express.js", "Docker"],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center text-white py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl w-full">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-7xl font-mono tracking-tighter font-bold bg-gradient-to-r from-purple-500 via-purple-300 to-white bg-clip-text text-transparent">
            Featured Positions
          </h2>
          <p className="text-lg text-blue-300/70 max-w-2xl mx-auto">
            Leading organizations rely on our expertise for their digital transformation
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative group"
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {positions.map((position, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-purple-900/60 to-blue-900/60 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/10">
                  <h1 className="text-2xl font-bold font-mono text-purple-100/90">{position.title}</h1>

                  <div className="mt-3">
                    <p className="text-md font-bold text-blue-200/80">{position.experience}</p>
                  </div>

                  <div className="mt-4 space-y-2 text-base text-white">
                    {position.skills.map((skill, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => openModal(position.title)}
                    className="mt-6 w-full py-2 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Apply Now
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="hidden md:flex prev-btn absolute -left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-xl border border-white/10 transition-all duration-300 z-20">
            <ChevronLeft size={28} className="text-white" />
          </button>
          <button className="hidden md:flex next-btn absolute -right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl border border-white/10 transition-all duration-300 z-20">
            <ChevronRight size={28} className="text-white" />
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-600 hover:text-red-600">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Apply for {selectedRole}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Why are you a good fit?"
                rows="4"
                required
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              
              {status.error && (
                <div className="text-red-500 text-sm">{status.error}</div>
              )}
              {status.success && (
                <div className="text-green-500 text-sm">Application submitted successfully!</div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50"
              >
                {status.loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Positions;
