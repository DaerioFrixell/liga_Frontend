import {
  // ADD_AUTHOR,
  // ADD_DESCRIPTION,
  ADD_FEEDBACK,
  // CLEAR_FEEDBACKS_FIELD
} from "../types"

export const addFeedbackAction = (feedback) => {
  return {
    type: ADD_FEEDBACK,
    payload: feedback
  }
}

// export const addAuthor = payload => ({
//   type: ADD_AUTHOR,
//   payload
// })

// export const addDescription = payload => ({
//   type: ADD_DESCRIPTION,
//   payload
// })

// export const clearFeedbackFields = () => ({ type: CLEAR_FEEDBACKS_FIELD })