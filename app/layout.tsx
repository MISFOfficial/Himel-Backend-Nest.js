export const runtime = "edge";
export const dynamic = "force-dynamic";

import "./globals.css";

import { Toaster } from "sonner";
import WhatApp from "./_Component/WhatApp/WhatApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased overflow-x-hidden">
        {/* <VideoResume /> */}
        <main className="relative z-10">{children}</main>
        <WhatApp />
      </body>
    </html>
  );
}

