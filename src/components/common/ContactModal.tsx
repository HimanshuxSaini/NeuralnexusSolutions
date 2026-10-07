import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    project: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto close after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', phone: '', project: '', message: '' });
        onClose();
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100/50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 rounded-full transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-10 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
            <div className="w-16 h-16 bg-[#0FA3B1]/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-[#0FA3B1]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
            <p className="text-slate-600 mb-6 max-w-xs mx-auto">
              Thank you for reaching out. One of our senior experts will contact you on WhatsApp shortly.
            </p>
          </div>
        ) : (
          <div className="flex flex-col h-full max-h-[85vh]">
            <div className="px-6 sm:px-8 py-6 bg-gradient-to-r from-[#0B1F3A] to-[#122A4F] text-white">
              <h2 className="text-2xl font-bold mb-1">Free Consultation</h2>
              <p className="text-slate-300 text-sm">Fill out the details below and we'll get back to you immediately.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 space-y-4 overflow-y-auto">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0FA3B1]/20 focus:border-[#0FA3B1] outline-none transition-all text-sm"
                  placeholder="Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">WhatsApp Number *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">+91</span>
                  <input 
                    required
                    type="tel" 
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0FA3B1]/20 focus:border-[#0FA3B1] outline-none transition-all text-sm"
                    placeholder="82990 32271"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company / Project Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0FA3B1]/20 focus:border-[#0FA3B1] outline-none transition-all text-sm"
                  placeholder="Your Startup Ltd."
                  value={formData.project}
                  onChange={(e) => setFormData({...formData, project: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Brief Requirement *</label>
                <textarea 
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0FA3B1]/20 focus:border-[#0FA3B1] outline-none transition-all text-sm resize-none"
                  placeholder="I need a custom ERP / WhatsApp Bot / AI integration..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 px-6 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-bold rounded-xl transition-all shadow-md shadow-[#0FA3B1]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Request</span>
                  </>
                )}
              </button>
              
              <div className="pt-3 flex justify-center text-xs text-slate-500 text-center font-medium">
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  Or chat with us directly on WhatsApp
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
