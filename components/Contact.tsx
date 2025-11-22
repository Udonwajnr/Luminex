import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                <p className="text-slate-500 mb-12 leading-relaxed">
                    Interested in a private viewing or have questions about ownership? Our concierge team is ready to assist you.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Phone</h3>
                            <p className="text-slate-500">+1 (800) 123-4567</p>
                            <p className="text-xs text-slate-400 mt-1">Mon-Fri, 9am - 6pm PST</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                         <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Email</h3>
                            <p className="text-slate-500">concierge@luminex.auto</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                         <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Headquarters</h3>
                            <p className="text-slate-500">
                                8000 Innovation Drive<br/>
                                Silicon Valley, CA 94025
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100"
            >
                {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                            <Send size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent</h3>
                        <p className="text-slate-500">Thank you for reaching out. A dedicated advisor will contact you shortly.</p>
                        <button onClick={() => setSubmitted(false)} className="mt-6 text-blue-600 font-medium hover:underline">Send another message</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                            <input 
                                type="text" 
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                                placeholder="John Doe"
                                value={formState.name}
                                onChange={e => setFormState({...formState, name: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                            <input 
                                type="email" 
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                                placeholder="john@example.com"
                                value={formState.email}
                                onChange={e => setFormState({...formState, email: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                            <textarea 
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white resize-none"
                                placeholder="I'm interested in the Luminex Horizon..."
                                value={formState.message}
                                onChange={e => setFormState({...formState, message: e.target.value})}
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                        >
                            Send Message
                            <ArrowRight size={18} />
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
