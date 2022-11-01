import { ADD_LESSON, DELETE_LESSON } from "./lessonsAction"

const initialState = {
  lessons: [
    { id: '1', title: 'how to use tuner' },
    { id: '2', title: 'what is tabs' },
    { id: '3', title: 'how to play downstroke' },
    { id: '4', title: 'unknow' },
    { id: '5', title: 'unknow' },
  ],
}

export const lessonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LESSON:
      return {
        ...state,
        lessons: state.lessons.concat(action.payload)
      }
    case DELETE_LESSON:
      return {
        lessons: action.payload
      }
    default: return state
  }
}