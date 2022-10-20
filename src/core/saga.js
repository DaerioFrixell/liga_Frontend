import { all } from 'redux-saga/effects';
import getFeedbackWatcher from '../models/feedbacks/feedbacks.saga';

export default function* rootSaga() {
  yield all([
    getFeedbackWatcher()
  ]);
}