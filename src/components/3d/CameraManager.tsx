import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3, MathUtils } from 'three';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { sectionCoordinates } from '../../data/portfolioData';

const sectionList = Object.keys(sectionCoordinates) as Array<keyof typeof sectionCoordinates>;

export const CameraManager = () => {
  const currentSectionIndex = usePortfolioStore((state) => state.currentSection);
  const targetPosition = useRef(new Vector3());
  const targetLookAt = useRef(new Vector3());

  useFrame((state) => {
    const sectionName = sectionList[currentSectionIndex];
    const coords = sectionCoordinates[sectionName];
    
    targetPosition.current.set(coords[0], coords[1], coords[2] + 10);
    targetLookAt.current.set(coords[0], coords[1], coords[2]);

    state.camera.position.lerp(targetPosition.current, 0.05);
    // state.camera.lookAt(targetLookAt.current); // Smooth lookAt is harder with lerp, maybe just lerp position for now
  });

  return null;
};
