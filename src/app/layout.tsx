import "@/app/globals.css";

import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";

import { TooltipProvider } from "@/components/ui/tooltip";

const anton = Anton({
  variable: "--font-anton-custom",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Virat Starter Canvas",
  description: "A high-performance, modern Next.js starter canvas by Virat Software Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
