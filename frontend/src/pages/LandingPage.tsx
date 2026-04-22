import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Users, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="flex-grow flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-grow flex items-center justify-center py-20 px-6">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-accent/10 blur-[120px]" />
          <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            The <span className="premium-gradient">Airbnb</span> for <br />
            Industrial Machines
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-steelGrey max-w-3xl mx-auto"
          >
            Monetize your idle manufacturing assets or access advanced machinery without the capital expenditure. 
            Join the premier capacity exchange platform for modern manufacturing.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link 
              to="/machines"
              className="px-8 py-4 bg-accent text-darkBlue font-semibold rounded hover:bg-white transition-colors flex items-center gap-2 w-full sm:w-auto justify-center hover-lift"
            >
              Find a Machine <ArrowRight size={20} />
            </Link>
            <Link 
              to="/signup"
              className="px-8 py-4 glassmorphism text-white font-semibold rounded hover:bg-white/10 transition-colors w-full sm:w-auto justify-center hover-lift"
            >
              List Your Machine
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-darkBlue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MachiLink?</h2>
            <p className="text-steelGrey max-w-2xl mx-auto">A secure, verified, and agreement-based booking system designed specifically for the industrial sector.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glassmorphism p-8 rounded-xl hover-lift border border-white/5">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 text-accent">
                <Factory size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Maximize Utilization</h3>
              <p className="text-steelGrey">
                Turn idle machine time into revenue. Set your own pricing and availability schedules with our intuitive calendar system.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glassmorphism p-8 rounded-xl hover-lift border border-white/5">
              <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                <Settings size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero CapEx Growth</h3>
              <p className="text-steelGrey">
                Startups and SMEs can access advanced CNCs, VMCs, and Industrial Robots without massive capital investments.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="glassmorphism p-8 rounded-xl hover-lift border border-white/5">
              <div className="w-14 h-14 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure Agreements</h3>
              <p className="text-steelGrey">
                Automated digital agreements with integrated liability, insurance, and confidentiality clauses to protect both parties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
