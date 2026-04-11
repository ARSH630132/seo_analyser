import { create } from 'zustand';

interface PortfolioState {
  currentSection: number;
  setCurrentSection: (section: number) => void;
  isModalOpen: boolean;
  selectedProject: any | null;
  openModal: (project: any) => void;
  closeModal: () => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  currentSection: 0,
  setCurrentSection: (section) => set({ currentSection: section }),
  isModalOpen: false,
  selectedProject: null,
  openModal: (project) => set({ isModalOpen: true, selectedProject: project }),
  closeModal: () => set({ isModalOpen: false, selectedProject: null }),
}));
