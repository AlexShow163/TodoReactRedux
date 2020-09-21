import {DELETE_TASK, PUSH_TASK_ARR, TOGGLE_TASK} from "../actionTypes";



const initialState = {

    task: [
        {
            id: 1,
            title: 'Task 1',
            isDone: false
        },

    ],
 }


 export default function taskReducer(state= initialState, action) {
    switch (action.type) {
        case  PUSH_TASK_ARR:
            return {
                task: state.task = [...state.task,action.arr]
            }
        case TOGGLE_TASK:
            return {
                task: action.arr

            }
        case DELETE_TASK:
            return {
                task: action.arr
            }
        default:
            return state
    }
 }

