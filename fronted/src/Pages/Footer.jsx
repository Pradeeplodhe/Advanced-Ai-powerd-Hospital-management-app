// Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Our Hospital</h2>
          <p>
            We provide the best healthcare services with modern facilities and experienced doctors.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><FaPhone className="mr-2"/> +91 9876543210</li>
            <li className="flex items-center"><FaEnvelope className="mr-2"/> contact@hospital.com</li>
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2"/> 123 Main Street, City</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-300"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-300">
        &copy; {new Date().getFullYear(),Date().trim()} Our Hospital. All rights reserved.
      </div>
    </footer>
  );
}
