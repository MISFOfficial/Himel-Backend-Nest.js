"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
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
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Premium Brand Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative w-full max-w-[580px] bg-bg-site border border-white/10 rounded-2xl p-8 sm:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.8)] z-10 overflow-hidden"
          >
            {/* Ambient Pink Glow behind */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-pink-500/5 blur-[90px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/5 blur-[90px] rounded-full pointer-events-none" />

            {/* Elegant Close Trigger */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 hover:border-[#ff0055] hover:bg-[#ff0055]/5 flex items-center justify-center text-zinc-400 hover:text-white transition-all cursor-pointer group"
            >
              <X size={16} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Header Block */}
            <div className="mb-10 text-left relative">
              <span className="font-caveat text-pink-500 text-2xl block mb-1 lowercase">
                say hello
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-none">
                LET'S CREATE <span className="text-pink-500">TOGETHER</span>
              </h2>
              <div className="w-12 h-0.5 bg-pink-500 mt-4" />
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
                  01 // FULL NAME
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full bg-transparent border-b border-white/10 focus:border-pink-500 py-3 text-white placeholder-zinc-700 outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
                  02 // EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john@example.com"
                  className="w-full bg-transparent border-b border-white/10 focus:border-pink-500 py-3 text-white placeholder-zinc-700 outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
                  03 // PROJECT DETAILS
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Brief description of your motion or 3D project..."
                  className="w-full bg-transparent border-b border-white/10 focus:border-pink-500 py-3 text-white placeholder-zinc-700 outline-none transition-colors text-sm resize-none"
                />
              </div>

              {/* Submit Trigger - Premium slide hover animation */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative group overflow-hidden w-full py-4 bg-white text-black font-black uppercase text-xs tracking-widest transition-transform active:scale-[0.98] cursor-pointer mt-4"
              >
                <span className="absolute inset-0 bg-[#ff0055] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  <span>{isSubmitting ? "SENDING //" : "SEND MESSAGE //"}</span>
                  <Send size={12} />
                </span>
              </button>
            </form>

            {/* Social Channels Divider */}
            <div className="relative my-8 flex items-center justify-center">
              <div className="absolute inset-x-0 h-px bg-white/5" />
              <span className="relative bg-bg-site px-4 text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
                OR CONNECT DIRECTLY
              </span>
            </div>

            {/* Minimal Monospaced Social links */}
            <div className="flex justify-around items-center text-[11px] font-mono tracking-widest">
              {/* WhatsApp shortcut */}
              <a
                href="https://wa.me/8801700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-pink-500 transition-colors uppercase py-1 px-2 group"
              >
                [ <span className="group-hover:text-white">WA</span> // whatsapp ]
              </a>

              {/* LinkedIn shortcut */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-pink-500 transition-colors uppercase py-1 px-2 group"
              >
                [ <span className="group-hover:text-white">LN</span> // linkedin ]
              </a>

              {/* Facebook shortcut */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-pink-500 transition-colors uppercase py-1 px-2 group"
              >
                [ <span className="group-hover:text-white">FB</span> // facebook ]
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
