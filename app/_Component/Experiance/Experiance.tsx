"use client";

import { MapPin, Briefcase, ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useGetAllExperience } from "@/app/Global/data/useExperience";
import { formatRole } from "@/app/Global/utils";

const ExperienceCard = ({ exp, index }: { exp: any; index: number }) => {
  return (
    <Link href={`/experience/${exp._id}`} className="block group">
      <div className="flex flex-col justify-between p-6 sm:p-8 rounded-[28px] bg-white border border-pink-500/30 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 h-full min-h-[280px]">
        
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 border border-zinc-200/40 rounded-full text-zinc-600 text-[10px] font-black uppercase tracking-wider">
            <Calendar size={12} className="text-zinc-500" />
            <span>{exp.duration}</span>
          </div>
          <span className="text-[10px] font-black uppercase text-pink-600 bg-pink-50 border border-pink-100/30 px-2.5 py-1 rounded-md">
            {formatRole(exp.jobType)}
          </span>
        </div>

        {/* Middle Info (Company & Role) */}
        <div className="my-6">
          <div className="flex items-center gap-4">
            {exp.image?.url ? (
              <div className="w-12 h-12 rounded-2xl border border-pink-500/20 relative overflow-hidden bg-white shrink-0 shadow-2xs">
                <Image
                  fill
                  src={exp.image.url}
                  alt={exp.company}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-2xl border border-zinc-200/50 bg-zinc-50 flex items-center justify-center shrink-0">
                <Briefcase className="text-zinc-400 w-5 h-5" />
              </div>
            )}
            <div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-none">
                {exp.company}
              </p>
              <h3 className="text-lg sm:text-xl font-black text-zinc-950 group-hover:text-pink-500 transition-colors leading-tight mt-1">
                {formatRole(exp.role)}
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Details Footer */}
        <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
          <span className="text-xs font-bold text-zinc-400 flex items-center gap-1.5">
            <MapPin size={13} className="text-zinc-400" />
            {exp.location}
          </span>
          
          <div className="w-10 h-10 rounded-full border border-zinc-200 group-hover:border-zinc-950 group-hover:bg-zinc-950 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <ArrowUpRight
              size={16}
              className="text-zinc-500 group-hover:text-white transition-colors duration-300"
            />
          </div>
        </div>

      </div>
    </Link>
  );
};

const SkeletonCard = () => (
  <div className="flex flex-col justify-between p-6 sm:p-8 rounded-[28px] bg-white border border-pink-500/20 animate-pulse min-h-[280px]">
    <div className="flex items-center justify-between gap-4">
      <div className="h-7 w-28 bg-zinc-100 rounded-full"></div>
      <div className="h-7 w-16 bg-zinc-100 rounded-md"></div>
    </div>
    <div className="my-6 flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-zinc-100 shrink-0"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 w-1/4 bg-zinc-100 rounded"></div>
        <div className="h-5 w-3/4 bg-zinc-200 rounded"></div>
      </div>
    </div>
    <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
      <div className="h-4 w-24 bg-zinc-100 rounded"></div>
      <div className="w-10 h-10 rounded-full bg-zinc-100 shrink-0"></div>
    </div>
  </div>
);

const ExperienceSkeleton = () => (
  <section className="relative w-full py-16 md:py-24">
    <div className="mb-10 space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-zinc-200 rounded animate-pulse"></div>
        <div className="h-4 w-24 bg-zinc-200 rounded animate-pulse"></div>
      </div>
      <div className="space-y-3">
        <div className="h-12 w-1/2 bg-zinc-100 rounded-lg animate-pulse"></div>
        <div className="h-12 w-1/3 bg-zinc-100 rounded-lg animate-pulse"></div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  </section>
);

export default function Experiance() {
  const { allExperience, isLoading, isError } = useGetAllExperience(4);

  const experiences = allExperience?.pages.flatMap((page: any) => page) || [];

  if (isLoading) {
    return <ExperienceSkeleton />;
  }

  if (isError) {
    return (
      <div className="text-center text-zinc-500 py-10 font-medium border border-dashed border-zinc-200 rounded-3xl bg-zinc-50/50">
        Failed to load professional history. Please try reloading.
      </div>
    );
  }

  return (
    <section id="experience" className="relative w-full py-16 md:py-24 border-t border-zinc-100/50">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4 text-zinc-800">
          <Briefcase className="text-pink-500" size={20} />
          <span className="font-black uppercase tracking-widest text-xs">
            Journey
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-zinc-950 leading-tight mb-6">
          Professional <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#232c66] italic font-black">
            Timeline
          </span>
        </h2>

        <p className="text-zinc-500 max-w-2xl text-sm md:text-base font-medium leading-relaxed">
          Tracing the evolution of design skills and creative contributions across production studios and client projects.
        </p>
      </div>

      {/* 2-Column Responsive Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp: any, index: number) => (
          <ExperienceCard key={exp._id} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
