import { Category } from './category';

export interface TaskPayload {
    title: string;
    category?: string;
    description?: string;
    time?: string;
}

export interface TaskData {
    title: string;
    category?: string;
    description?: string;
    date: Date;
}

export interface AutomatedTaskPayload {
    content: string;
}

export interface Task {
    id: string;
    user: string;
    category: string;
    title: string;
    description?: string;
    completed: boolean;
    time: string;
    created_at: Date;
    updated_at: Date;
    category_data?: Category;
}

export interface ITaskSlice {
    filtered: Task[];
    todayTasks: Task[];
    pastTasks: Task[];
    upcomingTasks: Task[];
    tasks: Task[];
    task: Task | null;
    setCurrent: (value: Task) => void;
    filterTasks: (value: string) => void;
    clearFilter: () => void;
    automated: {
        success: boolean;
        loading: boolean;
        error: string | null;
        setLoading: (value: boolean) => void;
        clearError: () => void;
    };
    create: {
        success: boolean;
        loading: boolean;
        error: string | null;
        setLoading: (value: boolean) => void;
        clearError: () => void;
        clearSuccess: () => void;
    };
    fetch: {
        loading: boolean;
        error: string | null;
        setLoading: (value: boolean) => void;
        clearError: () => void;
    };
    update: {
        success: boolean;
        loading: boolean;
        error: string | null;
        setLoading: (value: boolean) => void;
        clearError: () => void;
        clearSuccess: () => void;
    };
    remove: {
        loading: boolean;
        error: string | null;
        setLoading: (value: boolean) => void;
        clearError: () => void;
    };
    createTask: (data: TaskPayload) => Promise<void>;
    createAutomatedTask: (data: AutomatedTaskPayload) => Promise<void>;
    updateTask: (id: string, data: TaskPayload) => Promise<void>;
    fetchTasks: () => Promise<void>;
    sortTasks: () => void;
    removeTask: (id: string) => Promise<void>;
}
