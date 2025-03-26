import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

function BookModel({ model, rotationXDefault, rotationYDefault, rotationZDefault, scale }) {
    const refModel = useRef();
    const { scene } = useGLTF(model);

    useFrame((state, delta) => {
        refModel.current.rotation.y -= delta;
    });

    scene.scale.set(scale)

    return (
        <primitive
            ref={refModel}
            object={scene}
            rotation={[rotationXDefault, rotationYDefault, rotationZDefault]}
            scale={scale}
        />
    );
}

export default BookModel