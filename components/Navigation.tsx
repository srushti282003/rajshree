import React, { useEffect, useState } from "react";

const navItems = [
  { id:"home", label:"Home" },
  { id:"services", label:"Services" },
  { id:"about", label:"About" },
  { id:"gallery", label:"Gallery" },
  { id:"contact", label:"Contact" },
];

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const pos = window.scrollY + window.innerHeight / 3;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= pos) { setActiveSection(navItems[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: "smooth" });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-3 shadow-[0_4px_30px_rgba(255,105,180,0.15)]" : "py-4"}`}
        style={{ background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,192,203,0.3)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center">

          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-md group-hover:scale-110 transition-transform duration-300" style={{ background:"linear-gradient(135deg,#FF69B4,#C71585)" }}>💄</div>
            <span className="text-xl font-serif font-bold text-accent group-hover:text-secondary transition-colors duration-300">Rajashree Salon</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative ${activeSection === item.id ? "text-white shadow-md" : "text-dark/65 hover:text-accent hover:bg-primary/10"}`}
                style={activeSection === item.id ? { background:"linear-gradient(135deg,#FF69B4,#C71585)" } : {}}>
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button onClick={() => scrollTo("contact")}
              className="btn-glow px-7 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background:"linear-gradient(135deg,#FF69B4,#C71585)" }}>
              Book Now ✨
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-xl hover:bg-primary/10 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`block h-0.5 bg-accent rounded-full transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
            <span className={`block h-0.5 bg-accent rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-5"}`}></span>
            <span className={`block h-0.5 bg-accent rounded-full transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4"}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className={`absolute top-0 right-0 w-72 h-full transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ background:"linear-gradient(160deg,#fff5f8,#fff,#ffe4f5)", boxShadow:"-10px 0 40px rgba(255,105,180,0.2)" }}
          onClick={e => e.stopPropagation()}>
          {/* Mobile menu header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-primary/20">
            <span className="font-serif text-xl text-accent font-bold">Rajashree Salon</span>
            <button onClick={() => setMenuOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 text-accent hover:bg-accent hover:text-white transition-all duration-300 text-lg font-bold">×</button>
          </div>
          {/* Mobile nav links */}
          <div className="flex flex-col p-6 gap-2">
            {navItems.map((item, i) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className={`text-left px-5 py-3.5 rounded-2xl font-semibold transition-all duration-300 ${activeSection === item.id ? "text-white shadow-md" : "text-dark/70 hover:bg-primary/10 hover:text-accent"}`}
                style={activeSection === item.id ? { background:"linear-gradient(135deg,#FF69B4,#C71585)", transitionDelay:`${i*40}ms` } : { transitionDelay:`${i*40}ms` }}>
                {item.label}
              </button>
            ))}
          </div>
          {/* Mobile CTA */}
          <div className="px-6">
            <button onClick={() => scrollTo("contact")}
              className="w-full py-4 rounded-2xl text-white font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 btn-glow"
              style={{ background:"linear-gradient(135deg,#FF69B4,#C71585)" }}>
              Book Appointment ✨
            </button>
            <a href="https://wa.me/917738232436" target="_blank" rel="noreferrer"
              className="mt-3 w-full py-4 rounded-2xl text-white font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
              style={{ background:"linear-gradient(135deg,#25D366,#128C7E)" }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
