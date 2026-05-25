import React, { useState } from "react";
import { Coffee, ShoppingBag, Calendar, Sparkles, MapPin, Menu, X } from "lucide-react";

interface HeaderProps {
  onCartOpen: () => void;
  cartItemCount: number;
  onReservationOpen: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({
  onCartOpen,
  cartItemCount,
  onReservationOpen,
  onScrollToSection,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Our Ambience", id: "ambience" },
    { label: "Signature Selection", id: "signature" },
    { label: "Interactive Menu", id: "full-menu" },
    { label: "AI Sommelier Guide", id: "ai-concierge" },
    { label: "Multan Delivery", id: "delivery" },
  ];

  const handleLinkClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-brand-charcoal/95 backdrop-blur-md border-b border-brand-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO AREA */}
          <div 
            onClick={() => handleLinkClick("hero")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 border-2 border-brand-gold flex items-center justify-center rotate-45 group-hover:bg-brand-brown transition-all duration-300 shrink-0">
              <span className="-rotate-45 font-serif text-lg font-bold text-brand-gold">C</span>
            </div>
            <div>
              <h1 className="font-serif text-base sm:text-xl font-bold tracking-[0.15em] uppercase text-brand-cream group-hover:text-brand-gold transition-colors duration-300">
                CHAAYE KHANA
              </h1>
              <p className="font-mono text-[9px] tracking-[0.15em] text-brand-gold/80 uppercase">
                Multan Premium Lounge
              </p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-medium opacity-80">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="font-sans text-brand-cream/90 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Quick Reservation Button */}
            <button
              onClick={onReservationOpen}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 border border-brand-cream/20 text-brand-cream hover:text-brand-gold hover:bg-brand-cream/5 font-sans font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-gold" />
              Book Table
            </button>

            {/* Cart Button */}
            <button
              onClick={onCartOpen}
              className="relative p-2.5 sm:p-3 bg-brand-charcoal text-brand-cream border border-brand-brown hover:border-brand-gold rounded-full transition-all duration-300 shadow-sm"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-black bg-brand-gold rounded-full shadow border border-brand-charcoal animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 bg-brand-brown/40 border border-brand-brown text-brand-cream/80 hover:text-brand-gold rounded-xl transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE INTERACTIVE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-brand-charcoal border-b border-brand-brown/50 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="block w-full text-left py-2 font-serif text-lg text-brand-cream/90 hover:text-brand-gold border-b border-brand-brown/10"
              >
                {link.label}
              </button>
            ))}
            
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  onReservationOpen();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-3 bg-brand-brown text-brand-gold rounded-lg font-sans font-semibold tracking-wide border border-brand-gold/30 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Table Reservation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
