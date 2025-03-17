import { create } from 'zustand';
import { NavStore } from '../types';

export const useNavStore = create<NavStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  activeItem: '/',
  setActiveItem: (activeItem) => set({ activeItem }),
}));