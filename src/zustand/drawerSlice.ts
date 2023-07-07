import { create } from 'zustand';
import { IDrawerSlice } from '../types';

export const useDrawer = create<IDrawerSlice>((set) => ({
    active: '',
    setActive: (value: string) => set({ active: value }),
}));
