import React from "react";
import { ArrowUpRight, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

import LineWaves from "@/components/LineWaves";
import LiquidLogo from "@/components/LiquidLogo";
import Logo from "@/components/Logo";

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-950 text-neutral-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Background Interactive Animation */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 md:pointer-events-auto">
        <LineWaves
          speed={0.25}
          innerLineCount={32}
          outerLineCount={40}
          warpIntensity={0.8}
          rotation={-30}
          edgeFadeWidth={0.2}
          colorCycleSpeed={0.5}
          brightness={0.15}
          color1="#3b82f6" // Electric Blue
          color2="#8b5cf6" // Violet
          color3="#ec4899" // Pink
          enableMouseInteraction={true}
          mouseInfluence={2.5}
        />
      </div>

      {/* Radial overlay to dim the edges and enhance legibility */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(10,10,10,0.1)_0%,rgba(10,10,10,0.9)_80%)]" />

      {/* Header / Navigation */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between border-b border-neutral-800/40 bg-neutral-950/20 px-6 py-6 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Logo className="h-auto w-10 text-indigo-400 transition-colors hover:text-indigo-300" />
          <span className="font-anton bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-400 bg-clip-text text-xl tracking-widest text-transparent uppercase">
            Virat Starter
          </span>
        </div>
        <nav className="flex items-center gap-6">
          <a
            id="nav-link-main"
            href="https://viratsoftwaresolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
          >
            viratsotwaresolutions.com
            <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-400" />
          </a>
        </nav>
      </header>

      {/* Main Hero Content */}
      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-12 md:py-20">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: Text Content */}
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            {/* Tag */}
            <div className="font-anton inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs tracking-widest text-indigo-300 uppercase backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
              </span>
              VIRAT STARTER CANVAS v1.0
            </div>

            {/* Heading */}
            <h1 className="font-anton flex flex-col text-6xl leading-[0.9] tracking-tight text-white uppercase sm:text-7xl md:text-9xl">
              <span>VIRAT</span>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                STARTER
              </span>
            </h1>

            {/* Subheading / Description */}
            <p className="max-w-2xl text-lg leading-relaxed font-light text-neutral-400 md:text-xl">
              Architect and deploy highly optimized, ultra-fast web systems. A boilerplate built on
              Next.js, Bun, and WebGL to create digital experiences that scale limitlessly.
            </p>

            {/* Actions */}
            <div className="mt-2 flex w-full flex-wrap items-center gap-4 sm:w-auto">
              <a
                id="cta-website-btn"
                href="https://viratsoftwaresolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-neutral-950 shadow-lg shadow-white/5 transition-all hover:bg-neutral-200 hover:shadow-indigo-500/10 sm:w-auto"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                id="cta-explore-btn"
                href="#explore"
                className="flex w-full cursor-pointer items-center justify-center gap-2 border border-neutral-800 bg-neutral-900/60 px-8 py-4 font-semibold text-neutral-300 backdrop-blur-sm transition-all hover:bg-neutral-900/90 hover:text-white sm:w-auto"
              >
                <Code2 className="h-4 w-4 text-neutral-400" />
                Explore Core Tech
              </a>
            </div>
          </div>

          {/* Right: Big Liquid Metal Logo */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="group relative">
              {/* Subtle indigo backglow */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-indigo-500/10 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
              <LiquidLogo />
            </div>
          </div>
        </div>

        {/* Feature Grid Section */}
        <section
          id="explore"
          className="mt-20 grid grid-cols-1 gap-6 border-t border-neutral-900 pt-16 md:mt-32 md:grid-cols-3"
        >
          {/* Card 1 */}
          <div className="group relative rounded-2xl border border-neutral-900 bg-neutral-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-900/30">
            <div className="absolute top-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowUpRight className="h-5 w-5 text-neutral-600" />
            </div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
              <Zap className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">High Performance</h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Powered by Bun, React 19, and Next.js App Router for server-side excellence and
              blazing-fast loading speeds.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl border border-neutral-900 bg-neutral-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-900/30">
            <div className="absolute top-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowUpRight className="h-5 w-5 text-neutral-600" />
            </div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10">
              <ShieldCheck className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">End-to-End Type Safety</h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Robust data layers built using Drizzle ORM and Elysia, ensuring full code sanity from
              database to the user&apos;s screen.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl border border-neutral-900 bg-neutral-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-900/30">
            <div className="absolute top-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowUpRight className="h-5 w-5 text-neutral-600" />
            </div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
              <Layers className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Immersive Aesthetics</h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Stunning visual effects including custom WebGL shaders, responsive layout structures,
              and sleek dark mode presets.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mx-auto mt-12 flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-neutral-900/80 px-6 py-8 text-xs text-neutral-500 sm:flex-row">
        <div>&copy; {new Date().getFullYear()} Virat Software Solutions. All rights reserved.</div>
        <div className="flex gap-6">
          <a
            id="footer-website-link"
            href="https://viratsoftwaresolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-300"
          >
            viratsotwaresolutions.com
          </a>
        </div>
      </footer>
    </div>
  );
}
