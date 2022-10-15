import { all } from 'redux-saga/effects';
import getFeedbacksWorker from '../models/feedbacks/feedbacks.saga';

export default function* rootSaga() {
  yield all([
    getFeedbacksWorker()
  ]);
}