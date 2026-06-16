"use client";

import React from "react";
import { Instagram, Linkedin, Youtube, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", href: "/" },
      { name: "About", href: "#about" },
      { name: "Works", href: "#projects" },
      { name: "Process", href: "#workprocess" },
      { name: "Viewer", href: "#viewer3d" },
    ],
    toolkit: [
      { name: "Blender", href: "#" },
      { name: "After Effects", href: "#" },
      { name: "Adobe Illustrator", href: "#" },
      { name: "Cinema 4D", href: "#" },
    ],
    social: [
      {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/",
        color: "#0077b5",
      },
      {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/",
        color: "#E1306C",
      },
      {
        name: "YouTube",
        icon: Youtube,
        href: "https://www.youtube.com/",
        color: "#FF0000",
      },
    ],
  };

  return (
    <footer className="border-t border-white/5 bg-[#060608] text-white relative overflow-hidden">
      <div className="ratio relative z-10  px-6 py-16 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand/Role Column */}
          <div className="lg:col-span-5 text-left">
            <span className="font-caveat text-pink-500 text-3xl block mb-2 lowercase">
              creative director
            </span>
            <h3 className="text-3xl font-black text-white uppercase tracking-tight font-outfit mb-4">
              Hridoy Islam <span className="text-pink-500">Himel</span>
            </h3>
            <p className="text-zinc-400 mb-6 max-w-sm text-xs leading-relaxed font-medium">
              Professional 3D Artist & Motion Designer crafting high-fidelity
              simulations, cinematic advertisements, and digital worlds.
            </p>

            {/* Email Contact Detail */}
            <div className="space-y-1">
              <span className="text-[9px] font-mono tracking-widest text-zinc-600 block uppercase">
                // Direct Inquiry
              </span>
              <a
                href="mailto:hridoyislamhimel@gmail.com"
                className="text-xs font-mono tracking-wide text-zinc-300 hover:text-pink-500 transition-colors border-b border-white/10 hover:border-pink-500/40 pb-0.5"
              >
                hridoyislamhimel@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 text-left lg:pl-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-6">
              01 // INDEX
            </span>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Toolkit Links Column */}
          <div className="lg:col-span-2 text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-6">
              02 // TOOLKIT
            </span>
            <ul className="space-y-3">
              {footerLinks.toolkit.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials / Channels Column */}
          <div className="lg:col-span-3 text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-6">
              03 // SOCIALS
            </span>

            <div className="flex flex-col gap-3">
              {footerLinks.social.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={
                      {
                        "--hover-color": social.color,
                      } as React.CSSProperties
                    }
                    className="group flex items-center justify-between py-2.5 px-4 border border-white/5 hover:border-[var(--hover-color)] bg-white/[0.01] rounded-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent
                        size={14}
                        className="text-zinc-500 group-hover:text-[var(--hover-color)] transition-colors duration-300"
                      />
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors duration-300">
                        {social.name}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={12}
                      className="text-zinc-600 group-hover:text-[var(--hover-color)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar Details */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <span>© {currentYear} HIMEL.STUDIO</span>
            <span className="text-zinc-700">//</span>
            <span>All rights reserved</span>
          </div>

          {/* Timezone availability badge */}
          <div className="flex items-center gap-3 px-3 py-1 bg-white/[0.01] border border-white/5 rounded-full text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            <span>UTC+6 Timezone // Available for Freelance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
