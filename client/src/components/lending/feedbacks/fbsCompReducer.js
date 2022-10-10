const CLEAR_FEEDBACKS_FIELD = "CLEAR_FEEDBACKS_FIELD";
const ADD_DESCRIPTION = "ADD_DESCRIPTION";
const ADD_AUTHOR = "ADD_AUTHOR";

export const fbsCompReducer = (state, action) => {
  switch (action.type) {

    case ADD_AUTHOR:
      return {
        ...state,
        author: action.payload
      }

    case ADD_DESCRIPTION:
      return {
        ...state,
        description: action.payload
      }

    case CLEAR_FEEDBACKS_FIELD:
      return {
        author: "",
        description: ""
      };

    default: return state
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

export const clearFeedbackFields = () => ({ type: CLEAR_FEEDBACKS_FIELD })