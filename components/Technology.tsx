import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Cpu, Zap, Wifi, Shield } from "lucide-react";

// Futuristic HUD — Enhanced Technology Visualization
// - Neon / holographic styling
// - Layered rotating rings, pulsing AI core
// - Smooth transitions between tech points
// - Mouse parallax for subtle depth

const techPoints = [
  { id: 0, label: "Neural Core", desc: "Self-learning AI adapts to your driving style.", icon: <Cpu size={18} /> },
  { id: 1, label: "Solid State", desc: "1200km range with 10-minute charge time.", icon: <Zap size={18} /> },
  { id: 2, label: "Hyper-Link", desc: "6G connectivity with V2X infrastructure.", icon: <Wifi size={18} /> },
  { id: 3, label: "Force Field", desc: "Active sensing prevents 99% of collisions.", icon: <Shield size={18} /> },
];

const Technology: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number>(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // subtle mouse parallax
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 -> 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x, y });
    };
    el.addEventListener("mousemove", handler);
    el.addEventListener("mouseleave", () => setMouse({ x: 0, y: 0 }));
    return () => el.removeEventListener("mousemove", handler);
  }, []);

  // pulse AI core when active point changes
  useEffect(() => {
    controls.start({ scale: [1, 1.06, 1], boxShadow: ["0 0 12px rgba(59,130,246,0.15)", "0 0 40px rgba(59,130,246,0.25)", "0 0 12px rgba(59,130,246,0.15)"], transition: { duration: 0.9 } });
  }, [activePoint, controls]);

  return (
    <section className="py-24 bg-[#050712] overflow-hidden relative">
      {/* subtle noise */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left — Text + Controls */}
          <div className="lg:w-1/3">
            <div className="mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-300 uppercase tracking-widest text-xs font-bold">System Architecture v3.0</span>
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
              The Digital Soul of <br /> <span className="text-cyan-400">Intelligent Motion</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">A fully integrated hardware-software ecosystem that thinks, breathes and anticipates the road ahead — visualized as a living hologram.</p>

            <div className="space-y-3">
              {techPoints.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePoint(p.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${activePoint === p.id ? 'bg-cyan-600/8 border-cyan-500/40' : 'bg-white/3 border-white/6 hover:bg-white/6'}`}
                >
                  <div className={`${activePoint === p.id ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-slate-300'} p-2 rounded-md`}>{p.icon}</div>
                  <div>
                    <h4 className={`font-semibold text-sm ${activePoint === p.id ? 'text-white' : 'text-slate-300'}`}>{p.label}</h4>
                    <p className="text-xs text-slate-500">{p.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right — Visualization */}
          <div className="lg:w-2/3 w-full flex justify-center items-center">
            <div ref={containerRef} className="relative w-full max-w-2xl aspect-square lg:aspect-[4/3] p-6">

              {/* HUD Layers: rotating rings + hologram */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ transform: `translate3d(${mouse.x * 12}px, ${mouse.y * 10}px, 0)` }}
              >
                {/* layered rotating rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-[82%] h-[82%] rounded-full border border-cyan-500/15"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-[66%] h-[66%] rounded-full border border-cyan-500/12"
                />

                {/* holographic grid ring */}
                <svg viewBox="0 0 600 400" className="w-full h-full drop-shadow-[0_0_60px_rgba(24,160,255,0.08)]">
                  <defs>
                    <linearGradient id="g1" x1="0%" x2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
                    </linearGradient>
                    <filter id="glow2">
                      <feGaussianBlur stdDeviation="3" result="b" />
                      <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* chassis wireframe */}
                  <motion.path
                    d="M 80,220 Q 300,90 520,220 L 480,300 Q 300,360 120,300 Z"
                    fill="url(#g1)"
                    fillOpacity="0.06"
                    stroke="url(#g1)"
                    strokeWidth="1.5"
                    filter="url(#glow2)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.4 }}
                  />

                  {/* AI core group — switchable via AnimatePresence */}
                  <AnimatePresence mode="wait">
                    {activePoint === 0 && (
                      <motion.g key="ai" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <defs>
                          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                            <stop offset="35%" stopColor="#60a5fa" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.1" />
                          </radialGradient>
                        </defs>

                        <motion.circle cx="300" cy="220" r="34" fill="url(#coreGrad)" stroke="#60a5fa" strokeWidth="2" animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
                        <circle cx="300" cy="220" r="10" fill="#fff" />
                        <text x="300" y="180" fill="#a5f3fc" textAnchor="middle" fontSize="12" fontFamily="monospace">AI_CORE_ACTIVE</text>

                        {/* connecting nodes */}
                        <line x1="300" y1="220" x2="140" y2="300" stroke="#60a5fa" strokeWidth="1" strokeDasharray="6" />
                        <line x1="300" y1="220" x2="460" y2="300" stroke="#60a5fa" strokeWidth="1" strokeDasharray="6" />

                        {/* pulsing halo */}
                        <motion.circle cx="300" cy="220" r="58" fill="none" stroke="#60a5fa" strokeWidth="1" opacity={0.45} animate={{ r: [58, 84], opacity: [0.45, 0] }} transition={{ duration: 1.6, repeat: Infinity }} />
                      </motion.g>
                    )}

                    {activePoint === 1 && (
                      <motion.g key="battery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <rect x="180" y="200" width="240" height="44" rx="6" fill="#06b6d4" fillOpacity="0.14" stroke="#60a5fa" strokeWidth="1.2" />
                        <text x="300" y="227" fill="#bfe9ff" textAnchor="middle" fontSize="11" fontFamily="monospace">SOLID_STATE_PACK // 98%</text>

                        {/* moving energy dots */}
                        <motion.circle cx="190" cy="220" r="3" fill="#fff" animate={{ cx: [190, 410] }} transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }} />
                      </motion.g>
                    )}

                    {activePoint === 2 && (
                      <motion.g key="link" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <path d="M 250,150 L 300,220 L 350,150" fill="none" stroke="#60a5fa" strokeWidth="2" />
                        <circle cx="250" cy="150" r="4" fill="#fff" />
                        <circle cx="350" cy="150" r="4" fill="#fff" />
                        <text x="300" y="130" fill="#bfe9ff" textAnchor="middle" fontSize="12" fontFamily="monospace">UPLINK_ESTABLISHED</text>
                        <motion.circle cx="300" cy="220" r="50" stroke="#60a5fa" strokeWidth="1" fill="none" opacity={0.45} animate={{ r: [50, 80], opacity: [0.45, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
                      </motion.g>
                    )}

                    {activePoint === 3 && (
                      <motion.g key="shield" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <ellipse cx="300" cy="230" rx="220" ry="120" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="8,6" />
                        <text x="300" y="380" fill="#86efac" textAnchor="middle" fontSize="12" fontFamily="monospace">SHIELD_ACTIVE</text>
                      </motion.g>
                    )}
                  </AnimatePresence>

                  {/* scanning sweep line (HUD scan) */}
                  <motion.line x1="80" y1="110" x2="520" y2="110" stroke="#a5f3fc" strokeWidth="1" strokeOpacity="0.12" animate={{ x1: [80, 520], x2: [80, 520] }} transition={{ duration: 3.4, repeat: Infinity, ease: 'linear' }} />
                </svg>

                {/* Floating readouts */}
                <div className="absolute right-8 top-8 text-right">
                  <p className="text-[10px] text-slate-500 font-mono">TEMP_CORE</p>
                  <p className="text-sm text-cyan-300 font-mono">34.2°C</p>
                </div>

                <div className="absolute left-8 bottom-8">
                  <p className="text-[10px] text-slate-500 font-mono">SYS_LOAD</p>
                  <div className="w-28 h-1 bg-slate-800 rounded-full mt-1 overflow-hidden">
                    <motion.div animate={{ width: ['18%', '62%', '30%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-cyan-400" />
                  </div>
                </div>

                {/* Bottom-center HUD label */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-white/3 backdrop-blur-sm border border-white/6">
                  <p className="text-xs font-mono text-cyan-100">L-EVOLVE &middot; REAL-TIME DIAGNOSTICS</p>
                </div>

                {/* subtle corner glows */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -left-12 -top-12 w-40 h-40 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-cyan-500 to-transparent" />
                  <div className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-sky-500 to-transparent" />
                </div>

                {/* animated central pulse wrapper for framer controls (invisible but used for pulse) */}
                <motion.div animate={controls} className="absolute w-0 h-0" />

              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
