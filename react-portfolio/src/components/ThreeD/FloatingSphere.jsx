import { Float } from "@react-three/drei";

const FloatingSphere = () => {
  return (
    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#6c63ff"
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
};

export default FloatingSphere;
