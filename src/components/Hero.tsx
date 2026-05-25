import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Play, Calendar, MapPin, Sun, Clock } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onReservationOpen: () => void;
}

export default function Hero({ onScrollToSection, onReservationOpen }: HeroProps) {
  const [multanTime, setMultanTime] = useState("");
  const [multanDate, setMultanDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // Calculate Pakistan Time (UTC + 5)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const pakDate = new Date(utc + 3600000 * 5);
      
      let hours = pakDate.getHours();
      const minutes = pakDate.getMinutes().toString().padStart(2, "0");
      const seconds = pakDate.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      
      setMultanTime(`${hours}:${minutes}:${seconds} ${ampm}`);
      setMultanDate(`${days[pakDate.getDay()]}, ${months[pakDate.getMonth()]} ${pakDate.getDate()}, ${pakDate.getFullYear()}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 lg:pt-20 overflow-hidden bg-brand-charcoal">
      
      {/* Background Atmosphere: Warm Glows from the Sophisticated Dark design code */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#3B241A] blur-[120px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#556B2F] blur-[150px] opacity-20 pointer-events-none"></div>

      {/* Decorative Rotating Border Line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-brand-cream/5 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-brand-cream/5 rounded-full border-dashed pointer-events-none"></div>

      {/* CONTENT WITH GRIDS ACCORDING TO USER SPECIFICATIONS (Stacked mobile, side-by-side large screens) */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* LEFT COLUMN: THE PREMIUM BRAND CONTENT (6 cols equivalent) */}
        <div className="w-full lg:w-1/2 text-left space-y-6">
          
          {/* NOW SERVING PILL / TAG */}
          <div className="inline-block px-3.5 py-1.5 border border-brand-gold/30 text-brand-gold text-[10px] uppercase tracking-[0.3em] font-mono leading-none">
            Now Serving in Multan
          </div>

          {/* Pakistan Time and Live details */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-brand-cream-dark/60 tracking-wider">
            <span className="flex items-center gap-1.5 text-brand-gold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Cantt Cantonment</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-brand-cream">
              <Clock className="w-3.5 h-3.5 text-brand-gold" />
              <span>{multanTime || "08:15 PM"}</span>
            </span>
            <span>•</span>
            <span className="text-brand-gold/80">{multanDate || "Today"}</span>
          </div>

          {/* Luxurious Poetic Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-brand-cream leading-[1.05]">
            Tradition <span className="italic text-brand-gold font-normal">Poured</span> Into Every Cup.
          </h1>

          <p className="font-sans text-brand-cream-dark/60 text-sm sm:text-base leading-relaxed max-w-lg">
            Experience the culinary intersection of rich Pakistani tea heritage and elite modern dining in Multan. From cardamoms simmering in heavy clay pots to crisp oven-browned pizzas.
          </p>

          {/* Main Action Buttons: Rectangular and luxurious as requested */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => onReservationOpen()}
              className="px-10 py-4 bg-brand-gold text-brand-charcoal text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-cream hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-xl shadow-brand-gold/5 cursor-pointer"
            >
              Book Your Table
            </button>
            <button
              onClick={() => onScrollToSection("full-menu")}
              className="px-10 py-4 border border-brand-cream/20 text-brand-cream text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-cream/5 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Digital Menu Lounge
            </button>
          </div>

          {/* Quick Stats Block underneath */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-brand-cream/10 max-w-md">
            <div>
              <span className="block font-serif text-xl font-bold text-brand-gold">4.9 ★</span>
              <span className="block font-sans text-[10px] text-brand-cream-dark/40 uppercase tracking-wider">1.2k+ Visits</span>
            </div>
            <div>
              <span className="block font-serif text-xl font-bold text-brand-gold">0%</span>
              <span className="block font-sans text-[10px] text-brand-cream-dark/40 uppercase tracking-wider">Artificial Additives</span>
            </div>
            <div>
              <span className="block font-serif text-xl font-bold text-brand-gold">15+</span>
              <span className="block font-sans text-[10px] text-brand-cream-dark/40 uppercase tracking-wider">CTC Leaf Blends</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: PREMIUM ABSTRACT STEAM ART GRAPHICS BLOCK (6 cols equivalent) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[460px] aspect-square rounded-tl-[120px] overflow-hidden border border-brand-cream/10 bg-brand-charcoal flex items-center justify-center p-8 group shadow-2xl">
            
            {/* Dynamic Radial background grid dots representing cardamom grains & tea steam */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(#D4A373 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
            
            {/* Ambient inner soft glowing spotlight */}
            <div className="absolute w-60 h-60 rounded-full bg-brand-brown/50 blur-3xl pointer-events-none"></div>

            {/* Micro steam lines */}
            <div className="absolute bottom-6 left-12 w-48 h-[140px] opacity-25 flex gap-3 items-end justify-center pointer-events-none">
              <div className="w-1.5 h-24 bg-gradient-to-t from-brand-gold/15 to-transparent rounded-full animate-steam-slow"></div>
              <div className="w-1 h-32 bg-gradient-to-t from-brand-cream/20 to-transparent rounded-full animate-steam-medium"></div>
              <div className="w-2 h-20 bg-gradient-to-t from-brand-gold/25 to-transparent rounded-full animate-steam-fast"></div>
            </div>

            {/* Golden Circle Medallion */}
            <div className="relative w-64 h-64 border border-brand-gold/20 rounded-full flex flex-col items-center justify-center bg-brand-charcoal/90 backdrop-blur-md shadow-inner group-hover:border-brand-gold/40 transition-colors duration-500">
              <div className="w-40 h-40 border-[10px] border-[#3B241A] rounded-full shadow-2xl relative flex items-center justify-center">
                <div className="absolute top-2 right-2 w-6 h-6 bg-brand-gold rounded-full blur-sm animate-pulse"></div>
                <div className="w-10 h-10 border-2 border-brand-gold/25 flex items-center justify-center rotate-45">
                  <span className="-rotate-45 font-mono text-sm font-bold text-brand-gold">CK</span>
                </div>
              </div>
              <p className="mt-6 font-serif italic text-lg text-brand-cream">Karak & Kehwa</p>
              <p className="text-[9px] font-mono tracking-widest text-brand-gold uppercase opacity-60">Est. 2018 Multan</p>
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute -bottom-2 -left-2 bg-[#3B241A] p-5 border border-brand-gold/20 shadow-xl flex items-center space-x-3 rounded-br-2xl">
              <div className="text-2xl font-serif text-brand-gold font-bold">4.9</div>
              <div className="text-[9px] uppercase leading-tight tracking-wider font-sans text-brand-cream-dark">
                Exceptional Experience<br />
                <span className="opacity-50 text-white font-mono">Dine-in Approved</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* WAVE CUTOUT GRAPHIC BOTTOM SECTION */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-charcoal to-transparent pointer-events-none"></div>

      {/* STEAM CSS ANIMATION SHEETS */}
      <style>{`
        @keyframes steam-drift-slow {
          0% { transform: translateY(0) scale(0.9) translateX(0); opacity: 0; }
          20% { opacity: 0.3; }
          60% { opacity: 0.2; transform: translateY(-80px) scale(1.1) translateX(12px); }
          100% { transform: translateY(-160px) scale(1.3) translateX(-8px); opacity: 0; }
        }
        .animate-steam-slow {
          animation: steam-drift-slow 7s infinite ease-in-out;
        }
        .animate-steam-medium {
          animation: steam-drift-slow 5s infinite ease-in-out;
          animation-delay: 2s;
        }
        .animate-steam-fast {
          animation: steam-drift-slow 4s infinite ease-in-out;
          animation-delay: 1s;
        }
      `}</style>

    </section>
  );
}
