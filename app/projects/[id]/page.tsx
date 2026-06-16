import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Cpu,
  ExternalLink,
} from "lucide-react";
import { projectsData } from "../../_data/projects";
import Navigaton from "../../_Component/Navigation/Navigaton";
import Footer from "../../_Component/Footer/Footer";

function getToolIcon(tool: string): React.ReactNode {
  const normalized = tool.toLowerCase().trim();

  if (normalized.includes("after effects")) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#180B2B" stroke="#CF96FD" />
        <text x="5" y="15" fill="#CF96FD" fontSize="10" fontWeight="bold" fontFamily="monospace">Ae</text>
      </svg>
    );
  }
  if (normalized.includes("illustrator")) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#261300" stroke="#FF9A00" />
        <text x="6" y="15" fill="#FF9A00" fontSize="10" fontWeight="bold" fontFamily="monospace">Ai</text>
      </svg>
    );
  }
  if (normalized.includes("photoshop")) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#001829" stroke="#31A8FF" />
        <text x="6" y="15" fill="#31A8FF" fontSize="10" fontWeight="bold" fontFamily="monospace">Ps</text>
      </svg>
    );
  }
  if (normalized.includes("blender")) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-4c0 1.1-.9 2-2 2s-2-.9-2-2 1.5-3.5 4-3.5 0 2.4 0 3.5z" fill="#E87D0D" />
      </svg>
    );
  }
  if (normalized.includes("cinema 4d")) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#000926" stroke="#0055FF" />
        <text x="4" y="15" fill="#0055FF" fontSize="9" fontWeight="bold" fontFamily="monospace">C4D</text>
      </svg>
    );
  }
  if (normalized.includes("substance")) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#1F0002" stroke="#E30613" />
        <text x="6" y="15" fill="#E30613" fontSize="10" fontWeight="bold" fontFamily="monospace">Pt</text>
      </svg>
    );
  }
  if (normalized.includes("octane")) {
    return (
      <svg className="w-5 h-5 shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" stroke="currentColor" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 shrink-0 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
}

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

            {/* Production Pipeline Timeline */}
            <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-8 text-left">
              <h3 className="text-lg font-black uppercase tracking-wider text-pink-500 mb-6 font-outfit">
                // PRODUCTION PIPELINE
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {project.workflowSteps.map((step, idx) => (
                  <div key={idx} className="relative bg-white/[0.01] border border-white/5 p-4 rounded-xl flex flex-col justify-between aspect-square">
                    <span className="text-[10px] font-mono text-pink-500/60 font-bold block">0{idx + 1}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-350 leading-tight font-semibold">{step}</span>
                  </div>
                ))}
              </div>
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
            {/* Toolkit Specifications Table */}
            <div className="bg-white/[0.01] border border-white/10 rounded-2xl p-6 text-left space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block border-b border-white/5 pb-3">
                // USED SOFTWARE & TOOLS
              </span>

              {/* Toolkit */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                  <Cpu size={12} className="text-pink-500" />
                  <span>Production Stack</span>
                </div>
                <div className="flex flex-col gap-2">
                  {project.tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="text-xs font-mono uppercase tracking-wider bg-white/[0.02] border border-white/5 text-zinc-300 px-4 py-2.5 rounded-xl flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        {getToolIcon(tool)}
                        <span>{tool}</span>
                      </div>
                      <span className="text-[8px] text-pink-500 font-bold tracking-widest">// ACTIVE</span>
                    </div>
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

            {/* Technical Render Specifications */}
            <div className="bg-white/[0.01] border border-white/10 rounded-2xl p-6 text-left space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block border-b border-white/5 pb-3">
                // TECHNICAL RENDER DATA
              </span>
              
              <div className="space-y-3">
                {/* Resolution */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500 font-mono uppercase text-[9px] tracking-wider">Resolution</span>
                  <span className="font-semibold text-zinc-200">{project.resolution}</span>
                </div>
                {/* FPS */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500 font-mono uppercase text-[9px] tracking-wider">Frame Rate</span>
                  <span className="font-semibold text-zinc-200">{project.fps}</span>
                </div>
                {/* Render Engine */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500 font-mono uppercase text-[9px] tracking-wider">Engine</span>
                  <span className="font-semibold text-pink-500">{project.renderEngine}</span>
                </div>
                {/* Frame Render Time */}
                {project.renderTimePerFrame && (
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-500 font-mono uppercase text-[9px] tracking-wider">Avg Render Frame</span>
                    <span className="font-semibold text-zinc-200">{project.renderTimePerFrame}</span>
                  </div>
                )}
                {/* Polycount */}
                {project.polygonCount && (
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-500 font-mono uppercase text-[9px] tracking-wider">Poly Count</span>
                    <span className="font-semibold text-zinc-200">{project.polygonCount}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
