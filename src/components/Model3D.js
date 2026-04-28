"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, RoundedBox, ContactShadows, Environment, Text } from "@react-three/drei";

function RetroPC() {
  const pcRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pcRef.current) {
      pcRef.current.position.y = Math.sin(t) * 0.1;
    }
  });

  return (
    <group ref={pcRef} position={[0, -0.5, 0]}>
      {/* Meja / Base Plate */}
      <RoundedBox args={[3.5, 0.2, 2.5]} radius={0.05} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.2} />
      </RoundedBox>

      {/* Stand Monitor */}
      <mesh position={[0, 0.3, -0.5]}>
        <cylinderGeometry args={[0.2, 0.4, 0.8, 16]} />
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Monitor Body */}
      <RoundedBox args={[3, 2, 0.5]} radius={0.1} position={[0, 1.2, -0.3]} rotation={[-0.1, 0, 0]}>
        <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.2} />
      </RoundedBox>

      {/* Layar Monitor (Glowing) */}
      <mesh position={[0, 1.2, -0.04]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[2.8, 1.8, 0.05]} />
        <meshStandardMaterial color="#00bfff" emissive="#00bfff" emissiveIntensity={0.5} />
      </mesh>

      {/* Teks di Layar */}
      <Text
        position={[0, 1.2, 0]}
        rotation={[-0.1, 0, 0]}
        fontSize={0.25}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        HELLO WORLD_
      </Text>

      {/* Keyboard Base */}
      <RoundedBox args={[2.5, 0.1, 1]} radius={0.05} position={[0, 0.05, 0.6]} rotation={[0.05, 0, 0]}>
        <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.5} />
      </RoundedBox>
    </group>
  );
}

export default function Model3D() {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative z-20 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00bfff" />
        <pointLight position={[0, 2, 2]} intensity={2} color="#ffffff" distance={5} />
        
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <RetroPC />
        </Float>

        <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={10} blur={2} far={4} color="#000000" />
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1} 
          maxDistance={8}
          minDistance={3}
          maxPolarAngle={Math.PI / 2 + 0.1}
        />
      </Canvas>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs text-blue-300/60 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
        Seret & Zoom untuk berinteraksi
      </div>
    </div>
  );
}
