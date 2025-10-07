import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

// Anime-style character inspired by ninja characters
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
      <Sphere args={[0.6, 32, 32]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#ffdbac" />
      </Sphere>

      {/* Spiky Blonde Hair */}
      <Sphere args={[0.65, 32, 32]} position={[0, 2.3, -0.1]}>
        <meshStandardMaterial color="#ffd700" roughness={0.8} />
      </Sphere>
      {/* Hair spikes */}
      <mesh position={[-0.3, 2.7, 0.1]} rotation={[0, 0, -0.3]}>
        <coneGeometry args={[0.15, 0.4, 8]} />
        <meshStandardMaterial color="#ffd700" />
      </mesh>
      <mesh position={[0, 2.8, 0.2]} rotation={[0.3, 0, 0]}>
        <coneGeometry args={[0.15, 0.5, 8]} />
        <meshStandardMaterial color="#ffd700" />
      </mesh>
      <mesh position={[0.3, 2.7, 0.1]} rotation={[0, 0, 0.3]}>
        <coneGeometry args={[0.15, 0.4, 8]} />
        <meshStandardMaterial color="#ffd700" />
      </mesh>
      <mesh position={[-0.2, 2.6, -0.3]} rotation={[0, 0, -0.2]}>
        <coneGeometry args={[0.12, 0.35, 8]} />
        <meshStandardMaterial color="#ffd700" />
      </mesh>
      <mesh position={[0.2, 2.6, -0.3]} rotation={[0, 0, 0.2]}>
        <coneGeometry args={[0.12, 0.35, 8]} />
        <meshStandardMaterial color="#ffd700" />
      </mesh>

      {/* Headband */}
      <mesh position={[0, 2.1, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.62, 0.62, 0.15, 32]} />
        <meshStandardMaterial color="#2c3e50" metalness={0.3} />
      </mesh>
      <mesh position={[0, 2.1, 0.61]} scale={[1.2, 1, 0.05]}>
        <boxGeometry args={[0.4, 0.15, 0.1]} />
        <meshStandardMaterial color="#95a5a6" metalness={0.8} />
      </mesh>

      {/* Eyes - bright blue */}
      <Sphere args={[0.12, 16, 16]} position={[-0.2, 2.05, 0.5]}>
        <meshStandardMaterial color="#0080ff" emissive="#0080ff" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere args={[0.12, 16, 16]} position={[0.2, 2.05, 0.5]}>
        <meshStandardMaterial color="#0080ff" emissive="#0080ff" emissiveIntensity={0.3} />
      </Sphere>
      {/* Pupils */}
      <Sphere args={[0.06, 16, 16]} position={[-0.2, 2.05, 0.58]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      <Sphere args={[0.06, 16, 16]} position={[0.2, 2.05, 0.58]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      {/* Eye highlights */}
      <Sphere args={[0.03, 8, 8]} position={[-0.18, 2.08, 0.6]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
      </Sphere>
      <Sphere args={[0.03, 8, 8]} position={[0.22, 2.08, 0.6]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
      </Sphere>

      {/* Facial marks (whiskers) */}
      <mesh position={[-0.35, 1.95, 0.48]} rotation={[0, 0, 0.2]} scale={[0.15, 0.02, 0.02]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      <mesh position={[-0.35, 2.1, 0.48]} rotation={[0, 0, -0.2]} scale={[0.15, 0.02, 0.02]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      <mesh position={[0.35, 1.95, 0.48]} rotation={[0, 0, -0.2]} scale={[0.15, 0.02, 0.02]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      <mesh position={[0.35, 2.1, 0.48]} rotation={[0, 0, 0.2]} scale={[0.15, 0.02, 0.02]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>

      {/* Mouth/smile */}
      <Torus args={[0.15, 0.025, 8, 16, Math.PI]} position={[0, 1.8, 0.55]} rotation={[0, 0, Math.PI]}>
        <meshStandardMaterial color="#000000" />
      </Torus>

      {/* Neck */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.3, 16]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>

      {/* Upper Body - Black jacket */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.5, 0.55, 1.2, 32]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      {/* Orange jacket trim */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.56, 0.56, 0.1, 32]} />
        <meshStandardMaterial color="#ff8c00" />
      </mesh>

      {/* Lower Body - Orange pants */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.55, 0.5, 1.5, 32]} />
        <meshStandardMaterial color="#ff8c00" />
      </mesh>

      {/* Belt */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.56, 0.56, 0.15, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Arms - black sleeves */}
      <mesh position={[-0.65, 0.6, 0]} rotation={[0, 0, 0.4]}>
        <cylinderGeometry args={[0.15, 0.12, 1.1, 16]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      <mesh position={[0.65, 0.6, 0]} rotation={[0, 0, -0.4]}>
        <cylinderGeometry args={[0.15, 0.12, 1.1, 16]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>

      {/* Forearms - skin */}
      <mesh position={[-0.9, 0, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.12, 0.1, 0.6, 16]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>
      <mesh position={[0.9, 0, 0]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.12, 0.1, 0.6, 16]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>

      {/* Hands */}
      <Sphere args={[0.12, 16, 16]} position={[-1, -0.3, 0]}>
        <meshStandardMaterial color="#ffdbac" />
      </Sphere>
      <Sphere args={[0.12, 16, 16]} position={[1, -0.3, 0]}>
        <meshStandardMaterial color="#ffdbac" />
      </Sphere>

      {/* Legs */}
      <mesh position={[-0.25, -1.6, 0]}>
        <cylinderGeometry args={[0.2, 0.18, 1, 16]} />
        <meshStandardMaterial color="#ff8c00" />
      </mesh>
      <mesh position={[0.25, -1.6, 0]}>
        <cylinderGeometry args={[0.2, 0.18, 1, 16]} />
        <meshStandardMaterial color="#ff8c00" />
      </mesh>

      {/* Leg wraps */}
      <mesh position={[-0.25, -1.9, 0]}>
        <cylinderGeometry args={[0.19, 0.19, 0.1, 16]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      <mesh position={[-0.25, -2.05, 0]}>
        <cylinderGeometry args={[0.19, 0.19, 0.1, 16]} />
        <meshStandardMaterial color="#95a5a6" />
      </mesh>
      <mesh position={[0.25, -1.9, 0]}>
        <cylinderGeometry args={[0.19, 0.19, 0.1, 16]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      <mesh position={[0.25, -2.05, 0]}>
        <cylinderGeometry args={[0.19, 0.19, 0.1, 16]} />
        <meshStandardMaterial color="#95a5a6" />
      </mesh>

      {/* Shoes - dark */}
      <mesh position={[-0.25, -2.3, 0.1]}>
        <boxGeometry args={[0.25, 0.2, 0.4]} />
        <meshStandardMaterial color="#3d3d3d" />
      </mesh>
      <mesh position={[0.25, -2.3, 0.1]}>
        <boxGeometry args={[0.25, 0.2, 0.4]} />
        <meshStandardMaterial color="#3d3d3d" />
      </mesh>
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
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-3, 3, -3]} intensity={0.5} />
        <pointLight position={[0, 4, 3]} intensity={0.8} color="#ffd700" />
        <spotLight position={[0, 5, 0]} angle={0.3} intensity={0.5} color="#ffffff" />
        
        <AnimeCharacter scrollRotation={scrollRotation} />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};
