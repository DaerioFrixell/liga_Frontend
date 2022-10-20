const ADD_TITLE = "ADD_TITLE";
const CLEAR_LESSON_FIELD = "CLEAR_LESSON_FIELD";

export const newLessonReducer = (state, action) => {
  switch (action.type) {
    case ADD_TITLE: return { ...state, title: action.payload }
    case CLEAR_FIELD: return { title: "", };
    default: return state;
  }
}

export const addTitle = payload => ({
  type: ADD_TITLE,
  payload
})

export const clearLessonFields = () => ({ type: CLEAR_LESSON_FIELD })

