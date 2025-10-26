import React, { useState } from "react";
import { FaHospitalSymbol } from "react-icons/fa"; // Hospital icon
import SimpleNotification from "../Notification/SimpleNotification";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    alert("Login successful (dummy login)");
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
      
      
    <div
    
    
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://www.hospitalaleman.org.ar/wp-content/uploads/2022/11/cierre-redes.jpg')",
      }}
    >
      <SimpleNotification message="hell"/>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
     {/* Login card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 backdrop-blur-md">
        <div className="flex justify-center mb-4">
          <FaHospitalSymbol className="text-blue-600 text-5xl" />
        </div>

 
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-2">
          UGHR Hospital
        </h1>
        <p className="text-center text-gray-500 mb-8">Secure login to your account</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
          </div>
       
 
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-2">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-blue-500 font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Forgot password?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Reset here
          </a>
        </p>
      </div>
    </div>
  );
}
