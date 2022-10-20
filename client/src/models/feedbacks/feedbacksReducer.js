import {
  ASYNC_VIEW_FEEDBACK,
  // FETCH_FEEDBACK,
  ADD_FEEDBACK
} from "./feedbacksAction"

const initialState = {
  feedbacks: [{ id: 1, author: 'заглушка', description: 'заглушка' }],
}

export const feedbacksReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_FEEDBACK:
    //   return {
    //     ...state,
    //   }
    case ASYNC_VIEW_FEEDBACK:
      return {
        ...state,
        feedbacks: action.payload,
      }

    case ADD_FEEDBACK:
      return {
        ...state,
        feedbacks: state.feedbacks.concat(action.payload)
      }

    default: return state
  }
}

