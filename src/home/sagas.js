import { call, put, select, takeLatest } from 'redux-saga/effects';
// import { LOCATION_CHANGE } from 'react-router-redux';
import api from 'common/api';
import { ACTION, TYPE } from './reducer';
// import { makeSelectUsername } from './selectors';

export function* getData() {
  try {
    // Call ajax
    const response = yield call(api.get, '/folders');
    yield put(ACTION.getSuccess(response));
  } catch (err) {
    yield put(ACTION.getError(err));
  }
}

export function* getNotes({ payload: id }) {
  try {
    // Call ajax
    const response = yield call(api.get, `/folders/${id}/notes`);
    yield put(ACTION.getNotesSuccess(response));
  } catch (err) {
    yield put(ACTION.getNotesError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* getDataSaga() {
  yield takeLatest(TYPE.GET, getData);
}

export function* getNotesSaga() {
  yield takeLatest(TYPE.GET_NOTES, getNotes);
}
// Bootstrap sagas
export default [
  getDataSaga,
  getNotesSaga,
];
