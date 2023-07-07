import { create } from 'zustand';
import { ISnackbarSlice } from '../types';

export const useSnackbar = create<ISnackbarSlice>((set) => ({
    visible: false,
    message: null,
    dismiss: () => set((state) => ({ ...state, visible: false })),
    show: () => set((state) => ({ ...state, visible: true })),
    setMessage: (value: string) => set((state) => ({ ...state, message: value })),
    clearMessage: () => set((state) => ({ ...state, message: null })),
}));
