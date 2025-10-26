import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaEdit,
  FaHeartbeat,
  FaCalendarAlt,
  FaHistory,
  FaNotesMedical,
  FaFileDownload,
  FaLock,
} from "react-icons/fa";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "appointments", label: "Appointments" },
    { key: "reports", label: "Medical Reports" },
    { key: "settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans pt-24 pb-16">
      {/* HEADER CARD */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-10 flex flex-col md:flex-row gap-10 items-center"
      >
        {/* Profile Image */}
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="User"
            className="w-44 h-44 rounded-full object-cover border-4 border-blue-500"
          />
          <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
            <FaEdit />
          </button>
        </div>

        {/* User Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-blue-700">Sneha Patel</h1>
          <p className="text-gray-500 mb-4">Registered Patient</p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 mb-6 text-gray-700">
            <p className="flex items-center gap-2"><FaPhoneAlt /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><FaEnvelope /> sneha@example.com</p>
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> Pune, India</p>
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </motion.div>

      {/* NAV TABS */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="flex justify-center md:justify-start gap-4 border-b border-gray-200 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 font-medium rounded-t-lg transition ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="max-w-6xl mx-auto mt-8 bg-white p-8 rounded-2xl shadow-lg">
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold text-blue-700 mb-8">Overview</h2>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-10">
              {[
                { icon: <FaHeartbeat />, title: "Total Appointments", value: "12" },
                { icon: <FaCalendarAlt />, title: "Upcoming Visits", value: "3" },
                { icon: <FaHistory />, title: "Past Records", value: "8" },
                { icon: <FaNotesMedical />, title: "Reports Generated", value: "5" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-blue-50 hover:bg-blue-100 transition p-6 rounded-2xl shadow-sm text-center"
                >
                  <div className="text-4xl text-blue-600 mb-3 mx-auto">{item.icon}</div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-2xl font-bold text-blue-700 mt-1">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Health Summary */}
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Health Summary</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Blood Pressure: <b>120/80 mmHg</b></li>
                  <li>• Heart Rate: <b>76 bpm</b></li>
                  <li>• BMI: <b>22.1 (Normal)</b></li>
                  <li>• Allergies: <b>None</b></li>
                  <li>• Last Checkup: <b>22 Oct 2025</b></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Preferred Hospital</h3>
                <p className="text-gray-600 mb-4">
                  Sunshine MultiSpeciality Hospital, Pune.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1588776814546-312fb6c5d9e8?auto=format&fit=crop&w=700&q=80"
                  alt="Hospital"
                  className="rounded-xl shadow-md"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* APPOINTMENTS TAB */}
        {activeTab === "appointments" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Your Appointments</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-50 text-blue-700 text-left">
                  <th className="p-3">Date</th>
                  <th className="p-3">Doctor</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: "22 Oct 2025", doctor: "Dr. Arjun Mehta", dept: "Cardiology", status: "Completed" },
                  { date: "5 Nov 2025", doctor: "Dr. Neha Gupta", dept: "Dermatology", status: "Upcoming" },
                  { date: "18 Nov 2025", doctor: "Dr. Ravi Kumar", dept: "Neurology", status: "Scheduled" },
                ].map((a, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-gray-50 transition text-gray-700"
                  >
                    <td className="p-3">{a.date}</td>
                    <td className="p-3">{a.doctor}</td>
                    <td className="p-3">{a.dept}</td>
                    <td
                      className={`p-3 font-semibold ${
                        a.status === "Completed"
                          ? "text-green-600"
                          : a.status === "Upcoming"
                          ? "text-yellow-600"
                          : "text-blue-600"
                      }`}
                    >
                      {a.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {/* REPORTS TAB */}
        {activeTab === "reports" && (
          <motion.div initial={{ opacity: 2}} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Medical Reports</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Blood Test", date: "18 Oct 2025" },
                { title: "X-Ray", date: "14 Sep 2025" },
                { title: "ECG Report", date: "01 Sep 2025" },
                { title: "MRI Brain", date: "10 Aug 2025" },
                { title: "Cholesterol Test", date: "03 Aug 2025" },
                { title: "Diabetes Report", date: "25 Jul 2025" },
              ].map((r, i) => (
                <div
                  key={i}
                  className="p-5 border rounded-2xl shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-lg text-blue-700 mb-1">{r.title}</h3>
                  <p className="text-gray-500 mb-3">Date: {r.date}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 mx-auto hover:bg-blue-700 transition">
                    <FaFileDownload /> Download
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === "settings" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Account Settings</h2>
            <div className="max-w-md space-y-4">
              <input type="text" placeholder="Full Name" className="border p-3 rounded-lg w-full" />
              <input type="email" placeholder="Email" className="border p-3 rounded-lg w-full" />
              <input type="text" placeholder="Phone" className="border p-3 rounded-lg w-full" />
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-600 mb-2 flex items-center gap-2">
                  <FaLock /> Change Password
                </p>
                <input type="password" placeholder="Current Password" className="border p-3 rounded-lg w-full mb-2" />
                <input type="password" placeholder="New Password" className="border p-3 rounded-lg w-full mb-2" />
                <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                  Update Password
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
