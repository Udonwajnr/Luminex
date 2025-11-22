import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Cristiano Ronaldo",
        role: "Footballer, Portugal",
        quote: "A masterpiece in motion.",
        text: "Every drive feels effortless. Luminex has redefined what it means to combine power with sophistication. The attention to detail is simply unmatched in the automotive world.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        rating: 5
    },
    {
        id: 2,
        name: "Mark Zuckerberg",
        role: "CEO of Meta",
        quote: "The future is here.",
        text: "I've driven many electric vehicles, but the integration of technology in the Luminex Horizon is on another level. It truly feels like an extension of my digital life.",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
        rating: 5
    },
    {
        id: 3,
        name: "Keanu Reeves",
        role: "Actor",
        quote: "Pure adrenaline.",
        text: "The Velocity model isn't just a car; it's an experience. The way it handles corners while maintaining absolute silence is something you have to feel to believe.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
        rating: 5
    },
    {
        id: 4,
        name: "Serena Williams",
        role: "Athlete",
        quote: "Elegant and powerful.",
        text: "Finally, a luxury car that matches my pace. The comfort is extraordinary, perfect for recovery after a long match or training session.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        rating: 5
    }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center relative z-10">
        <div className="lg:w-1/2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Hear from our proud Luminex owners
            </h2>
            <p className="text-slate-500 mb-8 max-w-md">
                Join an exclusive community of visionaries who refuse to compromise on luxury, performance, or sustainability.
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all">
                Join the Club
            </button>

            <div className="mt-12 flex gap-4">
               {testimonials.map((_, idx) => (
                   <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-slate-900 w-8' : 'bg-slate-200'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                   />
               ))}
            </div>
        </div>

        <div className="lg:w-1/2 w-full relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-20">
                <button onClick={prevTestimonial} className="bg-white text-slate-900 p-3 rounded-full shadow-lg hover:bg-slate-50 transition-colors border border-slate-100">
                    <ChevronLeft size={20} />
                </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-20">
                <button onClick={nextTestimonial} className="bg-white text-slate-900 p-3 rounded-full shadow-lg hover:bg-slate-50 transition-colors border border-slate-100">
                    <ChevronRight size={20} />
                </button>
            </div>

            <div className="relative min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 relative"
                    >
                        <div className="absolute -top-6 -left-6 bg-blue-600 text-white p-4 rounded-2xl shadow-lg shadow-blue-600/30">
                            <Quote size={24} />
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-20 h-20 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 border-4 border-slate-50 shadow-inner">
                                <img 
                                    src={testimonials[currentIndex].image} 
                                    alt={testimonials[currentIndex].name} 
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <h3 className="text-2xl font-serif italic text-slate-800 mb-4">
                                    "{testimonials[currentIndex].quote}"
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    {testimonials[currentIndex].text}
                                </p>
                                <div className="pt-6 border-t border-slate-100">
                                    <p className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].name}</p>
                                    <p className="text-xs text-blue-500 font-medium uppercase tracking-wider">{testimonials[currentIndex].role}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
