import { Text, Box, Float } from '@react-three/drei';
import { sectionCoordinates } from '../../data/portfolioData';

export const ContactSection = () => {
  const [x, y, z] = sectionCoordinates.contact;

  return (
    <group position={[x, y, z]}>
      <Text position={[0, 5, 0]} fontSize={1} color="white">
        GET IN TOUCH
      </Text>

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group>
          {/* Base of the terminal */}
          <Box args={[4, 3, 0.5]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#111" />
          </Box>
          {/* Screen area */}
          <Box args={[3.6, 2.6, 0.1]} position={[0, 0, 0.26]}>
            <meshStandardMaterial color="#001100" emissive="#004400" emissiveIntensity={0.5} />
          </Box>
          <Text
            position={[0, 0, 0.32]}
            fontSize={0.2}
            color="#00ff00"
            maxWidth={3}
            textAlign="center"
          >
            {"> INITIALIZING CONTACT PROTOCOL...\n> WAITING FOR INPUT_"}
          </Text>
        </group>
      </Float>
    </group>
  );
};
