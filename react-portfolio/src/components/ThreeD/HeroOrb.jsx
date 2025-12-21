import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

const Orb = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh scale={2.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#6c63ff"
          distort={0.35}
          speed={2}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
};

const HeroOrb = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <Orb />
    </Canvas>
  );
};

export default HeroOrb;
