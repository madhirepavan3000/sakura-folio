import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

// Anime-style character using simple 3D shapes
const AnimeCharacter = ({ scrollRotation }: { scrollRotation: number }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollRotation;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Head */}
      <Sphere args={[0.8, 32, 32]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#ffd4a3" />
      </Sphere>

      {/* Eyes */}
      <Sphere args={[0.15, 16, 16]} position={[-0.25, 1.6, 0.6]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Sphere>
      <Sphere args={[0.15, 16, 16]} position={[0.25, 1.6, 0.6]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Sphere>

      {/* Eye highlights */}
      <Sphere args={[0.05, 8, 8]} position={[-0.2, 1.65, 0.72]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere args={[0.05, 8, 8]} position={[0.3, 1.65, 0.72]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </Sphere>

      {/* Hair */}
      <Sphere args={[0.85, 32, 32]} position={[0, 1.7, -0.1]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Sphere>
      <Sphere args={[0.3, 16, 16]} position={[-0.5, 1.9, 0.3]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Sphere>
      <Sphere args={[0.3, 16, 16]} position={[0.5, 1.9, 0.3]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Sphere>

      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.6, 1.5, 32]} />
        <meshStandardMaterial color="#4a90e2" />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.7, 0.3, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
        <meshStandardMaterial color="#ffd4a3" />
      </mesh>
      <mesh position={[0.7, 0.3, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
        <meshStandardMaterial color="#ffd4a3" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.3, -1.2, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 1.2, 16]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      <mesh position={[0.3, -1.2, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 1.2, 16]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>

      {/* Mouth - small smile */}
      <Torus args={[0.15, 0.03, 8, 16, Math.PI]} position={[0, 1.3, 0.7]} rotation={[0, 0, Math.PI]}>
        <meshStandardMaterial color="#ff6b9d" />
      </Torus>
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
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />
        <pointLight position={[0, 3, 3]} intensity={0.5} color="#ffd4a3" />
        
        <AnimeCharacter scrollRotation={scrollRotation} />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};
