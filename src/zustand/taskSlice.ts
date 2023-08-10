import { create } from 'zustand';
import { AutomatedTaskPayload, ITaskSlice, RequestMethod, Task, TaskPayload } from '../types';
import { makeRequest } from '../lib';
import { useCategories } from './categorySlice';
import { schedulePushNotification } from '../lib/notifications';

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
        }));
    },
    clearFilter: () => set((state) => ({ ...state, filtered: [] })),
    automated: {
        success: false,
        loading: false,
        error: null,
        setLoading: (value: boolean) =>
            set((state) => ({ ...state, automated: { ...state.automated, loading: value } })),
        clearSuccess: () => set((state) => ({ ...state, automated: { ...state.automated, success: false } })),
        clearError: () => set((state) => ({ ...state, automated: { ...state.automated, error: null } })),
    },
    create: {
        success: false,
        loading: false,
        error: null,
        setLoading: (value: boolean) => set((state) => ({ ...state, create: { ...state.create, loading: value } })),
        clearError: () => set((state) => ({ ...state, create: { ...state.create, error: null } })),
        clearSuccess: () => set((state) => ({ ...state, create: { ...state.create, success: false } })),
    },
    fetch: {
        loading: false,
        error: null,
        setLoading: (value: boolean) => set((state) => ({ ...state, fetch: { ...state.fetch, loading: value } })),
        clearError: () => set((state) => ({ ...state, fetch: { ...state.fetch, error: null } })),
    },
    update: {
        success: false,
        loading: false,
        error: null,
        setLoading: (value: boolean) => set((state) => ({ ...state, update: { ...state.update, loading: value } })),
        clearError: () => set((state) => ({ ...state, update: { ...state.update, error: null } })),
        clearSuccess: () => set((state) => ({ ...state, update: { ...state.update, success: false } })),
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

        const task = result.data;

        set((state) => ({
            ...state,
            tasks: [task, ...state.tasks],
        }));

        // sort task
        get().sortTasks();

        set((state) => ({
            ...state,
            create: {
                ...state.create,
                success: true,
                loading: false,
            },
        }));

        await schedulePushNotification({ summary: task.summary, time: task.time });
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

        set((state) => ({ ...state, tasks: [...result.data, ...state.tasks] }));

        get().sortTasks();

        set((state) => ({
            ...state,
            automated: {
                ...state.automated,
                success: true,
                loading: false,
            },
        }));

        await Promise.all(
            result.data.map((task: Task) => schedulePushNotification({ summary: task.summary, time: task.time })),
        );
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

        // set current task
        get().setCurrent(result.data);

        set((state) => ({
            ...state,
            update: {
                ...state.update,
                success: true,
                loading: false,
            },
        }));

        // add task to list of tasks
        set((state) => ({
            ...state,
            tasks: state.tasks.map((task) => {
                // return updated tasks
                if (task.id === id) {
                    return result.data;
                }

                return task;
            }),
            pastTasks: state.pastTasks.map((task) => {
                // return updated tasks
                if (task.id === id) {
                    return result.data;
                }

                return task;
            }),
            upcomingTasks: state.upcomingTasks.map((task) => {
                // return updated tasks
                if (task.id === id) {
                    return result.data;
                }

                return task;
            }),
            todayTasks: state.todayTasks.map((task) => {
                // return updated tasks
                if (task.id === id) {
                    return result.data;
                }

                return task;
            }),
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

        set((state) => ({ ...state, tasks: result.data.tasks }));

        get().sortTasks();

        set((state) => ({
            ...state,
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
            pastTasks: state.pastTasks.filter((task) => task.id !== id),
            upcomingTasks: state.upcomingTasks.filter((task) => task.id !== id),
            todayTasks: state.todayTasks.filter((task) => task.id !== id),
        }));

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
    sortTasks: () => {
        const today = new Date().setHours(0, 0, 0, 0);

        const { todayTasks, upcomingTasks, pastTasks, tasks } = get();

        tasks.forEach((task: Task) => {
            const taskTime = new Date(task.time);

            if (taskTime.setHours(0, 0, 0, 0) === today) {
                // sort the tasks
                todayTasks.sort(
                    (a: Task, b: Task) =>
                        new Date(b.time).setHours(0, 0, 0, 0).valueOf() -
                        new Date(a.time).setHours(0, 0, 0, 0).valueOf(),
                );
            } else if (taskTime > new Date()) {
                // sort the tasks
                upcomingTasks.sort(
                    (a: Task, b: Task) =>
                        new Date(a.time).setHours(0, 0, 0, 0).valueOf() -
                        new Date(b.time).setHours(0, 0, 0, 0).valueOf(),
                );
            } else {
                // sort the tasks
                pastTasks.sort(
                    (a: Task, b: Task) =>
                        new Date(b.time).setHours(0, 0, 0, 0).valueOf() -
                        new Date(a.time).setHours(0, 0, 0, 0).valueOf(),
                );
            }
        });

        set((state) => ({
            ...state,
            todayTasks,
            upcomingTasks,
            pastTasks,
        }));
    },
}));
