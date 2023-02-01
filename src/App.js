import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas>
      <color attach="background" args={["black"]} />
      <OrbitControls />
      <mesh>
        <sphereGeometry />
        <meshBasicMaterial wireframe />
      </mesh>
    </Canvas>
  );
}

export default App;
