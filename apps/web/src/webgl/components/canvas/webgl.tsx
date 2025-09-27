"use client";

import { Suspense } from "react";
import { Loader, OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import LightSpin from "@/webgl/components/light-spin";
import Plane from "@/webgl/components/primitives/plane";

export function WebGLCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen">
      <Canvas>
        <Suspense fallback={null}>
          <Plane />
          <LightSpin />
        </Suspense>

        <Preload all={true} />
        <OrbitControls makeDefault />
      </Canvas>
      <Loader containerStyles={{ backgroundColor: "black" }} />
    </div>
  );
}
