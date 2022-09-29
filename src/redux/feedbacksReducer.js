import { ADD_FEEDBACK } from "./types"

const initialState = {
  feedbacks: [
    { id: 1, author: 'Daerio Frixell', description: 'очень хорошо давай еще' },
    { id: 2, author: 'Niggaдяй', description: 'отправил обезьяну, а она научилась!' },
    { id: 3, author: 'папич лягуха', description: 'третий отзыв' },
    { id: 4, author: 'какой-то поц', description: 'хоба епта отзыв' },
    { id: 5, author: 'anonimus', description: 'ну и последний тож' },
  ],
}

export const feedbacksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEEDBACK:
      return {
        ...state,
        feedbacks: state.feedbacks.concat(action.payload)
      }
    default: return state
  }
}