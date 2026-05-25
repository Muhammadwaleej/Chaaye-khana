import React from "react";
import { Star, ShieldAlert, Heart, ShoppingCart } from "lucide-react";
import { MenuItem } from "../types";
import { MENU_ITEMS } from "../data";

interface SignatureDishesProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function SignatureDishes({ onAddToCart }: SignatureDishesProps) {
  // Extract items marked as bestseller or chefSpecial to feature
  const signatures = MENU_ITEMS.filter(item => item.isChefSpecial || item.isBestseller).slice(0, 6);

  return (
    <section id="signature" className="py-24 bg-brand-charcoal/90 border-t border-brand-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.3em] block mb-2">Our Culinary Crown Jewels</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-cream tracking-tight mb-4">
            Chef's Signature Selections
          </h2>
          <div className="h-0.5 w-24 bg-brand-gold mx-auto mb-6"></div>
          <p className="font-sans text-brand-cream-dark/60 text-sm sm:text-base leading-relaxed">
            Meticulously refined recipes crafted by our culinary artisans. From sourdough-base local Multani Tikka pizzas to slow-brewed waterless royal saffron teas, these are our guests' absolute favorites.
          </p>
        </div>

        {/* RECTANGULAR & CARD FLEXIBLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatures.map((dish) => (
            <div 
              key={dish.id}
              className="group relative flex flex-col justify-between bg-brand-charcoal border border-brand-cream/10 rounded-none overflow-hidden hover:border-brand-gold/40 hover:-translate-y-1 transition-all duration-300 shadow-2xl"
            >
              <div>
                {/* IMAGE DISH */}
                <div className="relative h-56 w-full overflow-hidden shrink-0 pb-1 border-b border-brand-cream/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent z-10"></div>
                  <img 
                    src={dish.imageUrl} 
                    alt={dish.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-brand-charcoal/90 border border-brand-gold/20 font-mono text-[9px] text-brand-gold tracking-[0.2em] uppercase-none">
                    {dish.category}
                  </span>

                  {/* Bestseller Badge */}
                  {dish.isBestseller && (
                    <span className="absolute top-4 right-4 z-20 px-2.5 py-1 bg-brand-gold text-brand-charcoal font-sans font-bold text-[9px] tracking-[0.15em] uppercase">
                      💥 Bestseller
                    </span>
                  )}
                  {dish.isChefSpecial && !dish.isBestseller && (
                    <span className="absolute top-4 right-4 z-20 px-2.5 py-1 bg-brand-copper text-brand-cream font-sans font-bold text-[9px] tracking-[0.15em] uppercase">
                      👨‍🍳 Chef Special
                    </span>
                  )}
                </div>

                {/* CONTENT AREA */}
                <div className="p-6">
                  {/* Title & Star Rating */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-cream group-hover:text-brand-gold transition-colors duration-200">
                      {dish.name}
                    </h3>
                    <div className="flex items-center gap-1 shrink-0 bg-brand-brown/30 border border-brand-gold/10 px-2 py-0.5 font-mono text-xs text-brand-gold">
                      <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                      <span>{dish.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-brand-cream-dark/60 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {dish.description}
                  </p>

                  {/* Dietary & Speed features */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="font-mono text-[10px] text-brand-cream-dark/50 bg-brand-brown/20 px-2 py-1 rounded">
                      ⏱ Prep: {dish.prepTime}
                    </span>
                    {dish.isVeg && (
                      <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-900 px-2 py-0.5 rounded">
                        🌱 Pure Veg
                      </span>
                    )}
                    {dish.spiceLevel > 0 && (
                      <span className="font-mono text-[10px] text-brand-gold bg-brand-brown/40 border border-brand-gold/10 px-2 py-0.5 rounded">
                        🌶 {"🔥".repeat(dish.spiceLevel)} Spicy
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* ACTION FOOTER */}
              <div className="p-6 pt-0 border-t border-brand-cream/10 flex items-center justify-between gap-4 mt-auto">
                <div>
                  <span className="font-mono text-[9px] text-brand-cream-dark/40 uppercase block tracking-wider">Price</span>
                  <span className="font-serif text-lg font-bold text-brand-gold">{dish.price} PKR</span>
                </div>
                
                <button
                  onClick={() => onAddToCart(dish)}
                  className="px-5 py-3.5 bg-brand-gold text-brand-charcoal hover:bg-brand-cream hover:text-brand-charcoal font-sans font-bold text-[10px] uppercase tracking-[0.15em] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
