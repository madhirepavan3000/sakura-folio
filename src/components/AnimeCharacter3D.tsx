import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// 3D Model Component
const Model3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/character-model.glb");

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={2} position={[0, -1.5, 0]} />
    </group>
  );
};

export const AnimeCharacter3D = () => {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} shadows style={{ background: '#ffffff' }}>
        {/* Soft ambient lighting */}
        <ambientLight intensity={0.8} />
        
        {/* Soft directional lights */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-3, 3, -3]} intensity={0.5} />
        
        {/* Fill light from below */}
        <hemisphereLight args={["#ffffff", "#e0e0e0", 0.6]} />
        
        {/* 3D Model */}
        <Model3D />
        
        {/* Ground shadow for realism */}
        <ContactShadows 
          position={[0, -1.5, 0]} 
          opacity={0.3} 
          scale={10} 
          blur={2} 
          far={4}
        />
        
        {/* Interactive controls */}
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          minDistance={2}
          maxDistance={10}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};
