import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const servicesData = [
  {
    id: "01",
    title: "THREADING",
    desc: "Precision shaping for a flawless, natural look tailored perfectly to your face shape.",
    items: ["Eyebrows", "Upper Lip", "Chin", "Forehead", "Side Lock", "Full Face"],
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&fit=crop",
    accent: "#E91E63"
  },
  {
    id: "02",
    title: "WAXING",
    desc: "Silky smooth skin that lasts weeks, using premium gentle wax formulations.",
    items: ["Full Arms & Legs", "Underarms", "Stomach & Back", "Bikini", "Full Body", "Face Wax"],
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&fit=crop",
    accent: "#D81B60"
  },
  {
    id: "03",
    title: "FACIAL",
    desc: "Rejuvenate with premium organic fruit extracts and anti-aging botanicals.",
    items: ["Fruit Facial", "D Tan Cleanup", "Sara Fruit", "O3+ Premium", "Wine Facial", "Lotus Glow"],
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&fit=crop",
    accent: "#8E24AA"
  },
  {
    id: "04",
    title: "PEDICURE",
    desc: "Relaxing foot care, dead skin removal, and deep tan reduction therapies.",
    items: ["Basic Pedicure", "SPA Pedicure", "D Tan Pedicure", "Heel Repair", "Nail Polishing", "Foot Massage"],
    img: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=1200&fit=crop",
    accent: "#00897B"
  },
  {
    id: "05",
    title: "HAIR SPA",
    desc: "Nourishing deep-conditioning care for silky, strong, and healthy hair.",
    items: ["Deep Conditioning", "Anti-Dandruff Spa", "Keratin Spa", "Scalp Massage", "Hair Fall Control", "Color Protect"],
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&fit=crop",
    accent: "#F39C12"
  }
];

interface CardProps {
  i: number;
  data: typeof servicesData[0];
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ i, data, progress, range, targetScale }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-screen w-full flex items-center justify-center sticky top-0 pt-[80px]">
      <motion.div 
        ref={containerRef}
        style={{ 
          scale, 
          top: "80px",
        }}
        className="relative flex flex-col md:flex-row w-full max-w-4xl h-[60vh] md:h-[45vh] origin-top bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100 will-change-transform"
      >
        {/* Hardware-accelerated darkening overlay */}
        <motion.div style={{ opacity: useTransform(progress, range, [0, 0.5]) }} className="absolute inset-0 bg-black z-20 pointer-events-none will-change-opacity" />

        {/* Left: Content */}
        <div className="w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-center h-full relative z-10 bg-gradient-to-br from-[#FFFDFD] to-[#fff5f8]">
          <div className="absolute top-0 left-0 w-full h-1.5" style={{ backgroundColor: data.accent }} />
          
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 tracking-wide mb-2 md:mb-3">
            {data.title}
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
            {data.desc}
          </p>

          <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4 md:mb-6">
            {data.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 md:gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: data.accent }}></span>
                <span className="text-gray-700 font-medium text-[10px] md:text-xs">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center mt-auto">
            <a href="https://wa.me/917738232436" target="_blank" rel="noreferrer"
              className="px-5 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold text-white shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2"
              style={{ backgroundColor: data.accent }}>
              Book Appointment →
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 h-full relative overflow-hidden hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white z-10"></div>
          <img src={data.img} alt={data.title} className="w-full h-full object-cover" loading="lazy" />
        </div>
      </motion.div>
    </div>
  );
};

const StickyStackedCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    // Much shorter scrolling height so it scrolls fast with no gap
    <section ref={containerRef} className="relative w-full bg-[#fdfafb]" style={{ minHeight: `${servicesData.length * 60}vh` }}>
      
      {/* Static subtle background */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-50 via-[#fdfafb] to-[#fdfafb] opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 -mt-20">
        {/* Stacked Cards */}
        <div className="relative w-full">
          {servicesData.map((service, i) => {
            const targetScale = 1 - ((servicesData.length - i) * 0.04);
            const range = [i * 0.2, 1];

            return (
              <Card 
                key={service.id} 
                i={i} 
                data={service} 
                progress={scrollYProgress} 
                range={range} 
                targetScale={targetScale} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StickyStackedCards;
