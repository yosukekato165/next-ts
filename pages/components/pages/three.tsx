import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import React, { useRef } from "react";
import Controls from "../utils/Controls";
import styles from "styles/Home.module.scss";

const Thing = () => {
  const ref = useRef({} as Mesh);
  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.z += 0.01
  });
  return (
    <mesh
      ref={ref}
      onClick={(e) => console.log("click")}
      onPointerOver={(e) => console.log("hover")}
      onPointerOut={(e) => console.log("unhover")}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshPhongMaterial
        attach="material"
        color="hotpink"
        opacity={1}
        transparent
      />
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
};

export const Three: React.FC = React.memo(() => {
  return (
    <div className={styles.bgbk} style={{ width: "100vw", height: "100vh" }} >
      <Canvas>
        <ambientLight />
        {/* <directionalLight/> */}
        <spotLight intensity={0.5} position={[10, 20, 30]} />
        <pointLight position={[10, 10, 10]} />
        <Thing />
        <Controls />
        <gridHelper />
      </Canvas>
    </div>
  );
});
