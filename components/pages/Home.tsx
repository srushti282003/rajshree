import React from "react";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: "smooth" });
};

const tickerItems = [
  { icon:"✨", text:"10+ Years of Excellence" }, { icon:"💄", text:"Bridal Makeup" },
  { icon:"🌸", text:"Premium Facials" }, { icon:"🧖", text:"Body Spa & Massage" },
  { icon:"💅", text:"Manicure & Pedicure" }, { icon:"🪄", text:"Threading & Waxing" },
  { icon:"💇", text:"Hair Spa" }, { icon:"👑", text:"Kapil · Envi · Juice Salons" },
  { icon:"🌟", text:"500+ Happy Clients" }, { icon:"💗", text:"100% Satisfaction" },
];

const services = [
  { title:"Threading", desc:"Precision shaping for perfect brows.", icon:"✨", img:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&fit=crop", g:"from-pink-400 to-rose-500" },
  { title:"Facials", desc:"Rejuvenate with premium fruit facials.", icon:"💆", img:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&fit=crop", g:"from-purple-400 to-pink-500" },
  { title:"Body Spa", desc:"Relax with our soothing massages.", icon:"🌸", img:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&fit=crop", g:"from-rose-400 to-fuchsia-500" },
  { title:"Makeup", desc:"Elegant looks for your special day.", icon:"💄", img:"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=600&fit=crop", g:"from-fuchsia-400 to-purple-500" },
];

const galleryRow = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&fit=crop",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&fit=crop",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&fit=crop",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=600&fit=crop",
];

const Home: React.FC = () => {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="w-full relative overflow-hidden">

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="section-home min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden" style={{ paddingTop:"76px", paddingBottom:"0" }}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&fit=crop" alt="Luxury Salon Interior" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDFD]/80 via-[#FFFDFD]/70 to-[#FFFDFD]"></div>
        </div>
        
        <div className="mesh-bg z-0"></div>
        <div className="dot-grid absolute inset-0 opacity-40 z-0 pointer-events-none"></div>

        {/* Morphing blob */}
        <div className="absolute z-0 pointer-events-none" style={{ width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle,rgba(255,192,203,0.65),rgba(255,105,180,0.25),transparent 70%)",top:"50%",left:"50%",transform:"translate(-50%,-50%)",animation:"morph 9s ease-in-out infinite",filter:"blur(8px)" }}></div>
        
        <div className="absolute z-0 pointer-events-none top-0 right-0" style={{ width:"350px",height:"350px",borderRadius:"50%",background:"radial-gradient(circle,rgba(199,21,133,0.15),transparent 70%)",filter:"blur(50px)",animation:"float-y 10s ease-in-out infinite" }}></div>
        <div className="absolute z-0 pointer-events-none bottom-0 left-0" style={{ width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle,rgba(255,105,180,0.2),transparent 70%)",filter:"blur(40px)",animation:"float-y 8s ease-in-out infinite reverse" }}></div>

        <style>{`
          @keyframes float-blob-3 {
            0%, 100% { transform: translate3d(0px, 0px, 0) scale(1); }
            33% { transform: translate3d(10vw, -10vh, 0) scale(1.15); }
            66% { transform: translate3d(-10vw, 5vh, 0) scale(0.9); }
          }
          @keyframes float-blob-4 {
            0%, 100% { transform: translate3d(0px, 0px, 0) scale(1); }
            33% { transform: translate3d(-10vw, 10vh, 0) scale(1.2); }
            66% { transform: translate3d(10vw, -5vh, 0) scale(0.85); }
          }
        `}</style>
        
        {/* Performance-friendly Animated Background Elements (Zero Lag GPU Transforms) */}
        <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] pointer-events-none transform-gpu will-change-transform opacity-40" style={{ background: "radial-gradient(circle, rgba(199,21,133,0.3) 0%, transparent 70%)", animation: "float-blob-3 20s ease-in-out infinite" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] pointer-events-none transform-gpu will-change-transform opacity-50" style={{ background: "radial-gradient(circle, rgba(255,105,180,0.3) 0%, transparent 70%)", animation: "float-blob-4 25s ease-in-out infinite reverse" }}></div>

        {/* Rotating rings */}
        <div className="hidden sm:block absolute top-20 right-12 w-28 h-28 border border-dashed border-primary/40 rounded-full pointer-events-none z-0" style={{ animation:"spin-slow 28s linear infinite" }}></div>
        <div className="hidden sm:block absolute bottom-24 left-12 border border-dashed border-secondary/40 rounded-full pointer-events-none z-0" style={{ width:"72px",height:"72px",animation:"spin-slow 20s linear infinite reverse" }}></div>

        {/* Sparkles */}
        {[{t:"25%",l:"12%",s:"2.5px",c:"#FFD700",d:"0.4s"},{t:"40%",r:"14%",s:"2px",c:"#FF69B4",d:"1.2s"},{b:"30%",l:"22%",s:"2px",c:"#C71585",d:"2s"},{t:"32%",r:"30%",s:"2px",c:"#FF69B4",d:"0.9s"}].map((sp,i)=>(
          <div key={i} className="sparkle rounded-full absolute pointer-events-none z-0" style={{ width:sp.s,height:sp.s,background:sp.c,top:sp.t,left:sp.l,right:(sp as any).r,bottom:(sp as any).b,animationDelay:sp.d,animationDuration:`${2.5+i*0.4}s` }}></div>
        ))}

        {/* ── CONTENT ── */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-5 flex flex-col items-center justify-center flex-grow">

          {/* Location badge */}
          <div className="reveal inline-flex items-center gap-1.5 sm:gap-2 glass px-3 sm:px-4 py-1.5 rounded-full mb-4 shadow-[0_4px_20px_rgba(255,105,180,0.25)] border border-primary/50" style={{ transitionDelay:"0ms", background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,240,245,0.9))" }}>
            <span className="w-1.5 h-1.5 bg-accent rounded-full hidden sm:block" style={{ animation:"sparkle-pop 1.6s ease-in-out infinite" }}></span>
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-[8px] sm:text-[10px]">Luxury Beauty · Thane</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full hidden sm:block" style={{ animation:"sparkle-pop 1.6s ease-in-out infinite",animationDelay:"0.8s" }}></span>
          </div>

          {/* Headline — super tight gap */}
          <h1 className="reveal font-serif font-bold text-dark leading-tight md:leading-none mb-1 drop-shadow-sm" style={{ fontSize:"clamp(2.2rem,11vw,6.5rem)",transitionDelay:"70ms" }}>
            Where Beauty
          </h1>
          <h1 className="reveal font-serif font-bold leading-tight md:leading-none mb-6 drop-shadow-sm" style={{ fontSize:"clamp(2.2rem,11vw,6.5rem)",transitionDelay:"130ms" }}>
            <span className="shimmer-text">Meets Expertise</span>
          </h1>

          {/* Sub-headline glass pill */}
          <div className="reveal w-full max-w-2xl mb-7" style={{ transitionDelay:"190ms" }}>
            <div className="relative rounded-xl px-5 py-3 overflow-hidden shadow-lg" style={{ background:"linear-gradient(135deg,rgba(255,255,255,0.85),rgba(255,230,242,0.8))",border:"1px solid rgba(255,192,203,0.6)",backdropFilter:"blur(16px)" }}>
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background:"linear-gradient(90deg,transparent,#FF69B4,#C71585,#FF69B4,transparent)" }}></div>
              <p className="text-dark/80 font-medium leading-snug drop-shadow-sm" style={{ fontSize:"clamp(0.85rem,2vw,1.05rem)" }}>
                <span className="font-bold text-accent">10+ years</span> of professional beauty care.
              </p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="reveal flex flex-col sm:flex-row gap-3 justify-center items-center w-full" style={{ transitionDelay:"250ms" }}>
            <button onClick={() => scrollTo("services")}
              className="btn-glow w-full sm:w-auto px-8 py-3 rounded-full text-white font-bold text-sm md:text-base transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(255,105,180,0.5)]"
              style={{ background:"linear-gradient(135deg,#FF69B4,#C71585)" }}>
              Explore Services ✨
            </button>
            <button onClick={() => scrollTo("contact")}
              className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-accent text-accent bg-white/80 backdrop-blur-md font-bold text-sm md:text-base hover:bg-accent hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* ═══════ INFINITY MARQUEE — Premium & Attractive ═══════ */}
      <section className="relative overflow-hidden shadow-2xl z-20" style={{ background:"linear-gradient(90deg, #111, #2d0a1a, #111)",paddingTop:"20px",paddingBottom:"20px", borderTop:"2px solid rgba(255,105,180,0.3)", borderBottom:"2px solid rgba(255,105,180,0.3)" }}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
        <div className="marquee-wrap relative z-10" style={{ "--tw-gradient-from-color":"#111" } as React.CSSProperties}>
          <div className="marquee-track" style={{ animation:"marquee 35s linear infinite" }}>
            {doubled.map((item, i) => (
              <div key={i} className="flex items-center flex-shrink-0 group hover:scale-110 transition-transform" style={{ gap:"12px",paddingLeft:"30px",paddingRight:"30px" }}>
                <span className="text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(255,105,180,0.8)]">{item.icon}</span>
                <span className="text-white font-bold tracking-widest uppercase text-xs md:text-sm drop-shadow-md">{item.text}</span>
                <span className="text-accent/80 text-lg ml-6 drop-shadow-[0_0_8px_rgba(199,21,133,0.8)] animate-pulse">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SALON GALLERY STRIP ═══════════════ */}
      <section className="relative overflow-hidden" style={{ background:"linear-gradient(135deg,#fff,#fff5f8,#fce4f3)",paddingTop:"60px",paddingBottom:"60px" }}>
        <div className="mesh-bg"></div>

        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-10 reveal">
            <span className="text-accent/60 font-bold uppercase tracking-[0.3em]" style={{ fontSize:"11px" }}>Inside Our World</span>
            <h2 className="font-serif font-bold text-dark mt-2" style={{ fontSize:"clamp(1.6rem,4.5vw,2.5rem)" }}>A Glimpse of Our Salon</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 reveal" style={{ gridAutoRows:"150px" }}>
            {galleryRow.map((src, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl border-2 border-white shadow-lg"
                style={{ gridRow: i===0||i===3 ? "span 2" : "span 1" }}>
                <img src={src} alt={`Salon ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow:"inset 0 0 0 2px rgba(255,105,180,0.7)" }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT TEASER ═══════════════ */}
      <section className="relative overflow-hidden" style={{ background:"linear-gradient(160deg,#fff5f8,#ffe4ee,#fce4f3)",paddingTop:"70px",paddingBottom:"70px" }}>
        <div className="mesh-bg"></div>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="w-full md:w-1/2 reveal">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/35 to-accent/15 rounded-[3rem] blur-3xl opacity-80"></div>
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=700&fit=crop" alt="Rajashree Salon"
                className="relative z-10 rounded-[2.5rem] w-full object-cover shadow-[0_15px_45px_rgba(255,105,180,0.3)] border-4 border-white/80" style={{ height:"280px" }} loading="lazy" />
              <div className="absolute -bottom-4 -right-3 z-20 glass rounded-2xl px-4 py-2 shadow-2xl border border-primary/30">
                <div className="font-serif font-bold text-accent" style={{ fontSize:"1.4rem" }}>10+</div>
                <div className="text-dark/50 uppercase tracking-wider" style={{ fontSize:"9px" }}>Years Excellence</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 reveal" style={{ transitionDelay:"100ms" }}>
            <span className="inline-block bg-primary/20 text-accent font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-3" style={{ fontSize:"10px" }}>Our Story</span>
            <h2 className="font-serif font-bold text-dark mb-3 leading-tight" style={{ fontSize:"clamp(1.6rem,4vw,2.5rem)" }}>
              Passion for Beauty,<br /><span className="shimmer-text">Crafted with Love</span>
            </h2>
            <p className="text-dark/65 leading-relaxed mb-5" style={{ fontSize:"clamp(0.85rem,2vw,0.95rem)" }}>
              With over a decade of expertise honed at Kapil Salon, Envi Salon, and Juice Salon, Rajashree now brings you the very best in beauty — a personalized, luxurious experience in a welcoming Thane setting.
            </p>
            <button onClick={() => scrollTo("about")}
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold hover:-translate-y-1 transition-all duration-300 shadow-lg text-xs"
              style={{ background:"linear-gradient(135deg,#1A1A1A,#2d0a1a)" }}>
              Meet Rajashree <span className="text-primary">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative overflow-hidden text-center" style={{ background:"linear-gradient(180deg,#fff,#fff5f8,#ffe8f2)",paddingTop:"60px",paddingBottom:"70px" }}>
        <div className="mesh-bg"></div>
        <div className="absolute pointer-events-none" style={{ width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle,rgba(255,192,203,0.4),transparent 70%)",top:"50%",left:"50%",transform:"translate(-50%,-50%)",animation:"float-y 5s ease-in-out infinite",filter:"blur(20px)" }}></div>
        <div className="relative z-10 max-w-2xl mx-auto px-5 reveal">
          <span className="text-accent/60 font-bold uppercase tracking-[0.3em]" style={{ fontSize:"11px" }}>Ready?</span>
          <h2 className="font-serif font-bold text-dark mt-2 mb-3" style={{ fontSize:"clamp(1.8rem,6vw,3rem)" }}>
            Ready for Your <span className="shimmer-text">Glow-Up?</span>
          </h2>
          <p className="text-dark/60 mb-6" style={{ fontSize:"clamp(0.85rem,2vw,1rem)" }}>Book your appointment today and experience the Rajashree difference.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/917738232436" target="_blank" rel="noreferrer"
              className="btn-glow w-full sm:w-auto px-8 py-3 rounded-full text-white font-bold text-sm flex items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              style={{ background:"linear-gradient(135deg,#25D366,#128C7E)" }}>
              💬 WhatsApp Us
            </a>
            <a href="tel:+917738232436"
              className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-accent text-accent font-bold text-sm flex items-center justify-center gap-2 hover:bg-accent hover:text-white hover:-translate-y-1 transition-all duration-300 bg-white/70 backdrop-blur-sm">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
