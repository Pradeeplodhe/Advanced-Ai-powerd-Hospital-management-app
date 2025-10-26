import React, { useState } from "react";

export default function PatientHealthForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    phone: "",
    bp: "",
    sugar: "",
    temperature: "",
    heartRate: "",
    oxygen: "",
    symptoms: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Health Info:", formData);
    alert("✅ Health info submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400 p-6">
      <div className="backdrop-blur-xl bg-white/60 shadow-2xl rounded-3xl p-10 w-full max-w-4xl border border-white/40">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-10 drop-shadow-sm">
          🏥 Patient Health Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Full Name */}
          <div className="col-span-1">
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter patient name"
              className="w-full p-3 rounded-xl border border-gray-300 bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 hover:shadow-md"
            />
          </div>

          {/* Age */}
          <div className="col-span-1">
            <label className="block text-gray-700 font-semibold mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              placeholder="Enter age"
              className="w-full p-3 rounded-xl border border-gray-300 bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 hover:shadow-md"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-gray-300 bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 hover:shadow-md"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              required
              className="w-full p-3 rounded-xl border border-gray-300 bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 hover:shadow-md"
            />
          </div>

          {/* BP */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Blood Pressure (mmHg)
            </label>
            <input
              type="text"
              name="bp"
              value={formData.bp}
              onChange={handleChange}
              placeholder="e.g. 120/80"
              className="w-full p-3 rounded-xl border border-gray-300 bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 hover:shadow-md"
            />
          </div>

          {/* Sugar */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Sugar Level (mg/dL)
            </label>
            <input
              type="number"
              name="sugar"
              value={formData.sugar}
              onChange={handleChange}
              placeholder="e.g. 95"
              className="w-full p-3 rounded-xl border border-gray-300 bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 hover:shadow-md"
            />
          </div>

          {/* Temperature */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Body Temperature (°C)
            </label>
            <input
              type="number"
              step="0.1"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              placeholder="e.g. 98.6"
              className="w-full p-3 rounded-xl border border-gray-300 bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 hover:shadow-md"
            />
          </div>

          {/* Heart Rate */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Heart Rate (bpm)
            </label>
            <input
              type="number"
              name="heartRate"
              value={formData.heartRate}
              onChange={handleChange}
              placeholder="e.g. 75"
              className="w-full p-3 rounded-xl border border-gray-300 bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 hover:shadow-md"
            />
          </div>

          {/* Oxygen */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Oxygen Level (SpO₂ %)
            </label>
            <input
              type="number"
              name="oxygen"
              value={formData.oxygen}
              onChange={handleChange}
              placeholder="e.g. 98"
              className="w-full p-3 rounded-xl border border-gray-300 bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 hover:shadow-md"
            />
          </div>

          {/* Symptoms */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Symptoms
            </label>
            <textarea
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              rows="3"
              placeholder="Describe patient symptoms..."
              className="w-full p-3 rounded-xl border border-gray-300 bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 hover:shadow-md"
            ></textarea>
          </div>

          {/* Remarks */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Doctor's Remarks
            </label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              rows="3"
              placeholder="Enter doctor's notes or observations"
              className="w-full p-3 rounded-xl border border-gray-300 bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 hover:shadow-md"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-blue-300 transition-all duration-300"
            >
              Submit Health Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
