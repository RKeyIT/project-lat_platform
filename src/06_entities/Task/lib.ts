import type { Task } from "07_shared/api";

export const getTaskStatus = (data: Task) => {
    return data.completed ? "CLOSED" : "OPENED"
}