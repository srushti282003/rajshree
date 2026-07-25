import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";

const bubbles = [
  {s:70,l:"4%",d:16,dl:0},{s:110,l:"12%",d:21,dl:3},{s:55,l:"22%",d:14,dl:5.5},{s:90,l:"35%",d:19,dl:1},{s:130,l:"50%",d:24,dl:3.5},
  {s:65,l:"63%",d:16,dl:7},{s:100,l:"74%",d:20,dl:2},{s:80,l:"84%",d:18,dl:4.5},{s:50,l:"92%",d:13,dl:6.5},{s:120,l:"28%",d:22,dl:8},
];

const App: React.FC = () => {
  const [showTunnel, setShowTunnel] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTunnel(false), 5200);
    return () => clearTimeout(timer);
  }, []);

  // Reveal on scroll — starts after tunnel exits
  useEffect(() => {
    if (showTunnel) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const attach = () => document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    // Small delay so DOM is ready
    const t = setTimeout(attach, 200);
    return () => { clearTimeout(t); observer.disconnect(); };
  }, [showTunnel]);

  const WaveDivider = ({ flip = false, fill = "#fce4f3" }) => (
    <div className="w-full overflow-hidden relative z-20" style={{ lineHeight: 0, marginTop: -1, marginBottom: -1 }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full" style={{ height: "56px", display:"block", transform: flip ? "scaleX(-1)" : "none" }}>
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" fill={fill} />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen text-dark relative overflow-x-hidden" style={{ background:"#FFFDFD" }}>

      {/* Global Bubbles */}
      {bubbles.map((b,i)=>(
        <div key={i} className="bubble" style={{ width:b.s,height:b.s,left:b.l,animationDuration:`${b.d}s`,animationDelay:`${b.dl}s` }}>
          <div className="bubble-inner" style={{ animationDuration:`${3+i*0.4}s` }}></div>
        </div>
      ))}

      <Navigation />

      {/* 3D Tunnel */}
      <div className={`fixed inset-0 z-50 pointer-events-none transition-all duration-[2500ms] ease-in-out ${showTunnel ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}>
        {showTunnel && <Hero />}
      </div>

      {/* Content */}
      <main className={`relative z-10 w-full transition-opacity duration-1000 ${showTunnel ? "opacity-0" : "opacity-100"}`}>

        <div id="home"><Home /></div>

        {/* === SECTION BORDER: decorative pink chain divider === */}
        <div className="relative z-20 w-full py-3 overflow-hidden" style={{ background:"linear-gradient(135deg,#1A1A1A,#2d0a1a)" }}>
          <div className="flex items-center justify-center gap-0 flex-nowrap overflow-hidden">
            {[...Array(30)].map((_,i)=>(
              <div key={i} className="flex items-center gap-0 flex-shrink-0">
                <div className="w-5 h-5 rounded-full border-2 border-primary/60 flex items-center justify-center" style={{ boxShadow:"0 0 8px rgba(255,192,203,0.4)" }}>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="h-px w-4 bg-gradient-to-r from-primary/60 to-secondary/60"></div>
              </div>
            ))}
          </div>
        </div>

        <div id="services" className="section-services relative z-10"><Services /></div>

        <WaveDivider fill="#fff5f8" />
        <div id="about" className="relative z-10"><About /></div>

        {/* === DECORATIVE BORDER LINE === */}
        <div className="relative z-20 w-full py-1 overflow-hidden" style={{ background:"linear-gradient(90deg,#FFC0CB,#FF69B4,#C71585,#8B008B,#C71585,#FF69B4,#FFC0CB)", backgroundSize:"200% auto", animation:"shimmer-x 4s linear infinite" }}>
          <div className="h-1"></div>
        </div>

        <div id="gallery" className="section-gallery relative z-10"><Gallery /></div>

        <WaveDivider fill="#fff0f7" flip />
        <div id="contact" className="section-contact relative z-10"><Contact /></div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 py-14 border-t border-primary/20" style={{ background:"linear-gradient(135deg,#1A1A1A 0%,#2d0a1a 100%)" }}>
        {/* Top pink line */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background:"linear-gradient(90deg,transparent,#FF69B4,#C71585,#FF69B4,transparent)" }}></div>
        <div className="max-w-7xl mx-auto px-5 text-center">
          <div className="mb-2 text-3xl">💄</div>
          <h3 className="font-serif text-3xl text-primary mb-2">Rajashree Salon</h3>
          <p className="text-white/40 mb-6 text-sm uppercase tracking-widest">Where Beauty Meets Expertise · Thane</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="mailto:adkrajsru@gmail.com" className="text-white/60 hover:text-primary transition-colors flex items-center gap-2">✉️ adkrajsru@gmail.com</a>
            <a href="tel:+917738232436" className="text-white/60 hover:text-primary transition-colors flex items-center gap-2">📞 +91 77382 32436</a>
            <a href="https://wa.me/917738232436" target="_blank" rel="noreferrer" className="text-white/60 hover:text-green-400 transition-colors flex items-center gap-2">💬 WhatsApp Us</a>
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-5"></div>
          <p className="text-xs text-white/25 uppercase tracking-widest">&copy; {new Date().getFullYear()} Rajashree Salon · All Rights Reserved</p>
        </div>
      </footer>

      {/* Floating FABs */}
      <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
        <a href="tel:+917738232436" title="Call Now"
          className="w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(255,105,180,0.4)] flex items-center justify-center hover:scale-110 hover:shadow-[0_4px_30px_rgba(199,21,133,0.5)] transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C71585" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
        <a href="https://wa.me/917738232436" target="_blank" rel="noreferrer" title="WhatsApp"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 relative shadow-[0_4px_25px_rgba(37,211,102,0.55)]">
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-50"></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="none" className="relative z-10"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.924 1.524C6.155 1.524 1.472 6.207 1.472 11.976a10.38 10.38 0 0 0 1.552 5.477L1.472 22.476l5.166-1.527a10.438 10.438 0 0 0 5.286 1.427C17.693 22.376 22.376 17.693 22.376 11.924c0-2.786-1.085-5.407-3.055-7.377A10.37 10.37 0 0 0 11.924 1.524zm0 19.038a8.617 8.617 0 0 1-4.396-1.203l-.315-.188-3.065.906.925-2.983-.205-.33a8.583 8.583 0 0 1-1.321-4.568c0-4.74 3.857-8.597 8.597-8.597 2.297 0 4.455.895 6.079 2.519a8.551 8.551 0 0 1 2.518 6.079c0 4.74-3.857 8.597-8.597 8.597z"/></svg>
        </a>
      </div>
    </div>
  );
};

export default App;
