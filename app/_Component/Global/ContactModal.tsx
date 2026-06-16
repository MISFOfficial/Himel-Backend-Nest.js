"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Linkedin, Facebook } from "lucide-react";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-[550px] bg-zinc-950/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Background Glows */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#ff0055]/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />

            {/* Close Trigger */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-zinc-400 hover:text-white transition-all cursor-pointer"
            >
              <X size={15} />
            </button>

            {/* Title Block */}
            <div className="mb-6 text-left">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Start a <span className="text-[#ff0055]">Project</span>
              </h2>
              <p className="text-xs text-zinc-400 mt-1 font-medium">
                Fill in the details below or direct message on social channels.
              </p>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-[9px] font-bold uppercase tracking-widest text-zinc-500 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 bg-white/[0.02] border border-white/10 rounded-xl focus:border-[#ff0055] focus:bg-white/[0.04] text-white text-xs outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[9px] font-bold uppercase tracking-widest text-zinc-500 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john@example.com"
                  className="w-full px-4 py-2.5 bg-white/[0.02] border border-white/10 rounded-xl focus:border-[#ff0055] focus:bg-white/[0.04] text-white text-xs outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[9px] font-bold uppercase tracking-widest text-zinc-500 mb-1.5">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your design needs, timeline, or inquiries..."
                  className="w-full px-4 py-2.5 bg-white/[0.02] border border-white/10 rounded-xl focus:border-[#ff0055] focus:bg-white/[0.04] text-white text-xs outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#ff0055] hover:bg-[#ff0055]/90 disabled:opacity-75 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer hover:shadow-md hover:shadow-[#ff0055]/15"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send size={12} />
              </button>
            </form>

            {/* Direct Connect Grid */}
            <div className="relative my-6 flex items-center justify-center">
              <div className="absolute inset-x-0 h-px bg-white/10" />
              <span className="relative bg-zinc-950 px-3 text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
                OR REACH VIA
              </span>
            </div>

            {/* Grid of Social Channels */}
            <div className="grid grid-cols-3 gap-3">
              {/* WhatsApp shortcut */}
              <a
                href="https://wa.me/8801700000000" // Replace with actual number if needed
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] hover:border-[#25D366] transition-all group"
              >
                <svg
                  className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#25D366] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.019-5.101-2.875-6.958-1.856-1.856-4.327-2.875-6.96-2.877-5.438 0-9.863 4.42-9.866 9.863-.001 1.702.461 3.351 1.337 4.8l-.994 3.629 3.771-.989zm13.411-8.022c-.303-.151-1.793-.884-2.071-.985-.278-.102-.48-.153-.682.151-.201.303-.781.985-.957 1.186-.176.201-.353.226-.656.075-1.127-.565-2.039-1.042-2.843-2.422-.213-.365.213-.34.61-.1.356-.213.356-.356.565-.656a.37.37 0 0 0-.019-.353c-.05-.101-.48-1.162-.658-1.59-.174-.422-.37-.365-.507-.365H9.72c-.176 0-.464.066-.707.329-.243.264-.928.907-.928 2.21 0 1.304.947 2.563 1.078 2.738.131.176 1.862 2.844 4.509 3.984.63.272 1.12.435 1.503.556.633.201 1.21.173 1.666.104.508-.076 1.793-.732 2.046-1.439.253-.707.253-1.313.177-1.439-.076-.126-.278-.201-.581-.352z" />
                </svg>
                <span className="text-[10px] font-semibold text-zinc-400 group-hover:text-white transition-colors">WhatsApp</span>
              </a>

              {/* LinkedIn shortcut */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] hover:border-[#0077b5] transition-all group"
              >
                <Linkedin size={14} className="text-zinc-400 group-hover:text-[#0077b5] transition-colors" />
                <span className="text-[10px] font-semibold text-zinc-400 group-hover:text-white transition-colors">LinkedIn</span>
              </a>

              {/* Facebook shortcut */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] hover:border-[#1877f2] transition-all group"
              >
                <Facebook size={14} className="text-zinc-400 group-hover:text-[#1877f2] transition-colors" />
                <span className="text-[10px] font-semibold text-zinc-400 group-hover:text-white transition-colors">Facebook</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
