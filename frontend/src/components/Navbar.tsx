import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Settings, LogOut, User } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  // Mock auth state for now
  const isAuthenticated = false;

  return (
    <nav className="glassmorphism sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold tracking-tight">
        <span className="text-white">Machi</span>
        <span className="premium-gradient">Link</span>
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/machines" className="text-steelGrey hover:text-accent transition-colors">
          Browse Machines
        </Link>
        <Link to="/companies" className="text-steelGrey hover:text-accent transition-colors">
          Companies
        </Link>
        
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="text-steelGrey hover:text-accent transition-colors">
              Dashboard
            </Link>
            <button className="flex items-center gap-2 text-steelGrey hover:text-red-400 transition-colors">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-steelGrey hover:text-white transition-colors">
              Login
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded hover:bg-accent/20 transition-all hover-lift"
            >
              List Your Machine
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
