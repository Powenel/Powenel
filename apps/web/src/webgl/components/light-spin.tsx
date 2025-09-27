import { useRef } from "react";
import type { Group, PointLight as TPointLight } from "three";

import PointLight from "@/webgl/components/primitives/pointlight";

export default function LightSpin() {
  const groupRef = useRef<Group>(null!);
  const pointLightRef = useRef<TPointLight>(null!);

  return (
    <group ref={groupRef} position-z={2}>
      <PointLight ref={pointLightRef} color={"#aa88cc"} scale={0.3} intensity={30} helper />;
      <mesh>
        <sphereGeometry args={[0.1]} />
        <meshBasicMaterial color={"#aa88cc"} />
      </mesh>
    </group>
  );
}
