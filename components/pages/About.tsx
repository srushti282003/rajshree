import React from "react";

const whyCards = [
  { id: 1, icon: "🧼", title: "Strict Hygiene", desc: "Highest standards of cleanliness. Every tool is sterilized, every surface sanitized.", bg: "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,228,240,0.75))", accent: "#C71585", span: "md:col-span-2 md:row-span-2", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&fit=crop" },
  { id: 2, icon: "👑", title: "Premium Products", desc: "Trusted brands like O3+ and Lotus for visible results.", bg: "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(244,230,255,0.75))", accent: "#8B008B", span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?q=80&w=800&fit=crop" },
  { id: 3, icon: "💝", title: "Personalized Care", desc: "Every treatment is tailored to your skin type.", bg: "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,240,248,0.75))", accent: "#FF69B4", span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&fit=crop" },
  { id: 4, icon: "🌿", title: "Relaxing Ambiance", desc: "A serene environment designed to melt stress away.", bg: "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(232,255,245,0.75))", accent: "#0d9488", span: "md:col-span-2 md:row-span-1", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&fit=crop" }
];

const About: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden bg-[#faf8f9]">
      
      {/* ===== STORY SECTION (Meet Rajashree) ===== */}
      <section className="section-about pt-16 md:pt-24 pb-12 relative z-20">
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="text-center mb-12 reveal">
            <span className="text-accent/60 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">Our Story</span>
            <h1 className="font-serif font-bold text-dark mt-2 mb-3" style={{ fontSize:"clamp(2.5rem,5vw,4rem)" }}>Meet Rajashree</h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent"></div>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Photo */}
            <div className="w-full md:w-1/2 reveal px-4 sm:px-8 md:px-0">
              <div className="relative max-w-sm mx-auto md:max-w-none transform-gpu">
                <div className="absolute -inset-2 rounded-[2.5rem] opacity-60" style={{ background:"conic-gradient(from 0deg,#FFC0CB,#FF69B4,#C71585,#8B008B,#FFC0CB)", padding:"2px" }}></div>
                <div className="absolute -inset-2 rounded-[2.5rem] bg-white/90"></div>
                {/* Replaced heavy blur-2xl with a lighter radial gradient */}
                <div className="absolute -inset-4 rounded-[2.5rem]" style={{ background: "radial-gradient(ellipse at center, rgba(199,21,133,0.15) 0%, transparent 70%)" }}></div>
                
                <img src="/RAJSHRRE.jpeg" alt="Rajashree"
                  onError={(e)=>{ (e.target as HTMLImageElement).src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=700&fit=crop"; }}
                  className="relative z-10 w-full aspect-[4/5] object-cover shadow-2xl border-4 border-white"
                  style={{ borderRadius:"2rem" }} loading="lazy" />
                  
                <div className="absolute -bottom-5 -right-2 md:-right-6 z-20 glass rounded-2xl px-5 py-3 shadow-[0_10px_30px_rgba(255,105,180,0.2)] border border-white/50 bg-white/70 backdrop-blur-md">
                  <div className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF69B4] to-[#8B008B]">10+</div>
                  <div className="text-dark/60 uppercase tracking-widest mt-1 font-bold" style={{ fontSize:"10px" }}>Years Excellence</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 reveal text-center md:text-left" style={{ transitionDelay:"100ms" }}>
              <span className="inline-block bg-primary/20 text-accent font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4" style={{ fontSize:"10px" }}>Our Founder</span>
              <h2 className="font-serif font-bold text-dark mb-5 leading-tight" style={{ fontSize:"clamp(1.8rem,4vw,2.5rem)" }}>
                The Story of <span className="shimmer-text">Rajashree</span>
              </h2>
              <p className="text-dark/70 mb-5 leading-relaxed text-base md:text-lg">
                With over <span className="font-bold text-accent">10 years of hands-on experience</span> in beauty and wellness, Rajashree's journey has been dedicated to enhancing natural beauty and giving every client a confidence-boosting experience.
              </p>
              <div className="relative p-6 md:p-8 rounded-2xl overflow-hidden shadow-sm border border-pink-100 bg-gradient-to-br from-pink-50/50 to-white/50 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-1 h-full" style={{ background:"linear-gradient(180deg,#FF69B4,#C71585)" }}></div>
                <div className="absolute -top-2 left-4 text-6xl text-accent/10 font-serif leading-none select-none">"</div>
                <p className="font-serif italic text-gray-800 relative z-10 leading-relaxed text-lg md:text-xl">Beauty is not just about how you look, it's about how you feel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LUXURY BENTO GRID — WHY CHOOSE US (COMPACT & ADVANCED) ===== */}
      <section className="relative w-full py-16 bg-[#faf8f9] overflow-hidden">
        
        <style>{`
          @keyframes float-blob-1 {
            0%, 100% { transform: translate3d(0px, 0px, 0) scale(1); }
            33% { transform: translate3d(6vw, 8vh, 0) scale(1.2); }
            66% { transform: translate3d(-8vw, 4vh, 0) scale(0.9); }
          }
          @keyframes float-blob-2 {
            0%, 100% { transform: translate3d(0px, 0px, 0) scale(1); }
            33% { transform: translate3d(-6vw, -8vh, 0) scale(1.2); }
            66% { transform: translate3d(8vw, -4vh, 0) scale(0.9); }
          }
        `}</style>
        
        {/* Performance-friendly Animated Background Elements (Zero Lag GPU Transforms) */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] pointer-events-none transform-gpu will-change-transform" style={{ background: "radial-gradient(circle, rgba(255,192,203,0.35) 0%, transparent 70%)", animation: "float-blob-1 25s ease-in-out infinite" }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] pointer-events-none transform-gpu will-change-transform" style={{ background: "radial-gradient(circle, rgba(199,21,133,0.15) 0%, transparent 70%)", animation: "float-blob-2 30s ease-in-out infinite reverse" }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-5">
          
          {/* Section Header */}
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full border border-pink-200 bg-white/50 text-[#C71585] font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs mb-3 shadow-sm backdrop-blur-md">
              Why Us
            </span>
            <h2 className="font-serif font-bold text-gray-900 drop-shadow-sm mb-4 leading-tight" style={{ fontSize:"clamp(2rem,4vw,3rem)" }}>
              Why Choose Rajashree Salon?
            </h2>
            <p className="text-gray-500 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Experience premium beauty, expert care, and a relaxing atmosphere designed to make every visit memorable.
            </p>
          </div>

          {/* Seamless Bento Block (No Gap, Advanced Attractive) */}
          {/* Replaced extremely heavy backdrop-blur-2xl with a lighter backdrop-blur-md and transform-gpu */}
          <div className="reveal relative w-full rounded-[2.5rem] overflow-hidden border border-white shadow-[0_20px_50px_rgba(199,21,133,0.15)] bg-pink-50/70 backdrop-blur-sm transform-gpu">
            {/* The gap-[2px] with bg-white/40 acts as gorgeous thin frosted dividers between cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px] auto-rows-[220px] bg-white/40">
              {whyCards.map((card, i) => (
                <div 
                  key={card.id} 
                  className={`group relative overflow-hidden flex flex-col justify-end p-6 md:p-8 cursor-default ${card.span}`}
                >
                  {/* Background Layer with zooming image */}
                  <div className="absolute inset-0 z-0 overflow-hidden transform-gpu bg-white">
                    {/* Removed mix-blend-multiply and increased opacity so images are extremely clear */}
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover opacity-70 transform-gpu will-change-transform group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out" />
                  </div>
                  
                  {/* Hover Inner Glow Gradient */}
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${card.accent}15, transparent 70%)` }}></div>
                  
                  {/* Frosted Glass Base Layer to ensure text legibility */}
                  <div className="absolute inset-0 z-10 backdrop-blur-md opacity-90 group-hover:opacity-85 transition-opacity duration-500" style={{ background: card.bg }}></div>
                  
                  {/* Content */}
                  <div className="relative z-30 flex flex-col h-full justify-between">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/90 shadow-sm flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 group-hover:rotate-[8deg] transition-transform duration-500 border border-white">
                        {card.icon}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white shadow-sm" style={{ color: card.accent }}>
                        Explore ✦
                      </div>
                    </div>
                    
                    <div className="mt-auto transform group-hover:-translate-y-2 transition-transform duration-500">
                      <h3 className="font-serif font-bold text-xl md:text-2xl text-gray-900 mb-2" style={{ color: "#1a1a1a" }}>
                        {card.title}
                      </h3>
                      <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Animated Border Bottom Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
