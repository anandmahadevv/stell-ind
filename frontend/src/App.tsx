import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-darkBlue text-lightGrey">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/machines" element={<div className="p-8">Browse Machines (Coming Soon)</div>} />
            <Route path="/companies" element={<div className="p-8">Companies Directory (Coming Soon)</div>} />
            <Route path="/dashboard" element={<div className="p-8">Dashboard (Coming Soon)</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
