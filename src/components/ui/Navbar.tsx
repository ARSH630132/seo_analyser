import { motion } from 'framer-motion';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { sectionCoordinates } from '../../data/portfolioData';

const sectionList = Object.keys(sectionCoordinates);

export const Navbar = () => {
  const { currentSection, setCurrentSection } = usePortfolioStore();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center p-8">
      <ul className="flex space-x-8 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
        {sectionList.map((section, index) => (
          <li key={section}>
            <button
              onClick={() => setCurrentSection(index)}
              className={`text-sm uppercase tracking-widest transition-colors ${
                currentSection === index ? 'text-[#00ffff]' : 'text-white/50 hover:text-white'
              }`}
            >
              {section}
            </button>
            {currentSection === index && (
              <motion.div
                layoutId="underline"
                className="h-px bg-[#00ffff] mt-1"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
