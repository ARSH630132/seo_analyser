import { Text, Box, useCursor } from '@react-three/drei';
import { sectionCoordinates, projects } from '../../data/portfolioData';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { useState } from 'react';

export const ProjectsSection = () => {
  const [x, y, z] = sectionCoordinates.projects;
  const openModal = usePortfolioStore((state) => state.openModal);
  const [hovered, setHovered] = useState<number | null>(null);
  
  useCursor(hovered !== null);

  return (
    <group position={[x, y, z]}>
      <Text position={[0, 5, 0]} fontSize={1} color="white">
        PROJECTS
      </Text>

      {projects.map((project) => (
        <group key={project.id} position={project.position}>
          <Box
            args={[3, 2, 0.2]}
            onPointerOver={() => setHovered(project.id)}
            onPointerOut={() => setHovered(null)}
            onClick={() => openModal(project)}
            scale={hovered === project.id ? 1.1 : 1}
          >
            <meshStandardMaterial
              color={hovered === project.id ? "#00ffff" : "#222"}
              emissive={hovered === project.id ? "#00ffff" : "#000"}
              emissiveIntensity={0.2}
            />
          </Box>
          <Text
            position={[0, -1.5, 0]}
            fontSize={0.3}
            color="white"
          >
            {project.title}
          </Text>
        </group>
      ))}
    </group>
  );
};
