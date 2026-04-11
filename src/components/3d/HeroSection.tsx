import { Float, Text, MeshDistortMaterial } from '@react-three/drei';
import { sectionCoordinates } from '../../data/portfolioData';

export const HeroSection = () => {
  const [x, y, z] = sectionCoordinates.hero;

  return (
    <group position={[x, y, z]}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh>
          <icosahedronGeometry args={[2, 15]} />
          <MeshDistortMaterial
            color="#00ffff"
            speed={2}
            distort={0.4}
            radius={1}
            emissive="#00ffff"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
      
      <Text
        position={[0, -3, 0]}
        fontSize={0.5}
        color="white"
        font="https://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCFPrEHJA.ttf"
      >
        DIGITAL CRAFTSMAN
      </Text>
    </group>
  );
};
