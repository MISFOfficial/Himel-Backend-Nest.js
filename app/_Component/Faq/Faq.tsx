"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What software do you use for your 3D modeling and rendering workflow?",
      a: "I primarily use Blender (Cycles/Eevee) and Cinema 4D (Octane Render) for 3D modeling, layout, and rendering. For textures and asset painting, I use Substance Painter, and Nuke/After Effects for final compositing and motion choreography.",
    },
    {
      q: "What is your average project turnaround time?",
      a: "Turnaround depends on project complexity. A high-fidelity product simulation or VFX composite usually takes 2 to 4 weeks, while complex 3D environment builds or multi-shot cinematics can take 5 to 8 weeks.",
    },
    {
      q: "Can you handle custom fluid dynamics or volumetric simulations?",
      a: "Yes, I specialize in simulating physical fluid dynamics (using FLIP solvers), particle networks, volumetric simulations (like fog, smoke, and fire), and detailed rigid body physics interactions.",
    },
    {
      q: "How do we collaborate on a project from start to finish?",
      a: "Our pipeline starts with creative direction (storyboarding, style boards). Next is the assets & modeling stage, followed by animation/simulations, and finally rendering, post-compositing, and sound integration.",
    },
    {
      q: "Do you deliver raw source files or only final rendered video files?",
      a: "Standard delivery includes high-resolution, master-quality video files (ProRes or high-bitrate MP4). Deliverables for raw source files (.blend, .c4d, shaders) can be requested and negotiated prior to production starting.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative pt-20 bg-bg-site overflow-hidden border-t border-white/5"
    >
      {/* Background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.01] text-[180px] font-black text-white uppercase tracking-tighter whitespace-nowrap">
        ANSWERS //
      </div>

      <div className="relative z-10 ">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <span className="font-caveat text-pink-500 text-3xl block mb-2 lowercase">
            frequently asked
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white font-outfit">
            TECHNICAL <span className="text-pink-500">FAQ</span>
          </h2>
          <div className="w-16 h-1 bg-pink-500 mt-4 mx-auto" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`group border rounded-2xl bg-white/[0.01] transition-all duration-300 ${
                  isOpen
                    ? "border-pink-500/30 bg-white/[0.02]"
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-[10px] font-mono tracking-widest font-bold transition-colors duration-300 ${
                        isOpen
                          ? "text-pink-500"
                          : "text-zinc-500 group-hover:text-zinc-400"
                      }`}
                    >
                      [ 0{idx + 1} ]
                    </span>
                    <span
                      className={`text-sm sm:text-base font-bold tracking-wide transition-colors duration-300 ${
                        isOpen
                          ? "text-pink-500"
                          : "text-zinc-200 group-hover:text-white"
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "border-pink-500/20 bg-pink-500 text-white"
                        : "border-white/10 text-zinc-400 group-hover:border-white/25 group-hover:text-white"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Accordion Content Box */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "max-h-[250px] opacity-100 border-t border-white/5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 text-sm text-zinc-400 leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
