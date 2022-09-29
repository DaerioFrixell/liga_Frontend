import { createStore, compose } from 'redux';
import { combineReducers } from 'redux';
import { feedbacksReducer } from './feedbacksReducer';
import { lessonsReducer } from './lessonsReducer';

export const rootReducer = combineReducers({
  feedbacks: feedbacksReducer,
  lessons: lessonsReducer,
})

export const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))