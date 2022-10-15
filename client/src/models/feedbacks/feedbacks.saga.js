import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_FEEDBACK,
  asyncViewFeedbackAction,
  fetchFeedbackAction,
} from './feedbacksAction';
import { getFeedbacksApi } from './feedback.services';
// import {
//   setErrorPlanetsAction,
// } from './planet.action';

function* getFeedbacksWorker() {
  // catch (error) {
  //   yield put(setErrorPlanetsAction(error));
  // }
  try {
    yield put(fetchFeedbackAction())
    const { data } = yield call(getFeedbacksApi)
    yield put(asyncViewFeedbackAction(data))
  } catch (e) { }
}

export default function* getFeedbackWatcher() {
  yield takeEvery(GET_FEEDBACK, getFeedbacksWorker);
}