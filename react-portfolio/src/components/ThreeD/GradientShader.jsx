import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { useRef } from "react";

/* Soft animated gradient shader */
const GradientMaterial = shaderMaterial(
  { uTime: 0 },
  // vertex
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  // fragment
  `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv - 0.5;

    float t = uTime * 0.15;
    float wave = sin((uv.x + uv.y) * 6.0 + t) * 0.08;

    vec3 c1 = vec3(0.42, 0.38, 1.0);  // accent primary
    vec3 c2 = vec3(0.0, 0.96, 0.83);  // accent secondary

    float mixVal = smoothstep(-0.3, 0.3, uv.y + wave);
    vec3 color = mix(c1, c2, mixVal);

    gl_FragColor = vec4(color, 0.45);
  }
  `
);

extend({ GradientMaterial });

const GradientPlane = () => {
  const mat = useRef();
  useFrame((_, delta) => {
    if (mat.current) mat.current.uTime += delta;
  });

  return (
    <mesh scale={[6, 4, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <gradientMaterial ref={mat} />
    </mesh>
  );
};

export default GradientPlane;
