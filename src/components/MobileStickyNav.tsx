import React from "react";
import { Compass, BookOpen, Clock, Calendar, ShoppingBag } from "lucide-react";

interface MobileStickyNavProps {
  onScrollToSection: (sectionId: string) => void;
  onReservationOpen: () => void;
  onCartOpen: () => void;
  cartItemCount: number;
}

export default function MobileStickyNav({
  onScrollToSection,
  onReservationOpen,
  onCartOpen,
  cartItemCount,
}: MobileStickyNavProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-charcoal/95 border-t border-brand-cream/10 backdrop-blur-md p-2 w-full mx-auto shadow-2xl">
      <div className="flex justify-around items-center">
        
        {/* HOME / HERO SHORTCUT */}
        <button
          onClick={() => onScrollToSection("hero")}
          className="flex flex-col items-center gap-1 p-2 text-brand-cream-dark/60 hover:text-brand-gold transition-colors cursor-pointer"
        >
          <Compass className="w-5 h-5" />
          <span className="font-sans text-[9px] font-medium tracking-[0.1em] uppercase">Home</span>
        </button>

        {/* INTERACTIVE MENU OVERVIEW */}
        <button
          onClick={() => onScrollToSection("full-menu")}
          className="flex flex-col items-center gap-1 p-2 text-brand-cream-dark/60 hover:text-brand-gold transition-colors cursor-pointer"
        >
          <BookOpen className="w-5 h-5" />
          <span className="font-sans text-[9px] font-medium tracking-[0.1em] uppercase">Menu</span>
        </button>

        {/* AI CONCIERGE GUIDE */}
        <button
          onClick={() => onScrollToSection("ai-concierge")}
          className="flex flex-col items-center gap-1 p-2 text-brand-cream-dark/60 hover:text-brand-gold transition-colors cursor-pointer"
        >
          <Clock className="w-5 h-5 text-brand-gold" />
          <span className="font-sans text-[9px] font-bold text-brand-gold tracking-[0.12em] uppercase">AI sommelier</span>
        </button>

        {/* BOOK TABLE */}
        <button
          onClick={onReservationOpen}
          className="flex flex-col items-center gap-1 p-2 text-brand-cream-dark/60 hover:text-brand-gold transition-colors cursor-pointer"
        >
          <Calendar className="w-5 h-5" />
          <span className="font-sans text-[9px] font-medium tracking-[0.1em] uppercase">Book</span>
        </button>

        {/* SHOPPING BAG CONTROLS */}
        <button
          onClick={onCartOpen}
          className="relative flex flex-col items-center gap-1 p-2 text-brand-cream-dark/60 hover:text-brand-gold transition-colors cursor-pointer"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartItemCount > 0 && (
            <span className="absolute top-1 right-1.5 flex items-center justify-center w-4 h-4 text-[9px] font-bold text-brand-charcoal bg-brand-gold rounded-none border border-brand-charcoal shadow animate-pulse">
              {cartItemCount}
            </span>
          )}
          <span className="font-sans text-[9px] font-medium tracking-[0.1em] uppercase">Bag</span>
        </button>

      </div>
    </div>
  );
}
