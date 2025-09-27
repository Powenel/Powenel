import type { ThreeElements } from "@react-three/fiber";

type PlaneProps = ThreeElements["mesh"];

export default function Plane({ ...props }: PlaneProps) {
  return (
    <mesh scale={6} {...props}>
      <planeGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}
