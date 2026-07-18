import React, { useState } from "react";
import { 
  Sparkles, Award, User, Calendar, ShieldCheck, Heart, ArrowRight, 
  HelpCircle, Clipboard, Video, PhoneCall, Upload, Clock, BookOpen, ChevronRight, Check 
} from "lucide-react";
import { Doctor, Appointment, TraditionalSystem, Product } from "../types";

interface AIConsultationProps {
  doctors: Doctor[];
  products: Product[];
  onBookAppointment: (appointment: Appointment) => void;
  onSelectProductById: (productId: string) => void;
}

export default function AIConsultation({
  doctors,
  products,
  onBookAppointment,
  onSelectProductById
}: AIConsultationProps) {
  const [activeTab, setActiveTab] = useState<"ai-quiz" | "doctors">("ai-quiz");
  
  // Quiz states
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizResult, setQuizResult] = useState<any | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Doctor booking states
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingSlot, setBookingSlot] = useState("");
  const [consultType, setConsultType] = useState<"video" | "whatsapp">("video");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [uploadedFile, setUploadedFile] = useState<string>("");
  const [bookingNotes, setBookingNotes] = useState("");

  const quizQuestions = [
    {
      id: "frame",
      text: "How would you describe your physical body frame and weight?",
      options: [
        { label: "Lean, thin, difficult to gain weight, active", value: "Vata" },
        { label: "Medium build, muscular, stable weight", value: "Pitta" },
        { label: "Broad build, heavy, easy to gain weight, solid", value: "Kapha" }
      ]
    },
    {
      id: "skin",
      text: "How is your skin type and feel in natural weather?",
      options: [
        { label: "Dry, cold, rough, prone to cracks", value: "Vata" },
        { label: "Warm, oily, reddish, prone to acne or freckles", value: "Pitta" },
        { label: "Thick, oily, soft, cold, clear skin", value: "Kapha" }
      ]
    },
    {
      id: "digestion",
      text: "What best describes your general appetite and digestion?",
      options: [
        { label: "Irregular appetite, prone to bloating or gas", value: "Vata" },
        { label: "Strong appetite, digests quickly, feels hot easily", value: "Pitta" },
        { label: "Steady but slow digestion, feels heavy after meals", value: "Kapha" }
      ]
    },
    {
      id: "sleep",
      text: "Describe your general sleep pattern and dream styles:",
      options: [
        { label: "Light sleep, wakes up often, hyperactive dreams", value: "Vata" },
        { label: "Moderate, sound sleep, intense or vivid dreams", value: "Pitta" },
        { label: "Deep, long sleep, rarely wakes up, peaceful dreams", value: "Kapha" }
      ]
    },
    {
      id: "stress",
      text: "How do you naturally respond to sudden stressful scenarios?",
      options: [
        { label: "Anxious, fearful, starts worrying immediately", value: "Vata" },
        { label: "Irritable, angry, argumentative, focused", value: "Pitta" },
        { label: "Calm, slow, avoids confrontation, highly stable", value: "Kapha" }
      ]
    }
  ];

  const handleSelectOption = (questionId: string, value: string) => {
    const updatedAnswers = { ...answers, [questionId]: value };
    setAnswers(updatedAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Analyze quiz answers via API
      handleAnalyzeDosha(updatedAnswers);
    }
  };

  const handleAnalyzeDosha = async (finalAnswers: Record<string, string>) => {
    setIsAnalyzing(true);
    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: finalAnswers })
      });
      const data = await res.json();
      setQuizResult(data);
    } catch (e) {
      console.error(e);
      // Fallback
      setQuizResult({
        doshaRatio: { vata: 45, pitta: 35, kapha: 20 },
        primaryDosha: "Vata-Pitta",
        summary: "Based on your physical and emotional responses, you possess a Vata-Pitta constitution.",
        dietaryAdvice: ["Eat warm cooked foods", "Limit dry fruits", "Avoid carbonated water"],
        lifestyleAdvice: ["Sleep early", "Gentle massage", "Yoga"],
        products: ["ayur-002", "herb-001"]
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setAnswers({});
    setQuizResult(null);
  };

  const handleBookDoctor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoctor || !bookingDate || !bookingSlot || !patientName || !patientPhone) {
      alert("Please fill in all required fields.");
      return;
    }

    const newAppointment: Appointment = {
      id: `apt-${Math.floor(Math.random() * 9000) + 1000}`,
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      system: selectedDoctor.system,
      date: bookingDate,
      timeSlot: bookingSlot,
      type: consultType,
      patientName,
      patientPhone,
      patientEmail,
      prescriptionFile: uploadedFile || undefined,
      notes: bookingNotes || undefined,
      status: "Scheduled",
      paymentStatus: "Paid",
      meetingLink: consultType === "video" ? "https://meet.google.com/igo-pharma-consult" : `https://wa.me/${patientPhone}`
    };

    onBookAppointment(newAppointment);
    alert(`Appointment with ${selectedDoctor.name} booked successfully. A secure ${consultType} link has been generated.`);
    
    // Reset booking states
    setSelectedDoctor(null);
    setBookingDate("");
    setBookingSlot("");
    setPatientName("");
    setPatientPhone("");
    setPatientEmail("");
    setUploadedFile("");
    setBookingNotes("");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
      {/* Tab Switchers */}
      <div className="flex justify-center border-b border-stone-200 pb-0.5 gap-4">
        <button
          onClick={() => setActiveTab("ai-quiz")}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab === "ai-quiz" ? 'border-emerald-800 text-emerald-950' : 'border-transparent text-stone-500 hover:text-stone-800'}`}
        >
          <Sparkles className="h-5 w-5 text-amber-500" />
          AI Dosha Prakriti Quiz
        </button>
        <button
          onClick={() => setActiveTab("doctors")}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab === "doctors" ? 'border-emerald-800 text-emerald-950' : 'border-transparent text-stone-500 hover:text-stone-800'}`}
        >
          <User className="h-5 w-5 text-emerald-700" />
          Consult Siddha & Ayurvedic Doctors
        </button>
      </div>

      <div className="mt-8">
        
        {/* TAB 1: AI Prakriti Quiz */}
        {activeTab === "ai-quiz" && (
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-black text-emerald-950">AI-Guided Body Constitution Assessment</h2>
              <p className="text-sm text-stone-600 max-w-lg mx-auto">
                Calibrated by classical scriptures. Identify imbalances in your Vadham, Pittham, and Kabham humors to discover your true biological archetype.
              </p>
            </div>

            {/* Quiz Progress card */}
            {!quizResult && !isAnalyzing && (
              <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 font-mono">Question {quizStep + 1} of {quizQuestions.length}</span>
                  <span className="h-1.5 w-24 rounded-full bg-stone-100 overflow-hidden">
                    <span className="block h-full bg-emerald-700 transition-all" style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }} />
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-bold text-stone-800">{quizQuestions[quizStep].text}</h3>
                  <div className="space-y-2.5">
                    {quizQuestions[quizStep].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelectOption(quizQuestions[quizStep].id, opt.value)}
                        className="w-full flex items-center justify-between rounded-xl border border-stone-200 p-4 text-left text-sm font-medium hover:border-emerald-700 hover:bg-emerald-50/40 transition-all cursor-pointer"
                      >
                        <span>{opt.label}</span>
                        <ChevronRight className="h-4.5 w-4.5 text-stone-400" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Analyzing State */}
            {isAnalyzing && (
              <div className="rounded-2xl border border-stone-200 bg-white p-12 text-center shadow-sm space-y-4 flex flex-col items-center">
                <div className="h-12 w-12 border-4 border-amber-400 border-t-emerald-800 rounded-full animate-spin" />
                <div>
                  <h3 className="text-base font-bold text-stone-800">Acharya Charaka AI is analyzing your Prakriti...</h3>
                  <p className="text-xs text-stone-500">Evaluating humoral ratios & food synergies against classical sutras</p>
                </div>
              </div>
            )}

            {/* Quiz Result Presentation */}
            {quizResult && (
              <div className="rounded-2xl border border-amber-100 bg-white p-6 md:p-8 shadow-md space-y-8 animate-fade-in">
                <div className="text-center space-y-2">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800 font-mono uppercase tracking-wider">
                    Prakriti Analysis Complete
                  </span>
                  <h3 className="text-3xl font-black text-emerald-950">Primary Archetype: {quizResult.primaryDosha}</h3>
                </div>

                {/* Dosha percentages bar */}
                <div className="rounded-2xl bg-stone-50 p-5 border border-stone-100 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">Constitutional Balance (Prakriti)</h4>
                  <div className="space-y-3.5 font-mono text-xs">
                    <div>
                      <div className="flex justify-between font-bold text-blue-800 mb-1">
                        <span>Vadha (Vata / Air)</span>
                        <span>{quizResult.doshaRatio?.vata || 33}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-stone-200 overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${quizResult.doshaRatio?.vata || 33}%` }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-red-800 mb-1">
                        <span>Pittha (Pitta / Fire)</span>
                        <span>{quizResult.doshaRatio?.pitta || 33}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-stone-200 overflow-hidden">
                        <div className="h-full bg-red-600 rounded-full" style={{ width: `${quizResult.doshaRatio?.pitta || 33}%` }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-emerald-800 mb-1">
                        <span>Kabham (Kapha / Earth)</span>
                        <span>{quizResult.doshaRatio?.kapha || 33}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-stone-200 overflow-hidden">
                        <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${quizResult.doshaRatio?.kapha || 33}%` }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Summary and advice */}
                <div className="space-y-4 text-sm">
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-stone-800 flex items-center gap-1"><Clipboard className="h-4 w-4 text-emerald-700" /> Constitutional Summary</h4>
                    <p className="text-stone-600 font-light leading-relaxed">{quizResult.summary}</p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 pt-2">
                    <div className="space-y-2 rounded-xl bg-emerald-50/50 p-4 border border-emerald-100">
                      <h4 className="font-bold text-emerald-950 flex items-center gap-1"><Check className="h-4.5 w-4.5 text-emerald-700" /> Pacifying Dietary Advice</h4>
                      <ul className="space-y-1.5 text-xs text-stone-700">
                        {quizResult.dietaryAdvice?.map((advice: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-emerald-700 font-bold">•</span>
                            {advice}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 rounded-xl bg-amber-50/50 p-4 border border-amber-100">
                      <h4 className="font-bold text-amber-950 flex items-center gap-1"><BookOpen className="h-4.5 w-4.5 text-amber-700" /> Daily Lifestyle (Dinacharya)</h4>
                      <ul className="space-y-1.5 text-xs text-stone-700">
                        {quizResult.lifestyleAdvice?.map((life: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-amber-700 font-bold">•</span>
                            {life}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Recommended products */}
                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <h4 className="text-sm font-bold text-stone-800">Your Recommended Formulations</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {quizResult.products?.map((prodId: string) => {
                      const prod = products.find(p => p.id === prodId);
                      if (!prod) return null;
                      return (
                        <div 
                          key={prodId}
                          onClick={() => onSelectProductById(prodId)}
                          className="flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50 p-3 hover:border-emerald-700 transition-all cursor-pointer"
                        >
                          <img src={prod.image} alt={prod.name} className="h-12 w-12 rounded-lg object-cover border" referrerPolicy="no-referrer" />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-xs font-bold text-stone-800 truncate">{prod.name}</h5>
                            <span className="text-[10px] text-amber-700 font-mono">{prod.system}</span>
                          </div>
                          <ChevronRight className="h-4.5 w-4.5 text-stone-400" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Reset button */}
                <div className="flex justify-center pt-2">
                  <button
                    onClick={resetQuiz}
                    className="rounded-xl border border-stone-300 px-6 py-2.5 text-xs font-bold text-stone-600 hover:bg-stone-50 transition-colors cursor-pointer"
                  >
                    Reset Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: On-Board Certified Doctors */}
        {activeTab === "doctors" && (
          <div className="space-y-8 animate-fade-in">
            {/* List qualified practitioners */}
            {!selectedDoctor ? (
              <div className="space-y-6">
                <div className="text-center space-y-1">
                  <h2 className="text-2xl font-black text-emerald-950">Our Empaneled Traditional Physicians</h2>
                  <p className="text-sm text-stone-600">
                    Book secure, high-definition Video or WhatsApp medical consultations. Secure digital prescriptions provided.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {doctors.map(doc => (
                    <div key={doc.id} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="relative h-44 w-full rounded-xl overflow-hidden">
                          <img src={doc.image} alt={doc.name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                          <span className="absolute bottom-3 left-3 rounded bg-emerald-900 px-2 py-0.5 text-[10px] font-bold text-amber-200 font-mono">
                            {doc.system} Specialist
                          </span>
                        </div>

                        <div>
                          <h3 className="text-base font-bold text-stone-900">{doc.name}</h3>
                          <p className="text-xs text-amber-700 font-medium">{doc.specialty}</p>
                          <p className="text-[11px] text-stone-400 font-semibold">{doc.qualification}</p>
                        </div>

                        <p className="text-xs text-stone-600 line-clamp-3 leading-normal font-light">{doc.bio}</p>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-stone-100">
                        <div className="flex items-center justify-between text-xs font-semibold text-stone-500">
                          <span>Experience: {doc.experience}</span>
                          <span className="text-emerald-800 font-mono">Fee: ₹{doc.fee}</span>
                        </div>
                        
                        <button
                          onClick={() => setSelectedDoctor(doc)}
                          className="w-full rounded-xl bg-emerald-800 py-2.5 text-xs font-bold text-white hover:bg-emerald-950 transition-colors cursor-pointer"
                        >
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Doctor booking form sheet */
              <div className="mx-auto max-w-2xl rounded-2xl border border-amber-100 bg-white p-6 md:p-8 shadow-md space-y-6">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-3">
                    <img src={selectedDoctor.image} alt={selectedDoctor.name} className="h-12 w-12 rounded-xl object-cover" referrerPolicy="no-referrer" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 font-mono">{selectedDoctor.system} Physician</span>
                      <h3 className="text-base font-bold text-stone-900">{selectedDoctor.name}</h3>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedDoctor(null)}
                    className="text-xs font-bold text-stone-400 hover:text-stone-800"
                  >
                    Back to List
                  </button>
                </div>

                <form onSubmit={handleBookDoctor} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Select Consultation Date *</label>
                      <input 
                        type="date" 
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Select Available Time Slot *</label>
                      <select 
                        required
                        value={bookingSlot}
                        onChange={(e) => setBookingSlot(e.target.value)}
                        className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700"
                      >
                        <option value="">Choose slot</option>
                        {selectedDoctor.slots.map(sl => (
                          <option key={sl} value={sl}>{sl}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Patient Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Patient Phone (WhatsApp) *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+1 234 567 8900"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Patient Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="johndoe@gmail.com"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700" 
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Preferred Platform *</label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setConsultType("video")}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl border p-2 text-xs font-bold ${consultType === "video" ? 'border-emerald-700 bg-emerald-50 text-emerald-900' : 'border-stone-300'}`}
                        >
                          <Video className="h-4 w-4" /> Google Meet Video
                        </button>
                        <button
                          type="button"
                          onClick={() => setConsultType("whatsapp")}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl border p-2 text-xs font-bold ${consultType === "whatsapp" ? 'border-emerald-700 bg-emerald-50 text-emerald-900' : 'border-stone-300'}`}
                        >
                          <PhoneCall className="h-4 w-4" /> WhatsApp Chat
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Upload Previous Prescription (Optional)</label>
                      <div className="relative flex items-center justify-center rounded-xl border border-dashed border-stone-300 p-2 text-center text-xs text-stone-500 bg-stone-50 hover:bg-stone-100 transition-colors">
                        <Upload className="h-4.5 w-4.5 text-stone-400 mr-1.5" />
                        <span className="font-semibold truncate">{uploadedFile ? "Prescription.pdf Uploaded" : "Drag files or Browse"}</span>
                        <input 
                          type="file" 
                          onChange={(e) => setUploadedFile(e.target.files?.[0]?.name || "Prescription.pdf")}
                          className="absolute inset-0 opacity-0 cursor-pointer" 
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Describe Symptoms or Medical History</label>
                    <textarea 
                      placeholder="List joint pains, dietary issues, gastric feel, sleep depth etc."
                      value={bookingNotes}
                      onChange={(e) => setBookingNotes(e.target.value)}
                      rows={3}
                      className="w-full rounded-xl border border-stone-300 px-3 py-2 text-xs outline-none focus:border-emerald-700"
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-stone-150 pt-4 mt-2">
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase">Consultation Fee</span>
                      <p className="text-xl font-mono font-bold text-emerald-800">₹{selectedDoctor.fee}</p>
                    </div>
                    <button
                      type="submit"
                      className="rounded-xl bg-emerald-800 px-8 py-3 text-xs font-bold text-white hover:bg-emerald-950 transition-colors cursor-pointer shadow-md"
                    >
                      Pay & Secure Appointment
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
