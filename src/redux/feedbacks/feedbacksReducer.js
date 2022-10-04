import {
  ADD_FEEDBACK,
  // ADD_AUTHOR,
  // ADD_DESCRIPTION,
  // CLEAR_FEEDBACKS_FIELD,
} from "../types"

const initialState = {
  feedbacks: [
    { id: 1, author: 'name', description: 'очень хорошо давай еще' },
    { id: 2, author: 'name 2', description: 'отправил человека, а он научилась!' },
    { id: 3, author: 'name 3', description: 'третий отзыв' },
    { id: 4, author: 'anonimus', description: 'something else' },
    { id: 5, author: 'anonimus', description: 'the fifth lessons' },
  ],

  // newFeedback: {
  //   id: 7,
  //   author: '',
  //   description: ''
  // },
}

export const feedbacksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEEDBACK:
      return {
        ...state,
        feedbacks: state.feedbacks.concat(action.payload)
      }

    // case ADD_AUTHOR:
    //   return {
    //     ...state,
    //     newFeedback: {
    //       ...state,
    //       author: action.payload
    //     }
    //   }

    // case ADD_DESCRIPTION:
    //   return {
    //     ...state,
    //     newFeedback: {
    //       ...state,
    //       description: action.payload
    //     }
    //   }

    // case CLEAR_FEEDBACKS_FIELD:
    //   return {
    //     ...state,
    //     newFeedback: {
    //       ...state,
    //       author: "",
    //       description: ""
    //     }
    //   };

    default: return state
  }
}

