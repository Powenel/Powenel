import { useImperativeHandle, useRef } from "react";
import { useHelper } from "@react-three/drei";
import { type ThreeElements } from "@react-three/fiber";
import { PointLightHelper, type PointLight as TPointLight } from "three";

type PointLightProps = ThreeElements["pointLight"] & {
  helper?: boolean;
  ref?: React.Ref<TPointLight>;
};

export default function PointLight({ helper = false, ref, ...props }: PointLightProps) {
  const pointLightRef = useRef<TPointLight>(null!);
  useHelper(helper ? pointLightRef : null, PointLightHelper, 1);

  useImperativeHandle(ref, () => pointLightRef.current);

  return <pointLight color={"#af94d9"} intensity={21} ref={pointLightRef} {...props} />;
}
