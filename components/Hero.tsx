import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Star, Zap, Facebook, Twitter, Share2, X, Linkedin, Link as LinkIcon, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax Effects
  // Video moves slowly to create depth
  const yVideo = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityVideo = useTransform(scrollY, [0, 800], [1, 0.4]);

  // Text moves slightly faster
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  // Car moves upwards slightly to creating a 3D feel against the background
  const yCar = useTransform(scrollY, [0, 800], [0, -50]); 
  const scaleCar = useTransform(scrollY, [0, 800], [1, 1.05]);

  const shareUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
  const shareText = encodeURIComponent("Check out Luminex - The Future of Luxury Mobility");

  const handleShare = (platform: string) => {
      let url = '';
      if (platform === 'twitter') {
          url = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;
      } else if (platform === 'facebook') {
          url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
      } else if (platform === 'linkedin') {
          url = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=Luminex`;
      }
      
      if (url) {
        window.open(url, '_blank', 'width=600,height=400');
        setIsShareOpen(false);
      }
  };

  const copyLink = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
        setIsShareOpen(false);
      }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-slate-900 flex flex-col justify-between">
      {/* Background Video Layer */}
      <motion.div 
        style={{ y: yVideo, opacity: opacityVideo }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform z-0"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
            <source src="https://www.pexels.com/download/video/3066463" type="video/mp4" />
             {/* Fallback Image */}
             <img 
               src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" 
               alt="Hero Background" 
               className="w-full h-full object-cover"
             />
        </video>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50"></div>
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20 flex-1 flex flex-col justify-start pt-32 md:pt-40 items-center text-center px-4 sm:px-6 will-change-transform"
      >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
        >
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-cyan-300 text-xs font-bold tracking-widest uppercase">The Next Generation of EV</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] tracking-tight mb-6">
              Experience <br />
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400">
                Limitless Motion
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light mb-10 leading-relaxed">
              Redefining luxury with intelligent engineering and sustainable performance. Welcome to the new era of driving.
            </p>

            {/* Stats Pills (Responsive Grid) */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8">
                 {[
                     { label: "Range", val: "450 mi", icon: <Zap size={14} className="text-yellow-400"/> },
                     { label: "0-60 mph", val: "2.6s", icon: <Star size={14} className="text-cyan-400"/> },
                     { label: "Charging", val: "15 min", icon: <Zap size={14} className="text-green-400"/> }
                 ].map((stat, idx) => (
                     <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full flex items-center gap-3 hover:bg-white/10 transition-colors">
                         {stat.icon}
                         <div className="text-left">
                             <span className="block text-white font-bold text-sm md:text-base leading-none">{stat.val}</span>
                             <span className="block text-slate-400 text-[10px] md:text-xs uppercase tracking-wider leading-none mt-1">{stat.label}</span>
                         </div>
                     </div>
                 ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Book Test Drive
                </button>
                <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
                    View Configuration
                </button>
            </div>
        </motion.div>
      </motion.div>

      {/* Car Image Layer */}
      <motion.div 
        style={{ y: yCar, scale: scaleCar }}
        className="relative z-10 w-full max-w-[1400px] mx-auto mt-auto -mb-[5%] sm:-mb-[8%] lg:-mb-[10%] px-4 pointer-events-none"
      >
         {/* Glow Effect */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-blue-500/20 blur-[80px] rounded-full"></div>
         
         <img 
            src="https://www.freepnglogos.com/uploads/tesla-png/tesla-model-s-png-23.png" 
            alt="Luminex Model S"
            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            loading="eager"
         />
      </motion.div>

      {/* Floating Share & Scroll */}
      <div className="absolute left-6 bottom-10 z-30 hidden md:flex flex-col items-center gap-4">
          <AnimatePresence>
              {isShareOpen && (
                  <motion.div 
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.8 }}
                      className="flex flex-col gap-3 mb-2"
                  >
                      <button onClick={() => handleShare('twitter')} className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 hover:text-white transition-colors">
                          <Twitter size={18} />
                      </button>
                      <button onClick={() => handleShare('facebook')} className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 hover:text-white transition-colors">
                          <Facebook size={18} />
                      </button>
                      <button onClick={() => handleShare('linkedin')} className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 hover:text-white transition-colors">
                          <Linkedin size={18} />
                      </button>
                      <button onClick={copyLink} className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:bg-slate-200 transition-colors">
                          <LinkIcon size={18} />
                      </button>
                  </motion.div>
              )}
          </AnimatePresence>
          
          <button 
            onClick={() => setIsShareOpen(!isShareOpen)}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl backdrop-blur-md border transition-all duration-300 ${isShareOpen ? 'bg-white text-slate-900 rotate-90 border-white' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}`}
          >
              {isShareOpen ? <X size={20} /> : <Share2 size={20} />}
          </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 animate-bounce text-white/30 hidden md:block">
          <ChevronDown size={24} />
      </div>
    </div>
  );
};