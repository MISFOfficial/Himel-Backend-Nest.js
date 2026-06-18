"use client";

import React from "react";

export default function WhatApp() {
  // Replace with the user's actual phone number (including country code, e.g., 88017xxxxxxxx)
  const whatsappNumber = "8801957151337";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-between bg-zinc-950/80 hover:bg-zinc-900/90 border border-emerald-500/20 hover:border-emerald-500/50 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-500 hover:scale-105 active:scale-95 w-16 h-16 hover:w-40 p-2 hover:pl-5 hover:pr-2"
    >
      <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap text-sm font-mono uppercase tracking-wider text-emerald-400 transition-all duration-500 group-hover:max-w-[75px] group-hover:opacity-100 font-bold">
        WhatsApp
      </span>
      <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#25D366] rounded-full text-white shadow-lg shadow-emerald-500/30 group-hover:bg-[#20ba56] transition-colors duration-300">
        {/* Pulsing ring effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 448 512"
          className="relative z-10 w-6 h-6 fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </div>
    </a>
  );
}
