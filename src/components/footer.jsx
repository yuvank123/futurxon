import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Global Presence Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Global Presence</h3>
          <div className="space-y-2 text-sm">
            <div>
              <p className="font-medium">New Jersey</p>
              <p>33 South Wood Ave, Suite 600</p>
              <p>Iselin NJ 06830</p>
            </div>
            <div>
              <p className="font-medium">California</p>
              <p>535 Mission St. 14th floor</p>
              <p>San Francisco, CA 94105</p>
            </div>
            <div>
              <p className="font-medium">Massachusetts</p>
              <p>501 Boylston St</p>
              <p>Boston, MA 02116</p>
            </div>
          </div>
        </div>

        {/* Contact & Ratings Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="text-sm space-y-1">
              <a href="tel:+13474414161" className="block hover:text-blue-400 transition-colors">
                +1 347 441 4161
              </a>
              <a href="mailto:solutions@bacancy.com" className="block hover:text-blue-400 transition-colors">
                solutions@bacancy.com
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Ratings</h3>
            <div className="text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span>Google</span>
                <span>4.6</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Clutch</span>
                <span>4.8</span>
              </div>
              <div className="flex items-center gap-2">
                <span>GoodFirms</span>
                <span>4.8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              'Brochure', 'Quality Assurance', 'Resources', 'Tutorials',
              'Customer Reviews', 'Privacy Policy', 'FAQs', 'Qanda',
              'Contact Us', 'Sitemap', 'Employee'
            ].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
        <p className="mb-2">
          Copyright © 2025 Bacancy. All Rights Reserved. An ISO 27001:2013 Certified Company
        </p>
        <a 
          href="https://www.bacancy.es/analogy.com/qcudw/" 
          className="text-gray-400 hover:text-blue-400 transition-colors"
        >
          https://www.bacancy.es/analogy.com/qcudw/
        </a>
      </div>
    </footer>
  )
}

export default Footer