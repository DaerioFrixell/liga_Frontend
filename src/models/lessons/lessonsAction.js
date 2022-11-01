export const ADD_LESSON = "lessons/ADD_LESSON";
export const DELETE_LESSON = "lessons/DELETE_LESSON";

export const addLessonAction = (lesson) => {
  return {
    type: ADD_LESSON,
    payload: lesson
  }
}

export const deleteLessonAction = (lesson) => {
  return {
    type: DELETE_LESSON,
    payload: lesson
  }
}
