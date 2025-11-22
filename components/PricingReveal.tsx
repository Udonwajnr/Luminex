import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info } from 'lucide-react';

const models = [
    {
        id: 1,
        name: "Masterpiece",
        basePrice: 4200000,
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=80",
        colors: [
            { name: 'Midnight Black', hex: '#000000', price: 0 },
            { name: 'Arctic White', hex: '#ffffff', price: 0 },
            { name: 'Royal Blue', hex: '#1e3a8a', price: 50000 },
            { name: 'Crimson Red', hex: '#7f1d1d', price: 65000 }
        ],
        interiors: [
            { name: 'Obsidian Leather', price: 0 },
            { name: 'Ivory Silk', price: 25000 },
            { name: 'Cognac Nappa', price: 35000 }
        ],
        packages: [
            { id: 'autopilot', name: 'L2 Autonomy', price: 150000 },
            { id: 'sound', name: 'Concert Sound', price: 85000 },
            { id: 'armored', name: 'Ballistic Protection', price: 500000 }
        ]
    },
    {
        id: 2,
        name: "Signature",
        basePrice: 3000000,
        image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80",
        colors: [
            { name: 'Silver Metallic', hex: '#94a3b8', price: 0 },
            { name: 'Matte Grey', hex: '#374151', price: 45000 },
            { name: 'Deep Ocean', hex: '#0c4a6e', price: 30000 }
        ],
        interiors: [
            { name: 'Black Alcantara', price: 0 },
            { name: 'White Leather', price: 20000 }
        ],
        packages: [
            { id: 'performance', name: 'Track Pack', price: 120000 },
            { id: 'carbon', name: 'Carbon Fiber Trim', price: 60000 }
        ]
    },
    {
        id: 3,
        name: "Prestige",
        basePrice: 2500000,
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
        colors: [
            { name: 'Pearl White', hex: '#f8fafc', price: 0 },
            { name: 'Champagne Gold', hex: '#d4af37', price: 55000 }
        ],
        interiors: [
            { name: 'Tan Leather', price: 0 },
            { name: 'Mocha Brown', price: 15000 }
        ],
        packages: [
            { id: 'comfort', name: 'Executive Seating', price: 45000 },
            { id: 'tech', name: 'Tech Suite Pro', price: 30000 }
        ]
    },
    {
        id: 4,
        name: "Exclusive",
        basePrice: 1800000,
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
        colors: [
            { name: 'Racing Yellow', hex: '#fbbf24', price: 0 },
            { name: 'Stealth Black', hex: '#171717', price: 25000 }
        ],
        interiors: [
            { name: 'Sport Mesh', price: 0 },
            { name: 'Red Accents', price: 10000 }
        ],
        packages: [
            { id: 'aero', name: 'Aero Kit', price: 55000 },
            { id: 'lighting', name: 'Laser Headlights', price: 15000 }
        ]
    }
];

const PricingReveal: React.FC = () => {
    const [activeModel, setActiveModel] = useState(models[0]);
    const [config, setConfig] = useState({
        color: activeModel.colors[0],
        interior: activeModel.interiors[0],
        packages: [] as string[]
    });

    // Reset config when model changes
    useEffect(() => {
        setConfig({
            color: activeModel.colors[0],
            interior: activeModel.interiors[0],
            packages: []
        });
    }, [activeModel]);

    const togglePackage = (pkgId: string) => {
        setConfig(prev => ({
            ...prev,
            packages: prev.packages.includes(pkgId) 
                ? prev.packages.filter(id => id !== pkgId)
                : [...prev.packages, pkgId]
        }));
    };

    const calculateTotal = () => {
        let total = activeModel.basePrice;
        total += config.color.price;
        total += config.interior.price;
        config.packages.forEach(pkgId => {
            const pkg = activeModel.packages.find(p => p.id === pkgId);
            if (pkg) total += pkg.price;
        });
        return total;
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
    <section className="py-12 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden relative text-white flex flex-col lg:flex-row min-h-[700px]">
        
        {/* Visual Background - Left/Top */}
        <div className="lg:w-2/3 relative min-h-[400px] lg:h-auto">
            <AnimatePresence mode='wait'>
                <motion.img 
                    key={activeModel.id}
                    src={activeModel.image}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Background Model"
                    loading="lazy"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent opacity-80"></div>
            
            <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-between">
                 <div>
                    <h2 className="text-4xl font-bold mb-2">Configure Your <br/> {activeModel.name}</h2>
                    <p className="text-blue-200/80 text-sm max-w-md">Customize every detail to match your vision of perfection.</p>
                 </div>

                 <div className="mt-8 lg:mt-0">
                    <h3 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-2">
                        {formatPrice(calculateTotal())}
                    </h3>
                    <p className="text-sm text-blue-300">Estimated Total</p>
                 </div>
            </div>
        </div>

        {/* Configurator Panel - Right/Bottom */}
        <div className="lg:w-1/3 bg-white/5 backdrop-blur-xl border-l border-white/10 p-8 overflow-y-auto">
            <h4 className="text-xl font-bold mb-6">Configuration</h4>
            
            {/* Model Selector */}
            <div className="mb-8">
                <label className="text-xs uppercase tracking-wider text-blue-200 mb-3 block">Select Model</label>
                <div className="grid grid-cols-2 gap-2">
                    {models.map(m => (
                        <button
                            key={m.id}
                            onClick={() => setActiveModel(m)}
                            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                                activeModel.id === m.id 
                                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                                : 'bg-white/10 hover:bg-white/20 text-white'
                            }`}
                        >
                            {m.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Color Selector */}
            <div className="mb-8">
                <div className="flex justify-between mb-3">
                    <label className="text-xs uppercase tracking-wider text-blue-200">Exterior Color</label>
                    <span className="text-xs text-white">{config.color.name}</span>
                </div>
                <div className="flex gap-3">
                    {activeModel.colors.map((c, i) => (
                        <button
                            key={i}
                            onClick={() => setConfig({...config, color: c})}
                            className={`w-8 h-8 rounded-full border-2 transition-all relative ${
                                config.color.name === c.name ? 'border-white scale-110' : 'border-transparent hover:scale-105'
                            }`}
                            style={{ backgroundColor: c.hex }}
                            title={`${c.name} (+${formatPrice(c.price)})`}
                        >
                             {config.color.name === c.name && (
                                <Check size={12} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${c.hex === '#ffffff' || c.hex === '#f8fafc' ? 'text-black' : 'text-white'}`} />
                             )}
                        </button>
                    ))}
                </div>
                {config.color.price > 0 && (
                    <p className="text-xs text-blue-300 mt-2">+ {formatPrice(config.color.price)}</p>
                )}
            </div>

            {/* Interior Selector */}
            <div className="mb-8">
                <label className="text-xs uppercase tracking-wider text-blue-200 mb-3 block">Interior Trim</label>
                <div className="space-y-2">
                    {activeModel.interiors.map((interior, i) => (
                        <button
                            key={i}
                            onClick={() => setConfig({...config, interior})}
                            className={`w-full flex justify-between items-center px-4 py-3 rounded-xl border transition-all ${
                                config.interior.name === interior.name 
                                ? 'bg-white/10 border-blue-400' 
                                : 'bg-transparent border-white/10 hover:bg-white/5'
                            }`}
                        >
                            <span className="text-sm text-white">{interior.name}</span>
                            <span className="text-xs text-blue-200">{interior.price > 0 ? `+${formatPrice(interior.price)}` : 'Included'}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Packages */}
            <div className="mb-8">
                <label className="text-xs uppercase tracking-wider text-blue-200 mb-3 block">Performance & Options</label>
                <div className="space-y-2">
                    {activeModel.packages.map((pkg) => (
                        <button
                            key={pkg.id}
                            onClick={() => togglePackage(pkg.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl border transition-all group ${
                                config.packages.includes(pkg.id)
                                ? 'bg-blue-600/20 border-blue-500' 
                                : 'bg-transparent border-white/10 hover:bg-white/5'
                            }`}
                        >
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-bold text-white">{pkg.name}</span>
                                {config.packages.includes(pkg.id) && <Check size={14} className="text-blue-400" />}
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">Add-on feature</span>
                                <span className="text-xs text-blue-300">+ {formatPrice(pkg.price)}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <button className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg shadow-white/10">
                Confirm Specification
            </button>

        </div>
      </div>
    </section>
  );
};

export default PricingReveal;
