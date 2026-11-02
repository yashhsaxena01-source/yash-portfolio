import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, FileDown, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-14 sm:mb-18 md:mb-24">
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Contact
            </h2>
            <p className="mt-4 text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
              Get in Touch &bull; Open for Inquiries &amp; Collaborations
            </p>
          </div>
        </FadeIn>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch">
          {/* Left Column: Direct Contact Details & Resume (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <FadeIn delay={0.1} y={30} className="h-full">
              <div className="h-full rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/20 bg-[#121212] p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
                {/* Background ambient light */}
                <div
                  className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-15 pointer-events-none blur-3xl"
                  style={{
                    background: 'radial-gradient(circle, #B600A8 0%, #7621B0 60%, transparent 100%)',
                  }}
                />

                <div>
                  <span className="text-[11px] sm:text-xs uppercase font-light tracking-widest text-[#B600A8]">
                    Direct Reach
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide mt-1 mb-2">
                    Yash Saxena
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/65 leading-relaxed mb-6">
                    Feel free to connect directly via phone call, email, or LinkedIn.
                  </p>

                  {/* Contact Info List */}
                  <div className="space-y-4">
                    {/* 1. Phone number with clickable call option */}
                    <a
                      href="tel:7668362318"
                      className="group flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#B600A8] group-hover:scale-110 transition-transform shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-[10px] uppercase tracking-wider text-[#D7E2EA]/50 font-medium">
                          Phone / Click to Call
                        </span>
                        <span className="text-sm sm:text-base font-medium text-white group-hover:text-[#BBCCD7] transition-colors">
                          +91 7668362318
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]/40 group-hover:text-white transition-colors shrink-0" />
                    </a>

                    {/* 2. Email with clickable mailto link */}
                    <a
                      href="mailto:yashhsaxena01@gmail.com"
                      className="group flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#7621B0] group-hover:scale-110 transition-transform shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-[10px] uppercase tracking-wider text-[#D7E2EA]/50 font-medium">
                          Email Address
                        </span>
                        <span className="text-sm sm:text-base font-medium text-white truncate block group-hover:text-[#BBCCD7] transition-colors">
                          yashhsaxena01@gmail.com
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]/40 group-hover:text-white transition-colors shrink-0" />
                    </a>

                    {/* 3. Location */}
                    <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#BE4C00] shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-[10px] uppercase tracking-wider text-[#D7E2EA]/50 font-medium">
                          Location
                        </span>
                        <span className="text-sm sm:text-base font-medium text-white">
                          Kanpur, Uttar Pradesh
                        </span>
                      </div>
                    </div>

                    {/* 4. LinkedIn Link */}
                    <a
                      href="https://www.linkedin.com/in/yash-saxena-a99720383/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#0077B5]/10 border border-[#0077B5]/30 hover:border-[#0077B5]/70 hover:bg-[#0077B5]/20 transition-all text-white"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0077B5]/20 flex items-center justify-center text-[#0077B5] group-hover:scale-110 transition-transform shrink-0">
                          <Linkedin className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-[10px] uppercase tracking-wider text-[#D7E2EA]/60 font-medium">
                            Professional Network
                          </span>
                          <span className="text-sm sm:text-base font-medium text-white">
                            Connect on LinkedIn
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#D7E2EA]/60 group-hover:text-white transition-colors" />
                    </a>

                    {/* 5. GitHub Link */}
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.06] transition-all text-white"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                          <Github className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-[10px] uppercase tracking-wider text-[#D7E2EA]/60 font-medium">
                            Code Repositories
                          </span>
                          <span className="text-sm sm:text-base font-medium text-white">
                            Explore on GitHub
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#D7E2EA]/60 group-hover:text-white transition-colors" />
                    </a>
                  </div>

                  {/* Clickable Social & Email Icon Action Bar */}
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <span className="block text-[10px] uppercase tracking-wider text-[#D7E2EA]/50 font-medium mb-2.5">
                      Quick Connect Channels
                    </span>
                    <div className="grid grid-cols-3 gap-2.5">
                      <a
                        href="https://www.linkedin.com/in/yash-saxena-a99720383/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Connect on LinkedIn"
                        title="LinkedIn Profile"
                        className="py-2.5 px-2 rounded-xl bg-[#0077B5]/15 border border-[#0077B5]/30 hover:border-[#0077B5] hover:bg-[#0077B5]/25 flex items-center justify-center gap-2 text-white text-xs font-medium transition-all group"
                      >
                        <Linkedin className="w-4 h-4 text-[#0077B5] group-hover:scale-110 transition-transform" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Explore GitHub"
                        title="GitHub Profile"
                        className="py-2.5 px-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 flex items-center justify-center gap-2 text-white text-xs font-medium transition-all group"
                      >
                        <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href="mailto:yashhsaxena01@gmail.com"
                        aria-label="Send Email"
                        title="Send Email to yashhsaxena01@gmail.com"
                        className="py-2.5 px-2 rounded-xl bg-purple-500/15 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/25 flex items-center justify-center gap-2 text-white text-xs font-medium transition-all group"
                      >
                        <Mail className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 5. Prominent "Download Resume" button */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Magnet strength={4} className="w-full">
                    <a
                      href="/resume.pdf"
                      download="Yash_Saxena_Resume.pdf"
                      className="w-full py-4 px-6 rounded-full font-medium uppercase tracking-widest text-sm text-white flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 contact-btn-style shadow-lg hover:shadow-[0_0_25px_rgba(182,0,168,0.5)]"
                    >
                      <FileDown className="w-5 h-5 shrink-0" />
                      <span>Download Resume (PDF)</span>
                    </a>
                  </Magnet>
                  <p className="text-center text-[11px] text-[#D7E2EA]/40 mt-2">
                    Verified BCA Academic &amp; Technical Skills Summary
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Professional Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} y={30} className="h-full">
              <div className="h-full rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/20 bg-[#121212] p-6 sm:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
                {submitted ? (
                  <div className="py-20 flex flex-col items-center justify-center text-center my-auto">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                      Message Received!
                    </h3>
                    <p className="text-[#D7E2EA]/70 mt-2 text-sm sm:text-base max-w-md">
                      Thank you for reaching out. Yash will review your message and reply back shortly.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6 sm:mb-8">
                      <span className="text-[11px] sm:text-xs uppercase font-light tracking-widest text-[#B600A8]">
                        Send a Message
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide mt-1">
                        Let&apos;s Discuss an Opportunity
                      </h3>
                      <p className="text-[#D7E2EA]/60 text-xs sm:text-sm mt-1">
                        Fill in your details below and I will get back to you promptly.
                      </p>
                    </div>

                    {/* 4. Professional Contact Form with Name, Email, and Message */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-2 font-medium">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-2 font-medium">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. rahul@example.com"
                          className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors text-sm"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-2 font-medium">
                          Message
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Write your inquiry, project scope, or opportunity details here..."
                          className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors text-sm resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 rounded-full font-medium uppercase tracking-widest text-sm text-white flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 contact-btn-style"
                        >
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
