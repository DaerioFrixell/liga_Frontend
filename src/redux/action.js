import { ADD_LESSON, DELETE_LESSON } from "./types"

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
