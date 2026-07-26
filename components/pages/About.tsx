import React from "react";

const whyCards = [
  { id: 1, icon: "🧼", title: "Strict Hygiene", desc: "Highest standards of cleanliness. Every tool is sterilized, every surface sanitized.", bg: "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,228,240,0.75))", accent: "#C71585", span: "md:col-span-2 md:row-span-2", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&fit=crop" },
  { id: 2, icon: "👑", title: "Premium Products", desc: "Trusted brands like O3+ and Lotus for visible results.", bg: "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(244,230,255,0.75))", accent: "#8B008B", span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?q=80&w=800&fit=crop" },
  { id: 3, icon: "💝", title: "Personalized Care", desc: "Every treatment is tailored to your skin type.", bg: "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,240,248,0.75))", accent: "#FF69B4", span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&fit=crop" },
  { id: 4, icon: "🌿", title: "Relaxing Ambiance", desc: "A serene environment designed to melt stress away.", bg: "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(232,255,245,0.75))", accent: "#0d9488", span: "md:col-span-2 md:row-span-1", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&fit=crop" }
];

const stats = [
  { value: "10+", label: "Years Experience", icon: "✨" },
  { value: "500+", label: "Happy Clients", icon: "💗" },
  { value: "100%", label: "Satisfaction", icon: "⭐" },
];

const About: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden bg-[#faf8f9]">

      {/* ===== MEET RAJASHREE — PREMIUM SECTION ===== */}
      <section className="relative overflow-hidden py-16 md:py-24">

        {/* GPU-accelerated floating blob background — zero lag */}
        <style>{`
          @keyframes blob-a {
            0%,100% { transform: translate3d(0,0,0) scale(1); }
            33%      { transform: translate3d(8vw, 10vh, 0) scale(1.15); }
            66%      { transform: translate3d(-6vw, 5vh, 0) scale(0.9); }
          }
          @keyframes blob-b {
            0%,100% { transform: translate3d(0,0,0) scale(1); }
            33%      { transform: translate3d(-8vw,-10vh,0) scale(1.2); }
            66%      { transform: translate3d(6vw, -5vh,0) scale(0.85); }
          }
          @keyframes blob-c {
            0%,100% { transform: translate3d(0,0,0) scale(1); }
            50%      { transform: translate3d(4vw,  6vh,0) scale(1.1); }
          }
          @keyframes spin-border {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes float-badge {
            0%,100% { transform: translateY(0px); }
            50%     { transform: translateY(-8px); }
          }
          @keyframes shimmer-move {
            0%   { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
        `}</style>

        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-15%] right-[-10%] w-[55vw] h-[55vw] will-change-transform transform-gpu"
            style={{ background: "radial-gradient(circle, rgba(255,192,203,0.4) 0%, transparent 65%)", animation: "blob-a 28s ease-in-out infinite" }} />
          <div className="absolute bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] will-change-transform transform-gpu"
            style={{ background: "radial-gradient(circle, rgba(199,21,133,0.12) 0%, transparent 65%)", animation: "blob-b 34s ease-in-out infinite" }} />
          <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] will-change-transform transform-gpu"
            style={{ background: "radial-gradient(circle, rgba(255,105,180,0.08) 0%, transparent 65%)", animation: "blob-c 20s ease-in-out infinite" }} />
          {/* Decorative sparkle dots */}
          {[
            { top:"12%", left:"8%", s:6, delay:"0s" },
            { top:"25%", right:"6%", s:8, delay:"1s" },
            { bottom:"20%", left:"12%", s:5, delay:"2s" },
            { top:"60%", right:"12%", s:7, delay:"0.5s" },
          ].map((p,i)=>(
            <div key={i} className="absolute rounded-full will-change-transform transform-gpu"
              style={{ ...p as any, width:p.s, height:p.s,
                background:"linear-gradient(135deg,#FF69B4,#C71585)",
                animation:`float-badge ${4+i}s ease-in-out infinite`,
                animationDelay: p.delay, opacity:0.6 }} />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5">

          {/* Section badge + heading */}
          <div className="text-center mb-12 md:mb-16 reveal">
            <span className="inline-block px-5 py-2 rounded-full border border-pink-200 bg-white/60 text-[#C71585] font-bold tracking-[0.28em] uppercase text-[10px] md:text-xs mb-4 shadow-md backdrop-blur-md">
              Our Story
            </span>
            <h1 className="font-serif font-bold text-dark leading-tight"
              style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)" }}>
              Meet <span style={{
                background: "linear-gradient(120deg,#C71585 0%,#FF69B4 40%,#C71585 80%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer-move 4s linear infinite"
              }}>Rajashree</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C71585]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#C71585]" style={{ animation:"float-badge 2s ease-in-out infinite" }} />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C71585]" />
            </div>
          </div>

          {/* Main content row */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* ── PHOTO COLUMN ── */}
            <div className="w-full lg:w-[45%] reveal flex-shrink-0">
              <div className="relative mx-auto max-w-[340px] lg:max-w-none">

                {/* Spinning conic border ring */}
                <div className="absolute inset-[-10px] rounded-[2.5rem] transform-gpu will-change-transform"
                  style={{
                    background: "conic-gradient(from 0deg, #FFC0CB, #FF69B4, #C71585, #8B008B, #FF69B4, #FFC0CB)",
                    animation: "spin-border 8s linear infinite",
                    borderRadius: "2.5rem",
                    padding: "3px",
                    opacity: 0.8
                  }} />
                {/* White mask ring */}
                <div className="absolute inset-[-7px] rounded-[2.4rem] bg-[#faf8f9]" />

                {/* Glow halo — radial gradient, zero blur cost */}
                <div className="absolute inset-0 rounded-[2rem]"
                  style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(255,105,180,0.25) 0%, transparent 70%)" }} />

                {/* Main image */}
                <img
                  src="/RAJSHRRE.jpeg"
                  alt="Rajashree — Founder"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=700&fit=crop"; }}
                  className="relative z-10 w-full aspect-[4/5] object-cover object-top shadow-2xl border-4 border-white"
                  style={{ borderRadius: "2rem" }}
                  loading="eager"
                />

                {/* Floating stat badges */}
                <div className="absolute -bottom-6 -right-4 md:-right-8 z-20 flex flex-col gap-3">
                  {stats.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-[0_8px_24px_rgba(199,21,133,0.18)] border border-white/60 transform-gpu will-change-transform"
                      style={{ animation: `float-badge ${3 + i * 0.8}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}>
                      <span className="text-lg">{s.icon}</span>
                      <div>
                        <div className="font-serif font-bold text-base leading-none"
                          style={{ background: "linear-gradient(135deg,#FF69B4,#C71585)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                          {s.value}
                        </div>
                        <div className="text-[9px] uppercase tracking-widest text-gray-500 font-semibold mt-0.5">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative corner flourish */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full border-2 border-dashed border-[#FF69B4]/50 transform-gpu"
                  style={{ animation: "spin-border 12s linear infinite reverse" }} />
              </div>
            </div>

            {/* ── TEXT COLUMN ── */}
            <div className="w-full lg:w-[55%] reveal text-center lg:text-left" style={{ transitionDelay: "120ms" }}>

              <span className="inline-block bg-gradient-to-r from-pink-100 to-rose-100 text-[#C71585] font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-5 text-[10px] md:text-xs border border-pink-200 shadow-sm">
                Our Founder
              </span>

              <h2 className="font-serif font-bold text-dark mb-6 leading-tight"
                style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
                The Story of{" "}
                <span style={{
                  background: "linear-gradient(120deg,#C71585 0%,#FF69B4 50%,#8B008B 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer-move 5s linear infinite"
                }}>Rajashree</span>
              </h2>

              <p className="text-dark/70 mb-6 leading-relaxed text-base md:text-lg">
                With over{" "}
                <span className="font-bold text-[#C71585]">10 years of hands-on experience</span>{" "}
                in beauty and wellness, Rajashree's journey has been dedicated to enhancing natural beauty
                and giving every client a confidence-boosting experience.
              </p>

              {/* Quote card */}
              <div className="relative p-6 md:p-8 rounded-2xl overflow-hidden border border-pink-100 mb-8"
                style={{ background: "linear-gradient(135deg, rgba(255,240,248,0.8), rgba(255,255,255,0.9))" }}>
                <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl"
                  style={{ background: "linear-gradient(180deg,#FF69B4,#C71585)" }} />
                <div className="absolute -top-3 left-5 text-7xl text-[#C71585]/10 font-serif leading-none select-none">"</div>
                <p className="font-serif italic text-gray-800 relative z-10 leading-relaxed text-lg md:text-xl">
                  Beauty is not just about how you look, it's about how you feel.
                </p>
                <p className="text-right text-[#C71585] font-bold text-sm mt-3 tracking-widest uppercase">— Rajashree</p>
              </div>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {["Premium Facials","Waxing Expert","Makeup Artist","Nail Art","Hair Spa","Bleach & Cleanup"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-bold bg-white/80 border border-pink-200 text-[#C71585] shadow-sm backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== LUXURY BENTO GRID — WHY CHOOSE US ===== */}
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

        {/* Animated background blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] pointer-events-none transform-gpu will-change-transform"
          style={{ background: "radial-gradient(circle, rgba(255,192,203,0.35) 0%, transparent 70%)", animation: "float-blob-1 25s ease-in-out infinite" }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] pointer-events-none transform-gpu will-change-transform"
          style={{ background: "radial-gradient(circle, rgba(199,21,133,0.15) 0%, transparent 70%)", animation: "float-blob-2 30s ease-in-out infinite reverse" }} />

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

          {/* Seamless Bento Block */}
          <div className="reveal relative w-full rounded-[2.5rem] overflow-hidden border border-white shadow-[0_20px_50px_rgba(199,21,133,0.15)] bg-pink-50/70 backdrop-blur-sm transform-gpu">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px] auto-rows-[220px] bg-white/40">
              {whyCards.map((card) => (
                <div
                  key={card.id}
                  className={`group relative overflow-hidden flex flex-col justify-end p-6 md:p-8 cursor-default ${card.span}`}
                >
                  <div className="absolute inset-0 z-0 overflow-hidden transform-gpu bg-white">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover opacity-70 transform-gpu will-change-transform group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out" />
                  </div>
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${card.accent}15, transparent 70%)` }} />
                  <div className="absolute inset-0 z-10 backdrop-blur-md opacity-90 group-hover:opacity-85 transition-opacity duration-500"
                    style={{ background: card.bg }} />
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
                      <h3 className="font-serif font-bold text-xl md:text-2xl mb-2" style={{ color: "#1a1a1a" }}>{card.title}</h3>
                      <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">{card.desc}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }} />
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
