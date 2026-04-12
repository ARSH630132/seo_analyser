import { Canvas } from '@react-three/fiber';
import { Environment, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, SMAA } from '@react-three/postprocessing';
import { CameraManager } from './CameraManager';
import { Suspense } from 'react';

interface SceneProps {
  children: React.ReactNode;
}

export const Scene = ({ children }: SceneProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#050505]">
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: false }} // SMAA will handle it
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#050505']} />
          <fog attach="fog" args={['#050505', 10, 50]} />
          
          <ambientLight intensity={0.2} />
          <directionalLight
            position={[5, 10, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={1} />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <CameraManager />
          
          {children}

          <Environment preset="city" />

          <EffectComposer>
            <Bloom
              intensity={1.5}
              luminanceThreshold={0.9}
              luminanceSmoothing={0.025}
            />
            <Noise opacity={0.02} />
            <SMAA />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};
