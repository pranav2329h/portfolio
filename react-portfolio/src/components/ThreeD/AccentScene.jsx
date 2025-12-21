import { Canvas } from "@react-three/fiber";
import GradientPlane from "./GradientShader";

const AccentScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 50 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1} />
      <GradientPlane />
    </Canvas>
  );
};

export default AccentScene;
