import React from "react";
import { Phone, Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="w-full py-16 md:py-28 relative overflow-hidden">
      {/* Animated background */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="absolute inset-0 dot-pattern opacity-30 -z-10"></div>
      {[...Array(4)].map((_,i) => (
        <div key={i} className="petal" style={{
          width:`${12+i*4}px`, height:`${8+i*3}px`,
          background:`rgba(255,192,203,${0.2+i*0.05})`,
          right:`${i*25+5}%`, animationDuration:`${13+i*3}s`, animationDelay:`${i*2}s`
        }}></div>
      ))}

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="text-accent/60 text-xs font-bold tracking-[0.3em] uppercase">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-dark mt-3 mb-4">Contact Us</h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-accent"></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <p className="text-dark/60 text-xl">We look forward to welcoming you to Rajashree Salon.</p>
        </div>

        {/* Contact Card */}
        <div className="relative rounded-[3rem] p-10 md:p-14 overflow-hidden border border-white/60 shadow-[0_30px_80px_rgba(255,105,180,0.15)] reveal" style={{ background:"linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,224,240,0.7))" }}>
          {/* Decorative background elements */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/15 rounded-full blur-3xl"></div>
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background:"linear-gradient(90deg,#FFC0CB,#FF69B4,#C71585,#8B008B,#C71585,#FF69B4,#FFC0CB)" }}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative z-10">

            {/* Contact Details */}
            <div className="flex flex-col justify-center space-y-8">
              <h3 className="font-serif text-3xl text-dark font-bold mb-2">Reach Us Directly</h3>

              <a href="tel:+917738232436" className="flex items-center gap-5 group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,105,180,0.5)] transition-all duration-300" style={{ background:"linear-gradient(135deg,#FF69B4,#C71585)" }}>
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-xs text-dark/40 uppercase tracking-widest mb-0.5 font-semibold">Call Us</p>
                  <p className="text-2xl font-serif text-dark group-hover:text-accent transition-colors font-bold">+91 77382 32436</p>
                </div>
              </a>

              <a href="mailto:adkrajsru@gmail.com" className="flex items-center gap-5 group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,105,180,0.5)] transition-all duration-300" style={{ background:"linear-gradient(135deg,#f5a7d3,#C71585)" }}>
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-xs text-dark/40 uppercase tracking-widest mb-0.5 font-semibold">Email Us</p>
                  <p className="text-xl font-serif text-dark group-hover:text-accent transition-colors font-bold">adkrajsru@gmail.com</p>
                </div>
              </a>

            </div>

            {/* Booking Buttons */}
            <div className="flex flex-col justify-center space-y-5">
              <div className="mb-4">
                <span className="text-accent/60 text-xs font-bold tracking-[0.3em] uppercase">Instant Booking</span>
                <h3 className="font-serif text-4xl text-dark font-bold mt-2">Book Now</h3>
                <p className="text-dark/55 mt-2 text-lg">Connect with us for your next beauty session.</p>
              </div>

              <a href="https://wa.me/917738232436" target="_blank" rel="noreferrer"
                className="btn-glow relative w-full py-5 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
                style={{ background:"linear-gradient(135deg,#25D366,#128C7E)" }}>
                {/* Shimmer effect */}
                <span className="absolute inset-0 opacity-0 hover:opacity-100" style={{ background:"linear-gradient(135deg,rgba(255,255,255,0.15),transparent)" }}></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="none" className="relative z-10">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.924 1.524C6.155 1.524 1.472 6.207 1.472 11.976a10.38 10.38 0 0 0 1.552 5.477L1.472 22.476l5.166-1.527a10.438 10.438 0 0 0 5.286 1.427C17.693 22.376 22.376 17.693 22.376 11.924c0-2.786-1.085-5.407-3.055-7.377A10.37 10.37 0 0 0 11.924 1.524zm0 19.038a8.617 8.617 0 0 1-4.396-1.203l-.315-.188-3.065.906.925-2.983-.205-.33a8.583 8.583 0 0 1-1.321-4.568c0-4.74 3.857-8.597 8.597-8.597 2.297 0 4.455.895 6.079 2.519a8.551 8.551 0 0 1 2.518 6.079c0 4.74-3.857 8.597-8.597 8.597z"/>
                </svg>
                <span className="relative z-10">WhatsApp Message</span>
              </a>

              <a href="tel:+917738232436"
                className="w-full py-5 rounded-2xl border-2 border-primary/40 text-dark font-bold text-lg flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm hover:border-accent hover:text-accent hover:-translate-y-1.5 transition-all duration-300 shadow-md">
                <Phone size={24} />
                Call Directly
              </a>

              <a href="mailto:adkrajsru@gmail.com"
                className="w-full py-5 rounded-2xl border-2 border-primary/40 text-dark font-bold text-lg flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm hover:border-accent hover:text-accent hover:-translate-y-1.5 transition-all duration-300 shadow-md">
                <Mail size={24} />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
