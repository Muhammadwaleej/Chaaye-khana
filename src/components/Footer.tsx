import React from "react";
import { Coffee, MapPin, Clock, Phone, Heart, Globe, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-brand-cream border-t border-brand-cream/10 pt-20 pb-32 sm:pb-20 relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 rounded-full bg-brand-brown/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND DETAIL (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-brand-charcoal border border-brand-gold/30 rounded-none shadow-2xl">
                <Coffee className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold tracking-wider text-brand-cream">
                  CHAAYE KHANA
                </h4>
                <p className="font-mono text-[9px] tracking-widest text-brand-gold uppercase text-left">
                  Multan Premium Lounge
                </p>
              </div>
            </div>

            <p className="font-sans text-brand-cream-dark/60 text-xs sm:text-sm leading-relaxed">
              Serving premium leaf-tea legacies, artisan breakfast tables, and cozy rooftop memories in the ancient City of Saints. Designed to celebrate Pakistan's legendary tea culture in high comfort.
            </p>

            <div className="flex items-center gap-3 font-mono text-[9px] text-brand-gold tracking-[0.2em] uppercase">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Gulgasht Colony</span>
              </span>
              <span>•</span>
              <span>Dine-In / Delivery</span>
            </div>
          </div>

          {/* COLUMN 2: SCHEDULE DETAILS (4 cols) */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-serif text-base font-bold text-brand-cream uppercase tracking-[0.15em] flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-gold" />
              Lounge Opening Hours
            </h4>
            <div className="h-0.5 w-12 bg-brand-gold"></div>

            <ul className="space-y-3 font-sans text-xs sm:text-sm text-brand-cream-dark/60">
              <li className="flex justify-between border-b border-brand-cream/5 pb-2">
                <span>Monday - Thursday</span>
                <span className="font-mono font-medium text-brand-gold">08:00 AM - 01:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-brand-cream/5 pb-2">
                <span>Friday Traditional Prayers</span>
                <span className="font-mono font-medium text-brand-gold font-bold">11:00 AM - 02:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-brand-cream/5 pb-2">
                <span>Saturday - Sunday</span>
                <span className="font-mono font-medium text-brand-gold">08:00 AM - 02:00 AM</span>
              </li>
              <li className="text-brand-gold font-mono text-[10px] uppercase pt-1">
                <span>* Serving Breakfast (Desi / Turkish) Till 3:00 PM Daily</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: ADDRESS MAP BLOCK (4 cols) */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-serif text-base font-bold text-brand-cream uppercase tracking-[0.15em] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-gold" />
              Store Location
            </h4>
            <div className="h-0.5 w-12 bg-brand-gold"></div>

            <div className="p-5 rounded-none border border-brand-cream/10 bg-brand-charcoal/50 space-y-3 shadow-2xl">
              <div className="flex gap-2.5">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="font-sans text-xs text-brand-cream-dark/60 leading-relaxed">
                  <strong>Chaaye Khana</strong>, 74 A Gulgasht Colony, Multan, Pakistan.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a 
                  href="tel:+923007961426" 
                  className="font-mono text-xs text-brand-gold hover:underline"
                >
                  +92 300 7961426
                </a>
              </div>
            </div>

            {/* Local SEO Keywords Anchor tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="font-sans text-[9px] font-bold text-brand-cream-dark/60 uppercase tracking-wider bg-brand-charcoal border border-brand-cream/10 px-2.5 py-1">Best Cafe in Multan</span>
              <span className="font-sans text-[9px] font-bold text-brand-cream-dark/60 uppercase tracking-wider bg-brand-charcoal border border-brand-cream/10 px-2.5 py-1">Multan Fine Dining</span>
              <span className="font-sans text-[9px] font-bold text-brand-cream-dark/60 uppercase tracking-wider bg-brand-charcoal border border-brand-cream/10 px-2.5 py-1">High Tea Gulgasht</span>
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS CREDITS */}
        <div className="pt-10 border-t border-brand-cream/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center text-brand-cream-dark/50 font-sans text-xs">
          <div>
            <p>© {currentYear} Chaaye Khana Multan. All Rights Preserved.</p>
            <p className="text-[10px] text-brand-gold/50 mt-1 font-mono uppercase tracking-widest">
              An Artisan culinary tribute honoring local Multani heritage
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>for the Multan Community</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
