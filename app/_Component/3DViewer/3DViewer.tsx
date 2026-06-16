"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Compass } from "lucide-react";

export default function Viewer3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Generate fixed positions for floating particles to avoid hydration mismatches
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      top: string;
      left: string;
      delay: string;
      duration: string;
      scale: number;
      tz: number;
    }>
  >([]);

  useEffect(() => {
    // Generate 35 particles with random positions and animation attributes on client mount
    const tempParticles = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      scale: 0.5 + Math.random() * 0.8,
      tz: Math.floor(Math.random() * 120) - 60, // 3D depth position
    }));
    setParticles(tempParticles);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // Calculate mouse position relative to the center of the card (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Tilt the container by up to 25 degrees
    setRotate({
      x: -y * 30,
      y: x * 30,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly animate back to center
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section
      id="viewer3d"
      className="relative  bg-bg-site overflow-hidden border-t border-white/5"
    >
      {/* Background outline brand text decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.01] text-[180px] font-black text-white uppercase tracking-tighter whitespace-nowrap">
        3D CANVAS //
      </div>

      <div className=" px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Block - Craft Details */}
          <div className="lg:col-span-5 text-left">
            <span className="font-caveat text-pink-500 text-3xl block mb-2 lowercase">
              creative rendering
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white font-outfit mb-6">
              INTERACTIVE <span className="text-pink-500">3D SPACE</span>
            </h2>

            <p className="text-sm text-zinc-400 leading-relaxed font-medium mb-8">
              A live preview of an interactive 3D WebGL-inspired canvas. Himel
              combines classic 3D modeling pipelines with modern real-time
              rendering logic to create immersive experiences.
            </p>

            {/* Interactive Status Indicator */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.02] border border-white/10 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff0055]"></span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-pink-500 uppercase font-bold">
                Mouse interaction active
              </span>
            </div>

            {/* Technical Specs Tags */}
            <div className="border-t border-white/5 pt-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-3">
                // SYSTEM SPECIFICATIONS
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "WebGL 3D",
                  "CSS Perspective",
                  "Framer Transforms",
                  "Glassmorphism Core",
                ].map((spec, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono uppercase tracking-wider bg-white/[0.02] border border-white/5 text-zinc-300 px-3 py-1.5 rounded-lg"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block - Interactive 3D CSS Canvas */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              className="relative w-full aspect-square md:aspect-[4/3] bg-black/45 border border-white/10 rounded-2xl overflow-hidden cursor-crosshair flex items-center justify-center [perspective:1000px]"
            >
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

              {/* Viewport Corners */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/20 pointer-events-none" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/20 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/20 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-white/20 pointer-events-none" />

              {/* 3D Hologram Structure */}
              <div
                style={{
                  transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                  transition: isHovered
                    ? "none"
                    : "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
                className="relative w-72 h-72 flex items-center justify-center [transform-style:preserve-3d]"
              >
                {/* Concentric Rotating 3D Rings */}
                {/* Horizontal Ring */}
                <div className="absolute w-64 h-64 border border-white/10 rounded-full [transform-style:preserve-3d] [transform:rotateX(75deg)] animate-[spin_12s_linear_infinite]" />

                {/* Diagonal Pink Ring */}
                <div className="absolute w-52 h-52 border border-pink-500/20 rounded-full [transform-style:preserve-3d] [transform:rotateY(45deg)_rotateX(45deg)] animate-[spin_8s_linear_infinite_reverse]" />

                {/* Vertical Ring */}
                <div className="absolute w-40 h-40 border border-white/10 rounded-full [transform-style:preserve-3d] [transform:rotateY(90deg)] animate-[spin_16s_linear_infinite]" />

                {/* Core Glowing Node */}
                <div className="absolute w-12 h-12 rounded-full bg-gradient-to-tr from-[#ff0055] to-pink-400 opacity-80 blur-[8px] animate-pulse" />
                <div className="absolute w-6 h-6 rounded-full bg-white opacity-90" />

                {/* Floating 3D Particles */}
                {particles.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      position: "absolute",
                      top: p.top,
                      left: p.left,
                      transform: `translateZ(${p.tz}px) scale(${p.scale})`,
                      animationDelay: p.delay,
                      animationDuration: p.duration,
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-pink-500/80 animate-ping"
                  />
                ))}
              </div>

              {/* Ambient guide overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center pointer-events-none opacity-60">
                <span className="text-[9px] font-mono tracking-wider uppercase text-zinc-500">
                  // DRIFT ACTIVE
                </span>
                <span className="text-[9px] font-mono tracking-wider uppercase text-pink-500 flex items-center gap-1">
                  <Compass size={10} className="animate-spin" /> MOVE MOUSE TO
                  ROTATE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
