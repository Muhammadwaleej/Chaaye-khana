import React, { useState } from "react";
import { CartItem, MenuItem } from "../types";
import { MULTAN_DELIVERY_AREAS } from "../data";
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, MessageSquare, MapPin } from "lucide-react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [deliveryAreaIndex, setDeliveryAreaIndex] = useState<number>(0);
  const [addressLine, setAddressLine] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");

  if (!isOpen) return null;

  const activeArea = MULTAN_DELIVERY_AREAS[deliveryAreaIndex];

  // Calculators
  const subtotal = cartItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const isFreeDelivery = subtotal >= 1500;
  const deliveryFee = subtotal > 0 ? (isFreeDelivery ? 0 : activeArea.deliveryFee) : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;

    // Compose a gorgeous, highly structured text message
    let messageTemplate = `*🍵 NEW ORDER — CHAAYE KHANA MULTAN* \n`;
    messageTemplate += `====================================\n`;
    messageTemplate += `*CUSTOMER DETAILS:*\n`;
    messageTemplate += `• *Name:* ${customerName || "Valued Guest"}\n`;
    messageTemplate += `• *Address:* ${addressLine || "Store Pick-up / Please Call Me"}\n`;
    messageTemplate += `• *Sector:* ${activeArea.name}\n`;
    messageTemplate += `====================================\n\n`;
    
    messageTemplate += `*ORDERED CUISINES:*\n`;
    cartItems.forEach((c) => {
      messageTemplate += `• *${c.quantity}x* ${c.item.name} (${c.item.price} PKR ea)\n`;
      if (c.customNote) {
        messageTemplate += `   _Note: ${c.customNote}_\n`;
      }
    });
    messageTemplate += `\n====================================\n`;
    messageTemplate += `*DELIVERY BRIEF:*\n`;
    messageTemplate += `• *Expected ETA:* ${activeArea.estimateMin}\n`;
    messageTemplate += `• *Fulfillment Zone:* ${activeArea.name}\n`;
    messageTemplate += `====================================\n\n`;

    messageTemplate += `*BILL BREAKDOWN:*\n`;
    messageTemplate += `• *Food Subtotal:* ${subtotal} PKR\n`;
    messageTemplate += `• *Delivery Surcharge:* ${deliveryFee} PKR ${isFreeDelivery ? "(Waived!)" : ""}\n`;
    messageTemplate += `• *Grand Total:* *${grandTotal} PKR*\n`;
    messageTemplate += `====================================\n`;
    messageTemplate += `_Please confirm preparation start! Thank you._ 🌸`;

    const encodedMessage = encodeURIComponent(messageTemplate);
    // Standard mock WhatsApp café business line
    const whatsAppUrl = `https://api.whatsapp.com/send?phone=923007961426&text=${encodedMessage}`;
    
    window.open(whatsAppUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* BACKGROUND COVER */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      ></div>

      {/* RENDER BOARD SLIDER RIGHT PANEL */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-charcoal border-l border-brand-brown/50 shadow-2xl flex flex-col justify-between">
          
          {/* HEADER TOP */}
          <div className="p-6 border-b border-brand-cream/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-brand-gold">
              <ShoppingBag className="w-5 h-5" />
              <h3 className="font-serif text-lg font-bold text-brand-cream">Your Shopping Bag</h3>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 text-brand-cream-dark/60 hover:text-brand-gold hover:bg-brand-cream/5 border border-brand-cream/10 rounded-none transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* MIDDLE SCROLLABLE PRODUCTS LIST */}
          <div className="p-6 flex-1 overflow-y-auto space-y-6">
            {cartItems.length > 0 ? (
              <>
                <div className="space-y-4">
                  {cartItems.map((c) => (
                    <div 
                      key={c.item.id}
                      className="p-4 bg-brand-charcoal border border-brand-cream/10 rounded-none space-y-3 shadow-2xl"
                    >
                      <div className="flex gap-3">
                        {/* Little product thumbnail */}
                        <img 
                          src={c.item.imageUrl} 
                          alt={c.item.name} 
                          className="w-12 h-12 object-cover rounded-none border border-brand-cream/10"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm font-bold text-brand-cream truncate">{c.item.name}</h4>
                          <span className="font-mono text-xs text-brand-gold block mt-0.5">{c.item.price} PKR</span>
                        </div>
                      </div>

                      {/* Notes input */}
                      <input
                        type="text"
                        placeholder="Customize, e.g. no sugar, hot!"
                        value={c.customNote || ""}
                        onChange={(e) => {
                          // Allow writing inline notes dynamically
                          c.customNote = e.target.value;
                          onUpdateQuantity(c.item.id, c.quantity); // force update parent state triggered reload
                        }}
                        className="w-full px-3 py-1.5 bg-brand-charcoal border border-brand-cream/10 text-brand-cream placeholder-brand-cream-dark/30 rounded-none text-[11px] focus:outline-none focus:border-brand-gold"
                      />

                      {/* Quantity sliders */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => onUpdateQuantity(c.item.id, c.quantity - 1)}
                            className="p-1.5 bg-brand-charcoal text-brand-cream border border-brand-cream/10 rounded-none hover:border-brand-gold hover:text-brand-gold transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          
                          <span className="font-mono text-xs font-semibold px-3 text-brand-cream">{c.quantity}</span>
                          
                          <button
                            onClick={() => onUpdateQuantity(c.item.id, c.quantity + 1)}
                            className="p-1.5 bg-brand-charcoal text-brand-cream border border-brand-cream/10 rounded-none hover:border-brand-gold hover:text-brand-gold transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(c.item.id)}
                          className="p-1.5 text-brand-cream-dark/55 hover:text-rose-500 rounded-none transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Delivery Logistics Checkout questions */}
                <div className="p-4 border border-brand-cream/10 bg-brand-charcoal rounded-none space-y-4 pt-1">
                  <span className="font-mono text-[9px] text-brand-gold block font-bold uppercase tracking-[0.2em] mb-1">Fulfillment Parameters</span>
                  
                  {/* Selector area info */}
                  <div>
                    <label className="block text-[10.5px] font-medium text-brand-cream-dark/70 mb-1.5 uppercase">Residential sector</label>
                    <select
                      value={deliveryAreaIndex}
                      onChange={(e) => setDeliveryAreaIndex(parseInt(e.target.value))}
                      className="w-full bg-brand-charcoal text-brand-cream border border-brand-cream/10 text-xs py-2 px-2.5 rounded-none focus:outline-none cursor-pointer"
                    >
                      {MULTAN_DELIVERY_AREAS.map((area, idx) => (
                        <option key={area.name} value={idx}>{area.name} (estimate: {area.estimateMin})</option>
                      ))}
                    </select>
                  </div>

                  {/* Customer name */}
                  <div>
                    <label className="block text-[10.5px] font-medium text-brand-cream-dark/70 mb-1.5 uppercase">Your Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Waleed Ahmed"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-brand-charcoal text-brand-cream border border-brand-cream/10 text-xs py-2 px-2.5 rounded-none focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  {/* Address input */}
                  <div>
                    <label className="block text-[10.5px] font-medium text-brand-cream-dark/70 mb-1.5 uppercase">Exact Delivery Address</label>
                    <input
                      type="text"
                      placeholder="e.g. House #32, Gulgasht Block C"
                      value={addressLine}
                      onChange={(e) => setAddressLine(e.target.value)}
                      className="w-full bg-brand-charcoal text-brand-cream border border-brand-cream/10 text-xs py-2 px-2.5 rounded-none focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>
              </>
            ) : (
              /* Empty state display */
              <div className="text-center py-20 bg-brand-charcoal/40 border border-brand-cream/10 p-6 rounded-none">
                <ShoppingBag className="w-12 h-12 text-brand-gold/60 mx-auto mb-4 animate-pulse" />
                <h4 className="font-serif text-lg font-bold text-brand-cream mb-2">Your Bag is Empty</h4>
                <p className="font-sans text-brand-cream-dark/50 text-xs max-w-xs mx-auto mb-6">
                  Browse our interactive tea menu and signature dinners to add warm collections.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-brand-cream/20 text-brand-cream hover:border-brand-gold hover:text-brand-gold text-xs font-sans font-bold uppercase tracking-widest rounded-none hover:bg-brand-cream/5 transition-all cursor-pointer"
                >
                  Return to Menu
                </button>
              </div>
            )}
          </div>

          {/* LOWER BILLING SYSTEM DRAWER FOOTER */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-brand-cream/10 bg-brand-charcoal space-y-4 shadow-3xl">
              
              <div className="space-y-2.5 font-sans">
                <div className="flex justify-between text-xs text-brand-cream-dark/60">
                  <span>Food Subtotal</span>
                  <span className="font-mono">{subtotal} PKR</span>
                </div>
                
                <div className="flex justify-between text-xs text-brand-cream-dark/60">
                  <span>Shipping Fee ({activeArea.name})</span>
                  <span className="font-mono">
                    {isFreeDelivery ? (
                      <strong className="text-emerald-400">0 PKR (Waived)</strong>
                    ) : (
                      `${deliveryFee} PKR`
                    )}
                  </span>
                </div>

                {subtotal < 1500 && (
                  <p className="font-sans text-[10px] text-brand-gold italic text-right">
                    Spend {1500 - subtotal} PKR more to unlock FREE shipping!
                  </p>
                )}

                <div className="h-[1px] bg-brand-cream/10 my-2"></div>

                <div className="flex justify-between text-base text-brand-cream font-bold">
                  <span className="font-serif text-sm">Grand Total</span>
                  <span className="font-mono text-brand-gold">{grandTotal} PKR</span>
                </div>
              </div>

              {/* Checkout CTA triggers Whatsapp redirect */}
              <button
                onClick={handleCheckoutWhatsApp}
                disabled={!addressLine || !customerName}
                className="w-full py-4 bg-emerald-700/85 hover:bg-emerald-600 text-brand-cream text-xs font-sans font-bold tracking-[0.15em] uppercase rounded-none disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                Assemble WhatsApp Order
              </button>
              
              {!addressLine || !customerName ? (
                <p className="font-sans text-[9.5px] text-center text-red-400/80 uppercase tracking-wider">
                  ⚠️ Please fill Name & Address above to formulate WhatsApp order.
                </p>
              ) : null}

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
