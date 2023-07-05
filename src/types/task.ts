export interface CreateTaskPayload {
    taskName: string;
    date: Date;
    startTime: Date;
    dueTime: Date;
    description: string;
}

export interface CreateCategoryPayload {
    category_name: string;
}
