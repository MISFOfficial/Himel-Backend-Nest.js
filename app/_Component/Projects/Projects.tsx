"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { projectsData } from "../../_data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative  bg-bg-site overflow-hidden border-t border-white/5"
    >
      {/* Decorative text */}
      <div className="absolute top-10 right-10 select-none pointer-events-none opacity-[0.01] text-[150px] font-black text-white uppercase tracking-tighter whitespace-nowrap">
        SHOW CASE //
      </div>

      <div className=" relative z-10">
        {/* Title block */}
        <div className="text-left mb-16 relative">
          <span className="font-caveat text-pink-500 text-3xl block mb-2 lowercase">
            portfolio showcase
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white font-outfit">
            SELECTED <span className="text-pink-500">WORKS</span>
          </h2>
          <div className="w-16 h-1 bg-pink-500 mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/[0.01] border border-white/5 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-pink-500/20 hover:bg-white/[0.02]"
            >
              {/* Viewport Corners */}
              <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-transparent group-hover:border-pink-500 transition-colors duration-300" />
              <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-transparent group-hover:border-pink-500 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-transparent group-hover:border-pink-500 transition-colors duration-300" />
              <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-transparent group-hover:border-pink-500 transition-colors duration-300" />

              <div>
                {/* Thumbnail Frame */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-6 bg-black/40 border border-white/5">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-md text-[9px] font-mono tracking-widest text-zinc-300 uppercase">
                    {project.year}
                  </div>
                </div>

                {/* Info */}
                <span className="text-[10px] font-mono uppercase tracking-widest text-pink-500/70 block mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-black tracking-tight text-white mb-3 group-hover:text-pink-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="border-t border-white/5 pt-5 mt-6">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-300 hover:text-white group/btn"
                >
                  <span className="flex items-center gap-2">
                    <Calendar size={12} className="text-pink-500" />
                    <span>Duration: {project.duration}</span>
                  </span>
                  <span className="flex items-center gap-1 text-pink-500 group-hover/btn:translate-x-1 transition-transform">
                    View Case Study <ArrowRight size={12} />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
