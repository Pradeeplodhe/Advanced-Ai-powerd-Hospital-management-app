import React, { useState } from "react";

const sampleDoctors = ["Dr. Ramesh Patel", "Dr. Sneha Gupta"];
const sampleAppointments = [
  { id: 1, patient: "Amit Kumar", doctor: "Dr. Ramesh Patel", date: "2025-10-28", time: "10:00 AM" }
];

export default function Appointments() {
  const [appointments, setAppointments] = useState(sampleAppointments);
  const [form, setForm] = useState({ patient: "", doctor: "", date: "", time: "" });

  const handleAdd = (e) => {
    e.preventDefault();
    setAppointments([...appointments, { ...form, id: appointments.length + 1 }]);
    setForm({ patient: "", doctor: "", date: "", time: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <h1 className="text-4xl font-extrabold text-green-800 mb-10 text-center drop-shadow-md">
        📅 Appointments
      </h1>

      {/* Booking Form */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Book Appointment</h2>
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <input
            required
            placeholder="Patient Name"
            value={form.patient}
            onChange={(e) => setForm({ ...form, patient: e.target.value })}
            className="p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm"
          />
          <select
            required
            value={form.doctor}
            onChange={(e) => setForm({ ...form, doctor: e.target.value })}
            className="p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm"
          >
            <option value="">Select Doctor</option>
            {sampleDoctors.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <input
            required
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm"
          />
          <input
            required
            type="time"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm"
          />
          <button className="col-span-1 md:col-span-4 py-4 bg-green-600 text-white font-semibold rounded-2xl hover:bg-green-700 transition-all shadow-lg">
            Book Appointment
          </button>
        </form>
      </div>

      {/* Appointments Table */}
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-6xl mx-auto overflow-x-auto">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Upcoming Appointments</h2>
        <table className="w-full text-left border-collapse">
          <thead className="bg-green-600 text-white rounded-2xl">
            <tr>
              <th className="p-4">Patient</th>
              <th className="p-4">Doctor</th>
              <th className="p-4">Date</th>
              <th className="p-4">Time</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id} className="border-b hover:bg-green-50 transition-colors cursor-pointer">
                <td className="p-4 font-medium">{a.patient}</td>
                <td className="p-4">{a.doctor}</td>
                <td className="p-4">{a.date}</td>
                <td className="p-4">{a.time}</td>
                <td className="p-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md transition-all mr-2">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 shadow-md transition-all">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
