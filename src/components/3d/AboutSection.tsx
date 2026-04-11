import { Float, Text, Sphere } from '@react-three/drei';
import { sectionCoordinates, techStack } from '../../data/portfolioData';
import { useState } from 'react';

export const AboutSection = () => {
  const [x, y, z] = sectionCoordinates.about;
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <group position={[x, y, z]}>
      <Text
        position={[0, 5, 0]}
        fontSize={1}
        color="white"
      >
        CORE TECH
      </Text>

      {techStack.map((tech, index) => {
        const angle = (index / techStack.length) * Math.PI * 2;
        const radius = 5;
        const tx = Math.cos(angle) * radius;
        const ty = Math.sin(angle) * radius;

        return (
          <group key={tech.name} position={[tx, ty, 0]}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <Sphere
                args={[0.5, 32, 32]}
                onPointerOver={() => setHovered(tech.name)}
                onPointerOut={() => setHovered(null)}
              >
                <meshStandardMaterial
                  color={hovered === tech.name ? "#00ffff" : "#333"}
                  emissive={hovered === tech.name ? "#00ffff" : "#000"}
                  emissiveIntensity={0.5}
                />
              </Sphere>
            </Float>
            <Text
              position={[0, -1, 0]}
              fontSize={0.3}
              color="white"
              visible={hovered === tech.name}
            >
              {tech.name}
            </Text>
          </group>
        );
      })}
    </group>
  );
};
