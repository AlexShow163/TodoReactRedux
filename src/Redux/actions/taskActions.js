import { PUSH_TASK_ARR, TOGGLE_TASK} from '../actionTypes'








export function pushTaskArr(arr) {
    return {
        type:  PUSH_TASK_ARR,
        arr
    }
}

export function toggleIsDoneTask(arr) {
    return {
        type: TOGGLE_TASK,
        arr,

    }
}


export function deleteClickTask(arr) {
    return {
        type: TOGGLE_TASK,
        arr,

    }
}


