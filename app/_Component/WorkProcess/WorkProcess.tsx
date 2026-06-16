"use client";

import React from "react";
import { Compass, Box, Sparkles, Film, ArrowRight } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      num: "01",
      phase: "Pre-Production",
      title: "CREATIVE DIRECTION",
      desc: "Defining the core concept, style frames, color boards, and storyboards to map the visual narrative before firing up the engines.",
      tasks: [
        "Creative Briefing",
        "Style Frames",
        "Storyboarding",
        "Art Direction",
      ],
      Icon: Compass,
    },
    {
      num: "02",
      phase: "Assets Creation",
      title: "3D MODELING & SHADING",
      desc: "Creating high-fidelity 3D assets, textures, rigging, and shader development inside Blender and Cinema 4D for organic realism.",
      tasks: [
        "3D Modeling",
        "Texture Shading",
        "Character Rigging",
        "Lighting Setup",
      ],
      Icon: Box,
    },
    {
      num: "03",
      phase: "Animation",
      title: "MOTION & SIMULATION",
      desc: "Bringing models to life through keyframing, camera choreography, rigging, and complex physics/particle simulations.",
      tasks: [
        "Keyframe Motion",
        "Physics Simulation",
        "Camera Pathing",
        "Render Optimizing",
      ],
      Icon: Sparkles,
    },
    {
      num: "04",
      phase: "Post-Production",
      title: "SOUND & POST EFFECTS",
      desc: "The final touch. Compositing render passes, color grading, sound design integration, and final high-end video encoding.",
      tasks: ["Compositing", "Color Grading", "Sound Design", "Final Delivery"],
      Icon: Film,
    },
  ];

  return (
    <section id="services" className="relative  bg-bg-site overflow-hidden">
      {/* Background outline brand text decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.01] text-[180px] font-black text-white uppercase tracking-tighter whitespace-nowrap">
        WORK FLOW //
      </div>

      <div className=" relative z-10">
        {/* Title block */}
        <div className="text-left mb-16 relative">
          <span className="font-caveat text-pink-500 text-3xl block mb-2 lowercase">
            creative pipeline
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white font-outfit">
            HOW I BRING IDEAS <span className="text-pink-500">TO LIFE</span>
          </h2>
          <div className="w-16 h-1 bg-pink-500 mt-4" />
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComp = step.Icon;
            return (
              <div
                key={idx}
                className="group relative bg-white/[0.01] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[380px] transition-all duration-500 hover:border-pink-500/20 hover:bg-white/[0.02] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(255,0,85,0.05)]"
              >
                {/* Viewport Bracket styling on hover */}
                <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-[#ff0055] transition-all duration-300" />
                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#ff0055] transition-all duration-300" />
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-[#ff0055] transition-all duration-300" />
                <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-[#ff0055] transition-all duration-300" />

                {/* Top Section */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-black font-mono tracking-tighter text-zinc-700 group-hover:text-pink-500 transition-colors duration-300">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-[#ff0055] group-hover:border-transparent transition-all duration-300">
                      <IconComp size={16} />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-pink-500/70 uppercase block mb-1">
                    {step.phase}
                  </span>
                  <h3 className="text-lg font-black tracking-tight text-white mb-4 group-hover:text-pink-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Section - Tasks List */}
                <div className="border-t border-white/5 pt-6 mt-8">
                  <div className="flex flex-wrap gap-1.5">
                    {step.tasks.map((task, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono uppercase tracking-wider bg-white/[0.02] border border-white/5 text-zinc-400 px-2 py-1 rounded"
                      >
                        {task}
                      </span>
                    ))}
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
