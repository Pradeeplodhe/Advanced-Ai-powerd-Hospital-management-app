import React from "react";
import { motion } from "framer-motion";
import SimpleNotification from "../Notification/SimpleNotification";
import {
  FaHospitalAlt,
  FaUserMd,
  FaAmbulance,
  FaHeartbeat,
  FaStethoscope,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
    
     <SimpleNotification message="hell"/>
    
   
     
    <div className="font-sans text-gray-800 bg-white">
      {/* NAVBAR */}
      
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-2xl">
            <FaHospitalAlt /> HealthConnect
          </div>
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#agents" className="hover:text-blue-600">Agents</a></li>
            <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition hidden md:block">
            Login / Register
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Empowering Healthcare Through Technology
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mb-8"
        >
          Book appointments, connect with agents, and access trusted hospitals — all from one modern platform built for you.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Explore Services
        </motion.button>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-10">Our Core Services</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {[
              { icon: <FaUserMd />, title: "Expert Doctors", desc: "Consult top specialists instantly." },
              { icon: <FaAmbulance />, title: "24/7 Ambulance", desc: "Emergency care on the go." },
              { icon: <FaHeartbeat />, title: "Health Monitoring", desc: "Track your vitals anytime." },
              { icon: <FaStethoscope />, title: "Instant Booking", desc: "Book appointments with ease." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-4xl text-blue-500 mb-4 mx-auto">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENTS SECTION */}
      <section id="agents" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-10">Meet Our Hospital Agents</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-xl transition"
              >
                <img
                  src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`}
                  alt="Agent"
                  className="rounded-full w-32 h-32 mx-auto mb-4 object-cover border-4 border-blue-500"
                />
                <h3 className="text-xl font-semibold text-blue-700 mb-1">
                  Agent {i === 1 ? "Rahul Verma" : i === 2 ? "Sneha Joshi" : "Amit Mehta"}
                </h3>
                <p className="text-gray-600 mb-2">Senior Hospital Coordinator</p>
                <p className="text-gray-500 text-sm">
                  Handles patient onboarding, reports, and doctor scheduling.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-10">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Riya Sharma",
                text: "I was able to connect with a hospital agent instantly — the service is top-notch!",
              },
              {
                name: "Aman Gupta",
                text: "The booking experience is seamless and super fast. Excellent support!",
              },
              {
                name: "Priya Mehta",
                text: "Loved the modern interface and easy access to hospitals and doctors.",
              },
            ].map((t, i) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={i}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <p className="text-gray-600 mb-4 italic">“{t.text}”</p>
                <h4 className="font-semibold text-blue-600">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Need help or want to join as a hospital agent? Reach out and we’ll respond quickly.
            </p>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-2"><FaPhoneAlt /> +91 98765 43210</p>
              <p className="flex items-center gap-2"><FaEnvelope /> support@healthconnect.com</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> Mumbai, India</p>
            </div>
          </div>

          <form className="bg-gray-50 p-8 rounded-2xl shadow-md w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Full Name" className="border p-3 rounded-lg w-full" />
              <input type="email" placeholder="Email" className="border p-3 rounded-lg w-full" />
            </div>
            <textarea placeholder="Message" className="border p-3 rounded-lg w-full h-32 mb-4" />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 HealthConnect. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a key={i} href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
 </>)
}
