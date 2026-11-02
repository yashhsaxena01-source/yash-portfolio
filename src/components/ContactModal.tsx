import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Linkedin, Github, FileDown, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-xl bg-[#121212] border-2 border-[#D7E2EA]/20 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-auto max-h-[92vh] overflow-y-auto no-scrollbar"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-black uppercase text-white tracking-wide">
                  Message Sent!
                </h3>
                <p className="text-[#D7E2EA]/70 mt-2 text-sm sm:text-base max-w-md">
                  Thank you! Yash will review your message and get back to you shortly.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs uppercase font-light tracking-widest text-[#B600A8]">
                    Get in touch
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-1">
                    Yash Saxena
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#D7E2EA]/60 text-xs sm:text-sm mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#BE4C00] shrink-0" />
                    <span>Kanpur, Uttar Pradesh</span>
                  </div>
                </div>

                {/* Direct channels: Phone, Email, LinkedIn */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {/* Phone */}
                  <a
                    href="tel:7668362318"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-[#D7E2EA] text-xs sm:text-sm font-medium transition-all group"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Phone className="w-4 h-4 text-[#B600A8] shrink-0" />
                      <span className="truncate">+91 7668362318</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 shrink-0" />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:yashhsaxena01@gmail.com"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-[#D7E2EA] text-xs sm:text-sm font-medium transition-all group"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Mail className="w-4 h-4 text-[#7621B0] shrink-0" />
                      <span className="truncate">yashhsaxena01@gmail.com</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 shrink-0" />
                  </a>

                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/in/yash-saxena-a99720383/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#0077B5]/15 border border-[#0077B5]/30 hover:border-[#0077B5]/70 hover:bg-[#0077B5]/25 text-white text-xs sm:text-sm font-medium transition-all group"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Linkedin className="w-4 h-4 text-[#0077B5] shrink-0" />
                      <span className="truncate">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 shrink-0" />
                  </a>

                  {/* GitHub Button */}
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 text-white text-xs sm:text-sm font-medium transition-all group"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Github className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="truncate">GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 shrink-0" />
                  </a>
                </div>

                {/* Form: Name, Email, Message */}
                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                      Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or inquiry here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full font-medium uppercase tracking-widest text-sm text-white flex items-center justify-center gap-2 cursor-pointer transition-all contact-btn-style"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {/* Prominent Resume Download Button */}
                <div className="pt-4 border-t border-white/10 text-center">
                  <a
                    href="/resume.pdf"
                    download="Yash_Saxena_Resume.pdf"
                    className="w-full py-3 px-6 rounded-full font-medium uppercase tracking-widest text-xs sm:text-sm text-white border-2 border-[#D7E2EA] hover:bg-[#D7E2EA]/10 flex items-center justify-center gap-2.5 cursor-pointer transition-all"
                  >
                    <FileDown className="w-4 h-4 text-[#B600A8]" />
                    <span>Download Resume (PDF)</span>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
