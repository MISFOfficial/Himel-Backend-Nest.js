import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  User,
  Briefcase,
  Cpu,
  ExternalLink,
} from "lucide-react";
import { projectsData } from "../../_data/projects";
import Navigaton from "../../_Component/Navigation/Navigaton";
import Footer from "../../_Component/Footer/Footer";

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative bg-[#060608] min-h-screen text-white flex flex-col justify-between">
      {/* Sticky Top Header */}
      <div className="sticky top-0 w-full z-40">
        <Navigaton />
      </div>

      <div className="ratio py-12 lg:py-20 w-full">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-pink-500 transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Showcase
        </Link>

        {/* Title Block */}
        <div className="mb-12 text-left">
          <span className="font-caveat text-pink-500 text-3xl block mb-2 lowercase">
            {project.category}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none font-outfit mb-4">
            {project.title}
          </h1>
          <div className="w-20 h-1 bg-pink-500 mt-6" />
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Column (Video Player, Description, Challenges) */}
          <div className="lg:col-span-8 space-y-12">
            {/* YouTube Video Embed */}
            <div className="relative w-full aspect-video bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Viewport Camera Corners */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/25 z-10 pointer-events-none" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/25 z-10 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/25 z-10 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-white/25 z-10 pointer-events-none" />

              <iframe
                src={project.videoLink}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              />
            </div>

            {/* Description Card */}
            <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-8 text-left">
              <h3 className="text-lg font-black uppercase tracking-wider text-pink-500 mb-4 font-outfit">
                // PROJECT OVERVIEW
              </h3>
              <p className="text-sm text-zinc-350 leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            {/* Challenges & Solutions */}
            <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-8 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 blur-[50px] rounded-full pointer-events-none" />
              <h3 className="text-lg font-black uppercase tracking-wider text-pink-500 mb-4 font-outfit">
                // PRODUCTION CHALLENGES & SOLUTIONS
              </h3>
              <p className="text-sm text-zinc-350 leading-relaxed font-medium">
                {project.challenges}
              </p>
            </div>
          </div>

          {/* Sidebar Info Panel */}
          <div className="lg:col-span-4 space-y-6">
            {/* Meta Specifications Table */}
            <div className="bg-white/[0.01] border border-white/10 rounded-2xl p-6 text-left space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block border-b border-white/5 pb-3">
                // META SPECIFICATIONS
              </span>

              {/* Client */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-pink-500">
                  <User size={14} />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block">
                    Client
                  </span>
                  <span className="text-xs font-bold text-white">
                    {project.client}
                  </span>
                </div>
              </div>

              {/* Role */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-pink-500">
                  <Briefcase size={14} />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block">
                    Role
                  </span>
                  <span className="text-xs font-bold text-white">
                    {project.role}
                  </span>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-pink-500">
                  <Calendar size={14} />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block">
                    Duration
                  </span>
                  <span className="text-xs font-bold text-white">
                    {project.duration}
                  </span>
                </div>
              </div>

              {/* Toolkit */}
              <div className="border-t border-white/5 pt-5 space-y-3">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                  <Cpu size={12} className="text-pink-500" />
                  <span>Toolkit</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-mono uppercase tracking-wider bg-white/[0.02] border border-white/5 text-zinc-300 px-2.5 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Link Trigger */}
              {project.projectUrl && (
                <div className="border-t border-white/5 pt-5">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-black uppercase text-[10px] tracking-wider transition-colors hover:bg-pink-500 hover:text-white cursor-pointer"
                  >
                    <span>Launch Case Link</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
