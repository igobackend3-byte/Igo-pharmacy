import React, { useState, useRef, useEffect } from "react";
import { Sparkles, MessageSquare, Send, RefreshCw, Sparkle, AlertCircle, X, Check } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function AIWellnessBot({ onClose }: { onClose?: () => void }) {
  const [activeTab, setActiveTab] = useState<"chat" | "skin-care">("chat");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hari Om. I am Acharya Charaka, your ancient Ayurvedic & Siddha Wellness guide. Share your daily struggles, digestions, or body symptoms, and I shall offer the pure wisdom of raw botanicals." }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Skincare builder state
  const [skinType, setSkinType] = useState("Vata-Dry");
  const [concerns, setConcerns] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [skinResult, setSkinResult] = useState<any | null>(null);
  const [isSkinLoading, setIsSkinLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg = inputMessage;
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const history = messages.map(m => ({
        role: m.role === "user" ? "user" : "model",
        content: m.content
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "bot", content: data.text || "I apologize. My alignment with the cosmic naadis is temporarily interrupted. Please re-state your query." }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: "bot", content: "I apologize. My cosmic connection was interrupted. Consider taking warm ginger tea while I realign my energies." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSkincareRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSkinLoading(true);
    try {
      const res = await fetch("/api/skin-care", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skinType, concerns, ingredientsSelection: ingredients })
      });
      const data = await res.json();
      setSkinResult(data);
    } catch (err) {
      console.error(err);
      setSkinResult({
        analysis: "Your skin balance is highly sensitive to Pitta (heat). Recommending calming rose-saffron masks.",
        recipeName: "Pitta Rose Calm Facial Paste",
        ingredientsList: ["1 tsp Saffron powder", "2 tsp Pure Honey", "1 tbsp organic Rose water"],
        steps: [
          "Mix saffron and honey inside rose water.",
          "Gently apply on dry facial skin for 12 minutes.",
          "Rinse with lukewarm water."
        ],
        recommendation: "Apply Kumkumadi Saffron Oil nightly."
      });
    } finally {
      setIsSkinLoading(false);
    }
  };

  const toggleIngredient = (ing: string) => {
    if (ingredients.includes(ing)) {
      setIngredients(ingredients.filter(i => i !== ing));
    } else {
      setIngredients([...ingredients, ing]);
    }
  };

  const skincareIngredients = ["Saffron (Kesar)", "Aloe Vera", "Licorice (Yashtimadhu)", "Turmeric (Manjal)", "Rose Water", "Sandalwood", "Neem Leaves"];

  return (
    <div className="flex flex-col bg-white rounded-3xl border border-amber-100 shadow-xl overflow-hidden h-[550px] max-w-lg w-full mx-auto">
      {/* Bot Header bar */}
      <div className="flex items-center justify-between bg-emerald-950 text-white px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400">
            <Sparkles className="h-5 w-5 text-emerald-950 animate-spin" style={{ animationDuration: "3s" }} />
          </div>
          <div>
            <h3 className="text-sm font-black font-sans leading-none tracking-tight">IGO Pharma AI Sage</h3>
            <span className="text-[9px] uppercase tracking-wider text-amber-300 font-mono font-bold">Acharya Charaka Guide</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Sub Tab selection inside header */}
          <div className="flex bg-emerald-900/50 p-0.5 rounded-lg border border-emerald-800/60">
            <button
              onClick={() => setActiveTab("chat")}
              className={`px-2.5 py-1 text-[10px] font-bold rounded ${activeTab === "chat" ? 'bg-amber-400 text-emerald-950' : 'text-stone-300 hover:text-white'}`}
            >
              Vedic Chat
            </button>
            <button
              onClick={() => setActiveTab("skin-care")}
              className={`px-2.5 py-1 text-[10px] font-bold rounded ${activeTab === "skin-care" ? 'bg-amber-400 text-emerald-950' : 'text-stone-300 hover:text-white'}`}
            >
              Skincare Recipe
            </button>
          </div>
          {onClose && (
            <button onClick={onClose} className="text-stone-300 hover:text-white cursor-pointer">
              <X className="h-4.5 w-4.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="flex-1 overflow-y-auto bg-stone-50 p-4 min-h-0">
        
        {/* SUBTAB A: Live Chatbot with Acharya Charaka */}
        {activeTab === "chat" && (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 min-h-0">
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-sm ${m.role === "user" ? "bg-emerald-800 text-white" : "bg-white border border-stone-100 text-stone-700"}`}>
                    <p className="whitespace-pre-line font-light">{m.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-2xl px-4 py-3 bg-white border border-stone-100 text-stone-400 text-xs flex items-center gap-1">
                    <span>Acharya Charaka is seeking scriptural cues</span>
                    <span className="flex gap-0.5"><span className="h-1 w-1 bg-stone-400 rounded-full animate-bounce" /><span className="h-1 w-1 bg-stone-400 rounded-full animate-bounce" style={{animationDelay:"0.2s"}}/><span className="h-1 w-1 bg-stone-400 rounded-full animate-bounce" style={{animationDelay:"0.4s"}}/></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input form */}
            <form onSubmit={handleSendMessage} className="mt-4 flex gap-2 border-t border-stone-200/60 pt-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about digestion, body aches, skin remedies..."
                className="flex-1 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs outline-none focus:border-emerald-700 shadow-inner"
              />
              <button
                type="submit"
                className="rounded-xl bg-emerald-800 p-2.5 text-white hover:bg-emerald-950 transition-colors cursor-pointer flex items-center justify-center"
              >
                <Send className="h-4.5 w-4.5" />
              </button>
            </form>
          </div>
        )}

        {/* SUBTAB B: Skincare advice formulation */}
        {activeTab === "skin-care" && (
          <div className="h-full flex flex-col min-h-0">
            {!skinResult && !isSkinLoading ? (
              <form onSubmit={handleSkincareRecommend} className="space-y-4 pr-1 overflow-y-auto">
                <div className="text-center space-y-1">
                  <span className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">AI Dermo-Cosmetics</span>
                  <h4 className="text-sm font-black text-emerald-950">Formulate Custom Skin Care Mask</h4>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1">Select Skin Category</label>
                  <select 
                    value={skinType}
                    onChange={(e) => setSkinType(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-xs outline-none focus:border-emerald-700"
                  >
                    <option value="Vata-Dry">Dry, dehydrated, cold feel (Vata)</option>
                    <option value="Pitta-Oily">Warm, sensitive, breakout prone (Pitta)</option>
                    <option value="Kapha-Thick">Thick, slow-fluid, excess sebum (Kapha)</option>
                    <option value="Tridosha">Balanced skin yet experiencing seasonal changes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1">Primary Skin Concerns</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. acne spots, hyperpigmentation, dark circles"
                    value={concerns}
                    onChange={(e) => setConcerns(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-xs outline-none focus:border-emerald-700" 
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1.5">Choose Preferred Ingredients</label>
                  <div className="flex flex-wrap gap-1.5">
                    {skincareIngredients.map(ing => (
                      <button
                        type="button"
                        key={ing}
                        onClick={() => toggleIngredient(ing)}
                        className={`rounded-lg px-2.5 py-1 text-[10px] font-bold border transition-colors cursor-pointer ${ingredients.includes(ing) ? 'bg-emerald-800 text-white border-emerald-900' : 'bg-white text-stone-600 border-stone-200'}`}
                      >
                        {ing}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-800 py-3 text-xs font-bold text-white hover:bg-emerald-950 transition-colors shadow-md cursor-pointer mt-2"
                >
                  Generate Ayurvedic Skincare Recipe
                </button>
              </form>
            ) : isSkinLoading ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="h-10 w-10 border-4 border-amber-400 border-t-emerald-800 rounded-full animate-spin" />
                <div>
                  <h4 className="text-xs font-bold text-stone-800">Concocting custom herbal formula...</h4>
                  <p className="text-[10px] text-stone-500">Blending dermo-botanicals against classical text guidelines</p>
                </div>
              </div>
            ) : (
              /* Custom generated skin care result card */
              <div className="space-y-5 pr-1 overflow-y-auto animate-fade-in pb-4">
                <div className="text-center space-y-1">
                  <span className="inline-block rounded bg-amber-100 text-amber-800 text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider">Custom Botanical Recipe</span>
                  <h4 className="text-base font-black text-emerald-950">{skinResult.recipeName}</h4>
                </div>

                <p className="text-xs text-stone-600 italic border-l-2 border-emerald-700 pl-2.5 leading-relaxed font-light">{skinResult.analysis}</p>

                <div className="space-y-2">
                  <h5 className="text-xs font-bold text-stone-800">Ingredients needed:</h5>
                  <ul className="space-y-1 text-xs text-stone-600 font-medium">
                    {skinResult.ingredientsList?.map((ing: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 bg-amber-500 rounded-full" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <h5 className="text-xs font-bold text-stone-800">Directions for Preparation:</h5>
                  <ol className="space-y-2 text-xs text-stone-600">
                    {skinResult.steps?.map((st: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-1.5 leading-relaxed font-light">
                        <span className="font-mono font-bold text-emerald-800 shrink-0">{idx+1}.</span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-3 flex items-start gap-2 text-xs text-emerald-900 font-semibold">
                  <Sparkle className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <p>{skinResult.recommendation}</p>
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    onClick={() => setSkinResult(null)}
                    className="rounded-xl border border-stone-300 px-5 py-2 text-xs font-bold text-stone-600 hover:bg-stone-50 cursor-pointer"
                  >
                    Formulate Another
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
