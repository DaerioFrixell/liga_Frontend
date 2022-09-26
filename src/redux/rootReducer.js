import { combineReducers } from 'redux';
import { feedbacksReducer } from './feedbacksReducer';

export const rootReducer = combineReducers({
  feedbacks: feedbacksReducer,
})