import { create } from 'zustand';
import { CategoryPayload, ICategorySlice } from '../types/category';
import { makeRequest } from '../utils';
import { RequestMethod } from '../types';

export const useCategorySlice = create<ICategorySlice>((set, get) => ({
    categories: [],
    create: {
        loading: false,
        error: null,
        setLoading: (value: boolean) => set((state) => ({ ...state, create: { ...state.create, loading: value } })),
        clearError: () => set((state) => ({ ...state, create: { ...state.create, error: null } })),
    },
    fetch: {
        loading: false,
        error: null,
        setLoading: (value: boolean) => set((state) => ({ ...state, fetch: { ...state.fetch, loading: value } })),
        clearError: () => set((state) => ({ ...state, fetch: { ...state.fetch, error: null } })),
    },
    update: {
        loading: false,
        error: null,
        setLoading: (value: boolean) => set((state) => ({ ...state, update: { ...state.update, loading: value } })),
        clearError: () => set((state) => ({ ...state, update: { ...state.update, error: null } })),
    },
    remove: {
        loading: false,
        error: null,
        setLoading: (value: boolean) => set((state) => ({ ...state, remove: { ...state.remove, loading: value } })),
        clearError: () => set((state) => ({ ...state, remove: { ...state.remove, error: null } })),
    },
    createCategory: async (data: CategoryPayload) => {
        get().create.setLoading(true);

        const { result, error } = await makeRequest('categories', RequestMethod.POST, data);

        if (error) {
            set((state) => ({
                ...state,
                create: {
                    ...state.create,
                    error: result?.message || 'An error occurred',
                    loading: false,
                },
            }));
            return;
        }

        set((state) => ({
            ...state,
            categories: [...state.categories, result.data],
        }));
    },
    updateCategory: async (id: string, data: CategoryPayload) => {
        get().update.setLoading(true);

        const { result, error } = await makeRequest(`categories/${id}`, RequestMethod.PUT, data);

        if (error) {
            set((state) => ({
                ...state,
                update: {
                    ...state.update,
                    error: result?.message || 'An error occurred',
                    loading: false,
                },
            }));
            return;
        }

        set((state) => ({
            ...state,
            categories: state.categories.map((category) => {
                // return updated category
                if (category.id === id) {
                    return result.data;
                }

                return category;
            }),
        }));
    },
    fetchCategories: async () => {
        get().fetch.setLoading(true);

        const { result, error } = await makeRequest('categories', RequestMethod.GET);

        if (error) {
            set((state) => ({
                ...state,
                fetch: {
                    ...state.fetch,
                    error: result?.message || 'An error occurred',
                    loading: false,
                },
            }));
            return;
        }

        set((state) => ({
            ...state,
            categories: result.data,
        }));
    },
    removeCategory: async (id: string) => {
        get().remove.setLoading(true);

        const { result, error } = await makeRequest(`categories/${id}`, RequestMethod.DELETE);

        if (error) {
            set((state) => ({
                ...state,
                remove: {
                    ...state.remove,
                    error: result?.message || 'An error occurred',
                    loading: false,
                },
            }));
            return;
        }

        set((state) => ({
            ...state,
            categories: state.categories.filter((category) => category.id !== id),
        }));
    },
}));
