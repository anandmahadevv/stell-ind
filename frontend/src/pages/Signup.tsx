import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building, MapPin, Upload, FileCheck, Phone } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        alert('Company registered successfully! Check your email for login credentials.');
        navigate('/login');
      }, 1500);
    }
  };

  return (
    <div className="flex-grow py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Company Registration</h2>
          <p className="text-steelGrey">Join MachiLink to rent out machines or book manufacturing capacity.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/10 -z-10"></div>
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-accent transition-all duration-300 -z-10`} style={{ width: `${(step - 1) * 50}%` }}></div>
          
          {[1, 2, 3].map((num) => (
            <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= num ? 'bg-accent text-darkBlue' : 'bg-darkBlue border-2 border-white/20 text-steelGrey'}`}>
              {num}
            </div>
          ))}
        </div>

        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glassmorphism p-8 md:p-10 rounded-2xl border border-white/10"
        >
          <form onSubmit={handleSubmit}>
            
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                  <Building className="text-accent" />
                  <h3 className="text-xl font-semibold text-white">Company Details</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-lightGrey mb-1">Company Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white" />
                  </div>
                  <div>
                    <label className="block text-sm text-lightGrey mb-1">Company Type</label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white appearance-none">
                      <option>Private Limited</option>
                      <option>Public Limited</option>
                      <option>Partnership</option>
                      <option>Proprietorship</option>
                      <option>Startup / SME</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-lightGrey mb-1">GST Number</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white uppercase" placeholder="29XXXXX0000X1Z5" />
                  </div>
                  <div>
                    <label className="block text-sm text-lightGrey mb-1">Year Established</label>
                    <input type="number" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white" placeholder="2010" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                  <MapPin className="text-accent" />
                  <h3 className="text-xl font-semibold text-white">Location & Contact</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm text-lightGrey mb-1">Factory Address</label>
                    <textarea rows={2} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"></textarea>
                  </div>
                  <div>
                    <label className="block text-sm text-lightGrey mb-1">Area / Industrial Estate</label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white appearance-none">
                      <option>Peenya Industrial Area</option>
                      <option>Bommasandra</option>
                      <option>Electronic City</option>
                      <option>Whitefield</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-lightGrey mb-1">Contact Person Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white" />
                  </div>
                  <div>
                    <label className="block text-sm text-lightGrey mb-1">Mobile Number</label>
                    <input type="tel" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white" />
                  </div>
                  <div>
                    <label className="block text-sm text-lightGrey mb-1">Email Address</label>
                    <input type="email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                  <FileCheck className="text-accent" />
                  <h3 className="text-xl font-semibold text-white">Verification Documents</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-white/20 p-6 rounded-lg text-center hover:bg-white/5 transition-colors cursor-pointer">
                    <Upload className="mx-auto mb-3 text-steelGrey" size={32} />
                    <p className="text-white font-medium">Upload Company Logo</p>
                    <p className="text-sm text-steelGrey mt-1">PNG, JPG up to 5MB</p>
                  </div>
                  
                  <div className="border-2 border-dashed border-white/20 p-6 rounded-lg text-center hover:bg-white/5 transition-colors cursor-pointer">
                    <Upload className="mx-auto mb-3 text-steelGrey" size={32} />
                    <p className="text-white font-medium">Upload Verification Documents</p>
                    <p className="text-sm text-steelGrey mt-1">GST Certificate, MSME, Factory License (PDF)</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-10">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">
                  Back
                </button>
              ) : (
                <div></div> // Empty div for flex alignment
              )}
              
              <button type="submit" disabled={loading} className="px-8 py-3 bg-accent text-darkBlue font-bold rounded-lg hover:bg-white transition-colors hover-lift flex items-center gap-2">
                {step < 3 ? 'Next Step' : loading ? 'Submitting...' : 'Complete Registration'}
              </button>
            </div>
            
          </form>
        </motion.div>
        
        <p className="text-center mt-8 text-steelGrey text-sm">
          Already registered? <Link to="/login" className="text-accent hover:underline">Sign in to your account</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
