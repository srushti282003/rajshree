import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper/modules";
import { X } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const reviews = [
  { name:"Priya Sharma", service:"Bridal Makeup & Spa", text:"Rajashree made me look like an absolute princess on my big day! The makeup was flawless, light, and exactly what I wanted. The pre-bridal spa melted all my wedding stress away.", rating:5 },
  { name:"Neha Patel", service:"Fruit Facial & Threading", text:"I have been visiting Rajashree for months now. Her fruit facials give me an instant glow, and her threading is entirely painless. She is so professional and sweet.", rating:5 },
  { name:"Anjali Desai", service:"Full Body Waxing", text:"I was always nervous about waxing, but Rajashree made the experience so comfortable. Very hygienic setup and premium products used. Highly recommended!", rating:5 },
  { name:"Roshni Singh", service:"Manicure & Pedicure SPA", text:"The best pedicure I have ever had! The massage was so relaxing, and my feet feel incredibly soft. The salon vibe is so peaceful and luxurious.", rating:5 },
  { name:"Kavita Verma", service:"D Tan Cleanup", text:"Got a D-Tan cleanup done before a family function. The results were visible instantly! Rajashree really knows her skincare well.", rating:5 },
  { name:"Meera Iyer", service:"Hair Spa & Head Massage", text:"Absolutely magical hands! The head massage put me to sleep. My hair feels so silky and healthy after the spa treatment. Will visit again!", rating:5 },
];

// Working, verified Unsplash salon images
const galleryImages = [
  { src:"https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&fit=crop", label:"Salon Interior", span:"col-span-1 row-span-2" },
  { src:"https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&fit=crop", label:"Bridal Makeup", span:"col-span-1" },
  { src:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&fit=crop", label:"Facial Treatment", span:"col-span-1" },
  { src:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&fit=crop", label:"Body Spa", span:"col-span-1" },
  { src:"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1000&fit=crop", label:"Makeup Session", span:"col-span-1" },
  { src:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&fit=crop", label:"Pedicure & Relax", span:"col-span-1 row-span-2" },
];

const Gallery: React.FC = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="w-full py-28 relative overflow-hidden">
      {/* Animated background */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="absolute inset-0 dot-pattern opacity-30 -z-10"></div>
      {[...Array(5)].map((_,i) => (
        <div key={i} className="petal" style={{
          width:`${10+i*5}px`, height:`${7+i*4}px`,
          background:`rgba(255,105,180,${0.15+i*0.05})`,
          left:`${i*22+3}%`, animationDuration:`${11+i*3}s`, animationDelay:`${i*1.8}s`
        }}></div>
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Gallery Header */}
        <div className="text-center mb-20 reveal">
          <span className="text-accent/60 text-xs font-bold tracking-[0.3em] uppercase">Visual Showcase</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-dark mt-3 mb-4">Gallery & Moments</h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-accent"></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-ping"></div>
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <p className="text-dark/60 text-lg">Click any image to view in fullscreen.</p>
        </div>

        {/* Masonry-Style Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-32 auto-rows-[220px] reveal">
          {galleryImages.map((img, idx) => (
            <div key={idx}
              className={`relative group overflow-hidden rounded-3xl shadow-lg cursor-pointer ${img.span}`}
              onClick={() => setLightboxImg(img.src)}>
              <img src={img.src} alt={img.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-start justify-end p-6">
                <span className="text-white font-serif text-lg font-bold mb-1">{img.label}</span>
                <span className="text-white/70 text-xs flex items-center gap-1">⤢ View Full</span>
              </div>
              {/* Corner shine */}
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background:"linear-gradient(135deg,rgba(255,255,255,0.15) 0%,transparent 50%)" }}></div>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="text-center mb-16 reveal">
          <span className="text-accent/60 text-xs font-bold tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-dark mt-3 mb-4">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-accent"></div>
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
        </div>

        <div className="max-w-sm md:max-w-lg mx-auto mb-16 relative reveal">
          {/* Glow behind swiper */}
          <div className="absolute -inset-16 rounded-full blur-3xl -z-10" style={{ background:"radial-gradient(circle,rgba(255,192,203,0.5),rgba(199,21,133,0.1),transparent)" }}></div>

          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination]}
            autoplay={{ delay:3500, disableOnInteraction:false }}
            pagination={{ clickable:true }}
            className="w-full"
            style={{ height:"420px" }}
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx} className="rounded-[2rem] overflow-hidden relative" style={{ background:"linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,224,240,0.9))", border:"1px solid rgba(255,192,203,0.4)", boxShadow:"0 20px 60px rgba(255,105,180,0.2)" }}>
                {/* Top accent bar */}
                <div className="h-1.5 w-full" style={{ background:"linear-gradient(90deg,#FFC0CB,#FF69B4,#C71585)" }}></div>
                <div className="p-8 flex flex-col h-full">
                  <div className="text-7xl text-accent/10 font-serif leading-none -mt-2 -ml-1">"</div>
                  <div className="flex text-accent text-2xl mb-4 -mt-4">{"★".repeat(review.rating)}</div>
                  <p className="text-dark/75 text-base italic leading-relaxed flex-1 line-clamp-5">"{review.text}"</p>
                  <div className="mt-4 pt-4 border-t border-primary/20">
                    <h4 className="font-serif text-lg font-bold text-dark">{review.name}</h4>
                    <p className="text-xs text-accent font-semibold uppercase tracking-widest mt-0.5">{review.service}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom CTA */}
        <div className="text-center reveal">
          <p className="text-dark/60 text-lg mb-6">Join hundreds of happy clients — book your session today!</p>
          <a href="https://wa.me/917738232436" target="_blank" rel="noreferrer"
            className="btn-glow inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg hover:-translate-y-1 transition-all duration-300"
            style={{ background:"linear-gradient(135deg,#FF69B4,#C71585)" }}>
            Book Your Appointment 💄
          </a>
        </div>

      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" style={{ background:"rgba(0,0,0,0.92)" }}
          onClick={() => setLightboxImg(null)}>
          <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-all flex items-center justify-center">
            <X size={28} />
          </button>
          <img src={lightboxImg} className="max-w-full max-h-[88vh] object-contain rounded-2xl shadow-[0_0_80px_rgba(255,105,180,0.3)]" alt="Gallery Fullscreen"
            onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
