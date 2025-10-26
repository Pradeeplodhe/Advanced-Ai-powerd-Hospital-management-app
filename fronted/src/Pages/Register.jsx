import React, { useState } from "react";
import { FaHospitalSymbol, FaEnvelope, FaPhone, FaLock, FaUser } from "react-icons/fa";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phone, password, confirmPassword } = formData;
    if (!fullName || !email || !phone || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    alert("Registration successful (dummy)");
    setFormData({ fullName: "", email: "", phone: "", password: "", confirmPassword: "" });
  };

  // ✅ List of real hospital images (Unsplash)
  const hospitalImages = [
    "https://images.unsplash.com/photo-1580281657529-0f6e93c76d1e?auto=format&fit=crop&w=1470&q=80", // Corridor
    "https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=1-EC4Mxf--5u4ItDIzrIOrduXlbKRnbx9xWWtiifrDo=",
    "https://images.unsplash.com/photo-1588776814546-36a1c3b222e2?auto=format&fit=crop&w=1470&q=80", // Reception
    "https://images.unsplash.com/photo-1588776814567-0a2b3cdef123?auto=format&fit=crop&w=1470&q=80", // Waiting area
  ];

  // Pick first image for now (you can randomly select later)
  const backgroundImage = hospitalImages[1];

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-700/40 to-blue-900/50"></div>

      {/* Registration card */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 backdrop-blur-md">
        {/* Hospital icon */}
        <div className="flex justify-center mb-4">
          <FaHospitalSymbol className="text-blue-600 text-5xl" />
        </div>

        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-2">
          UGHR Hospital
        </h1>
        <p className="text-center text-gray-500 mb-8">Create your hospital account</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-10 pr-16 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-blue-500 font-medium"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
