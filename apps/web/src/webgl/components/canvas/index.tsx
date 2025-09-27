"use client";

import dynamic from "next/dynamic";

const WebGLCanvas = dynamic(() => import("./webgl").then(({ WebGLCanvas }) => WebGLCanvas), {
  ssr: false,
});

export default function Canvas() {
  return <WebGLCanvas />;
}
