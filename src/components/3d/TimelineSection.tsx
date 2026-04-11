import { Text, Sphere, Line } from '@react-three/drei';
import { sectionCoordinates, experiences } from '../../data/portfolioData';

export const TimelineSection = () => {
  const [x, y, z] = sectionCoordinates.timeline;

  const points: [number, number, number][] = experiences.map((exp) => [
    exp.position[0],
    exp.position[1],
    exp.position[2],
  ]);

  return (
    <group position={[x, y, z]}>
      <Text position={[0, 5, 0]} fontSize={1} color="white">
        EXPERIENCE
      </Text>

      <Line
        points={points}
        color="#00ffff"
        lineWidth={1}
        transparent
        opacity={0.5}
      />

      {experiences.map((exp) => (
        <group key={exp.id} position={exp.position}>
          <Sphere args={[0.3, 16, 16]}>
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1} />
          </Sphere>
          <Text
            position={[1.5, 0, 0]}
            fontSize={0.4}
            color="white"
            anchorX="left"
          >
            {exp.role}
          </Text>
          <Text
            position={[1.5, -0.5, 0]}
            fontSize={0.2}
            color="#aaa"
            anchorX="left"
          >
            {exp.company} | {exp.period}
          </Text>
        </group>
      ))}
    </group>
  );
};
