import { create } from 'zustand';
import dayjs from 'dayjs';
import { AutomatedTaskPayload, ITaskSlice, RequestMethod, Task, TaskPayload } from '../types';
import { makeRequest, extractDateTime } from '../lib';
import { useCategories } from './categorySlice';

export const useTasks = create<ITaskSlice>((set, get) => ({
    tasks: [],
    todayTasks: [],
    pastTasks: [],
    upcomingTasks: [],
    filtered: [],
    task: null,
    setCurrent: (task: Task) => {
        const category = useCategories.getState().categories.find((data) => data.id === task.category);
        set((state) => ({
            ...state,
            task: { ...task, category_data: category },
        }));
    },
    filterTasks: (value: string) => {
        set((state) => ({
            ...state,
            filtered: get().tasks.filter((task) => {
                const regex = new RegExp(`${value}`, 'gi');

                return task.title.match(regex) || task.description?.match(regex);
            }),
            fetch: {
                ...state.fetch,
                loading: false,
            },
        }));
    },
    clearFilter: () => set((state) => ({ ...state, filtered: [] })),
    automated: {
        success: false,
        loading: false,
        error: null,
        setLoading: (value: boolean) =>
            set((state) => ({ ...state, automated: { ...state.automated, loading: value } })),
        clearError: () => set((state) => ({ ...state, automated: { ...state.automated, error: null } })),
    },
    create: {
        success: false,
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
    createTask: async (data: TaskPayload) => {
        get().create.setLoading(true);

        const { result, error } = await makeRequest('tasks', RequestMethod.POST, data);

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

        // set current task
        get().setCurrent(result.data);

        set((state) => ({
            ...state,
            tasks: [result.data, ...state.tasks],
            create: {
                ...state.create,
                success: true,
                loading: false,
            },
        }));
    },
    createAutomatedTask: async (data: AutomatedTaskPayload) => {
        get().automated.setLoading(true);

        const { result, error } = await makeRequest('tasks/automated', RequestMethod.POST, data);

        if (error) {
            set((state) => ({
                ...state,
                automated: {
                    ...state.automated,
                    error: result?.message || 'An error occurred',
                    loading: false,
                },
            }));
            return;
        }

        set((state) => ({
            ...state,
            tasks: [...result.data, ...state.tasks],
            automated: {
                ...state.automated,
                loading: false,
                success: true,
            },
        }));
    },
    updateTask: async (id: string, data: TaskPayload) => {
        get().update.setLoading(true);

        const { result, error } = await makeRequest(`tasks/${id}`, RequestMethod.PUT, data);

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
            tasks: state.tasks.map((task) => {
                // return updated tasks
                if (task.id === id) {
                    return result.data;
                }

                return task;
            }),
            update: {
                ...state.update,
                loading: false,
            },
        }));
    },
    fetchTasks: async () => {
        get().fetch.setLoading(true);

        const { result, error } = await makeRequest('tasks', RequestMethod.GET);

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
            tasks: result.data,
            todayTasks: result.data.filter((task: Task) => {
                const { date } = extractDateTime(task.time);

                return dayjs().isSame(dayjs(date), 'day');
            }),
            pastTasks: result.data.filter((task: Task) => {
                const { date } = extractDateTime(task.time);

                return dayjs().isAfter(dayjs(date), 'day');
            }),
            upcomingTasks: result.data.filter((task: Task) => {
                const { date } = extractDateTime(task.time);

                return dayjs().isBefore(dayjs(date), 'day');
            }),
            fetch: {
                ...state.fetch,
                loading: false,
            },
        }));
    },
    sortTasks: async () => {
        get().fetch.setLoading(true);

        set((state) => ({
            ...state,
            todayTasks: get().tasks.filter((task: Task) => {
                const { date } = extractDateTime(task.time);

                return dayjs().isSame(dayjs(date), 'day');
            }),
            pastTasks: get().tasks.filter((task: Task) => {
                const { date } = extractDateTime(task.time);

                return dayjs().isAfter(dayjs(date), 'day');
            }),
            upcomingTasks: get().tasks.filter((task: Task) => {
                const { date } = extractDateTime(task.time);

                return dayjs().isBefore(dayjs(date), 'day');
            }),
            fetch: {
                ...state.fetch,
                loading: false,
            },
        }));
    },
    removeTask: async (id: string) => {
        get().remove.setLoading(true);

        set((state) => ({
            ...state,
            tasks: state.tasks.filter((task) => task.id !== id),
        }));

        get().sortTasks();

        const { result, error } = await makeRequest(`tasks/${id}`, RequestMethod.DELETE);

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
            remove: {
                ...state.remove,
                loading: false,
            },
        }));
    },
}));
