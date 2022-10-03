const ADD_AUTHOR = "ADD_AUTHOR";
const ADD_DESCRIPTION = "ADD_DESCRIPTION";
const CLEAR_FEEDBACKS_FIELD = "CLEAR_FEEDBACKS_FIELD";

export const newFeedbackReducer = (state, action) => {
  switch (action.type) {
    case ADD_AUTHOR: return { ...state, author: action.payload }
    case ADD_DESCRIPTION: return { ...state, description: action.payload }
    case CLEAR_FEEDBACKS_FIELD:
      return {
        ...state,
        author: "",
        description: ""
      };
    default: return state;
  }
}

export const addAuthor = payload => ({
  type: ADD_AUTHOR,
  payload
})

export const addDescription = payload => ({
  type: ADD_DESCRIPTION,
  payload
})

export const clearFeedbackFields = payload => ({ type: CLEAR_FEEDBACKS_FIELD, payload })

