import React from "react";
import { Heart, MessageCircle, Instagram } from "lucide-react";

export default function LifestyleGallery() {
  const posts = [
    {
      img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=500",
      likes: "1,420",
      comments: "84",
      caption: "Boiling hot cardamoms and premium CTC. The standard #KarakChai ritual starts here. ☕️"
    },
    {
      img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=500",
      likes: "895",
      comments: "52",
      caption: "Cozy leather armchairs, quiet desk lamps, and original books. Your focus sanctuary in Gulgasht Colony. 📚"
    },
    {
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=500",
      likes: "2,110",
      comments: "135",
      caption: "Cheese pull under twinkling string lights! Traditional marinated Multani Tikka meets sourdough pizza. 🍕"
    },
    {
      img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=500",
      likes: "1,180",
      comments: "49",
      caption: "Our Kashmiri Pink Tea is brewed slowly, then finished with dynamic crushed almonds and pistachios. 🌸"
    },
    {
      img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=500",
      likes: "1,650",
      comments: "91",
      caption: "Authentic royal Turkish breakfasts! Organic eggs, fresh honeycomb, sausage, and paratha under skies. 🍳"
    },
    {
      img: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=500",
      likes: "940",
      comments: "30",
      caption: "Fresh gourmet espresso drops slowly cold-steeped. Specialty caffeinated artwork at its finest. 🧊"
    }
  ];

  return (
    <section className="py-24 bg-brand-charcoal/95 border-t border-brand-cream/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-brand-gold mb-2">
            <Instagram className="w-5 h-5" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] font-bold">#ChaayeKhanaMultan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-cream tracking-tight mb-4">
            Aesthetic Café Moments
          </h2>
          <div className="h-0.5 w-24 bg-brand-gold mx-auto mb-4"></div>
          <p className="font-sans text-brand-cream-dark/60 text-xs sm:text-sm leading-relaxed">
            Follow our culinary journey and tag us in your Instagram memories. We love capturing the laughter, peaceful study hours, and late-night sweet celebrations under our warm Multan lights.
          </p>
        </div>

        {/* FEED GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, idx) => (
            <div 
              key={idx}
              className="group relative aspect-square rounded-none overflow-hidden border border-brand-cream/10 bg-brand-charcoal shadow-2xl cursor-pointer"
            >
              {/* IMAGE */}
              <img 
                src={post.img} 
                alt="Instagram feed item" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* OVERLAY ACTION IN HOVER */}
              <div className="absolute inset-0 bg-brand-charcoal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-4 flex flex-col justify-between">
                
                {/* Metrics */}
                <div className="flex items-center justify-center gap-4 text-brand-cream mt-4">
                  <div className="flex items-center gap-1.5 font-sans text-xs">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-sans text-xs">
                    <MessageCircle className="w-4 h-4 text-sky-400 fill-sky-400" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Caption clip */}
                <p className="font-sans text-[10px] text-brand-cream-dark/80 leading-relaxed text-center line-clamp-3">
                  {post.caption}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
