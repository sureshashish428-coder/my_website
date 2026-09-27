"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Check, 
  Sparkles, 
  ArrowUpRight,
  AlertCircle
} from "lucide-react";

const intentOptions = [
  { id: "idea", label: "I HAVE AN IDEA", desc: "Turn raw vision into digital reality" },
  { id: "product", label: "BUILD A PRODUCT", desc: "Enterprise web/mobile platform" },
  { id: "scale", label: "SCALE BUSINESS", desc: "Maximize conversions & organic reach" },
];

const buildCategories = [
  "Corporate Website",
  "Custom E-Commerce",
  "ERP / CRM Architecture",
  "Full-Stack Web App",
  "UI/UX Design Systems",
  "AI & Workflow Automations",
];

const budgetTiers = [
  "< ₹25,000",
  "₹25k - ₹50k",
  "₹50k - ₹1.5 Lakh",
  "₹1.5 Lakh+",
];

export default function Contact() {
  const [selectedIntent, setSelectedIntent] = useState<string>("idea");
  const [selectedServices, setSelectedServices] = useState<string[]>(["Corporate Website"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("₹25k - ₹50k");
  
  // Interactive Form State with Live Keystroke Reactive Motion
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [typingField, setTypingField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Live Validation Rules
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isNameValid = formData.name.trim().length >= 3;
  const isMessageValid = formData.message.trim().length >= 10;

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleInputChange = (field: "name" | "email" | "message", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTypingField(field);
    setTimeout(() => setTypingField(null), 180);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNameValid && isEmailValid) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#FFFFFF] text-[#07152F] border-t border-black/5 overflow-hidden">
      {/* Soft Multi-Color Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#1468E8]/10 to-[#60A5FA]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-gradient-to-br from-[#EAF3FF] to-[#D4E7FE] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FF] border border-[#1468E8]/20 text-xs font-mono text-[#1468E8] font-bold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
            <span>DIRECT COLLABORATION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#07152F] leading-tight">
            WHAT ARE WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1468E8] to-[#0A4BB5]">BUILDING NEXT?</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base font-medium">
            Connect directly with the founder to structure your project blueprint.
          </p>
        </div>

        {/* 2-Column Split: Founder Card Left | High-Interactive Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT COLUMN: Founder & CEO Official Direct Card (Clean Glossy Light) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-[#F7F9FC] border border-[#1468E8]/15 shadow-[0_10px_35px_rgba(20,104,232,0.06)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#1468E8]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Profile Header */}
              <div className="flex items-center gap-5 mb-8">
                <div className="relative w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#1468E8] to-[#60A5FA] shadow-[0_0_25px_rgba(20,104,232,0.35)] shrink-0 group">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src="/ashish.png"
                      alt="Ashish Suresh"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center font-black text-xl text-[#1468E8] bg-[#EAF3FF]">
                      AS
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight text-[#07152F]">
                    ASHISH SURESH
                  </h3>
                  <p className="text-xs font-mono tracking-widest text-[#1468E8] font-bold uppercase mt-0.5">
                    FOUNDER &amp; CEO
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-2 text-[10px] font-mono text-emerald-700 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    DIRECT CONSULTATION
                  </span>
                </div>
              </div>

              {/* Direct Alive Contact Pills */}
              <div className="space-y-3 pt-4 border-t border-black/5 text-xs font-mono font-medium">
                <a
                  href="mailto:info@aksbitsystems.in"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-black/5 hover:border-[#1468E8] hover:shadow-[0_4px_20px_rgba(20,104,232,0.15)] transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EAF3FF] text-[#1468E8] flex items-center justify-center shadow-inner group-hover:bg-[#1468E8] group-hover:text-white group-hover:rotate-12 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-[#07152F] group-hover:text-[#1468E8] transition-colors">
                    info@aksbitsystems.in
                  </span>
                </a>

                <a
                  href="tel:7999492905"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-black/5 hover:border-[#1468E8] hover:shadow-[0_4px_20px_rgba(20,104,232,0.15)] transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EAF3FF] text-[#1468E8] flex items-center justify-center shadow-inner group-hover:bg-[#1468E8] group-hover:text-white group-hover:rotate-12 transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-[#07152F] group-hover:text-[#1468E8] transition-colors">
                    +91 7999492905
                  </span>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-black/5">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF3FF] text-[#1468E8] flex items-center justify-center shadow-inner">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">aksbitsystems.in</span>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-black/5">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF3FF] text-[#1468E8] flex items-center justify-center shadow-inner">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Raipur, Chhattisgarh, India</span>
                </div>
              </div>
            </div>

            {/* Bottom Motto */}
            <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between text-[11px] font-mono font-bold text-gray-500">
              <span>INNOVATE • BUILD • EMPOWER</span>
              <ArrowUpRight className="w-4 h-4 text-[#1468E8]" />
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Form with Live Per-Word Typing Animations */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#F7F9FC] border border-black/5 shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
            {submitted ? (
              <div className="py-20 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-lg animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-3xl font-black text-[#07152F] mb-2">BUILD SPEC RECEIVED</h3>
                <p className="text-gray-600 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you! Ashish Suresh and the technical architecture team will connect with you within 12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. Project Intent */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 font-bold mb-3">
                    01. Project Objective
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {intentOptions.map((opt) => {
                      const active = selectedIntent === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedIntent(opt.id)}
                          className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 ${
                            active
                              ? "bg-white border-[#1468E8] shadow-[0_4px_20px_rgba(20,104,232,0.18)] scale-[1.02]"
                              : "bg-white/60 border-black/5 hover:border-black/15 text-gray-600"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className={`text-xs font-black font-mono ${active ? "text-[#1468E8]" : "text-[#07152F]"}`}>
                              {opt.label}
                            </span>
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                              active ? "bg-[#1468E8] text-white shadow-sm" : "border border-gray-300"
                            }`}>
                              {active && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </div>
                          </div>
                          <span className="text-[10px] text-gray-500 block leading-tight">{opt.desc}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Systems Multiselect (Dynamic Blue Glow Pills) */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 font-bold mb-3">
                    02. Required Capabilities
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {buildCategories.map((cat) => {
                      const isChecked = selectedServices.includes(cat);
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => toggleService(cat)}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-bold transition-all duration-300 border ${
                            isChecked
                              ? "bg-[#1468E8] text-white border-[#1468E8] shadow-[0_4px_16px_rgba(20,104,232,0.35)] scale-105"
                              : "bg-white border-black/5 text-gray-700 hover:border-black/20"
                          }`}
                        >
                          <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${
                            isChecked ? "bg-white text-[#1468E8]" : "border border-gray-300"
                          }`}>
                            {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                          <span>{cat}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Budget Bracket in INR (₹) */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 font-bold mb-3">
                    03. Anticipated Budget (INR ₹)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {budgetTiers.map((tier) => {
                      const active = selectedBudget === tier;
                      return (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setSelectedBudget(tier)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold text-center border transition-all duration-200 ${
                            active
                              ? "bg-[#07152F] text-white border-[#07152F] shadow-[0_4px_15px_rgba(7,21,47,0.25)]"
                              : "bg-white border-black/5 text-gray-700 hover:border-[#1468E8]"
                          }`}
                        >
                          {tier}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Credentials with Keystroke Pulse & Real-time Live Validation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-[11px] font-mono font-bold text-gray-600 uppercase">
                        Full Name
                      </label>
                      {formData.name.length > 0 && (
                        isNameValid ? (
                          <span className="text-[10px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                            <Check className="w-3 h-3" /> Valid
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-red-500 font-bold flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> Min 3 letters
                          </span>
                        )
                      )}
                    </div>
                    <div className="relative">
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Ashish Kumar"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-white border text-xs font-medium text-[#07152F] placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                          typingField === "name"
                            ? "border-[#1468E8] shadow-[0_0_20px_rgba(20,104,232,0.3)] scale-[1.01]"
                            : isNameValid && formData.name
                            ? "border-emerald-500 shadow-sm"
                            : "border-black/10 hover:border-black/20"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-[11px] font-mono font-bold text-gray-600 uppercase">
                        Work Email
                      </label>
                      {formData.email.length > 0 && (
                        isEmailValid ? (
                          <span className="text-[10px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                            <Check className="w-3 h-3" /> Valid Email
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-red-500 font-bold flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> Enter valid email
                          </span>
                        )
                      )}
                    </div>
                    <div className="relative">
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="ashish@company.com"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-white border text-xs font-medium text-[#07152F] placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                          typingField === "email"
                            ? "border-[#1468E8] shadow-[0_0_20px_rgba(20,104,232,0.3)] scale-[1.01]"
                            : isEmailValid && formData.email
                            ? "border-emerald-500 shadow-sm"
                            : "border-black/10 hover:border-black/20"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Project Summary Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-[11px] font-mono font-bold text-gray-600 uppercase">
                      Project Vision &amp; Deliverables
                    </label>
                    <span className="text-[10px] font-mono text-gray-400">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe what you want to build, tech preference, or specific deadlines..."
                    className={`w-full px-4 py-3.5 rounded-2xl bg-white border text-xs font-medium text-[#07152F] placeholder-gray-400 focus:outline-none transition-all duration-200 resize-none ${
                      typingField === "message"
                        ? "border-[#1468E8] shadow-[0_0_20px_rgba(20,104,232,0.3)] scale-[1.005]"
                        : "border-black/10 hover:border-black/20"
                    }`}
                  />
                </div>

                {/* Submit Action Button with Pulse Glow */}
                <button
                  type="submit"
                  disabled={!isNameValid || !isEmailValid}
                  className={`w-full py-4 rounded-full text-xs font-bold font-mono tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                    isNameValid && isEmailValid
                      ? "bg-[#1468E8] text-white shadow-[0_6px_25px_rgba(20,104,232,0.4)] hover:shadow-[0_8px_35px_rgba(20,104,232,0.65)] hover:scale-[1.01] cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
                  }`}
                >
                  <span>INITIALIZE SYSTEM BUILD</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}