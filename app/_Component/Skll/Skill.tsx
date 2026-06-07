"use client";

import React from "react";
import {
  useGetBackendSkills,
  useGetFrontendSkills,
  useGetSoftSkills,
} from "@/app/Global/data/useSkills";
import { Zap, Film, Box, Award } from "lucide-react";

interface SkillItem {
  name: string;
  logo: string | { url: string };
}

const SkillCategory = ({
  title,
  subtitle,
  icon: Icon,
  items,
  loading,
}: {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  items: SkillItem[];
  loading: boolean;
}) => {
  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-6 w-40 bg-zinc-200 rounded animate-pulse" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-16 rounded-2xl border border-zinc-100 bg-zinc-50 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-6">
      {/* Category Header */}
      <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
        <div className="p-2 rounded-xl bg-zinc-100 border border-zinc-200/50 text-zinc-950">
          <Icon size={18} className="text-zinc-800" />
        </div>
        <div>
          <h3 className="text-lg font-black uppercase tracking-wider text-zinc-900 leading-none">
            {title}
          </h3>
          <p className="text-xs text-zinc-500 font-medium mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Grid Layout (Replaces Marquee) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => {
          const logoSrc = typeof item.logo === "string" ? item.logo : item.logo?.url;
          return (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-4 bg-white border border-zinc-200/50 hover:border-pink-500/40 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-300 group cursor-pointer hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 flex items-center justify-center p-1.5 bg-zinc-50 rounded-xl border border-zinc-100/80 group-hover:scale-110 group-hover:border-pink-500/20 transition-all duration-300">
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={item.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Zap size={16} className="text-zinc-400" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-900 text-xs sm:text-sm font-extrabold uppercase tracking-wider group-hover:text-pink-500 transition-colors">
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Skill() {
  const { frontendSkills, isLoading: frontLoading } = useGetFrontendSkills();
  const { backendSkills, isLoading: backLoading } = useGetBackendSkills();
  const { softSkills, isLoading: softLoading } = useGetSoftSkills();

  return (
    <section id="skills" className="w-full py-16 md:py-24 border-t border-zinc-100/50">
      <div className="flex flex-col gap-12">
        {/* Main Section Header */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200/50 text-zinc-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap size={14} className="text-pink-500" />
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-none">
            Creative Toolkit
          </h2>
          <p className="text-zinc-500 mt-3 text-sm md:text-base font-medium max-w-xl leading-relaxed">
            The professional software suites, design tools, and core workflows I specialize in to produce premium content.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col gap-12">
          {/* Creative Tools category */}
          <SkillCategory
            title="Creative & Editing Suite"
            subtitle="Industry-standard tools for post-production and motion styling"
            icon={Film}
            items={frontendSkills || []}
            loading={frontLoading}
          />

          {/* 3D & VFX category */}
          <SkillCategory
            title="3D modeling & Technical Production"
            subtitle="Applications and workflows for 3D modeling, lighting, and simulation"
            icon={Box}
            items={backendSkills || []}
            loading={backLoading}
          />

          {/* Professional Workflows category */}
          <SkillCategory
            title="Creative Capabilities"
            subtitle="Core strengths and specialized workflows"
            icon={Award}
            items={softSkills || []}
            loading={softLoading}
          />
        </div>
      </div>
    </section>
  );
}
