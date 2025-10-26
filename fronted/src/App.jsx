import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ must import
import Navbar from "./Nav/Navbar";
import Footer from "./Pages/Footer";

import Home from "./Pages/Home";
import PatientHealthForm from "./Pages/PatientHealthForm";
import Appointments from "./Pages/Appointments";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import UserProfile from "./Pages/UserProfile";
import PatientManagement from "./Pages/PatientManagement";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PatientHealthForm" element={<PatientHealthForm />} />
          <Route path="/Appointments" element={<Appointments />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/PatientManagement" element={<PatientManagement />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
