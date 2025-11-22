import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => scrollToSection('home')}
          className={`text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
        >
          {/* Simple SVG Logo Icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
             <circle cx="7" cy="17" r="2" />
             <path d="M9 17h6" />
             <circle cx="17" cy="17" r="2" />
          </svg>
          Luminex
        </div>

        {/* Desktop Nav */}
        <div className={`hidden md:flex space-x-8 items-center ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
          <button onClick={() => scrollToSection('consultation')} className="hover:text-cyan-400 transition-colors">Consultation</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">About Us</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">Services</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contact</button>
          <button 
            onClick={() => scrollToSection('consultation')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
             isScrolled 
             ? 'bg-slate-900 text-white hover:bg-slate-800' 
             : 'bg-white text-slate-900 hover:bg-cyan-50'
          }`}>
            Start with us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl"
        >
          <div className="flex flex-col p-6 space-y-4 text-slate-600">
            <button onClick={() => scrollToSection('consultation')} className="text-left hover:text-blue-600">Consultation</button>
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-600">About Us</button>
            <button onClick={() => scrollToSection('services')} className="text-left hover:text-blue-600">Services</button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-600">Contact</button>
            <button onClick={() => scrollToSection('consultation')} className="w-full bg-slate-900 text-white py-3 rounded-lg">
              Start with us
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};