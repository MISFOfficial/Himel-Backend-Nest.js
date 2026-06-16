"use client";

import React from "react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Connor",
      role: "Lead Art Director",
      company: "CyberVibe Games",
      feedback: "Himel's mastery over Blender volumetric lighting and scene composition brought our cyberpunk environment to life. The optimization, emission control, and final grading surpassed our expectations.",
      rating: 5,
    },
    {
      name: "Marcus Aurelius",
      role: "Executive Producer",
      company: "Aura Fragrances",
      feedback: "We needed a CGI product advertisement that felt ultra-premium. Himel simulated a high-fidelity fluid dynamics wrapper around our perfume bottle with perfect glass refraction. Exceptional work.",
      rating: 5,
    },
    {
      name: "Elena Vance",
      role: "VFX Supervisor",
      company: "NeoMech Studios",
      feedback: "Matchmoving and integrating dynamic rigged characters into live footage is complex. Himel coordinated custom HDR maps and shadow capture passes perfectly. A production-ready CGI artist.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative pt-20 bg-bg-site overflow-hidden border-t border-white/5">
      {/* Decorative text watermark */}
      <div className="absolute top-1/2 right-10 select-none pointer-events-none opacity-[0.01] text-[150px] font-black text-white uppercase tracking-tighter -translate-y-1/2 whitespace-nowrap">
        REVIEWS //
      </div>

      <div className="relative z-10 px-6">
        {/* Section Header */}
        <div className="text-left mb-16 relative">
          <span className="font-caveat text-pink-500 text-3xl block mb-2 lowercase">
            client feedback
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white font-outfit">
            WHAT THE PARTNERS <span className="text-pink-500">SAY</span>
          </h2>
          <div className="w-16 h-1 bg-pink-500 mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group relative bg-white/[0.01] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-pink-500/20 hover:bg-white/[0.02]"
            >
              {/* Viewport Frame corner brackets */}
              <div className="absolute top-4 left-4 w-2.5 h-2.5 border-t-2 border-l-2 border-transparent group-hover:border-pink-500 transition-all duration-300" />
              <div className="absolute top-4 right-4 w-2.5 h-2.5 border-t-2 border-r-2 border-transparent group-hover:border-pink-500 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 w-2.5 h-2.5 border-b-2 border-l-2 border-transparent group-hover:border-pink-500 transition-all duration-300" />
              <div className="absolute bottom-4 right-4 w-2.5 h-2.5 border-b-2 border-r-2 border-transparent group-hover:border-pink-500 transition-all duration-300" />

              <div>
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-pink-500/30 group-hover:text-pink-500 transition-colors duration-300">
                    <Quote size={24} fill="currentColor" className="opacity-40" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={10} className="fill-pink-500 text-pink-500" />
                    ))}
                  </div>
                </div>

                {/* Feedback Text */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium mb-8 text-left">
                  "{review.feedback}"
                </p>
              </div>

              {/* Client Info details */}
              <div className="border-t border-white/5 pt-4 text-left">
                <span className="text-xs font-black uppercase tracking-wider text-white block">
                  {review.name}
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mt-0.5">
                  {review.role} // <span className="text-pink-500/80">{review.company}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
