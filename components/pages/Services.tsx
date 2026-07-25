import React, { useState } from "react";

const categories = ["All","Threading","Waxing","Facial","Pedicure","Manicure","Cleanup","Bleach","Body Spa","Makeup"];

const allServices = [
  { category:"Threading", name:"Eyebrows", desc:"Precision shaping for a flawless, natural look tailored to your face shape.", icon:"🪄" },
  { category:"Threading", name:"Upper Lip & Chin", desc:"Gentle, smooth hair removal for delicate facial skin.", icon:"✨" },
  { category:"Threading", name:"Full Face", desc:"Complete facial hair removal for a flawless makeup base.", icon:"🌟" },
  { category:"Waxing", name:"Full Arms & Legs", desc:"Silky smooth skin that lasts weeks, using premium wax.", icon:"🌸" },
  { category:"Waxing", name:"Stomach & Back", desc:"Gentle and effective waxing for a smooth silhouette.", icon:"💫" },
  { category:"Waxing", name:"Bikini & Full Body", desc:"Premium care for ultimate smoothness and long-lasting results.", icon:"💎" },
  { category:"Facial", name:"Fruit & Whitening Facial", desc:"Natural glow and brightened complexion using organic fruit extracts.", icon:"🍇" },
  { category:"Facial", name:"D Tan & Sara Fruit", desc:"Remove sun tan and refresh your skin with powerful botanicals.", icon:"☀️" },
  { category:"Facial", name:"O3+, Wine & Lotus", desc:"Luxurious anti-aging treatments for radiant, youthful skin.", icon:"🌹" },
  { category:"Pedicure", name:"SPA Pedicure & D Tan", desc:"Relaxing foot care, dead skin removal, and deep tan reduction.", icon:"🌿" },
  { category:"Manicure", name:"SPA Manicure & Polishing", desc:"Beautifully groomed and polished hands with a relaxing hot oil massage.", icon:"💅" },
  { category:"Cleanup", name:"Whitening & D Tan Cleanup", desc:"Quick refresh for glowing skin, removing impurities and tan.", icon:"✨" },
  { category:"Cleanup", name:"Sara Fruit, Lotus & Wine", desc:"Deep cleansing with premium botanical products for instant glow.", icon:"🌺" },
  { category:"Bleach", name:"Face, Neck & Back", desc:"Even out your skin tone beautifully with our gentle bleach formula.", icon:"🌙" },
  { category:"Bleach", name:"Full Body Bleach", desc:"Complete skin brightening treatment for a radiant, even-toned look.", icon:"⭐" },
  { category:"Body Spa", name:"Head & Foot Massage", desc:"Melt away stress and tension with our signature massage therapy.", icon:"💆" },
  { category:"Body Spa", name:"Body Massage & Scrub", desc:"Rejuvenate your entire body, remove dead skin for silky glow.", icon:"🧖" },
  { category:"Body Spa", name:"Hair Spa", desc:"Nourishing deep-conditioning care for silky, strong, and healthy hair.", icon:"💇" },
  { category:"Makeup", name:"Light Makeup", desc:"Elegant, natural look for parties, outings, and special occasions.", icon:"💄" },
];

const categoryGradients: Record<string, string> = {
  Threading: "from-pink-400 to-rose-500", Waxing: "from-rose-400 to-pink-600",
  Facial: "from-purple-400 to-pink-500", Pedicure: "from-green-400 to-teal-500",
  Manicure: "from-fuchsia-400 to-purple-500", Cleanup: "from-orange-400 to-pink-500",
  Bleach: "from-yellow-400 to-orange-500", "Body Spa": "from-teal-400 to-cyan-500",
  Makeup: "from-pink-500 to-accent",
};

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredServices = activeCategory === "All" ? allServices : allServices.filter(s => s.category === activeCategory);

  return (
    <div className="w-full py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="mesh-bg"></div>
      <div className="absolute inset-0 dot-pattern opacity-30 -z-10"></div>

      {/* Floating petals */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="petal" style={{
          width: `${12 + i * 4}px`, height: `${8 + i * 3}px`,
          background: `rgba(${200 + i * 8},${80 + i * 20},${150 - i * 10},0.3)`,
          left: `${(i * 17 + 5)}%`, animationDuration: `${10 + i * 2}s`, animationDelay: `${i * 1.5}s`
        }}></div>
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header with Advanced Attractive Border */}
        <div className="reveal mb-14 max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-[2.5rem] overflow-hidden group">
            {/* Animated Gradient Border Layer */}
            <div className="absolute inset-0 rounded-[2.5rem] p-[3px] overflow-hidden">
              <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent,transparent,#FF69B4,#C71585,transparent,transparent)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" style={{ animation: "border-rotate 4s linear infinite" }}></div>
            </div>
            
            {/* Inner Content Box */}
            <div className="absolute inset-[3px] bg-white/70 backdrop-blur-xl rounded-[2.35rem] shadow-[inset_0_0_20px_rgba(255,105,180,0.1)]"></div>
            
            <div className="relative z-10 text-center">
              <span className="text-accent/80 text-xs font-bold tracking-[0.35em] uppercase drop-shadow-sm">Discover</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-dark mt-2 mb-4">Our Premium Services</h1>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-accent"></div>
                <div className="w-3 h-3 bg-accent rounded-full animate-ping"></div>
                <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-accent"></div>
              </div>
              <p className="text-dark/70 text-lg max-w-lg mx-auto">Hover over the cards to explore our luxurious treatments tailored just for you.</p>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border-2 ${
                activeCategory === cat
                  ? "text-white border-transparent shadow-[0_4px_20px_rgba(199,21,133,0.4)] scale-105 -translate-y-0.5"
                  : "bg-white/70 backdrop-blur-md text-dark/65 border-primary/30 hover:border-accent hover:text-accent hover:-translate-y-0.5 shadow-sm"
              }`}
              style={activeCategory === cat ? { background: "linear-gradient(135deg,#FF69B4,#C71585)" } : {}}>
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => {
            const grad = categoryGradients[service.category] || "from-pink-400 to-accent";
            return (
              <div key={idx} className="flip-card h-64 cursor-pointer reveal" style={{ transitionDelay: `${(idx % 8) * 50}ms` }}>
                <div className="flip-card-inner w-full h-full relative rounded-3xl">

                  {/* FRONT */}
                  <div className="flip-card-front absolute inset-0 rounded-3xl p-[2px] overflow-hidden group/front shadow-[0_8px_30px_rgba(255,105,180,0.12)] hover:shadow-[0_16px_50px_rgba(255,105,180,0.25)]">
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent,transparent,#FF69B4,#C71585,transparent,transparent)] opacity-40 group-hover/front:opacity-100 transition-opacity duration-500" style={{ animation: "border-rotate 4s linear infinite" }}></div>
                    {/* Inner White Plate */}
                    <div className="absolute inset-[2px] bg-white/90 backdrop-blur-xl rounded-[1.35rem]"></div>
                    
                    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
                      <div className="text-4xl mb-4" style={{ animation:"float-y 4s ease-in-out infinite", animationDelay:`${idx*0.2}s` }}>{service.icon}</div>
                      <div className={`text-xs font-bold tracking-[0.2em] uppercase mb-3 text-transparent bg-clip-text bg-gradient-to-r ${grad}`}>{service.category}</div>
                      <h3 className="text-xl font-serif text-dark font-bold leading-tight">{service.name}</h3>
                      <div className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${grad}`}></div>
                      <p className="text-[10px] uppercase tracking-widest text-dark/40 mt-4 font-bold">Hover to explore →</p>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="flip-card-back absolute inset-0 rounded-3xl p-[2px] overflow-hidden group/back shadow-[0_20px_50px_rgba(199,21,133,0.3)]">
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent,transparent,rgba(255,255,255,0.8),rgba(255,192,203,0.9),transparent,transparent)] opacity-60 group-hover/back:opacity-100 transition-opacity duration-500" style={{ animation: "border-rotate 3s linear infinite reverse" }}></div>
                    
                    {/* Inner Colored Plate */}
                    <div className="absolute inset-[2px] rounded-[1.35rem]" style={{ background: `linear-gradient(135deg, ${grad.includes('pink') ? '#C71585' : '#8B008B'}, ${grad.includes('purple') ? '#4B0082' : '#FF69B4'})` }}>
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 rounded-[1.35rem] mix-blend-overlay pointer-events-none"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
                      <div className="text-3xl mb-3 opacity-90">{service.icon}</div>
                      <h3 className="text-xl font-serif text-white font-bold mb-3 drop-shadow-md">{service.name}</h3>
                      <p className="text-white/90 text-sm leading-relaxed mb-5 drop-shadow-sm font-medium">{service.desc}</p>
                      <button className="px-5 py-2 bg-white/20 hover:bg-white text-white hover:text-accent rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-300 backdrop-blur-sm shadow-lg">
                        Book Now
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Services;
