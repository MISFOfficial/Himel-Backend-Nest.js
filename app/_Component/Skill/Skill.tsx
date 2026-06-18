"use client";

import React from "react";

export default function Skill() {
  const tools = [
    {
      name: "Blender",
      description: "Primary DCC for 3D production, shading, and simulation.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-current text-[#F57C00]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.29 15.68c-.68.68-1.78.68-2.46 0l-4.1-4.1c-.68-.68-.68-1.78 0-2.46l4.1-4.1c.68-.68 1.78-.68 2.46 0l4.1 4.1c.68.68.68 1.78 0 2.46l-4.1 4.1zM12 9.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
        </svg>
      ),
      glowColor:
        "group-hover:shadow-[0_0_30px_rgba(245,124,0,0.15)] group-hover:border-orange-500/30",
      tagGlow: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      skills: ["Modeling", "Geometry Nodes", "Rendering", "Simulation"],
    },
    {
      name: "After Effects",
      description: "Industry-standard motion design and visual compositing.",
      icon: (
        <div className="w-8 h-8 rounded bg-gradient-to-br from-[#1b1b3a] to-[#0d0d1f] border border-[#3b3bcf] flex items-center justify-center font-outfit text-xs font-black text-[#8b8bff] select-none">
          Ae
        </div>
      ),
      glowColor:
        "group-hover:shadow-[0_0_30px_rgba(59,59,207,0.15)] group-hover:border-blue-500/30",
      tagGlow: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      skills: ["Motion Graphics", "Product Commercials", "Compositing"],
    },
    {
      name: "Photoshop",
      description:
        "High-resolution texture editing and graphic asset creation.",
      icon: (
        <div className="w-8 h-8 rounded bg-gradient-to-br from-[#142834] to-[#0a141a] border border-[#31a6e2] flex items-center justify-center font-outfit text-xs font-black text-[#31a6e2] select-none">
          Ps
        </div>
      ),
      glowColor:
        "group-hover:shadow-[0_0_30px_rgba(49,166,226,0.15)] group-hover:border-cyan-500/30",
      tagGlow: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      skills: ["Texture Editing", "Retouching", "Creative Assets"],
    },
    {
      name: "nTop",
      description:
        "Advanced implicit modeling for advanced additive manufacturing.",
      icon: (
        <svg
          viewBox="0 0 512 512"
          className="w-8 h-8 rounded-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="ntopBgGradient"
              x1="256"
              y1="0"
              x2="256"
              y2="512"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1C1C1C" />
              <stop offset="1" stopColor="#0A0A0A" />
            </linearGradient>
          </defs>
          <path
            d="M0 182.4C0 81.663 81.663 0 182.4 0h147.2C430.337 0 512 81.663 512 182.4v147.2C512 430.337 430.337 512 329.6 512H0V182.4z"
            fill="url(#ntopBgGradient)"
          />
          <path
            d="M182.4 1h147.2C429.784 1 511 82.216 511 182.4v147.2C511 429.784 429.784 511 329.6 511H1V182.4C1 82.216 82.216 1 182.4 1z"
            stroke="#fff"
            strokeOpacity=".1"
            strokeWidth="2"
          />
          <g fill="#fff">
            <path d="M280 232H96v184h184V232z" />
            <path d="M96 232h184v184H96z" />
            <circle cx="326" cy="186" r="92" />
            <path d="M326 278c-24 0-46 22-46 46l-92-92c24 0 46-22 46-46l92 92z" />
          </g>
        </svg>
      ),
      glowColor:
        "group-hover:shadow-[0_0_30px_rgba(0,242,254,0.15)] group-hover:border-teal-500/30",
      tagGlow: "bg-teal-500/10 text-teal-400 border-teal-500/20",
      skills: [
        "Lattice Design",
        "Gyroid Structures",
        "Manufacturing Optimization",
      ],
    },
  ];

  // Repeat items for a continuous scrolling effect
  const marqueeItems = [...tools, ...tools, ...tools, ...tools];

  return (
    <section
      id="skills"
      className="relative pt-20 bg-bg-site overflow-hidden border-t border-white/5"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1450px] mx-auto">
        <div className="text-center mb-16 px-6">
          <span className="font-caveat text-pink-500 text-3xl block mb-2 lowercase">
            technical expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white font-outfit">
            Software Toolset & <span className="text-pink-500">Skills</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto mt-4 leading-relaxed font-medium">
            A specialized collection of professional design systems and software
            pipelines utilized to construct high-fidelity digital solutions.
          </p>
        </div>

        {/* Marquee Wrapper with side fading gradients */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-site to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-site to-transparent z-20 pointer-events-none" />

          {/* Marquee track */}
          <div className="animate-marquee flex gap-6 hover:[animation-play-state:paused]">
            {marqueeItems.map((tool, idx) => (
              <div
                key={idx}
                className={`group relative w-[320px] sm:w-[360px] flex-shrink-0 overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-2xl p-6 transition-all duration-500 ${tool.glowColor}`}
              >
                {/* Corner framing indicators for HUD tech look */}
                <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/10 group-hover:border-white/30 transition-colors" />
                <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/10 group-hover:border-white/30 transition-colors" />
                <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/10 group-hover:border-white/30 transition-colors" />
                <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/10 group-hover:border-white/30 transition-colors" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="p-1 rounded-xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.05] group-hover:scale-110 transition-all duration-300">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-wide text-white font-outfit">
                      {tool.name}
                    </h3>
                    <p className="text-[11px] text-zinc-500 mt-0.5 line-clamp-1">
                      {tool.description}
                    </p>
                  </div>
                </div>

                {/* Skills Tags List */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {tool.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-[10px] font-mono px-2 py-1 rounded-lg border uppercase tracking-wider font-semibold transition-colors duration-300 ${tool.tagGlow}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
