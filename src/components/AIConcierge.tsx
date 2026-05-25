import React, { useState } from "react";
import { Sparkles, Send, Coffee, Compass, Moon, Smile, Flame, ShieldAlert, Check } from "lucide-react";
import { AISommelierResponse, MenuItem } from "../types";

interface AIConciergeProps {
  onAddSpecialItem: (name: string, priceText: string) => void;
}

export default function AIConcierge({ onAddSpecialItem }: AIConciergeProps) {
  const [mood, setMood] = useState<string>("");
  const [craving, setCraving] = useState<string>("");
  const [weatherState, setWeatherState] = useState<string>("Warm Breeze");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [sommelierResult, setSommelierResult] = useState<AISommelierResponse | null>(null);
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

  const moodPresets = [
    {
      label: "Exhausted after long workday",
      icon: Moon,
      mood: "Tired & Stressed",
      craving: "Authentic heavy tea with soft desserts to unwind"
    },
    {
      label: "Multan intense summer bypass cooler",
      icon: Smile,
      mood: "Hot and thirsty",
      craving: "Frosty fresh mint beverages and light bites"
    },
    {
      label: "Aesthetic romantic rooftop evening",
      icon: Compass,
      mood: "Artistic, calm and cozy",
      craving: "Elegant hot clay pot chai with spicy tikkas"
    },
    {
      label: "Late-night absolute sweet cravings",
      icon: Flame,
      mood: "Happy & indulgence-seeking",
      craving: "Liquid dark Belgian chocolate and traditional halwa malai"
    }
  ];

  const handlePresetSelect = (preset: typeof moodPresets[0]) => {
    setMood(preset.mood);
    setCraving(preset.craving);
  };

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood && !craving) return;

    setIsGenerating(true);
    setSommelierResult(null);
    setAddedItems({});

    try {
      const res = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mood,
          craving,
          weather: weatherState,
          localTime: new Date().toLocaleTimeString()
        })
      });

      const data = await res.json();
      setSommelierResult(data);
    } catch (err) {
      console.error("AI Concierge consult error:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAddSuggested = (name: string, priceStr: string) => {
    onAddSpecialItem(name, priceStr);
    setAddedItems(prev => ({ ...prev, [name]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [name]: false }));
    }, 2000);
  };

  return (
    <section id="ai-concierge" className="py-24 bg-brand-charcoal/95 border-t border-brand-cream/10 relative">
      
      {/* Visual background atmospheric halo */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-copper/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BANNER HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-brand-gold/30 text-brand-gold font-mono text-[10px] tracking-[0.25em] uppercase mb-4 shadow-2xl">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-brand-gold" />
            <span>AI Taste Sommelier</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-cream tracking-tight mb-4">
            Interactive Beverage Guide
          </h2>
          <div className="h-0.5 w-24 bg-brand-gold mx-auto mb-6"></div>
          <p className="font-sans text-brand-cream-dark/60 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Not sure what to try? Choose a preset feeling below or type your cravings. Our AI Concierge is designed to align with Pakistani tea culture and generate a culinary story matching your current appetite.
          </p>
        </div>

        {/* INTERACTIVE FORM & CONVERSATION BLOCK */}
        <div className="bg-brand-charcoal border border-brand-cream/10 p-6 sm:p-10 rounded-none shadow-2xl relative overflow-hidden mb-12">
          
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-charcoal via-brand-gold to-brand-charcoal"></div>
          
          <form onSubmit={handleConsult} className="space-y-8">
            
            {/* Step 1: Quick Presets */}
            <div>
              <label className="block font-serif text-lg font-bold text-brand-cream mb-4">
                1. Select a Mood Vibe Preset
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {moodPresets.map((preset, idx) => {
                  const Icon = preset.icon;
                  const isMatch = mood === preset.mood && craving === preset.craving;
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => handlePresetSelect(preset)}
                      className={`flex items-start text-left gap-4 p-4 rounded-none border transition-all duration-300 cursor-pointer ${
                        isMatch 
                          ? "bg-brand-brown/40 border-brand-gold text-brand-gold shadow-md"
                          : "bg-brand-charcoal border-brand-cream/10 hover:border-brand-gold/40 text-brand-cream-dark hover:text-brand-cream"
                      }`}
                    >
                      <div className={`p-2.5 rounded-none border shrink-0 ${isMatch ? "bg-brand-gold text-brand-charcoal border-brand-gold" : "bg-brand-charcoal border-brand-cream/10 text-brand-gold"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-sans text-xs font-bold block uppercase tracking-wider mb-0.5">{preset.mood}</span>
                        <p className="font-sans text-[11px] leading-relaxed text-brand-cream-dark/60 block">{preset.label}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Custom Text Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Mood input */}
              <div>
                <label className="block font-sans text-xs font-bold text-brand-cream uppercase tracking-wider mb-2">
                  My Current Stress / Feeling Level
                </label>
                <input
                  type="text"
                  placeholder="e.g. Peaceful but sleep deprived"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="w-full px-4 py-3 bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/30 focus:border-brand-gold text-brand-cream text-sm rounded-none focus:outline-none transition-all placeholder-brand-cream-dark/30"
                />
              </div>

              {/* Craving input */}
              <div>
                <label className="block font-sans text-xs font-bold text-brand-cream uppercase tracking-wider mb-2">
                  What Am I Craving / Looking for?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hot cardamon brew + crispy snacks"
                  value={craving}
                  onChange={(e) => setCraving(e.target.value)}
                  className="w-full px-4 py-3 bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/30 focus:border-brand-gold text-brand-cream text-sm rounded-none focus:outline-none transition-all placeholder-brand-cream-dark/30"
                />
              </div>

            </div>

            {/* Local Weather Override and Consult Trigger */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-brand-cream/10">
              
              {/* Weather selection select tag */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="font-sans text-xs text-brand-cream-dark/60 uppercase">Contextual Weather:</span>
                <select
                  value={weatherState}
                  onChange={(e) => setWeatherState(e.target.value)}
                  className="bg-brand-charcoal text-brand-gold border border-brand-cream/10 text-xs px-3 py-1.5 focus:outline-none focus:border-brand-gold cursor-pointer"
                >
                  <option value="Warm Multani Afternoon">☀️ Warm Multan Afternoon (32°C)</option>
                  <option value="Cool Evening Breeze">🍃 Cool Cantt Breeze (24°C)</option>
                  <option value="Starry Winter Night">🌌 Starry Winter Night (15°C)</option>
                  <option value="Humid Monsoons">🌧️ Warm Rain Shower (28°C)</option>
                </select>
              </div>

              {/* Submit consult CTA */}
              <button
                type="submit"
                disabled={isGenerating || (!mood && !craving)}
                className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-charcoal font-sans font-bold text-xs uppercase tracking-widest disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:bg-brand-cream"
              >
                <Sparkles className="w-4 h-4" />
                Consult Tea Sommelier
              </button>

            </div>

          </form>

        </div>

        {/* LOADING ANIMATION STATE */}
        {isGenerating && (
          <div className="py-16 text-center space-y-4 animate-pulse">
            <div className="w-12 h-12 bg-brand-charcoal border border-brand-gold flex items-center justify-center mx-auto animate-spin">
              <Coffee className="w-5 h-5 text-brand-gold" />
            </div>
            <p className="font-serif italic text-brand-gold text-lg">
              "Boiling robust cardamoms, simmering saffron strands, consulting active scrolls..."
            </p>
            <p className="font-sans text-brand-cream-dark/50 text-xs uppercase tracking-wider">
              Designing your tailored Multan tea sanctuary pairing
            </p>
          </div>
        )}

        {/* SOMMELIER RESULTS RENDER BLOCK */}
        {sommelierResult && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
            
            {/* Greeting Card block */}
            <div className="p-8 rounded-none bg-brand-charcoal border border-brand-cream/15 relative">
              <div className="absolute -top-3.5 left-8 px-4 py-1.5 bg-brand-gold text-brand-charcoal font-serif font-bold text-xs uppercase tracking-wider">
                🍁 Sommelier Recommendation
              </div>

              {/* API Fallback Note */}
              {sommelierResult.isFallback && (
                <div className="mb-6 flex gap-3 p-4 bg-brand-charcoal border border-amber-600/30 text-amber-500 text-xs leading-relaxed">
                  <ShieldAlert className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-bold">Demonstration Signature Engine</p>
                    <p className="text-brand-cream-dark/70 mt-0.5">{sommelierResult.message}</p>
                  </div>
                </div>
              )}

              <p className="font-serif text-lg sm:text-xl text-brand-cream italic leading-relaxed mb-4 mt-2">
                "{sommelierResult.sommelierGreeting}"
              </p>
            </div>

            {/* Recommendations Grid Column */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sommelierResult.recommendations.map((rec, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-none bg-brand-charcoal border border-brand-cream/10 hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between shadow-2xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-3">
                      <span className="font-mono text-[9px] text-brand-gold block uppercase tracking-wider">Pairing #{idx + 1}</span>
                      <span className="font-serif text-xs font-bold text-brand-gold shrink-0">{rec.price}</span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-brand-cream mb-3 group-hover:text-brand-gold">
                      {rec.name}
                    </h4>
                    <p className="font-sans text-brand-cream-dark/60 text-xs leading-relaxed mb-6">
                      {rec.rationale}
                    </p>
                  </div>

                  <button
                    onClick={() => handleAddSuggested(rec.name, rec.price)}
                    className={`w-full py-3 bg-brand-charcoal font-sans font-bold text-[10px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                      addedItems[rec.name]
                        ? "bg-emerald-600 text-brand-cream border border-emerald-500"
                        : "text-brand-gold bg-brand-charcoal hover:bg-brand-gold hover:text-brand-charcoal border border-brand-gold/20 hover:border-brand-gold"
                    }`}
                  >
                    {addedItems[rec.name] ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Added to Cart!
                      </>
                    ) : (
                      <>
                        <Coffee className="w-3.5 h-3.5" />
                        Add Pairing Choice
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Poetic Toast wrapper */}
            <div className="text-center py-6">
              <p className="font-serif italic text-brand-gold/80 text-lg leading-relaxed max-w-lg mx-auto">
                "{sommelierResult.partingToast}"
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
