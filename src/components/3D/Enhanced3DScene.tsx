import { Float, MeshDistortMaterial, OrbitControls, Sphere, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

interface AnimatedSphereProps {
  position: [number, number, number];
  color: string;
  speed?: number;
  scale?: number;
}
const AnimatedSphere: React.FC<AnimatedSphereProps> = ({ position, color, speed = 1, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[scale, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ParticleField: React.FC = () => {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const count = 1000; // Fixed count to match buffer attribute
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.02;
      points.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#facc15" transparent opacity={0.4} />
    </points>
  );
};

interface Enhanced3DSceneProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const Enhanced3DScene: React.FC<Enhanced3DSceneProps> = ({ className = "", intensity = 'medium' }) => {
  const sphereCount = intensity === 'low' ? 2 : intensity === 'medium' ? 3 : 5;
  
  const spheres = useMemo(() => {
    const sphereConfigs = [
      { position: [-4, 2, -1], color: "#facc15", speed: 0.8, scale: 0.8 },
      { position: [4, -1, -2], color: "#fbbf24", speed: 1.2, scale: 1.0 },
      { position: [0, 0, -3], color: "#f59e0b", speed: 1, scale: 0.9 },
      { position: [-2, -3, 1], color: "#eab308", speed: 0.9, scale: 0.7 },
      { position: [3, 3, 0], color: "#ca8a04", speed: 1.1, scale: 0.6 }
    ];
    
    return sphereConfigs.slice(0, sphereCount);
  }, [sphereCount]);

  return (
    <div className={`${className} relative`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl }) => {
          gl.setSize(gl.domElement.clientWidth, gl.domElement.clientHeight, false);
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#facc15" />
          <pointLight position={[-10, -10, -10]} intensity={0.6} color="#ffffff" />
          <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.8} />
          
          <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
          <ParticleField />
          
          {spheres.map((sphere, index) => (
            <AnimatedSphere 
              key={index}
              position={sphere.position as [number, number, number]}
              color={sphere.color}
              speed={sphere.speed}
              scale={sphere.scale}
            />
          ))}
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Enhanced3DScene;
