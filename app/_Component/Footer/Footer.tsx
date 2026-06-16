"use client";

import React from "react";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "3D Animation", href: "#" },
      { name: "Motion Graphics", href: "#" },
      { name: "Video Editing", href: "#" },
      { name: "Content Creation", href: "#" },
    ],
    social: [
      {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/",
      },
      {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/",
      },
      { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/" },
      { name: "Email", icon: Mail, href: "mailto:hridoyislamhimel@gmail.com" },
    ],
  };

  return (
    <footer className="border-t border-white/5 bg-[#060608] text-white">
      <div className="ratio py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black text-white mb-4">
              Hridoy Islam <span className="primary-text">Himel</span>
            </h3>
            <p className="text-zinc-400 mb-6 max-w-md font-medium">
              Professional Motion Graphic Designer and 3D Artist crafting high-impact visual stories. Let's create something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-white/45 flex items-center justify-center transition-all group"
                  aria-label={social.name}
                >
                  <social.icon
                     size={18}
                     className="text-zinc-400 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-zinc-500 text-sm font-medium">
              © {currentYear} Hridoy Islam Himel. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
