import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter, Box, Rotate3d, Battery, Gauge, Thermometer } from 'lucide-react';
import * as THREE from 'three';

const models = [
    {
        id: 1,
        name: "Luminex Evolve",
        desc: "Where cutting-edge technology meets everyday luxury, crafted to redefine the modern electric drive.",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80",
        type: "Sedan",
        price: 85000
    },
    {
        id: 2,
        name: "Luminex Horizon",
        desc: "Built for explorers, blending long-range efficiency with bold design and ultimate driving comfort.",
        image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=959&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "SUV",
        price: 120000
    },
    {
        id: 3,
        name: "Luminex Velocity",
        desc: "Unleash pure performance and aerodynamic precision, engineered for those who crave speed.",
        image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=600&q=80",
        type: "Hypercar",
        price: 250000
    },
    {
        id: 4,
        name: "Luminex Aura",
        desc: "A symbol of refined elegance and intelligence, merging seamless design with next-generation innovation.",
        image: "https://images.unsplash.com/photo-1680184411091-f49bdbdc5150?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "Coupe",
        price: 95000
    },
    {
        id: 5,
        name: "Luminex Terra",
        desc: "All-terrain mastery meets sustainable luxury in this robust off-road adventurer.",
        image: "https://images.unsplash.com/photo-1650959818516-03d68079f9a0?q=80&w=917&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "SUV",
        price: 115000
    },
    {
        id: 6,
        name: "Luminex Apex",
        desc: "The pinnacle of track performance, designed for the driver who accepts no compromises.",
        image: "https://images.unsplash.com/photo-1571874224699-70bcf635b50e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGh5cGVyJTIwY2FyfGVufDB8fDB8fHww",
        type: "Hypercar",
        price: 450000
    }
];

// Circular Progress Component
const CircularProgress = ({ value, max, color, label, icon: Icon }: any) => {
    const radius = 16;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / max) * circumference;

    return (
        <div className="flex flex-col items-center justify-center gap-1">
            <div className="relative w-12 h-12 flex items-center justify-center">
                <svg width="48" height="48" className="transform -rotate-90">
                    <circle cx="24" cy="24" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="3" fill="transparent" />
                    <circle 
                        cx="24" cy="24" r={radius} 
                        stroke={color} 
                        strokeWidth="3" 
                        fill="transparent" 
                        strokeDasharray={circumference} 
                        strokeDashoffset={strokeDashoffset} 
                        strokeLinecap="round" 
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={14} className="text-white/80" />
                </div>
            </div>
            <div className="text-center">
                <p className="text-[10px] font-bold text-white leading-none">{Math.round(value)}</p>
                <p className="text-[8px] text-slate-400 uppercase">{label}</p>
            </div>
        </div>
    );
};

// Vertical Bar for Temp
const TempBar = ({ value }: { value: number }) => {
    return (
        <div className="flex flex-col items-center gap-1 h-full justify-end">
            <div className="relative w-2 h-10 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                    className="absolute bottom-0 w-full bg-gradient-to-t from-blue-400 to-red-400"
                    initial={{ height: '0%' }}
                    animate={{ height: `${(value / 50) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <p className="text-[8px] text-slate-400 uppercase mt-1">Temp</p>
        </div>
    );
};

// Enhanced Live Stats Component
const LiveStats = ({ modelId }: { modelId: number }) => {
    const [battery, setBattery] = useState(98);
    const [range, setRange] = useState(modelId === 2 ? 420 : 380);
    const [temp, setTemp] = useState(32);
    const [history, setHistory] = useState<number[]>(new Array(10).fill(20));

    useEffect(() => {
        const interval = setInterval(() => {
            setBattery(prev => Math.max(10, prev - 0.05));
            setRange(prev => prev + (Math.random() - 0.5));
            setTemp(prev => 32 + (Math.random() * 4 - 2));
            setHistory(prev => [...prev.slice(1), 20 + Math.random() * 30]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-3 left-3 right-3 bg-slate-900/80 backdrop-blur-md rounded-xl p-3 border border-white/10 z-10 shadow-lg"
        >
            <div className="flex justify-between items-center gap-2">
                <CircularProgress value={battery} max={100} label="Bat" color="#4ade80" icon={Battery} />
                
                {/* Mini Graph for Speed/Usage */}
                <div className="flex-1 flex flex-col items-center gap-1 h-12 justify-center px-2 border-x border-white/10">
                    <div className="flex items-end gap-[2px] h-6 w-full justify-center opacity-80">
                        {history.map((h, i) => (
                            <motion.div 
                                key={i} 
                                className="w-1 bg-blue-500 rounded-t-sm"
                                animate={{ height: `${h}%` }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-1">
                        <Gauge size={10} className="text-blue-400" />
                        <span className="text-[10px] font-mono text-white">{range.toFixed(0)} mi</span>
                    </div>
                </div>

                <TempBar value={temp} />
            </div>
        </motion.div>
    );
};

// 3D Viewer Component using vanilla Three.js
const ThreeViewer = ({ color }: { color: string }) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf1f5f9); // match bg-slate-50 approx

        const camera = new THREE.PerspectiveCamera(50, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        camera.position.z = 5;
        camera.position.y = 2;
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5, 10, 7);
        scene.add(dirLight);

        // Placeholder Car Geometry (Abstract Group)
        const carGroup = new THREE.Group();

        // Main Body
        const bodyGeo = new THREE.BoxGeometry(2.2, 0.6, 1.2);
        const bodyMat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.3, metalness: 0.7 });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        body.position.y = 0.5;
        carGroup.add(body);

        // Cabin
        const cabinGeo = new THREE.BoxGeometry(1.4, 0.5, 1.0);
        const cabinMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.2, metalness: 0.9 });
        const cabin = new THREE.Mesh(cabinGeo, cabinMat);
        cabin.position.y = 1.0;
        cabin.position.x = -0.1;
        carGroup.add(cabin);

        // Wheels
        const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32);
        const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
        const positions = [
            [-0.8, 0.3, 0.6],
            [0.8, 0.3, 0.6],
            [-0.8, 0.3, -0.6],
            [0.8, 0.3, -0.6],
        ];

        positions.forEach(pos => {
            const wheel = new THREE.Mesh(wheelGeo, wheelMat);
            wheel.position.set(pos[0], pos[1], pos[2]);
            wheel.rotation.x = Math.PI / 2;
            carGroup.add(wheel);
        });

        scene.add(carGroup);

        // Animation Loop
        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            carGroup.rotation.y += 0.01; // Auto rotate
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            // Dispose geometries
            bodyGeo.dispose();
            cabinGeo.dispose();
            wheelGeo.dispose();
        };
    }, [color]);

    return <div ref={mountRef} className="w-full h-full cursor-move" />;
};

const ModelShowcase: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('default');
  const [active3D, setActive3D] = useState<number | null>(null);

  const filteredModels = useMemo(() => {
    let result = models;
    
    if (filter !== 'All') {
        result = result.filter(m => m.type === filter);
    }

    if (sort === 'price-asc') {
        result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
        result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filter, sort]);

  const categories = ['All', ...new Set(models.map(m => m.type))];

  const toggle3D = (id: number, e: React.MouseEvent) => {
      e.stopPropagation();
      if (active3D === id) {
          setActive3D(null);
      } else {
          setActive3D(id);
      }
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      {/* Decoration */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">Our Models</h2>
                <p className="text-slate-500">Choose the perfect vehicle for your journey.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Category Filter */}
                <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                    {categories.map(cat => (
                        <button 
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                filter === cat 
                                ? 'bg-slate-900 text-white' 
                                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Sort Dropdown */}
                <div className="relative group">
                    <select 
                        value={sort} 
                        onChange={(e) => setSort(e.target.value)}
                        className="appearance-none bg-white border border-slate-200 px-4 py-2 pr-10 rounded-full text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                        <option value="default">Sort by: Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                    </select>
                    <Filter className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-[400px]">
            <AnimatePresence mode="popLayout">
            {filteredModels.map((model) => (
                <motion.div 
                    layout
                    key={model.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer bg-white rounded-2xl p-3 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                    <div className="overflow-hidden rounded-xl mb-4 h-48 relative bg-slate-100">
                        {active3D === model.id ? (
                            <div className="w-full h-full">
                                <ThreeViewer color={model.id % 2 === 0 ? '#1e3a8a' : '#94a3b8'} />
                                <button 
                                    onClick={(e) => toggle3D(model.id, e)}
                                    className="absolute top-3 right-3 z-20 bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
                                >
                                    <Rotate3d size={14} />
                                </button>
                            </div>
                        ) : (
                            <>
                                <img 
                                    src={model.image} 
                                    alt={model.name} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded z-10">
                                    {model.type}
                                </div>
                                <button 
                                    onClick={(e) => toggle3D(model.id, e)}
                                    className="absolute bottom-3 right-3 bg-white/90 text-slate-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10"
                                    title="View in 3D"
                                >
                                    <Box size={16} />
                                </button>

                                {/* Real-time stats for specific models */}
                                {(model.name === "Luminex Horizon" || model.name === "Luminex Terra") && (
                                    <LiveStats modelId={model.id} />
                                )}
                            </>
                        )}
                    </div>
                    <div className="px-2 pb-2">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-slate-900">{model.name}</h3>
                            <span className="text-sm font-semibold text-blue-600">${model.price.toLocaleString()}</span>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">
                            {model.desc}
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-wide">
                            Configure <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </motion.div>
            ))}
            </AnimatePresence>
            
            {filteredModels.length === 0 && (
                <div className="col-span-full flex items-center justify-center text-slate-400 h-64">
                    No models found matching your criteria.
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default ModelShowcase;
