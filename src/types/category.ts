export interface Category {
    id: string;
    name: string;
    color: string;
    user?: string;
    created_at: Date;
    updated_at: Date;
}

export interface CategoryPayload {
    name: string;
}

export interface ICategorySlice {
    categories: Category[];
    category: {
        current: string;
        choose: (value: string) => void;
    };
    create: {
        loading: boolean;
        error: string | null;
        setLoading: (value: boolean) => void;
        clearError: () => void;
    };
    fetch: {
        loading: boolean;
        error: string | null;
        setLoading: (value: boolean) => void;
        clearError: () => void;
    };
    update: {
        loading: boolean;
        error: string | null;
        setLoading: (value: boolean) => void;
        clearError: () => void;
    };
    remove: {
        loading: boolean;
        error: string | null;
        setLoading: (value: boolean) => void;
        clearError: () => void;
    };
    createCategory: (data: CategoryPayload) => Promise<void>;
    updateCategory: (id: string, data: CategoryPayload) => Promise<void>;
    fetchCategories: () => Promise<void>;
    removeCategory: (id: string) => Promise<void>;
}
