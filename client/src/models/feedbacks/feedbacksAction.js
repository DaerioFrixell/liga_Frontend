export const ADD_FEEDBACK = "ADD_FEEDBACK";
export const FETCH_FEEDBACK = "FETCH_FEEDBACK"
export const GET_FEEDBACK = "GET_FEEDBACK"
export const ASYNC_VIEW_FEEDBACK = "ASYNC_VIEW_FEEDBACK"

export const addFeedbackAction = feedback => {
  return {
    type: ADD_FEEDBACK,
    payload: feedback
  }
}

export const fetchFeedbackAction = () => ({
  type: FETCH_FEEDBACK
})

export const asyncViewFeedbackAction = feedback => {
  return {
    type: ASYNC_VIEW_FEEDBACK,
    payload: feedback
  }
}



export const getFeedbackAction = () => ({
  type: GET_FEEDBACK
})
