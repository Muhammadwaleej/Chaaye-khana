import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Heart, ShoppingCart, Star, Filter, ArrowUpDown } from "lucide-react";
import { MenuItem } from "../types";
import { MENU_ITEMS } from "../data";

interface FeaturedMenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function FeaturedMenu({ onAddToCart }: FeaturedMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [vegetarianOnly, setVegetarianOnly] = useState<boolean>(false);
  const [chefSpecialOnly, setChefSpecialOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("default");

  // Category tags
  const categories = ["All", "Breakfast", "Tea Collection", "Coffee Collection", "Salads Soups & Sandwiches", "Burgers", "Pizza", "Continental", "Desserts", "Mocktails", "Drinks"];

  // Filter and Sort calculation
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }
      // Search query match
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat) {
          return false;
        }
      }
      // Veg match
      if (vegetarianOnly && !item.isVeg) {
        return false;
      }
      // Chef Special match
      if (chefSpecialOnly && !item.isChefSpecial) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // default order
    });
  }, [selectedCategory, searchQuery, vegetarianOnly, chefSpecialOnly, sortBy]);

  return (
    <section id="full-menu" className="py-24 bg-brand-charcoal border-t border-brand-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.3em] block mb-2">Artisan Gastronomy</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-cream tracking-tight">
              Interactive Menu Lounge
            </h2>
            <div className="h-0.5 w-24 bg-brand-gold mt-4"></div>
          </div>
          
          <p className="max-w-md font-sans text-brand-cream-dark/60 text-xs sm:text-sm leading-relaxed">
            Quickly search our entire pantry of handcrafted dishes. Sort by pricing or toggle our traditional tea collections. All dishes are available for both elegant dine-in and speedy Multan home delivery.
          </p>
        </div>

        {/* SEARCH, SORT, AND FILTER TOOLBAR */}
        <div className="bg-brand-charcoal border border-brand-cream/10 p-6 rounded-none mb-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Search Input (4 cols) */}
            <div className="lg:col-span-5 relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-gold/60">
                <Search className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="Search Karak Chai, burgers, pizzas, desserts, drinks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/40 focus:border-brand-gold text-brand-cream placeholder-brand-cream-dark/40 rounded-none focus:outline-none focus:ring-1 focus:ring-brand-gold text-sm transition-all"
              />
            </div>

            {/* Sorting Dropdown (3 cols) */}
            <div className="lg:col-span-3 relative flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-brand-gold/70" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-3 bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/40 focus:border-brand-gold text-brand-cream rounded-none focus:outline-none focus:ring-1 focus:ring-brand-gold text-sm transition-all cursor-pointer"
              >
                <option value="default">Default Sort Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Customer Ratings</option>
              </select>
            </div>

            {/* Quick Toggle Filters (4 cols) */}
            <div className="lg:col-span-4 flex flex-wrap gap-6 items-center justify-start lg:justify-end">
              
              {/* Green Vegetarian filter */}
              <label className="inline-flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={vegetarianOnly}
                  onChange={(e) => setVegetarianOnly(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-4 h-4 border border-brand-cream/20 bg-brand-charcoal flex items-center justify-center peer-checked:border-brand-gold peer-checked:bg-brand-gold/10 transition-all">
                  <div className="w-2 h-2 bg-brand-gold scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
                <span className="font-sans text-xs text-brand-cream/80 group-hover:text-brand-gold transition-colors select-none">
                  🌱 Veg Only
                </span>
              </label>

              {/* Chef Special filter */}
              <label className="inline-flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={chefSpecialOnly}
                  onChange={(e) => setChefSpecialOnly(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-4 h-4 border border-brand-cream/20 bg-brand-charcoal flex items-center justify-center peer-checked:border-brand-gold peer-checked:bg-brand-gold/10 transition-all">
                  <div className="w-2 h-2 bg-brand-gold scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
                <span className="font-sans text-xs text-brand-cream/80 group-hover:text-brand-gold transition-colors select-none">
                  👨‍🍳 Chef Specials
                </span>
              </label>

            </div>

          </div>
        </div>

        {/* CATEGORIES NAVIGATION TABS (Horizontal Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-brand-cream/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 font-sans font-bold text-[10px] tracking-[0.15em] uppercase rounded-none shrink-0 border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-brand-gold border-brand-gold text-brand-charcoal font-bold"
                  : "bg-brand-charcoal border-brand-cream/10 text-brand-cream-dark/60 hover:border-brand-gold/60 hover:text-brand-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ITEMS POPULATION GRID */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between bg-brand-charcoal border border-brand-cream/10 rounded-none overflow-hidden hover:border-brand-gold/40 hover:-translate-y-1 transition-all duration-300 shadow-2xl"
              >
                <div>
                  
                  {/* Item Image area */}
                  <div className="relative h-48 w-full overflow-hidden shrink-0 pb-1 border-b border-brand-cream/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-transparent z-10"></div>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating top pills */}
                    {item.isVeg && (
                      <span className="absolute top-3 left-3 z-20 px-2 py-0.5 bg-brand-charcoal/90 border border-emerald-500/30 text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                        Veg
                      </span>
                    )}

                    {item.spiceLevel > 0 && (
                      <span className="absolute top-3 right-3 z-20 px-2 py-0.5 bg-brand-charcoal/95 border border-brand-gold/25 text-[9px] font-mono text-brand-gold font-bold uppercase tracking-widest">
                        {"🌶".repeat(item.spiceLevel)} Hot
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex flex-col gap-1.5">
                        <h3 className="font-serif text-base sm:text-lg font-bold text-brand-cream group-hover:text-brand-gold transition-colors duration-200">
                          {item.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 shrink-0 bg-brand-brown/30 border border-brand-gold/10 px-1.5 py-0.5 text-brand-gold font-mono text-[11px]">
                        <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                        <span>{item.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <p className="font-sans text-brand-cream-dark/60 text-xs leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 mb-2 font-mono text-[9px] text-brand-cream-dark/40 uppercase tracking-wider">
                      <span>prep: {item.prepTime}</span>
                      <span>•</span>
                      <span>category: {item.category}</span>
                    </div>
                  </div>

                </div>

                {/* Footer and Price interaction */}
                <div className="p-5 pt-4 mt-auto border-t border-brand-cream/10 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-serif text-base font-bold text-brand-gold">{item.price} PKR</span>
                  </div>

                  <button
                    onClick={() => onAddToCart(item)}
                    className="px-4 py-2.5 bg-brand-charcoal border border-brand-cream/20 text-brand-cream hover:bg-brand-gold hover:text-brand-charcoal hover:border-brand-gold font-sans font-bold text-[10px] uppercase tracking-[0.15em] transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    + Add Bag
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty Search results display state */
          <div className="text-center py-16 bg-brand-charcoal border border-brand-cream/10 p-8 max-w-md mx-auto rounded-none">
            <Filter className="w-10 h-10 text-brand-gold/60 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-brand-cream mb-2">No Matching Cuisine</h3>
            <p className="font-sans text-brand-cream-dark/60 text-xs leading-relaxed mb-4">
              We couldn't locate any dishes matching "{searchQuery}" under your selected filters. Try broadening your keywords or resetting active toggles.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setVegetarianOnly(false);
                setChefSpecialOnly(false);
              }}
              className="px-6 py-3 border border-brand-cream/20 hover:border-brand-gold hover:bg-brand-gold/5 text-brand-cream hover:text-brand-gold text-xs uppercase tracking-[0.15em] font-sans font-bold transition-all cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
