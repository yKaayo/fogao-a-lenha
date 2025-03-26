import { Canvas } from "@react-three/fiber";
import BookModel from "./BookModel";

const Book = ({ model, rotationXDefault, rotationYDefault, rotationZDefault, scale }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 0, 2]} />
      <BookModel
        model={model}
        rotationXDefault={rotationXDefault}
        rotationYDefault={rotationYDefault}
        rotationZDefault={rotationZDefault}
        scale={scale}
      />
    </Canvas>
  );
};

export default Book