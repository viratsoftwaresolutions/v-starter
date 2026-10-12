"use client";

import React from "react";
import { LiquidMetal } from "@paper-design/shaders-react";

export default function LiquidLogo() {
  return (
    <div className="pointer-events-auto relative h-[280px] w-[280px] select-none sm:h-[350px] sm:w-[350px] md:h-[420px] md:w-[420px]">
      <LiquidMetal
        image="/icon.svg"
        style={{ width: "100%", height: "100%" }}
        shape="diamond"
        colorBack="rgba(0,0,0,0)"
        colorTint="#ffffff"
        distortion={0.1}
        repetition={1.6}
        shiftRed={0.2}
        shiftBlue={0.2}
        contour={0.45}
        softness={0.12}
        angle={280}
        speed={0.9}
        scale={0.85}
      />
    </div>
  );
}
