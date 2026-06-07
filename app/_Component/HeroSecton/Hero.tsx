"use client";

import React, { useLayoutEffect, useRef } from "react";
import {
  Youtube,
  Instagram,
  Linkedin,
  MoveRight,
  Play,
  Sparkles,
  Film,
  Box,
} from "lucide-react";
import himel from "@/public/profile.jpeg";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  
  // Tag refs for floating animation
  const tag1Ref = useRef<HTMLDivElement>(null);
  const tag2Ref = useRef<HTMLDivElement>(null);
  const tag3Ref = useRef<HTMLDivElement>(null);
  const tag4Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
      });

      tl.from(textContentRef.current ? textContentRef.current.children : [], {
        opacity: 0,
        y: 30,
        stagger: 0.15,
      })
      .from(
        imageWrapperRef.current,
        {
          opacity: 0,
          scale: 0.95,
          rotate: -2,
          y: 40,
          duration: 1.2,
        },
        "-=0.8"
      )
      .from(
        [tag1Ref.current, tag2Ref.current, tag3Ref.current, tag4Ref.current],
        {
          opacity: 0,
          scale: 0.8,
          y: 20,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

      // Subtle continuous floating animations for tags
      gsap.to(tag1Ref.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(tag2Ref.current, {
        y: 8,
        duration: 2.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.2,
      });
      gsap.to(tag3Ref.current, {
        y: -8,
        duration: 2.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.4,
      });
      gsap.to(tag4Ref.current, {
        y: 10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full py-12 md:py-24 lg:py-32 flex items-center justify-center overflow-visible"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copywriting Content */}
        <div
          ref={textContentRef}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200/50 text-zinc-700 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} className="text-pink-500 animate-pulse" />
            Motion Graphics & 3D Artist
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black text-zinc-950 tracking-tight leading-[1.05]">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-[#ff0055] to-[#232c66]">
              Hridoy Islam Himel
            </span>
          </h1>

          {/* Key Roles Tagline */}
          <p className="text-xl md:text-2xl font-bold text-zinc-800 mt-6 max-w-2xl leading-relaxed">
            Crafting high-impact 3D animations, custom motion designs, and video content that elevates digital brands.
          </p>

          {/* Short Bio */}
          <p className="text-zinc-500 text-base md:text-lg mt-4 max-w-xl leading-relaxed font-medium">
            Specializing in Blender, After Effects, and Premiere Pro. I transform complex concepts into visually breathtaking animations, dynamic kinetic typography, and premium social media content.
          </p>

          {/* Action Call to Actions */}
          <div className="flex flex-wrap gap-4 mt-8 w-full sm:w-auto">
            <Link
              href="#projects"
              className="px-8 py-4 bg-zinc-950 text-white rounded-full font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all shadow-md group text-sm md:text-base"
            >
              View My Work
              <Play size={16} className="fill-white text-white group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-zinc-900 text-zinc-950 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-50 transition-all text-sm md:text-base"
            >
              Let's Collaborate
              <MoveRight size={16} />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-12 pt-6 border-t border-zinc-100 w-full lg:max-w-md">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Follow Me:</span>
            <div className="flex gap-4">
              {[
                { Icon: Youtube, href: "https://www.youtube.com/", color: "hover:text-red-500" },
                { Icon: Instagram, href: "https://www.instagram.com/", color: "hover:text-pink-500" },
                { Icon: Linkedin, href: "https://www.linkedin.com/", color: "hover:text-blue-500" },
              ].map(({ Icon, href, color }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-zinc-600 transition-colors ${color}`}
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: High-Fidelity Creative Showcase (Image & Floating Badges) */}
        <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
          
          {/* Main Card Frame */}
          <div
            ref={imageWrapperRef}
            className="relative w-full max-w-[340px] md:max-w-[380px] aspect-[4/5] rounded-[32px] bg-white border border-zinc-200/60 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-visible"
          >
            {/* Inner Image Container */}
            <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-zinc-50 border border-zinc-100">
              <Image
                src={himel}
                alt="Hridoy Islam Himel"
                fill
                priority
                className="object-cover object-center scale-[1.02]"
              />
            </div>

            {/* Floating Badge 1: Blender */}
            <div
              ref={tag1Ref}
              className="absolute -top-4 -left-6 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-zinc-200/80 px-4 py-2 rounded-full shadow-lg"
            >
              <Box size={14} className="text-orange-500" />
              <span className="text-xs font-extrabold text-zinc-800">Blender 3D</span>
            </div>

            {/* Floating Badge 2: After Effects */}
            <div
              ref={tag2Ref}
              className="absolute top-1/4 -right-10 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-zinc-200/80 px-4 py-2 rounded-full shadow-lg"
            >
              <Film size={14} className="text-purple-500" />
              <span className="text-xs font-extrabold text-zinc-800">After Effects</span>
            </div>

            {/* Floating Badge 3: 3D Motion */}
            <div
              ref={tag3Ref}
              className="absolute bottom-1/4 -left-12 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-zinc-200/80 px-4 py-2 rounded-full shadow-lg"
            >
              <Sparkles size={14} className="text-pink-500" />
              <span className="text-xs font-extrabold text-zinc-800">3D Motion</span>
            </div>

            {/* Floating Badge 4: Creator */}
            <div
              ref={tag4Ref}
              className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-zinc-200/80 px-4 py-2 rounded-full shadow-lg"
            >
              <Youtube size={14} className="text-red-500" />
              <span className="text-xs font-extrabold text-zinc-800">Content Creator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
