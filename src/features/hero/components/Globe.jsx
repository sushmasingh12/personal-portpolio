import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function Globe() {
  const meshRef = useRef(null);
  const wireRef = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.1;
      meshRef.current.rotation.x = t * 0.05;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = -t * 0.15;
      wireRef.current.rotation.z = t * 0.05;
    }
  });

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      const x = THREE.MathUtils.randFloatSpread(10);
      const y = THREE.MathUtils.randFloatSpread(10);
      const z = THREE.MathUtils.randFloatSpread(10);
      temp.push([x, y, z]);
    }
    return temp;
  }, []);

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        {/* Core Sphere */}
        <Sphere ref={meshRef} args={[2.5, 64, 64]}>
          <MeshDistortMaterial
            color="#0a0a0a"
            emissive="#f59e0b"
            emissiveIntensity={0.05}
            roughness={0.1}
            metalness={0.8}
            distort={0.2}
            speed={2}
          />
        </Sphere>

        {/* Wireframe Outline */}
        <Sphere ref={wireRef} args={[2.8, 32, 32]}>
          <meshBasicMaterial
            color="#f59e0b"
            wireframe
            transparent
            opacity={0.15}
          />
        </Sphere>

        {/* Floating Particles */}
        {particles.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color="#f59e0b" transparent opacity={0.4} />
          </mesh>
        ))}
      </Float>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#fbbf24" />
      <spotLight
        position={[-10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        color="#fff"
      />
    </group>
  );
}
