import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { X, ExternalLink } from 'lucide-react';

export const Modal = () => {
  const { isModalOpen, selectedProject, closeModal } = usePortfolioStore();

  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-[#111] border border-white/10 p-8 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden"
          >
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <img
              src={import.meta.env.BASE_URL + selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-xl mb-6 border border-white/5"
            />

            {/* Title */}
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
              {selectedProject.title}
            </h2>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#00ffff]/10 border border-[#00ffff]/20 text-[#00ffff] text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-white/70 mb-8 leading-relaxed">
              {selectedProject.longDescription}
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              
              {/* Live Demo */}
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#00ffff] text-black font-semibold rounded-lg hover:bg-white transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>

              {/* GitHub */}
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <ExternalLink size={18} />
                GitHub
              </a>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};