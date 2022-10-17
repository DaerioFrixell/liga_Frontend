import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { feedbacksReducer } from '../models/feedbacks/feedbacksReducer';
import { lessonsReducer } from './lessonsReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../core/saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const rootReducer = combineReducers({
  feedbacks: feedbacksReducer,
  lessons: lessonsReducer,
})

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;