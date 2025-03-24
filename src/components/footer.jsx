import React from 'react';
import Logo from '../../public/images/6.svg';

const Footer = () => {
  const services = [
    { name: 'Web Development', href: '/services/web-dev' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'UI/UX Design', href: '/services/ui-ux' },
    { name: 'Cloud Services', href: '/services/cloud' },
    { name: 'AI Solutions', href: '/services/ai' },
    { name: 'Blockchain', href: '/services/blockchain' },
    { name: 'DevOps', href: '/services/devops' },
    { name: 'AR/VR/3D Modelling', href: '/services/arvr' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/career' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/infinoid/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.042-1.851-3.042-1.853 0-2.137 1.445-2.137 2.94v5.671h-3.554v-11.5h3.414v1.57h.049c.476-.9 1.637-1.848 3.367-1.848 3.6 0 4.266 2.368 4.266 5.451v6.327zM5.337 8.433c-1.144 0-2.07-.928-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.143 0 2.07.926 2.07 2.07 0 1.142-.927 2.07-2.07 2.07zm1.777 12.019h-3.554v-11.5h3.554v11.5zM22.225 0h-20.451c-.976 0-1.774.798-1.774 1.774v20.451c0 .976.798 1.774 1.774 1.774h20.451c.976 0 1.774-.798 1.774-1.774v-20.451c0-.976-.798-1.774-1.774-1.774z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://x.com/infinoid_tech',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.16-10.141-5.144-.423.722-.666 1.562-.666 2.475 0 1.708.87 3.213 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.001-7.496 14.001-13.986 0-.21 0-.423-.015-.634.961-.695 1.8-1.562 2.46-2.549l-.047-.02z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-black to-purple-950/80 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-r from-blue-500 via-purple-400 to-purple-900 animate-border-shine" />
      </div>
      <div className="max-w-7xl mx-auto px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 lg:pr-8">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Infinoid Technologies"
                className="h-12 w-12"
                aria-hidden="true"
              />
              <div className="leading-tight">
                <p className="text-xl font-bold tracking-tight text-blue-200">Infinoid</p>
                <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Technologies
                </p>

              </div>
            </div>
            <p className="text-gray-300 text-sm">Where intelligence meets infinity</p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-300"
                  aria-label={`Follow us on ${link.name}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mt-4 lg:mt-0">
            <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="mt-4 lg:mt-0">
            <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-4 lg:mt-0">
            <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
              Contact
            </h3>
            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <p className="leading-relaxed">
                C101, Exotica East Square,<br />
                Ghaziabad - 201014
              </p>
              <p className="mt-3">
                <a
                  href="tel:+919871973348"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 9871973348
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="mailto:info@infinoid.com"
                  className="hover:text-white transition-colors duration-300 break-all"
                >
                  info@infinoid.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Infinoid Technologies. All rights reserved.
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes border-shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-border-shine {
          animation: border-shine 2s infinite linear;
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.8) 50%,
            transparent 100%
          );
        }
      `}</style>
    </footer>
  );
};

export default Footer;