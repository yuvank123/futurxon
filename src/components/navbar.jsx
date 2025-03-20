import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import One from '../images/5.svg';
import "../style/navbar.css";
// import Logo from '../images/logo.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [closeTimeoutId, setCloseTimeoutId] = useState(null);
  const [lastScroll, setLastScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  // Show mobile nav on screens below xl (1280px) to cover iPad Pro and similar devices.
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
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

  // Close mobile menu if viewport becomes large (xl and above)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      className={`absolute top-full left-0 mt-5 w-96 bg-white border border-gray-200 rounded-xl shadow-xl py-6 z-50 transition-all duration-200 ${
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
              className="block px-2 py-2 text-gray-700 transition-colors rounded-lg hover:font-bold"
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
              className="block px-2 py-2 text-gray-700 transition-colors rounded-lg hover:font-bold"
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
      className={`absolute top-full xl:-left-[300px] lg:-left-[200px] mt-5 w-full lg:w-[800px] xl:w-[900px] bg-white border border-gray-200 rounded-xl shadow-xl py-8 z-50 transition-all duration-200 ${
        activeMenu === menuName
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
      onMouseEnter={() => handleMenuEnter(menuName)}
      onMouseLeave={() => handleMenuLeave(menuName)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-8">
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
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Mobile Navigation Menu (Overlay) with Accordion Options and a Sticky Mobile CTA Button
  // Shown on screens below xl (1280px) including iPad Pro.
  const mobileNav = (
    <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-95 flex flex-col p-6 xl:hidden overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <a href="/" className="flex-shrink-0">
          <img src={One} alt="logo" className="w-20 sm:w-32" />
        </a>
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <FiX className="text-white text-3xl" />
        </button>
      </div>
      
      <nav className="flex flex-col space-y-6 flex-grow">
        {/* About Us Accordion */}
        <div>
          <button
            onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            className="w-full flex items-center justify-between text-white text-xl md:text-2xl px-3 py-2.5"
          >
            <span>About Us</span>
            <FiChevronDown className={`transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileAboutOpen && (
            <div className="mt-2 pl-4 space-y-2 md:space-y-3">
              <a href="/about-company" className="block text-white text-base md:text-lg">About Company</a>
              <a href="/customer-reviews" className="block text-white text-base md:text-lg">Customer Reviews</a>
              <a href="/agile" className="block text-white text-base md:text-lg">Agile Mindset</a>
              <a href="/values" className="block text-white text-base md:text-lg">Bacancy Values</a>
            </div>
          )}
        </div>
        {/* Services Accordion */}
        <div>
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full flex items-center justify-between text-white text-xl md:text-2xl px-3 py-2.5"
          >
            <span>Services</span>
            <FiChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileServicesOpen && (
            <div className="mt-2 pl-4 flex flex-col space-y-2 md:space-y-3">
              <h3 className="text-lg font-semibold text-white md:text-xl">Development</h3>
              <a href="/web-dev" className="block text-white text-base md:text-lg">Web Development</a>
              <a href="/mobile-apps" className="block text-white text-base md:text-lg">Mobile Apps</a>
              <a href="/ui-ux" className="block text-white text-base md:text-lg">UI/UX Design</a>
              <h3 className="text-lg font-semibold text-white mt-2 md:text-xl">Solutions</h3>
              <a href="/cloud" className="block text-white text-base md:text-lg">Cloud Services</a>
              <a href="/ai" className="block text-white text-base md:text-lg">AI Solutions</a>
              <a href="/blockchain" className="block text-white text-base md:text-lg">Blockchain</a>
              <h3 className="text-lg font-semibold text-white mt-2 md:text-xl">Emerging Tech</h3>
              <a href="/devops" className="block text-white text-base md:text-lg">Devops</a>
              <a href="/arvr" className="block text-white text-base md:text-lg">AR/VR/3D-modelling</a>
              <a href="/cybersecurity" className="block text-white text-base md:text-lg">Cybersecurity</a>
            </div>
          )}
        </div>
        {/* Portfolio Accordion */}
        <div>
          <button
            onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
            className="w-full flex items-center justify-between text-white text-xl md:text-2xl px-3 py-2.5"
          >
            <span>Portfolio</span>
            <FiChevronDown className={`transition-transform duration-300 ${mobilePortfolioOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobilePortfolioOpen && (
            <div className="mt-2 pl-4 flex flex-col space-y-2 md:space-y-3">
              <a href="/case-studies" className="block text-white text-base md:text-lg">Case Studies</a>
              <a href="/clients" className="block text-white text-base md:text-lg">Our Clients</a>
              <a href="/testimonials" className="block text-white text-base md:text-lg">Testimonials</a>
              <a href="/success-stories" className="block text-white text-base md:text-lg">Success Stories</a>
            </div>
          )}
        </div>
        {/* Other Direct Links */}
        <a 
          href="/contact" 
          className="text-white text-xl md:text-2xl px-3 py-2.5 hover:bg-gray-800 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact Us
        </a>
        <a 
          href="/career" 
          className="text-white text-xl md:text-2xl px-3 py-2.5 hover:bg-gray-800 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Career
        </a>
      </nav>
      
      {/* Sticky Mobile CTA Button (Visible on mobile and iPad) */}
      <div className="sticky bottom-6 pt-4 bg-gradient-to-t from-gray-900/80 to-transparent">
        <button
          ref={ctaButton}
          onClick={handleCtaClick}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 sm:py-4 rounded-xl hover:shadow-lg transition-all duration-300 text-base sm:text-lg md:text-xl font-medium"
        >
          Book in 30 min
        </button>
      </div>
    </div>
  );

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent font-sans text-[14px] md:text-[18px] ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex justify-between items-center h-16 md:h-25">
            {/* Logo */}
            <div className="flex-shrink-0 overflow-hidden">
              <a href="/" className="flex items-center">
                <img src={One} alt="logo" className="w-20 md:w-60 transition-all duration-300" />
              </a>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-4 md:space-x-8 bg-white/30 backdrop-blur-md rounded-xl p-2 md:p-3 font-[12px] md:font-[14px]">
                {/* About Us Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMenuEnter('about')}
                  onMouseLeave={() => handleMenuLeave('about')}
                >
                  <button className="text-purple-300 hover:text-white transition-colors flex items-center gap-1">
                    About Us
                    <svg
                      className={`w-4 h-4 transition-transform ${activeMenu === 'about' ? 'rotate-180' : ''}`}
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
                  <button className="text-purple-300 hover:text-white transition-colors flex items-center gap-1">
                    Services
                    <svg
                      className={`w-4 h-4 transition-transform ${activeMenu === 'services' ? 'rotate-180' : ''}`}
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
                      { text: 'AR/VR/3D-modelling', href: '/arvr' },
                      { text: 'Cybersecurity', href: '/cybersecurity' }
                    ]
                  )}
                </div>
                {/* Career */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMenuEnter('hireme')}
                  onMouseLeave={() => handleMenuLeave('hireme')}
                >
                  <a href='/career' className="text-purple-300 hover:text-white transition-colors flex items-center gap-1">
                    Career
                  </a>
                </div>
                {/* Portfolio Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMenuEnter('portfolio')}
                  onMouseLeave={() => handleMenuLeave('portfolio')}
                >
                  <button className="text-purple-300 hover:text-white transition-colors flex items-center gap-1">
                    Portfolio
                    <svg
                      className={`w-4 h-4 transition-transform ${activeMenu === 'portfolio' ? 'rotate-180' : ''}`}
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
                <a href="/contact" className="text-purple-300 hover:text-white transition-colors font-[12px] md:font-[14px]">
                  Contact Us
                </a>
              </div>
            </div>
            {/* Right - Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4 md:space-x-6 pr-1">
              <button
                ref={ctaButton}
                onClick={handleCtaClick}
                className="cta-button bg-gradient-to-r from-blue-600 to-purple-500 text-white p-2 md:p-3 rounded-xl hover:shadow-lg transition-all duration-300 font-[12px] md:font-[14px] relative overflow-hidden"
              >
                <span className="relative z-10">Book in 30 min</span>
              </button>
            </div>
            {/* Mobile Hamburger Menu */}
            <div className="flex lg:hidden">
              <button onClick={() => setMobileMenuOpen(true)}>
                <FiMenu className="text-purple-300 text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && mobileNav}
    </>
  );
};

export default Navbar;
