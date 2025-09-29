import { useRef } from "react";
import { useFrame, type ThreeElements } from "@react-three/fiber";
import { RawShaderMaterial } from "three";

import fragmentShader from "@/webgl/shaders/glsl/fragment.frag";
import vertexShader from "@/webgl/shaders/glsl/vertex.vert";

type PlaneProps = ThreeElements["mesh"];

export default function Plane({ ...props }: PlaneProps) {
  const materialRef = useRef<RawShaderMaterial>(null!);

  const uniforms = {
    uTime: { value: 0 },
  };

  useFrame(({ clock }) => {
    const material = materialRef.current;
    if (material) {
      if (material.uniforms.uTime) {
        material.uniforms.uTime.value = clock.getElapsedTime();
      }
    }
  });

  return (
    <mesh {...props}>
      <planeGeometry args={[3, 3, 32, 32]} />
      <rawShaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        glslVersion={"300 es"}
      />
    </mesh>
  );
}
