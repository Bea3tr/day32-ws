export interface Task {
    description: string
    priority: string
    dueDate: string
}

export interface ToDo {
    todos: Task[]
}