"use client";

import React from "react";

export default function Clients() {
  const partnerships = [
    {
      name: "Epic Games",
      role: "3D SIMULATION",
      logo: (
        <svg
          className="w-10 h-10 transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 .002L1.874 3.738v16.516L12 24l10.126-3.746V3.738L12 .002zm8.438 19.34L12 22.51l-8.438-3.168V4.658L12 1.527l8.438 3.131v14.684zM12 5.097l-6.126 2.274v6.52L12 16.14l6.126-2.249v-6.52L12 5.097z" />
        </svg>
      ),
    },
    {
      name: "Adobe",
      role: "POST EFFECTS",
      logo: (
        <svg
          className="w-10 h-10 transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13.966 22.624h6.883v-19.14l-6.883 19.14zm-3.932-19.14H3.15v19.14l6.884-19.14zm1.966 6.002l4.42 11.233H12.02l-1.343-3.415H8.322l3.678-7.818z" />
        </svg>
      ),
    },
    {
      name: "Blender",
      role: "3D MODELING",
      logo: (
        <svg
          className="w-10 h-10 transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm5.66 8.52a2.38 2.38 0 0 1-.92 1.88 4.3 4.3 0 0 1-2.73.91H11v3.29h3.69a3.83 3.83 0 0 1 2.58.82 2.76 2.76 0 0 1 .93 2.19 3 3 0 0 1-1.07 2.45 4.67 4.67 0 0 1-3 .83H6.84V6h7.32a4.42 4.42 0 0 1 2.5.64 2.16 2.16 0 0 1 1 1.88z" />
        </svg>
      ),
    },
    {
      name: "Netflix",
      role: "STUDIO DELIVERY",
      logo: (
        <svg
          className="w-10 h-10 transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M5.598 0H2v24h3.598V0zm12.804 0h3.598v24h-3.598V0zM12 7.643L18.402 24h-3.606L8.394 7.643H12z" />
        </svg>
      ),
    },
    {
      name: "Unity",
      role: "REAL-TIME RENDERS",
      logo: (
        <svg
          className="w-10 h-10 transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L2.1 5.7v12.6L12 24l9.9-5.7V5.7L12 0zm7.9 17.1L12 21.6l-7.9-4.5V6.9L12 2.4l7.9 4.5v10.2z" />
        </svg>
      ),
    },
    {
      name: "Sony Music",
      role: "SOUND FX PARTNER",
      logo: (
        <svg
          className="w-10 h-10 transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
        </svg>
      ),
    },
    {
      name: "Autodesk",
      role: "CAD & MODELING",
      logo: (
        <svg
          className="w-10 h-10 transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z" />
        </svg>
      ),
    },
    {
      name: "Warner Bros",
      role: "MOTION FX PIPELINE",
      logo: (
        <svg
          className="w-10 h-10 transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.5l-8 4-8-4v-7.5l8-4 8 4v7.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="clients"
      className="relative pt-20 bg-bg-site overflow-hidden border-t border-white/5"
    >
      <div className=" relative z-10">
        {/* Title block */}
        <div className="text-left mb-16 relative">
          <span className="font-caveat text-pink-500 text-3xl block mb-2 lowercase">
            collaborations
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white font-outfit">
            TRUSTED BY <span className="text-pink-500">GLOBAL BRANDS</span>
          </h2>
          <div className="w-16 h-1 bg-pink-500 mt-4" />
        </div>

        {/* Partners Grid - Flat transitions only */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-white/10">
          {partnerships.map((partner, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center p-8 border-r border-b border-white/10 bg-transparent hover:border-pink-500 hover:bg-white/[0.01] transition-colors duration-300 cursor-pointer text-zinc-500 hover:text-white"
            >
              {/* Logo */}
              <div className="mb-4 text-zinc-500 group-hover:text-pink-500 transition-colors duration-300">
                {partner.logo}
              </div>

              {/* Platform Info */}
              <span className="text-xs font-black uppercase tracking-wider text-zinc-350 group-hover:text-white transition-colors duration-300">
                {partner.name}
              </span>
              <span className="text-[8px] font-mono tracking-widest text-zinc-650 group-hover:text-pink-500/80 transition-colors duration-300 mt-1">
                {partner.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
