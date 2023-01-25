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



export const $tasks = createStore<Task[]>([])
    .on(getTasksListFx.doneData,
        (_, payload) => console.log('...'))

export const $tasksList = combine($tasks, (tasks) => Object.values(tasks));
