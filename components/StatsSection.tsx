import React, { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
];

const Counter = ({ from, to, suffix = "" }: { from: number; to: number; suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          if (node) node.textContent = value.toFixed(0) + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [from, to, isInView, suffix]);

  return <span ref={nodeRef} />;
};

export const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 opacity-50 -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Designed for Every <br /> Destination
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
                {avatars.map((src, i) => (
                    <img 
                        key={i} 
                        src={src} 
                        alt="User" 
                        className="w-12 h-12 rounded-full border-2 border-white object-cover"
                        loading="lazy" 
                    />
                ))}
            </div>
            <span className="text-slate-900 font-bold text-2xl flex items-center">
               <Counter from={0} to={86} suffix=" M+" />
            </span>
            <span className="text-slate-400 text-sm">Global Users</span>
          </div>

          <p className="text-slate-500 leading-relaxed max-w-md">
            Luminex combines intelligent engineering, elegant design, and effortless performance to make every drive — from city streets to open highways — a journey of comfort.
          </p>

          <button className="group flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all shadow-lg shadow-blue-500/30">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
        >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-[40px] transform rotate-2 -z-10"></div>
            <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop" 
                alt="Concept Car" 
                className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
                loading="lazy" 
            />
             {/* Floating Badge */}
             <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 max-w-[180px]"
             >
                 <div className="flex items-center gap-2 mb-1">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="text-xs font-bold text-slate-800">Eco-Friendly</span>
                 </div>
                 <p className="text-[10px] text-slate-500">Zero emissions, 100% sustainable materials.</p>
             </motion.div>
        </motion.div>

      </div>
    </section>
  );
};