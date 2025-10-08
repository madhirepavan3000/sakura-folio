import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import characterModel from "@/assets/character-model.glb";

// 3D Model Component
const Model3D = ({ scrollRotation }: { scrollRotation: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(characterModel);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollRotation;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={2} position={[0, -1.5, 0]} />
    </group>
  );
};

export const AnimeCharacter3D = () => {
  const [scrollRotation, setScrollRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate rotation based on scroll position within the about section
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const rotation = scrollProgress * Math.PI * 2; // Full 360 degree rotation
        setScrollRotation(rotation);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} shadows>
        {/* Soft ambient lighting */}
        <ambientLight intensity={0.5} />
        
        {/* Soft directional lights */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8} 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-3, 3, -3]} intensity={0.4} />
        
        {/* Fill light from below */}
        <hemisphereLight args={["#ffffff", "#60a5fa", 0.6]} />
        
        {/* Natural environment background */}
        <Environment preset="sunset" background blur={0.8} />
        
        {/* 3D Model */}
        <Model3D scrollRotation={scrollRotation} />
        
        {/* Ground shadow for realism */}
        <ContactShadows 
          position={[0, -1.5, 0]} 
          opacity={0.4} 
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
