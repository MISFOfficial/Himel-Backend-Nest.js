"use client";

import React from "react";
import { Brain, Cpu, Layers, Zap, Film, Workflow } from "lucide-react";

const mindsetItems = [
  {
    title: "Visual Storytelling",
    description:
      "Viewing animations as emotional narratives, not just raw keyframes. I design for maximum audience engagement and brand resonance.",
    icon: Workflow,
    color: "from-blue-500/20 to-cyan-500/20",
    size: "md:col-span-2",
    delay: 0.1,
  },
  {
    title: "Precision Modeling",
    description:
      "Crafting detailed 3D models, textures, and environments in Blender to create stunning realism or stylized art.",
    icon: Cpu,
    color: "from-purple-500/20 to-pink-500/20",
    size: "md:col-span-1",
    delay: 0.2,
  },
  {
    title: "Dynamic Pacing",
    description:
      "Timing and easing are everything in motion design. I craft animations with smooth, rhythmic flow and impactful momentum.",
    icon: Zap,
    color: "from-orange-500/20 to-yellow-500/20",
    size: "md:col-span-1",
    delay: 0.3,
  },
  {
    title: "Aesthetic Integrity",
    description:
      "Maintaining consistent color grading, lighting, typography, and framing to deliver premium and unified visuals across all formats.",
    icon: Layers,
    color: "from-green-500/20 to-emerald-500/20",
    size: "md:col-span-2",
    delay: 0.4,
  },
];

export default function EngineeringMindset() {
  return (
    <section id="mindset" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-color/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="text-primary-color2" size={24} />
            <span className="text-primary-color2 font-bold uppercase tracking-widest text-sm">
              Philosophy
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-zinc-950 leading-tight mb-6">
            The Creative <br />
            <span className="primary-text4italic">Mindset</span>
          </h2>

          <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed font-medium">
            Great visuals aren't just about rendering pixels—they are about creating mental models, fluid pacing, and memorable emotional connections.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mindsetItems.map((item, index) => (
            <div
              key={index}
              className={`${item.size} group relative p-8 primary-rounded border primary-border bg-white hover:bg-zinc-50 transition-colors duration-300 overflow-hidden shadow-sm`}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 primary-rounded primary-text flex items-center justify-center mb-6 transition-colors">
                  <item.icon
                    className="text-primary transition-colors"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 mb-4">
                  {item.title}
                </h3>
                <p className="text-zinc-500 transition-colors leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Meta Card: Creative Pragmatism */}
          <div className="md:col-span-3 mt-4 p-8 primary-rounded bg-primary-color/5 border primary-border flex flex-col md:flex-row items-center justify-between gap-8 group shadow-sm">
            <div className="max-w-xl">
              <h3 className="text-zinc-950 text-2xl font-bold mb-2">
                Creative Pragmatism
              </h3>
              <p className="text-zinc-600 leading-relaxed font-medium">
                "I don't believe in just creating pretty animations. I believe in crafting deliberate visuals that communicate a clear message, tell a story, and achieve the project's core goals."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Film
                className="text-primary-color2 opacity-60 group-hover:opacity-100 transition-opacity"
                size={48}
              />
              <div className="h-12 w-px bg-zinc-200 hidden md:block" />
              <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest group-hover:primary-text2 transition-colors underline decoration-primary-color2/30">
                Storytelling first
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
