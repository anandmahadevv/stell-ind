import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login API call
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="flex-grow flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glassmorphism w-full max-w-md p-8 rounded-2xl border border-white/10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-steelGrey">Sign in to your MachiLink account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-lightGrey mb-1">Company ID / Username</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent text-white transition-colors"
              placeholder="e.g. MLK-842715"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-lightGrey mb-1">Password</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent text-white transition-colors"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-steelGrey">
              <input type="checkbox" className="mr-2 rounded border-white/20 bg-transparent text-accent focus:ring-accent" />
              Remember me
            </label>
            <a href="#" className="text-accent hover:underline">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-accent text-darkBlue font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 hover-lift"
          >
            {loading ? 'Authenticating...' : <><LogIn size={18} /> Sign In</>}
          </button>
        </form>

        <p className="text-center mt-6 text-steelGrey text-sm">
          Don't have an account? <Link to="/signup" className="text-accent hover:underline">Register your company</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
