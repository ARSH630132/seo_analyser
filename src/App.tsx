import { useEffect } from 'react';
import { Scene } from './components/3d/Scene';
import { HeroSection } from './components/3d/HeroSection';
import { AboutSection } from './components/3d/AboutSection';
import { ProjectsSection } from './components/3d/ProjectsSection';
import { TimelineSection } from './components/3d/TimelineSection';
import { ContactSection } from './components/3d/ContactSection';
import { Navbar } from './components/ui/Navbar';
import { Modal } from './components/ui/Modal';
import { ContactForm } from './components/ui/ContactForm';
import { usePortfolioStore } from './store/usePortfolioStore';

function App() {
  const currentSection = usePortfolioStore((state) => state.currentSection);
  const setCurrentSection = usePortfolioStore((state) => state.setCurrentSection);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 50) return;
      
      if (e.deltaY > 0) {
        setCurrentSection(Math.min(currentSection + 1, 4));
      } else {
        setCurrentSection(Math.max(currentSection - 1, 0));
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection, setCurrentSection]);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#050505]">
      <Navbar />
      
      <Scene>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </Scene>

      <div className="relative z-10 w-full h-full pointer-events-none">
        {/* Hero Text Overlay */}
        {currentSection === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter uppercase italic">
              Hello, I'm <span className="text-[#00ffff]">Jules</span>
            </h1>
          </div>
        )}

        {/* Contact Form Overlay */}
        {currentSection === 4 && (
          <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-auto">
            <ContactForm />
          </div>
        )}
      </div>

      <Modal />
      
      {/* Scroll indicator */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs uppercase tracking-[0.3em] animate-pulse">
        Scroll to Explore
      </div>
    </main>
  );
}

export default App;
