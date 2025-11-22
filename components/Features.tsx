import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  
  // Custom Animated Icons
  const CraftsmanshipIcon = () => (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-500 mb-4">
          <motion.path 
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
            initial={{ pathLength: 0, fill: "rgba(59, 130, 246, 0)" }}
            whileInView={{ pathLength: 1, fill: "rgba(59, 130, 246, 0.1)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M12 17.77v-15"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 15, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            strokeLinecap="round"
            className="stroke-blue-300"
          />
      </svg>
  );

  const EngineeringIcon = () => (
      <motion.svg 
        width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-500 mb-4"
        whileInView={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </motion.svg>
  );

  const OwnershipIcon = () => (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-500 mb-4">
          <motion.circle cx="12" cy="12" r="10" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} strokeOpacity="0.2" />
          <motion.path 
            d="M12 2l2 7h-4l2-7zM12 22l-2-7h4l-2 7zM2 12l7-2v4l-7-2zM22 12l-7 2v-4l7 2z"
            initial={{ opacity: 0, rotate: -45 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
          />
          <circle cx="12" cy="12" r="3" className="fill-blue-100" />
      </svg>
  );

  const features = [
      { 
          title: "Italian Craftsmanship", 
          desc: "Every car is meticulously hand-finished in Italy, reflecting timeless elegance and attention to every detail.",
          icon: <CraftsmanshipIcon />
      },
      { 
          title: "German Engineering", 
          desc: "Built with precision German engineering, delivering unparalleled performance, reliability, and driving dynamics.",
          icon: <EngineeringIcon />
      },
      { 
          title: "Exclusive Ownership Experience", 
          desc: "Each vehicle offers a sense of prestige and sophistication that only true luxury can provide.",
          icon: <OwnershipIcon />
      }
  ];

  return (
    <>
      {/* Dark Banner Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative h-[500px] bg-slate-900 shadow-2xl">
            <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80" 
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-16">
                <div className="flex justify-between items-start text-white">
                    <span className="text-2xl font-bold">Luminex</span>
                    <div className="text-right">
                        <p className="text-4xl font-bold">$1.2B</p>
                        <p className="text-xs uppercase tracking-widest text-white/60">Exclusive</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto">
                    {[
                        { val: "24k", label: "Total Tours" },
                        { val: "64k", label: "Social Likes" },
                        { val: "64k", label: "Social Likes" },
                        { val: "64k", label: "Social Likes" }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                            <p className="text-2xl font-light text-white">{stat.val}</p>
                            <p className="text-xs text-white/50">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Features Split */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-slate-900 mb-12">
                    Where Italian design meets <br/> precision and luxury
                </h2>
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <img 
                        src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80" 
                        alt="Italian Design" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="lg:w-1/2 space-y-12">
                {features.map((feature, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="group flex flex-col items-start"
                    >
                        {feature.icon}
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                        <p className="text-slate-500 leading-relaxed text-sm border-l-2 border-slate-100 pl-4 group-hover:border-blue-500 transition-colors">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
                
                <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all">
                    Book test drive
                </button>
            </div>
        </div>
      </section>
    </>
  );
};

export default Features;
