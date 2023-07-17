export interface TaskPayload {
    title: string;
    category?: string;
    description?: string;
    time?: string;
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
        loading: boolean;
        error: string | null;
        setLoading: (value: boolean) => void;
        clearError: () => void;
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
    createTask: (data: TaskPayload) => Promise<void>;
    createAutomatedTask: (data: AutomatedTaskPayload) => Promise<void>;
    updateTask: (id: string, data: TaskPayload) => Promise<void>;
    fetchTasks: () => Promise<void>;
    removeTask: (id: string) => Promise<void>;
}
