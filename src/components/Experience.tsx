import React from "react";
import { BookOpen, Coffee, Users, Sunset, Snail, Music } from "lucide-react";

export default function Experience() {
  const pillars = [
    {
      icon: Coffee,
      title: "Authentic Tea & Kehwa Culture",
      desc: "Our tea is never rushed. From the robust, hand-boiled spiced Karak Chai to the delicate, clay-poured Royal Saffron Doodh Patti, we respect traditional Pakistani tea craftsmanship.",
    },
    {
      icon: BookOpen,
      title: "Quiet Co-Working Sanctuaries",
      desc: "Need to write your next chapter or finish code? Our soft acoustic library lounge features comfortable couches, warm lighting, and quiet zones powered by high-speed Wi-Fi.",
    },
    {
      icon: Users,
      title: "Multani Warm Hospitality",
      desc: "A warm, premium haven designed for intellectual meetups, beautiful family get-togethers, and business brunches wrapped in our premium signature wood and leather decor.",
    },
    {
      icon: Sunset,
      title: "Twinkling Rooftop View",
      desc: "Sip your Kashmiri Pink Tea under starry horizons with open air breezes, viewing ancient rooftops and historical Multani minarets illuminated in golden warm ambient lighting.",
    }
  ];

  return (
    <section id="ambience" className="py-24 bg-brand-charcoal border-t border-brand-cream/10 relative">
      
      {/* Decorative side accent lines */}
      <div className="absolute top-1/2 left-0 w-32 h-[1px] bg-brand-gold/10 hidden xl:block"></div>
      <div className="absolute top-1/2 right-0 w-32 h-[1px] bg-brand-gold/10 hidden xl:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Storytelling introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.3em] block">Signature Experience</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-brand-cream leading-tight">
              An elegant escape built for real connoisseurs
            </h2>
            <div className="h-0.5 w-20 bg-brand-gold mt-2"></div>
          </div>

          <div className="lg:col-span-7">
            <p className="font-sans text-brand-cream-dark/60 text-base leading-relaxed">
              Inspired by the iconic, aesthetic tea lounges of Pakistan, <strong className="text-brand-gold">Chaaye Khana Multan</strong> blends premium culinary fine-dining with cozy, social warmth. We don't just sell food—we serve memories, relaxation, and conversation. Step away from the city's frantic hum and claim your personal couch where tea remains the ultimate centerpiece.
            </p>
          </div>

        </div>

        {/* Feature Grid Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <div 
                key={idx}
                className="group relative p-8 rounded-none bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/40 hover:bg-brand-brown/5 transition-all duration-300 shadow-xl"
              >
                {/* Visual backlighting accent */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-brand-gold/5 blur-xl group-hover:bg-brand-gold/10 transition-all"></div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="p-3.5 bg-brand-brown border border-brand-gold/15 group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-all duration-300 text-brand-gold shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-cream group-hover:text-brand-gold transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-sans text-brand-cream-dark/60 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cinematic wide imagery card block */}
        <div className="mt-20 relative rounded-none overflow-hidden border border-brand-cream/10 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/70 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1400" 
            alt="Warm interior dining space" 
            className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 p-8 sm:p-12 z-20 max-w-xl">
            <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block mb-2">Heritage Atmosphere</span>
            <h3 className="font-serif text-2xl sm:text-4xl font-semibold text-brand-cream leading-tight mb-4">
              Where antique brickwork meets cozy leather armchairs.
            </h3>
            <p className="font-sans text-brand-cream-dark/80 text-xs sm:text-sm leading-relaxed mb-1">
              Every detail of our Gulgasht Colony outlet is calculated to encourage deep readings, cozy dates, and visual memories. Come experience the fragrance of roasting cardamom tea and warm buttery pastries.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
