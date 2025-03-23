import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const Book = ({ model }) => {
  const { scene } = useGLTF(model);

  return (
    <Canvas>
      <mesh>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <primitive object={scene} />
        <OrbitControls />
      </mesh>
    </Canvas>
  );
};

export default Book;
