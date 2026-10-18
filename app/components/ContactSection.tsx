'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Copy, 
  Check, 
  Send,
  Sparkles,
  MessageSquare,
  Globe,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { PROFILE } from '../data/profileData';

const WEB3FORMS_ACCESS_KEY = '5a77a307-70c8-4bc5-b8fb-29c762c662aa';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'Full-time Role',
    message: '',
    botcheck: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Inquiry: ${formData.name} (${formData.reason})`,
          message: `Reason: ${formData.reason}\n\n${formData.message}`,
          botcheck: formData.botcheck,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          reason: 'Full-time Role',
          message: '',
          botcheck: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Submission failed. Please try emailing directly.');
      }
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Network error. Please try emailing directly.');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">06 — Contact</span>
        <h2 className="section-title">
          Let&apos;s Connect
        </h2>
        <p className="section-subtitle">
          I reply within 24 hours. The fastest way to reach me is this form, direct email, or WhatsApp.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact & Availability */}
        <motion.div 
          className="lg:col-span-5 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* "Currently" Availability Card */}
          <div className="p-6 rounded-3xl bg-[#0E121B] border border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-mono">
                Currently Open
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Open to <strong className="text-white">Software AI Engineer</strong> and <strong className="text-white">Agentic AI Engineer</strong> positions.
            </p>
            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#5EEAD4]" />
                <span>Based in Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-[#818CF8]" />
                <span>Open to Remote Worldwide &amp; Global Relocation</span>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-[#0E121B] border border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#151B27] flex items-center justify-center text-[#5EEAD4] border border-slate-800">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono uppercase text-slate-400">Direct Email</span>
                <a href={`mailto:${PROFILE.email}`} className="text-sm font-semibold text-slate-100 hover:text-[#5EEAD4] transition-colors">
                  {PROFILE.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-lg bg-[#151B27] hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
            </button>
          </div>

          {/* WhatsApp / Phone Card */}
          <div className="p-5 rounded-2xl bg-[#0E121B] border border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#151B27] flex items-center justify-center text-emerald-400 border border-slate-800">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono uppercase text-slate-400">WhatsApp / Phone</span>
                <a href="https://wa.me/201284355306" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-100 hover:text-emerald-400 transition-colors">
                  {PROFILE.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/201284355306"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/60 transition-colors"
              >
                Chat
              </a>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-[#151B27] hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
                title="Copy phone"
              >
                {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Resume Download Pill */}
          <a
            href={PROFILE.cvPath}
            download="Kerollos_Mansour_CV.pdf"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#151B27] hover:bg-slate-800 border border-slate-800 text-sm font-semibold text-slate-200 hover:text-white transition-all shadow-md"
          >
            <Download size={16} className="text-[#5EEAD4]" />
            <span>Download Verified CV (PDF)</span>
          </a>
        </motion.div>

        {/* Right Column: Real Web3Forms Contact Form */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0E121B] border border-slate-800 shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-['Space_Grotesk']">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed mb-6">
                    Thank you for reaching out. Your message has been delivered directly to Kerollos&apos;s personal inbox. I typically respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-xl bg-[#151B27] hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field for anti-spam */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    checked={!!formData.botcheck}
                    onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                  />

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Reason Chips Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Opportunity Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Full-time Role', 'Contract / Consulting', 'Collaboration', 'General Inquiry'].map((reason) => (
                        <button
                          key={reason}
                          type="button"
                          onClick={() => setFormData({ ...formData, reason })}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            formData.reason === reason
                              ? 'bg-[#5EEAD4] text-[#070A12] font-semibold shadow-md shadow-[#5EEAD4]/20'
                              : 'bg-[#151B27] text-slate-400 hover:text-white border border-slate-800'
                          }`}
                        >
                          {reason}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#151B27] border border-slate-800 focus:border-[#5EEAD4] focus:outline-none text-sm text-slate-100 placeholder-slate-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#151B27] border border-slate-800 focus:border-[#5EEAD4] focus:outline-none text-sm text-slate-100 placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Hi Kerollos, I'd like to talk about an AI engineering opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#151B27] border border-slate-800 focus:border-[#5EEAD4] focus:outline-none text-sm text-slate-100 placeholder-slate-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#5EEAD4] hover:bg-[#2DD4BF] text-[#070A12] text-sm font-semibold transition-all duration-200 shadow-lg shadow-[#5EEAD4]/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Delivering Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
