'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Send,
  FileText,
  Sparkles
} from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI Engineering Opportunity',
    message: '',
  });
  const [formSent, setFormSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      formData.subject + ' - ' + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header-center">
        <span className="section-pill">Get in Touch</span>
        <h2 className="section-title">
          Let&apos;s Build <span className="text-gradient-cyan">Something Extraordinary</span>
        </h2>
        <p className="section-subtitle">
          Open to senior software AI engineering roles, technical architecture contracts, and worldwide relocation opportunities.
        </p>
      </div>

      <div className="contact-main-grid">
        {/* Left Column: Direct Contact Info & CV Download Card */}
        <div className="contact-info-column">
          {/* Email Card */}
          <div className="contact-card email-card">
            <div className="contact-card-icon">
              <Mail size={22} className="text-cyan" />
            </div>
            <div className="contact-card-details">
              <span className="contact-card-label">Direct Email</span>
              <a href={`mailto:${PROFILE.email}`} className="contact-card-value">
                {PROFILE.email}
              </a>
            </div>
            <button
              className="btn-copy-contact"
              onClick={handleCopyEmail}
              title="Copy Email to Clipboard"
            >
              {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="contact-card phone-card">
            <div className="contact-card-icon">
              <Phone size={22} className="text-emerald" />
            </div>
            <div className="contact-card-details">
              <span className="contact-card-label">Phone & WhatsApp</span>
              <a href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`} className="contact-card-value">
                {PROFILE.phone}
              </a>
            </div>
            <button
              className="btn-copy-contact"
              onClick={handleCopyPhone}
              title="Copy Phone to Clipboard"
            >
              {copiedPhone ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
            </button>
          </div>

          {/* Location & Relocation Card */}
          <div className="contact-card location-card">
            <div className="contact-card-icon">
              <MapPin size={22} className="text-violet" />
            </div>
            <div className="contact-card-details">
              <span className="contact-card-label">Location & Relocation</span>
              <div className="contact-card-value">{PROFILE.location}</div>
              <span className="contact-relocation-sub">{PROFILE.relocation}</span>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="contact-socials-row">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn github"
            >
              <Github size={18} />
              <span>GitHub / Kyrollo</span>
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn linkedin"
            >
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          {/* Dedicated Download CV Card */}
          <div className="cv-download-card">
            <div className="cv-card-top">
              <div className="cv-card-icon">
                <FileText size={24} className="text-cyan" />
              </div>
              <div className="cv-card-meta">
                <h4 className="cv-card-title">Curriculum Vitae</h4>
                <span className="cv-card-format">PDF Document • 176 KB</span>
              </div>
            </div>
            <p className="cv-card-desc">
              Comprehensive overview of professional experience at IBEX Solutions and Fixed Solutions, AI degree from Cairo University, and certifications.
            </p>
            <a
              href={PROFILE.cvPath}
              download="Kerollos_Mansour_CV.pdf"
              className="btn-cv-download-primary"
            >
              <Download size={18} />
              <span>Download Full CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Right Column: Quick Interactive Message Form */}
        <div className="contact-form-column">
          <div className="contact-form-card">
            <h3 className="form-card-title">
              <Sparkles size={18} className="text-cyan" />
              <span>Send a Message</span>
            </h3>
            <p className="form-card-desc">
              Interested in collaborating, recruiting, or reviewing technical architectures? Send a direct message below.
            </p>

            {formSent ? (
              <div className="form-success-banner">
                <Check size={28} className="text-emerald" />
                <h4>Message Composed!</h4>
                <p>Your default email client has been launched with your message prefilled.</p>
                <button className="btn-secondary" onClick={() => setFormSent(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="AI Engineering Opportunity">Senior AI Engineering Role</option>
                    <option value="LLM Architecture Consulting">LLM Architecture & Systems Consulting</option>
                    <option value="Project Collaboration">Open Source Project Collaboration</option>
                    <option value="General Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your team, tech stack, or the project you are building..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-send-message">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
