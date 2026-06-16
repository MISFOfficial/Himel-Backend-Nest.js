"use client";

import React from "react";
import { User, ShieldCheck, Zap, Layers } from "lucide-react";

export default function About() {
  const stats = [
    { value: "03+", label: "Years in 3D Motion" },
    { value: "50+", label: "Delivered Projects" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const skills = [
    { name: "3D Modeling & Texturing", level: 92, spec: "Blender / C4D" },
    {
      name: "Motion Design & Simulation",
      level: 88,
      spec: "Keyframes / Dynamics",
    },
    { name: "Fluid & Volumetrics", level: 85, spec: "FLIP Fluids / VDB" },
    {
      name: "Matchmoving & Compositing",
      level: 90,
      spec: "Nuke / After Effects",
    },
    { name: "Color Grading & Finish", level: 80, spec: "DaVinci Resolve" },
  ];

  return (
    <section
      id="about"
      className="relative pt-20 bg-bg-site overflow-hidden border-t border-white/5"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-10 select-none pointer-events-none opacity-[0.01] text-[150px] font-black text-white uppercase tracking-tighter -translate-y-1/2 whitespace-nowrap">
        ARTIST //
      </div>

      <div className="relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Profile & Biography */}
          <div className="lg:col-span-6 text-left">
            <span className="font-caveat text-pink-500 text-3xl block mb-2 lowercase">
              about the artist
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white font-outfit mb-6">
              DESIGNING DIGITAL <span className="text-pink-500">REALMS</span>
            </h2>

            <p className="text-sm text-zinc-400 leading-relaxed font-medium mb-6">
              Hridoy Islam Himel is a specialized 3D Artist and Motion Graphic
              Designer. Leveraging advanced simulation tools, physical shading
              parameters, and composition methods to forge digital environments,
              commercial product reels, and cinematics.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed font-medium mb-8">
              With deep technical familiarity across modern pipeline engines
              like Blender, Cinema 4D, After Effects, and Nuke, he delivers
              seamless transitions from concepts to final high-fidelity render
              passes.
            </p>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-left">
                  <span className="text-3xl sm:text-4xl font-black text-pink-500 block font-outfit">
                    {stat.value}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skill diagnostics HUD card */}
          <div className="lg:col-span-6">
            <div className="relative w-full bg-white/[0.01] border border-white/10 rounded-2xl p-6 sm:p-8 text-left overflow-hidden">
              {/* Viewport Framing corners */}
              <div className="absolute top-4 left-4 w-2.5 h-2.5 border-t border-l border-white/20" />
              <div className="absolute top-4 right-4 w-2.5 h-2.5 border-t border-r border-white/20" />
              <div className="absolute bottom-4 left-4 w-2.5 h-2.5 border-b border-l border-white/20" />
              <div className="absolute bottom-4 right-4 w-2.5 h-2.5 border-b border-r border-white/20" />

              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Layers size={14} className="text-pink-500" />
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold">
                    SYSTEM DIAGNOSTICS
                  </span>
                </div>
                <span className="text-[8px] font-mono tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded uppercase font-bold">
                  Status: Calibrated
                </span>
              </div>

              {/* Skill bars */}
              <div className="space-y-5">
                {skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-end text-xs">
                      <div>
                        <span className="text-zinc-300 font-bold block">
                          {skill.name}
                        </span>
                        <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                          {skill.spec}
                        </span>
                      </div>
                      <span className="font-mono text-pink-500 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Diagnostic bar */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-pink-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
