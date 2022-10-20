import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_FEEDBACK,
  asyncViewFeedbackAction,
  fetchFeedbackAction,
} from './feedbacksAction';
import { getFeedbacksApi } from './feedback.services';

function* getFeedbacksWorker() {
  try {
    // yield put(fetchFeedbackAction())
    const { data } = yield call(getFeedbacksApi) // обращение к БД
    yield put(asyncViewFeedbackAction(data)) // положить данные в Reducer
  } catch (e) {
    console.log(e)
  }
}

export default function* getFeedbackWatcher() {
  yield takeEvery(GET_FEEDBACK, getFeedbacksWorker);
}