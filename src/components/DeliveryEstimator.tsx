import React, { useState } from "react";
import { MULTAN_DELIVERY_AREAS } from "../data";
import { MapPin, Clock, Truck, ShoppingBag, ShieldCheck } from "lucide-react";

export default function DeliveryEstimator() {
  const [selectedAreaIndex, setSelectedAreaIndex] = useState<number>(0);
  const activeArea = MULTAN_DELIVERY_AREAS[selectedAreaIndex];

  return (
    <section id="delivery" className="py-24 bg-brand-charcoal border-t border-brand-cream/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: ZONE LIST & SECTOR DETAILS (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.3em] block mb-2">Multan Logistics</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-cream tracking-tight">
                Swift Local Delivery
              </h2>
              <div className="h-0.5 w-20 bg-brand-gold mt-4"></div>
            </div>

            <p className="font-sans text-brand-cream-dark/60 text-xs sm:text-sm leading-relaxed">
              We deliver premium hot teas in insulation-locked thermal pots and crisp sourdough pizzas right to your doorstep across Multan. Select your residential sector below to review instant fulfillment estimations.
            </p>

            {/* SECTOR BUTTON SELECTOR */}
            <div className="flex flex-wrap gap-2.5">
              {MULTAN_DELIVERY_AREAS.map((area, idx) => (
                <button
                  key={area.name}
                  onClick={() => setSelectedAreaIndex(idx)}
                  className={`px-4 py-2 text-[10px] uppercase font-sans font-bold tracking-[0.15em] border rounded-none transition-all cursor-pointer ${
                    selectedAreaIndex === idx
                      ? "bg-brand-gold border-brand-gold text-brand-charcoal font-bold"
                      : "bg-brand-charcoal border-brand-cream/10 text-brand-cream-dark/60 hover:border-brand-gold/40 hover:text-brand-gold"
                  }`}
                >
                  {area.name}
                </button>
              ))}
            </div>

            {/* LIVE METRICS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              {/* ETA CARD */}
              <div className="p-5 bg-brand-charcoal/40 border border-brand-cream/10 rounded-none flex flex-col justify-between shadow-2xl">
                <div className="flex items-center gap-2 text-brand-gold mb-3">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest">Estimated Time</span>
                </div>
                <div>
                  <span className="font-serif text-xl font-bold text-brand-cream block">{activeArea.estimateMin}</span>
                  <span className="font-sans text-[10px] text-brand-cream-dark/40">Insulated sealed travel</span>
                </div>
              </div>

              {/* DELIVERY FEE CARD */}
              <div className="p-5 bg-brand-charcoal/40 border border-brand-cream/10 rounded-none flex flex-col justify-between shadow-2xl">
                <div className="flex items-center gap-2 text-brand-gold mb-3">
                  <Truck className="w-4 h-4" />
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest">Fulfillment Fee</span>
                </div>
                <div>
                  <span className="font-serif text-xl font-bold text-brand-cream block">{activeArea.deliveryFee} PKR</span>
                  <span className="font-sans text-[10px] text-brand-cream-dark/40">Waived over 1,500 PKR</span>
                </div>
              </div>

              {/* MINIMUM ORDER CARD */}
              <div className="p-5 bg-brand-charcoal/40 border border-brand-cream/10 rounded-none flex flex-col justify-between shadow-2xl">
                <div className="flex items-center gap-2 text-brand-gold mb-3">
                  <ShoppingBag className="w-4 h-4" />
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest">Minimum Basket</span>
                </div>
                <div>
                  <span className="font-serif text-xl font-bold text-brand-cream block">{activeArea.minOrder} PKR</span>
                  <span className="font-sans text-[10px] text-brand-cream-dark/40">Required for checkout</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: COLD CONVERSION CTA & SECURE SEAL (5 cols) */}
          <div className="lg:col-span-5 p-8 bg-brand-charcoal border border-brand-cream/10 rounded-none relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-charcoal via-brand-gold to-brand-charcoal"></div>
            
            <h3 className="font-serif text-xl font-bold text-brand-cream mb-4">How it works</h3>
            
            <ol className="space-y-4 font-sans text-xs text-brand-cream-dark/60 list-decimal pl-4 mb-6 leading-relaxed">
              <li>Add customized artisan food & specialty teas to your shopping bag.</li>
              <li>Provide your cellular contact & local residential address in Multan.</li>
              <li>Instantly review or modify your precomposed cart through our one-click WhatsApp Checkout drawer.</li>
              <li>Our Multani logistics team prepares your thermal teapot and starts the route immediately!</li>
            </ol>

            <div className="p-4 border border-brand-cream/15 rounded-none bg-brand-charcoal flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-serif text-xs font-bold text-brand-gold block">Food Grade Protection Shield</span>
                <p className="font-sans text-[10px] text-brand-cream-dark/50 leading-relaxed mt-0.5">
                  We seal our Karak Chai and Peshawari kehwas at exact boiling temperatures within double-insulated metal flutes to guarantee zero ambient heat dissipation on delivery.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
