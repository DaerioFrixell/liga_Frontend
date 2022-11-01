import {
  ASYNC_VIEW_FEEDBACK,
  // FETCH_FEEDBACK,
  ADD_FEEDBACK
} from "./feedbacksAction"

const initialState = {
  feedbacks: [

    { id: 1, author: 'Игорь', description: 'С каждым занятием моя игра на гитаре становиться всё лучше и лучше,находит индивидуальный подход к каждому!' },
    { id: 2, author: 'Дмитрий Ширяевский', description: 'Занятия просто огонь, просто о сложном. Все максимально понятно, плюс домашка заставляет развиваться. Рекомендасьён' },
    { id: 3, author: 'Виктор', description: 'Отличный репетитор по гитаре! Рекомендую!' }
  ],
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

