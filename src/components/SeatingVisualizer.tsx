import React, { useState } from "react";
import { TableZone, TableReservation } from "../types";
import { TABLE_ZONES } from "../data";
import { Calendar, Users, Clock, Check, Sparkles, BookOpen, CloudSun, Crown, RefreshCw } from "lucide-react";

interface SeatingVisualizerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SeatingVisualizer({ isOpen, onClose }: SeatingVisualizerProps) {
  const [reservation, setReservation] = useState<TableReservation>({
    fullName: "",
    phone: "",
    date: new Date().toISOString().split('T')[0],
    time: "19:00",
    guests: 2,
    zoneId: "cozy-indoor",
    specialRequests: ""
  });

  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [createdTicketId, setCreatedTicketId] = useState<string>("");

  if (!isOpen) return null;

  // Render correct Zone Icon dynamically
  const getZoneIcon = (iconName: string) => {
    if (iconName === "BookOpen") return <BookOpen className="w-5 h-5 text-brand-gold shrink-0" />;
    if (iconName === "CloudSun") return <CloudSun className="w-5 h-5 text-brand-gold shrink-0" />;
    if (iconName === "Crown") return <Crown className="w-5 h-5 text-brand-gold shrink-0" />;
    return <Sparkles className="w-5 h-5 text-brand-gold shrink-0" />;
  };

  // Generate simulated status for tables based on selected zone
  const tablesForZone = {
    "cozy-indoor": [
      { id: "T-101", label: "Table 1 (2 Seater)", booked: false, x: "15%", y: "20%" },
      { id: "T-102", label: "Table 2 (4 Seater)", booked: true, x: "45%", y: "20%" },
      { id: "C-1", label: "Library Couch (6 Seater)", booked: false, x: "75%", y: "25%" },
      { id: "T-103", label: "Table 3 (2 Seater)", booked: false, x: "20%", y: "65%" },
      { id: "C-2", label: "Reading Sofa (4 Seater)", booked: false, x: "55%", y: "65%" }
    ],
    "rooftop-skyline": [
      { id: "R-201", label: "Rooftop Table 1 (2 Seater)", booked: false, x: "15%", y: "20%" },
      { id: "R-202", label: "Rooftop Table 2 (4 Seater)", booked: false, x: "45%", y: "20%" },
      { id: "R-203", label: "Skyline Table 3 (4 Seater)", booked: true, x: "75%", y: "20%" },
      { id: "R-Canopy", label: "Main Canopy Sovereign (8 Seater)", booked: false, x: "45%", y: "65%" }
    ],
    "tea-veranda": [
      { id: "V-301", label: "Terrace Pot 1 (2 Seater)", booked: true, x: "20%", y: "25%" },
      { id: "V-302", label: "Garden Table 2 (4 Seater)", booked: false, x: "50%", y: "25%" },
      { id: "V-303", label: "Garden Table 3 (4 Seater)", booked: false, x: "80%", y: "25%" }
    ],
    "royal-private": [
      { id: "P-501", label: "Sultan Elite Enclave (12 Seater)", booked: false, x: "50%", y: "45%" }
    ]
  };

  const activeTables = tablesForZone[reservation.zoneId as keyof typeof tablesForZone] || [];

  const handleTableClick = (table: any) => {
    if (table.booked) return;
    setSelectedTable(table.id);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReservation(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reservation.fullName || !reservation.phone) return;

    // Generate ticket ID
    const randomTicket = "CKM-" + Math.floor(Math.random() * 900000 + 100000);
    setCreatedTicketId(randomTicket);
    setBookingSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-brand-charcoal border border-brand-cream/10 rounded-none overflow-hidden shadow-2xl my-8">
        
        {/* CLOSE CONTROL */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-40 p-2 text-brand-cream/60 hover:text-brand-gold hover:bg-brand-cream/5 border border-brand-cream/15 rounded-none transition-all cursor-pointer"
        >
          ✕
        </button>

        {!bookingSuccess ? (
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* LEFT AREA: BOOKING FORM (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 border-r border-brand-cream/10">
              <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.3em] block mb-2">Sanctuary Reservation</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-cream mb-6">
                Reserve Your Table
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-brand-cream-dark/70 uppercase tracking-wider mb-2">Guest Name</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      placeholder="e.g. Waleed Ahmed"
                      value={reservation.fullName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/30 focus:border-brand-gold text-brand-cream text-sm rounded-none focus:outline-none placeholder-brand-cream-dark/30"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-brand-cream-dark/70 uppercase tracking-wider mb-2">Contact Phone</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="e.g. +92 300 1234567"
                      value={reservation.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/30 focus:border-brand-gold text-brand-cream text-sm rounded-none focus:outline-none placeholder-brand-cream-dark/30"
                    />
                  </div>
                </div>

                {/* Date, Time, Guest sizing */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-brand-cream-dark/70 uppercase tracking-wider mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={reservation.date}
                      onChange={handleFormChange}
                      className="w-full px-3 py-3 bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/30 focus:border-brand-gold text-brand-cream text-xs rounded-none focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-brand-cream-dark/70 uppercase tracking-wider mb-2">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={reservation.time}
                      onChange={handleFormChange}
                      className="w-full px-3 py-3 bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/30 focus:border-brand-gold text-brand-cream text-xs rounded-none focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-brand-cream-dark/70 uppercase tracking-wider mb-2">Guests count</label>
                    <select
                      name="guests"
                      value={reservation.guests}
                      onChange={handleFormChange}
                      className="w-full px-3 py-3 bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/30 focus:border-brand-gold text-brand-cream text-xs rounded-none focus:outline-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(n => (
                        <option key={n} value={n}>{n} Guests</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Zone Select */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-brand-cream-dark/70 uppercase tracking-wider mb-2">Café Sitting Zone</label>
                  <div className="grid grid-cols-2 gap-3">
                    {TABLE_ZONES.map(z => {
                      const selected = reservation.zoneId === z.id;
                      return (
                        <button
                          type="button"
                          key={z.id}
                          onClick={() => {
                            setReservation(prev => ({ ...prev, zoneId: z.id }));
                            setSelectedTable(null);
                          }}
                          className={`p-3.5 rounded-none border text-left flex gap-3 transition-all cursor-pointer ${
                            selected 
                              ? "bg-brand-brown border-brand-gold text-brand-gold" 
                              : "bg-brand-charcoal border-brand-cream/10 text-brand-cream hover:border-brand-gold/30"
                          }`}
                        >
                          {getZoneIcon(z.icon)}
                          <div>
                            <span className="font-serif text-xs font-bold block">{z.name}</span>
                            <span className="font-mono text-[9px] text-brand-cream-dark/50 block">{z.capacityText}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-brand-cream-dark/70 uppercase tracking-wider mb-2">Special Request / Occasion</label>
                  <textarea
                    rows={2}
                    name="specialRequests"
                    placeholder="e.g. Birthday setup, extra cardamoms on tea, wheelchair space..."
                    value={reservation.specialRequests}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/30 focus:border-brand-gold text-brand-cream text-xs rounded-none focus:outline-none resize-none placeholder-brand-cream-dark/20"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={!selectedTable}
                  className="w-full py-4 bg-brand-gold text-brand-charcoal text-xs font-bold tracking-widest uppercase rounded-none hover:bg-brand-cream transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-gold/15 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <Check className="w-4 h-4" />
                  {selectedTable ? `Confirm Seat (${selectedTable})` : "Please Click A Table on Seating Map"}
                </button>

              </form>
            </div>

            {/* RIGHT AREA: INTERACTIVE VISUAL MAP (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-brand-charcoal/50 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.3em] block mb-2">Interactive Seating</span>
                <h3 className="font-serif text-lg font-bold text-brand-cream mb-4">Choose Your Table Location</h3>
                
                {/* THE SEATING MAP WALL */}
                <div className="relative aspect-square w-full border border-brand-cream/10 rounded-none bg-brand-charcoal overflow-hidden shadow-2xl p-4 flex flex-col justify-between">
                  
                  {/* Map Label overlays */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 font-sans text-[9px] text-brand-cream-dark/30 uppercase tracking-widest">
                    Entrance & Entrance Hallway
                  </div>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-sans text-[9px] text-brand-cream-dark/30 uppercase tracking-widest">
                    Brewing Counter
                  </div>

                  {/* Render simulated table coordinates */}
                  {activeTables.map((t) => {
                    const isSelected = selectedTable === t.id;
                    return (
                      <button
                        type="button"
                        key={t.id}
                        disabled={t.booked}
                        onClick={() => handleTableClick(t)}
                        style={{ left: t.x, top: t.y }}
                        className={`absolute w-12 h-12 rounded-full border flex flex-col items-center justify-center transition-all shadow-md cursor-pointer ${
                          t.booked 
                            ? "bg-brand-charcoal border-red-950/40 text-brand-cream-dark/20 cursor-not-allowed" 
                            : isSelected
                              ? "bg-brand-gold border-brand-gold text-brand-charcoal scale-110"
                              : "bg-brand-charcoal border-brand-cream/10 text-brand-cream-dark hover:border-brand-gold hover:text-brand-gold"
                        }`}
                      >
                        <span className="font-mono text-[8px] font-bold block leading-none">{t.id}</span>
                        <span className="font-sans text-[6px] block leading-none mt-0.5 uppercase tracking-tighter opacity-70">
                          {t.booked ? "Booked" : isSelected ? "Selected" : "Free"}
                        </span>
                      </button>
                    );
                  })}

                </div>
              </div>

              {/* MAP LEGENDS */}
              <div className="mt-6 p-4 border border-brand-cream/10 rounded-none bg-brand-charcoal font-mono text-[9px] text-brand-cream-dark/60 tracking-wider space-y-2 uppercase">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-gold"></span>
                  <span>Cream gold = Chosen Seat</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full border border-brand-cream/20 bg-brand-charcoal"></span>
                  <span>Available Now</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-30 w-2.5 h-2.5 rounded-full bg-brand-charcoal border border-red-950"></span>
                  <span>Faded = Busy / Reserved</span>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* MAJESTIC CONFIRMATION TICKET DISPLAY */
          <div className="p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-8 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8 text-brand-gold animate-bounce" />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-cream">
                Table Booking Confirmed!
              </h2>
              <p className="font-sans text-brand-cream-dark/70 text-sm">
                A gorgeous table is prepared for you at Chaaye Khana Multan. Please show this ticket upon arrival.
              </p>
            </div>

            {/* GOLDEN TICKET BOARD */}
            <div className="p-6 rounded-none border-2 border-dashed border-brand-gold bg-brand-charcoal border-spacing-2 relative overflow-hidden text-left shadow-2xl">
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-brand-charcoal border-r border-brand-gold"></div>
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-brand-charcoal border-l border-brand-gold"></div>
              
              <div className="grid grid-cols-2 gap-4">
                
                <div>
                  <span className="font-mono text-[9px] text-brand-cream-dark/40 uppercase block">Ticket ID</span>
                  <span className="font-mono text-sm font-semibold text-brand-gold block">{createdTicketId}</span>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-brand-cream-dark/40 uppercase block">Reserved Seat</span>
                  <span className="font-mono text-sm font-semibold text-brand-gold block">{selectedTable}</span>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-brand-cream-dark/40 uppercase block">Guest Name</span>
                  <span className="font-serif text-sm font-bold text-brand-cream block">{reservation.fullName}</span>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-brand-cream-dark/40 uppercase block">Zone Zone</span>
                  <span className="font-serif text-sm font-semibold text-brand-cream block">
                    {TABLE_ZONES.find(z => z.id === reservation.zoneId)?.name}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-brand-cream-dark/40 uppercase block">Date & Time</span>
                  <span className="font-sans text-xs text-brand-cream-dark block">
                    {reservation.date} • {reservation.time}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-brand-cream-dark/40 uppercase block">Guests Count</span>
                  <span className="font-sans text-xs text-brand-cream-dark block">{reservation.guests} Guests</span>
                </div>

              </div>
            </div>

            {/* Close visual buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setBookingSuccess(false);
                  setSelectedTable(null);
                }}
                className="w-full py-4 border border-brand-cream/20 hover:border-brand-gold text-brand-cream hover:bg-brand-cream/5 text-xs font-sans font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Book Another Table
              </button>
              
              <button
                onClick={onClose}
                className="w-full py-4 bg-brand-gold text-brand-charcoal text-xs font-sans font-bold uppercase tracking-widest hover:bg-brand-cream transition-all cursor-pointer"
              >
                Awesome, Thank You!
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
