import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "../style/navbar.css";
import Logo from '../images/logo.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [closeTimeoutId, setCloseTimeoutId] = useState(null);
  const [lastScroll, setLastScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const dropdownItems = useRef([]);
  const ctaButton = useRef(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutId) clearTimeout(closeTimeoutId);
    };
  }, [closeTimeoutId]);

  const handleMenuEnter = (menuName) => {
    if (closeTimeoutId) {
      clearTimeout(closeTimeoutId);
      setCloseTimeoutId(null);
    }
    setActiveMenu(menuName);
  };

  const handleMenuLeave = (menuName) => {
    const id = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
    setCloseTimeoutId(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll < lastScroll || currentScroll === 0);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Dropdown item click animation
  const handleDropdownItemClick = (index) => {
    const element = dropdownItems.current[index];
    gsap.to(element, {
      duration: 0.3,
      scale: 1.05,
      backgroundColor: 'rgba(245, 243, 255, 0.8)',
      boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)',
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    });
  };

  // CTA button click animation
  const handleCtaClick = () => {
    gsap.to(ctaButton.current, {
      duration: 0.5,
      keyframes: [
        { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.4)', scale: 1 },
        { boxShadow: '0 0 0 20px rgba(59, 130, 246, 0)', scale: 1.05 }
      ],
      ease: 'power2.out'
    });
  };

  const renderDropdown = (menuName, leftItems, rightItems) => (
    <div
      className={`absolute top-full left-0 mt-5 w-96 bg-white border border-gray-200 rounded-[18px] shadow-xl py-6 z-50 transition-all duration-200 ${
        activeMenu === menuName
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
      onMouseEnter={() => handleMenuEnter(menuName)}
      onMouseLeave={() => handleMenuLeave(menuName)}
    >
      <div className="grid grid-cols-2 gap-3 px-4">
        {/* Left Column */}
        <div className="space-y-0 border-r border-gray-200 pr-3">
          {leftItems.map((item, index) => (
            <a
              key={item.text}
              href={item.href}
              ref={el => (dropdownItems.current[index] = el)}
              onClick={() => handleDropdownItemClick(index)}
              className="flex items-center px-2 py-2 text-gray-700 transition-colors rounded-lg hover:font-bold"
            >
              {item.text}
            </a>
          ))}
        </div>

        

        {/* Right Column */}
        <div className="space-y-0 pl-3">
          {rightItems.map((item, index) => (
            <a
              key={item.text}
              href={item.href}
              ref={el => (dropdownItems.current[index + leftItems.length] = el)}
              onClick={() => handleDropdownItemClick(index + leftItems.length)}
              className="flex items-center px-2 py-2 text-gray-700 transition-colors rounded-lg hover:font-bold"
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  const renderserviceDropdown = (menuName, leftItems, middleItems, rightItems) => (
    <div
      className={`absolute top-full -left-[300px] mt-5 w-[900px] bg-white border border-gray-200 rounded-[18px] shadow-xl py-8 z-50 transition-all duration-200 ${
        activeMenu === menuName
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
      onMouseEnter={() => handleMenuEnter(menuName)}
      onMouseLeave={() => handleMenuLeave(menuName)}
    >
      <div className="grid grid-cols-3 gap-8 px-8">
        {/* Left Column */}
        <div className="space-y-0">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Development</h3>
          <div className="space-y-0">
            {leftItems.map((item, index) => (
              <a
                key={item.text}
                href={item.href}
                ref={el => (dropdownItems.current[index] = el)}
                onClick={() => handleDropdownItemClick(index)}
                className="flex items-center px-4 py-3 text-gray-600 transition-all rounded-lg hover:bg-gray-50 hover:text-gray-900 group"
              >
                {item.text}
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-0 border-l border-gray-200 pl-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Solutions</h3>
          <div className="space-y-0">
            {middleItems.map((item, index) => (
              <a
                key={item.text}
                href={item.href}
                ref={el => (dropdownItems.current[index + leftItems.length] = el)}
                onClick={() => handleDropdownItemClick(index + leftItems.length)}
                className="flex items-center px-4 py-3 text-gray-600 transition-all rounded-lg hover:bg-gray-50 hover:text-gray-900 group"
              >
                {item.text}
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-0 border-l border-gray-200 pl-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Emerging Tech</h3>
          <div className="space-y-0">
            {rightItems.map((item, index) => (
              <a
                key={item.text}
                href={item.href}
                ref={el => (dropdownItems.current[index + leftItems.length + middleItems.length] = el)}
                onClick={() => handleDropdownItemClick(index + leftItems.length + middleItems.length)}
                className="flex items-center px-4 py-3 text-gray-600 transition-all rounded-lg hover:bg-gray-50 hover:text-gray-900 group"
              >
                {item.text}
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent font-sans text-[14px] md:text-[18px] ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-0 border-0 border-amber-50">
        <div className="flex justify-between items-center h-16 md:h-25">
          {/* Left - Logo */}
          <div className="flex-shrink-0 overflow-hidden">
            <span className="text-[25px] md:text-[35px] font-bold text-blue-600">
              <a href="/" className=''>
              <img src={Logo} alt="image" className="w-24 md:w-60 h-[200px]" />
              </a>
            </span>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center -ml-[40px]">
            <div className="flex items-center space-x-4 md:space-x-8 bg-white/30 backdrop-blur-md rounded-[15px] p-2 md:p-3 font-[12px] md:font-[14px]">
              
              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter('about')}
                onMouseLeave={() => handleMenuLeave('about')}
              >
                <button className="text-purple-300 hover:text-white-600 transition-colors flex items-center gap-1">
                  About Us
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeMenu === 'about' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {renderDropdown('about', 
                  [
                    { text: 'About Company', href: '/about-company' },
                    { text: 'Customer Reviews', href: '/customer-reviews' }
                  ],
                  [
                    { text: 'Agile Mindset', href: '/agile' },
                    { text: 'Bacancy Values', href: '/values' }
                  ]
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter('services')}
                onMouseLeave={() => handleMenuLeave('services')}
              >
                <button className="text-purple-300 hover:text-white-600 transition-colors flex items-center gap-1">
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeMenu === 'services' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {renderserviceDropdown('services',
                  [
                    { text: 'Web Development', href: '/web-dev' },
                    { text: 'Mobile Apps', href: '/mobile-apps' },
                    { text: 'UI/UX Design', href: '/ui-ux' }
                  ],
                  [
                    { text: 'Cloud Services', href: '/cloud' },
                    { text: 'AI Solutions', href: '/ai' },
                    { text: 'Blockchain', href: '/blockchain' }
                  ],
                  [
                    { text: 'Devops', href: '/devops' },
                    { text: 'AR/VR', href: '/arvr' },
                    { text: 'Cybersecurity', href: '/cybersecurity' }
                  ]
                )}
              </div>

              {/* career Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter('hireme')}
                onMouseLeave={() => handleMenuLeave('hireme')}
              >
                <button className="text-purple-300 hover:text-white-600 transition-colors flex items-center gap-1">
                  Career
                  {/* <svg
                    className={`w-4 h-4 transition-transform ${
                      activeMenu === 'hireme' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg> */}
                </button>
                {/* {renderDropdown('hireme',
                  [
                    { text: 'Full-Time', href: '/full-time' },
                    { text: 'Part-Time', href: '/part-time' },
                    { text: 'Contract', href: '/contract' }
                  ],
                  [
                    { text: 'Freelance', href: '/freelance' },
                    { text: 'Project Basis', href: '/project' },
                    { text: 'Hourly', href: '/hourly' }
                  ]
                )} */}
              </div>

              {/* Portfolio Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter('portfolio')}
                onMouseLeave={() => handleMenuLeave('portfolio')}
              >
                <button className="text-purple-300 hover:text-white-600 transition-colors flex items-center gap-1">
                  Portfolio
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeMenu === 'portfolio' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {renderDropdown('portfolio',
                  [
                    { text: 'Case Studies', href: '/case-studies' },
                    { text: 'Our Clients', href: '/clients' }
                  ],
                  [
                    { text: 'Testimonials', href: '/testimonials' },
                    { text: 'Success Stories', href: '/success-stories' }
                  ]
                )}
              </div>

              {/* Contact Us */}
              <a href="/contact" className="text-purple-300 hover:text-white-600 transition-colors font-[12px] md:font-[14px] hidden md:inline">
                Contact Us
              </a>
            </div>
          </div>

          {/* Right - Animated CTA Button */}
          <div className="flex items-center space-x-4 md:space-x-6 pr-1">
            <button
              ref={ctaButton}
              onClick={handleCtaClick}
              className="cta-button bg-gradient-to-r from-blue-600 to-purple-500 text-white p-2 md:p-3 rounded-[15px] hover:shadow-lg transition-all duration-300 font-[12px] md:font-[14px] relative overflow-hidden"
            >
              <span className="relative z-10">Book in 30 min</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;