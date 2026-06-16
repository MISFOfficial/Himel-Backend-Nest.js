"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Youtube,
  Instagram,
  Linkedin,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

export default function Navigaton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const linksContainerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Works", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Faq", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const scrollBlock = id === "hero" && isMobile ? "start" : "center";
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: scrollBlock as ScrollLogicalPosition,
        });
      }
    }
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Handle initial hash link scroll
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const isMobile = window.innerWidth < 1024;
          const scrollBlock = id === "hero" && isMobile ? "start" : "center";
          element.scrollIntoView({
            behavior: "smooth",
            block: scrollBlock as ScrollLogicalPosition,
          });
        }, 400);
      }
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      setIsMenuOpen(true);
      // Animate slide-in side drawer and staggered links
      setTimeout(() => {
        gsap.to(backdropRef.current, {
          opacity: 1,
          duration: 0.3,
        });
        gsap.to(drawerRef.current, {
          x: 0,
          duration: 0.5,
          ease: "power4.out",
        });
        if (linksContainerRef.current) {
          gsap.fromTo(
            linksContainerRef.current.children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.4,
              ease: "power3.out",
              delay: 0.15,
            },
          );
        }
      }, 50);
    }
  };

  const closeMenu = () => {
    // Animate slide-out
    gsap.to(drawerRef.current, {
      x: "100%",
      duration: 0.4,
      ease: "power4.in",
      onComplete: () => setIsMenuOpen(false),
    });
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <>
      {/* Original Full-width Fixed Header */}
      <nav
        className={`fixed top-0 py-5 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-bg-site/80 backdrop-blur-xl border-b border-white/10 shadow-md"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="ratio flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="hover:scale-105 transition-transform text-2xl font-black tracking-tighter text-white uppercase cursor-pointer"
          >
            Himel<span className="text-pink-500 font-extrabold">.</span>
          </button>

          {/* Elegant Round Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="w-12 h-12 rounded-full border border-white/10 hover:border-white/35 bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-zinc-300 hover:text-white focus:outline-none transition-all hover:scale-105 shadow-sm cursor-pointer group"
            aria-label="Open menu"
          >
            <Menu
              size={20}
              className="group-hover:rotate-6 transition-transform"
            />
          </button>
        </div>
      </nav>

      {/* Side Sliding Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop Overlay */}
          <div
            ref={backdropRef}
            onClick={closeMenu}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs opacity-0 transition-opacity"
          />

          {/* Sliding Side Drawer */}
          <div
            ref={drawerRef}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-bg-site border-l border-white/5 shadow-2xl p-8 sm:p-12 flex flex-col justify-between z-50 transform translate-x-full"
          >
            {/* Top Bar of Drawer */}
            <div className="flex items-center justify-between">
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                Himel<span className="text-pink-500">.</span>
              </span>
              <button
                onClick={closeMenu}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:scale-105 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Vertical Navigation Links */}
            <div
              ref={linksContainerRef}
              className="flex flex-col gap-6 my-auto pt-8"
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="group flex items-center justify-between w-full text-left py-2 font-black text-4xl sm:text-5xl text-zinc-100 hover:text-pink-500 transition-colors uppercase tracking-tight cursor-pointer"
                >
                  <span>{link.name}</span>
                  <ArrowRight
                    size={28}
                    className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-pink-500"
                  />
                </button>
              ))}
            </div>

            {/* Role & Availability (Informative Section applied on top of design) */}
            <div className="border-t border-white/5 pt-6 flex flex-col gap-3 text-left">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">
                  Creative Specialty
                </p>
                <p className="text-sm font-bold text-zinc-300">
                  Motion Graphics & 3D Artist
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">
                  Status
                </p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-zinc-350">
                    Available for projects
                  </span>
                </div>
              </div>
            </div>

            {/* Footer inside Drawer (Socials & Contact) */}
            <div className="border-t border-white/5 pt-6 flex flex-col gap-4">
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">
                  Say Hello
                </p>
                <a
                  href="mailto:hridoyislamhimel@gmail.com"
                  className="text-sm font-bold text-zinc-350 hover:text-pink-500 transition-colors"
                >
                  hridoyislamhimel@gmail.com
                </a>
              </div>

              <div className="flex gap-4 items-center">
                {[
                  { Icon: Youtube, href: "https://www.youtube.com/" },
                  { Icon: Instagram, href: "https://www.instagram.com/" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/" },
                ].map(({ Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-zinc-400 hover:text-[#ff0055] transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
