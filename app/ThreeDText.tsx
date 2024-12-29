'use client';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Custom Starfield component
const CustomStarfield = () => {
  const points = useMemo(() => {
    const vertices = [];
    for (let i = 0; i < 7000; i++) {
      const radius = 50;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      vertices.push(x, y, z);
    }
    return new Float32Array(vertices);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation
        color="black"
        transparent
        opacity={0.9}
        
      />
    </points>
  );
};

const DissolveShaderMaterial = {
  uniforms: {
    baseTexture: { value: null },
    dissolveTexture: { value: null },
    dissolveProgress: { value: 1 },
    color: { value: new THREE.Color('black') }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D baseTexture;
    uniform sampler2D dissolveTexture;
    uniform float dissolveProgress;
    uniform vec3 color;
    varying vec2 vUv;

    void main() {
      vec4 noise = texture2D(dissolveTexture, vUv);
      vec4 baseColor = texture2D(baseTexture, vUv);
      
      float threshold = dissolveProgress;
      float alpha = smoothstep(threshold - 0.1, threshold + 0.1, noise.r);
      
      // Start with white (1,1,1) and mix to black (0,0,0)
      vec3 finalColor = mix(vec3(1.0), color, alpha);
      
      // Edge glow effect in grayscale
      vec3 glowColor = vec3(0.5);  // Mid-gray for subtle glow
      float glowIntensity = smoothstep(threshold - 0.2, threshold, noise.r) -
                           smoothstep(threshold, threshold + 0.2, noise.r);
      
      // Mix the glow more subtly
      finalColor = mix(finalColor, glowColor, glowIntensity * 0.2);
      
      // Ensure strong opacity for visibility
      gl_FragColor = vec4(finalColor, alpha);
    }
  `
};

const AnimatedTextMesh = () => {
  const meshRef = useRef();
  const materialRef = useRef();
  const [dissolveProgress, setDissolveProgress] = useState(1);

  const noiseTexture = useMemo(() => {
    const size = 256;
    const data = new Uint8Array(size * size);
    for (let i = 0; i < size * size; i++) {
      data[i] = Math.random() * 255;
    }
    const texture = new THREE.DataTexture(data, size, size, THREE.RedFormat);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDissolveProgress(prev => Math.max(prev - 0.0050, 0));
    }, 26);
    return () => clearInterval(intervalId);
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.3) * 0.2;
    }
  });

  const shaderMaterial = useMemo(() => {
    const material = new THREE.ShaderMaterial({
      ...DissolveShaderMaterial,
      transparent: true,
      uniforms: {
        ...DissolveShaderMaterial.uniforms,
        dissolveTexture: { value: noiseTexture },
        dissolveProgress: { value: 0 }
      }
    });
    return material;
  }, [noiseTexture]);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.dissolveProgress.value = dissolveProgress;
    }
  }, [dissolveProgress]);

  return (
    <Text
      ref={(mesh) => {
        meshRef.current = mesh;
        if (mesh) {
          materialRef.current = mesh.material = shaderMaterial;
        }
      }}
      position={[0, 0, 0]}
      fontSize={1.5}
      font="/Lobster-Regular.ttf"
      anchorX="center"
      anchorY="middle"
    >
     Hi,I'm Aadvik Chaturvedi
    </Text>
  );
};

const AnimatedText = () => {
  return (
    <div style={{ width: '100%', height: '400px', position: 'relative', background: 'white' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
      >
        <color attach="background" args={['white']} />
        
        <CustomStarfield />

        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <AnimatedTextMesh />
        <OrbitControls 
          enableZoom={true} 
          enablePan={true}
          minDistance={2}
          maxDistance={100}
        />
      </Canvas>
    </div>
  );
};

export default AnimatedText;