import React, { useState } from "react";

// Sample Patients Data
const samplePatients = [
  { id: 1, name: "Amit Kumar", age: 34, bp: "120/80", sugar: 98 },
  { id: 2, name: "Priya Singh", age: 29, bp: "110/70", sugar: 92 },
];

export default function PatientManagement() {
  const [patients, setPatients] = useState(samplePatients);
  const [form, setForm] = useState({ name: "", age: "", bp: "", sugar: "" });
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    setPatients([...patients, { ...form, id: patients.length + 1 }]);
    setForm({ name: "", age: "", bp: "", sugar: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">🏥 Patient Management</h1>

      {/* Registration Form */}
      <div className="bg-white shadow-2xl rounded-3xl p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Add New Patient</h2>
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input required placeholder="Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"/>
          <input required type="number" placeholder="Age" value={form.age} onChange={(e)=>setForm({...form,age:e.target.value})} className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"/>
          <input required placeholder="BP" value={form.bp} onChange={(e)=>setForm({...form,bp:e.target.value})} className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"/>
          <input required placeholder="Sugar" value={form.sugar} onChange={(e)=>setForm({...form,sugar:e.target.value})} className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"/>
          <button className="col-span-1 md:col-span-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 mt-2">Add Patient</button>
        </form>
      </div>

      {/* Patient Records Table */}
      <div className="bg-white shadow-2xl rounded-3xl p-6 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">Patient Records</h2>
        <table className="w-full text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">BP</th>
              <th className="p-3">Sugar</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(p=>(
              <tr key={p.id} className="border-b hover:bg-blue-50">
                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.age}</td>
                <td className="p-3">{p.bp}</td>
                <td className="p-3">{p.sugar}</td>
                <td className="p-3">
                  <button onClick={()=>setSelectedPatient(p)} className="px-3 py-1 bg-green-600 text-white rounded-xl hover:bg-green-700">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Patient Detail */}
      {selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-96 relative">
            <h2 className="text-2xl font-bold mb-4">{selectedPatient.name} - Details</h2>
            <p><strong>Age:</strong> {selectedPatient.age}</p>
            <p><strong>BP:</strong> {selectedPatient.bp}</p>
            <p><strong>Sugar:</strong> {selectedPatient.sugar}</p>
            <button onClick={()=>setSelectedPatient(null)} className="mt-4 px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
