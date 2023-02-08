import { createStore, combine, createEffect, createEvent} from "effector";
import { useStore } from "effector-react";
import { normalize, schema } from "normalizr"

import { typecodeApi, Task } from "07_shared/api"

export type QueryConfig = {
    completed?: boolean;
    userId?: number;
}

const setQueryConfig = createEvent<QueryConfig>()

const getTasksListFx = createEffect((params?: typecodeApi.tasks.GetTasksListParams) => {
    return typecodeApi.tasks.getTasksList(params)
})

const getTaskByIdFx = createEffect((params: typecodeApi.tasks.GetTaskByIdParams) => {
    return typecodeApi.tasks.getTaskById(params);
})

export const taskSchema = new schema.Entity('tasks')
export const normalizeTask = (data: Task) => normalize(data, taskSchema)
export const normalizeTasks = (data: Task[]) => normalize(data, [taskSchema])

export const tasksInitialState: Record<number, Task> = {}
export const $tasks = createStore(tasksInitialState)
    .on(getTasksListFx.doneData,
        (_, payload) => normalizeTasks(payload.data).entities.tasks)
    .on(getTaskByIdFx.doneData, (state, payload) => ({
        ...state,
        ...normalizeTask(payload.data).entities.tasks,
    }))

export const $queryConfig = createStore<QueryConfig>({})

export const $tasksListLoading = getTasksListFx.pending
export const $taskDetailsLoading = getTaskByIdFx.pending

export const $tasksList = combine($tasks, (tasks) => Object.values(tasks));

export const $tasksFiltered = combine(
    $tasksList,
    $queryConfig,
    (tasksList, config) => {
        return tasksList.filter(task => (
            config.completed === undefined
            || task.completed === config.completed
        ))
    }
)

export const $tasksListEmpty = $tasksFiltered.map((list) => list.length === 0)

const useTask = (taskId: number): import("07_shared/api").Task | undefined => {
    return useStore($tasks)[taskId];
}

export const events = { setQueryConfig }

export const effects = {
    getTaskByIdFx,
    getTasksListFx,
}

export const selectors = {
    useTask,
}