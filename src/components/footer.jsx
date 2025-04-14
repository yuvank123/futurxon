import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "../../public/images/logo.svg";

const Footer = () => {
  return (
    <footer className="text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo & Company Info */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3">
            <img
              alt="logo"
              className="w-20 md:w-40 transition-all duration-300 hover:animate-pulse"
              src={Logo}
            />
          </div>
          <p className="text-gray-400">Innovating the Future</p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.linkedin.com/company/infinoid-technologies/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl hover:text-blue-500 transition-transform transform hover:scale-110" />
            </a>
            <a
              href="https://x.com/infinoid_tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl hover:text-blue-400 transition-transform transform hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="/services/web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Web Development
              </a>
            </li>
            <li>
              <a
                href="/services/mobile-apps"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Mobile Apps
              </a>
            </li>
            <li>
              <a
                href="/services/ui-ux"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                UI/UX Design
              </a>
            </li>
            <li>
              <a
                href="/services/cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Cloud Services
              </a>
            </li>
            <li>
              <a
                href="/services/ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                AI Solutions
              </a>
            </li>
            <li>
              <a
                href="/services/blockchain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Blockchain
              </a>
            </li>
            <li>
              <a
                href="/services/devops"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                DevOps
              </a>
            </li>
            <li>
              <a
                href="/services/arvr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                AR/VR/3D Modelling
              </a>
            </li>
            <li>
              <a
                href="/services/cybersecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Cybersecurity
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="/about-company"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/career"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contacts</h3>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-xl text-purple-400" />
            <p className="text-sm">
              Unit No. C-101, Exotica East Square,
              Ghaziabad - 201014
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-xl text-purple-400" />
            <a
              href="mailto:sales@infinoid.com"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              sales@infinoid.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-xl text-purple-400" />
            <a
              href="mailto:infos@infinoid.com"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              info@infinoid.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-xl text-purple-400" />
            <div className="text-sm">
              <p>(+91) 9871973348</p>
              <p>(+91) 9227088395</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
        <p className="hover:tracking-wide transition-all duration-500">
          Copyright © 2025 Infinoid Technologies. All Rights Reserved.
        </p>
      </div>

      <style jsx>{`
        @keyframes border-shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-border-shine {
          animation: border-shine 2s infinite linear;
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.8) 50%,
            transparent 100%
          );
        }
      `}</style>
    </footer>
  );
};

export default Footer;
