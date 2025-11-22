import React from 'react';
import { motion } from 'framer-motion';

const PrecisionCare: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <h2 className="text-4xl font-bold text-slate-900 max-w-md">Precision Care for You and Your Drive.</h2>
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                {["Exclusivity and prestige +", "Advanced Safety", "High Performance +"].map((tag, idx) => (
                    <span key={idx} className="bg-white text-slate-600 px-4 py-2 rounded-full text-sm shadow-sm border border-slate-200">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden h-[400px] md:h-[500px] shadow-2xl group"
        >
             <img 
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" 
                alt="Rear View" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
            />
            <div className="absolute bottom-8 right-8 bg-white px-6 py-3 rounded-full shadow-lg">
                <p className="text-slate-900 font-medium">Crafted for elegance on wheels</p>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrecisionCare;
