import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
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
    <div className="w-full h-[500px] rounded-2xl overflow-hidden border-4 border-primary/20 shadow-glow">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} shadows>
        {/* Soft ambient lighting */}
        <ambientLight intensity={0.6} />
        
        {/* Soft directional lights with warm tones */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.9} 
          color="#e78b70"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-3, 3, -3]} intensity={0.5} color="#c23838" />
        
        {/* Fill light with portfolio colors */}
        <hemisphereLight args={["#f2e8dc", "#c75c52", 0.6]} />
        
        {/* Natural environment background with sunset theme */}
        <Environment preset="sunset" background blur={0.7} />
        
        {/* 3D Model */}
        <Model3D />
        
        {/* Ground shadow with portfolio color tint */}
        <ContactShadows 
          position={[0, -1.5, 0]} 
          opacity={0.35} 
          scale={10} 
          blur={2.5} 
          far={4}
          color="#c23838"
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
