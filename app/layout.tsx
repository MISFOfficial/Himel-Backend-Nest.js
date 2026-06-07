export const runtime = 'edge';
export const dynamic = 'force-dynamic';



import StarField from "./_Component/Global/StarField";
import "./globals.css";
import QueryProvider from "./_Component/Global/QueryProvider";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="antialiased overflow-x-hidden">
        <QueryProvider>
          <StarField />
          <Toaster position="bottom-right" theme="light" richColors />
          {/* <VideoResume /> */}
          <main className="relative z-10">{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
