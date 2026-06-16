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
            {/* Ambient Pink Glows (Strictly brand-aligned colors) */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-pink-500/5 blur-[90px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-pink-500/3 blur-[90px] rounded-full pointer-events-none" />

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
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-none font-outfit">
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

            {/* Clear/Transparent Social Buttons with Borders & Padding */}
            <div className="grid grid-cols-3 gap-3">
              {/* WhatsApp shortcut */}
              <a
                href="https://wa.me/8801700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl bg-transparent text-zinc-400 hover:text-[#25D366] hover:border-[#25D366] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-105"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.019-5.101-2.875-6.958-1.856-1.856-4.327-2.875-6.96-2.877-5.438 0-9.863 4.42-9.866 9.863-.001 1.702.461 3.351 1.337 4.8l-.994 3.629 3.771-.989zm13.411-8.022c-.303-.151-1.793-.884-2.071-.985-.278-.102-.48-.153-.682.151-.201.303-.781.985-.957 1.186-.176.201-.353.226-.656.075-1.127-.565-2.039-1.042-2.843-2.422-.213-.365.213-.34.61-.1.356-.213.356-.356.565-.656a.37.37 0 0 0-.019-.353c-.05-.101-.48-1.162-.658-1.59-.174-.422-.37-.365-.507-.365H9.72c-.176 0-.464.066-.707.329-.243.264-.928.907-.928 2.21 0 1.304.947 2.563 1.078 2.738.131.176 1.862 2.844 4.509 3.984.63.272 1.12.435 1.503.556.633.201 1.21.173 1.666.104.508-.076 1.793-.732 2.046-1.439.253-.707.253-1.313.177-1.439-.076-.126-.278-.201-.581-.352z" />
                </svg>
                <span className="text-[10px] font-mono tracking-widest font-bold">WA</span>
              </a>

              {/* LinkedIn shortcut */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl bg-transparent text-zinc-400 hover:text-[#0077b5] hover:border-[#0077b5] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                <Linkedin size={14} className="text-[#0077b5] transition-transform group-hover:scale-105" />
                <span className="text-[10px] font-mono tracking-widest font-bold">LN</span>
              </a>

              {/* Facebook shortcut */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl bg-transparent text-zinc-400 hover:text-[#1877f2] hover:border-[#1877f2] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                <Facebook size={14} className="text-[#1877f2] transition-transform group-hover:scale-105" />
                <span className="text-[10px] font-mono tracking-widest font-bold">FB</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
