"use client";

import React, { useLayoutEffect, useRef } from "react";
import {
  Youtube,
  Instagram,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import himel from "@/public/profile.jpeg";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const scriptTextRef = useRef<HTMLDivElement>(null);
  const footerLeftRef = useRef<HTMLDivElement>(null);
  const footerRightRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.2 },
      });

      // Animate background text
      tl.fromTo(
        bgTextRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1.5 }
      );

      // Animate profile image
      tl.fromTo(
        imageContainerRef.current,
        { opacity: 0, scale: 0.8, rotate: -3 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.4, ease: "back.out(1.2)" },
        "-=1.0"
      );

      // Animate script text
      tl.fromTo(
        scriptTextRef.current,
        { opacity: 0, scale: 0.5, y: 20, rotate: -20 },
        { opacity: 1, scale: 1, y: 0, rotate: -12, duration: 1.0, ease: "back.out(1.5)" },
        "-=0.6"
      );

      // Animate footer elements
      tl.fromTo(
        [footerLeftRef.current, footerRightRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#ff0055]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative flex items-center justify-center w-full max-w-[1200px] aspect-[16/9] px-4">
        
        {/* Giant Background Typography */}
        <div
          ref={bgTextRef}
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0"
        >
          <h1 className="text-[15vw] sm:text-[13vw] font-black uppercase tracking-tight text-white/[0.02] text-outline-dark leading-none">
            GRAPHIC
          </h1>
        </div>

        {/* Circular Portrait Image Container */}
        <div
          ref={imageContainerRef}
          className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] rounded-full overflow-visible z-10 flex items-center justify-center"
        >
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.02)] scale-[1.03]" />

          {/* Actual Masked Image */}
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 relative bg-zinc-900/40">
            <Image
              src={himel}
              alt="Hridoy Islam Himel"
              fill
              priority
              className="object-cover object-center scale-[1.05] hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Cursive/Script Overlay Text */}
          <div
            ref={scriptTextRef}
            className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 z-20 select-none bg-[#060608]/90 backdrop-blur-md px-6 py-2 rounded-full border border-white/5 shadow-lg"
          >
            <span className="font-caveat text-4xl sm:text-6xl text-[#ff0055] whitespace-nowrap">
              3D Designer
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section inside Hero */}
      <div className="w-full max-w-[1200px] mt-12 px-6 flex flex-col sm:flex-row items-center justify-between gap-6 z-20">
        
        {/* Social Icons (Left) */}
        <div
          ref={footerLeftRef}
          className="flex items-center gap-6"
        >
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
              className={`text-zinc-500 transition-colors duration-300 ${color}`}
            >
              <Icon size={22} />
            </Link>
          ))}
        </div>

        {/* Email Address (Right) */}
        <div
          ref={footerRightRef}
          className="text-sm sm:text-base font-medium tracking-wider text-zinc-500 hover:text-white transition-colors duration-300"
        >
          <a href="mailto:hridoyislamhimel@gmail.com">
            hridoyislamhimel@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
}
