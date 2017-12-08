import { cancel, take, put, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';
import { LOCATION_CHANGE } from 'react-router-redux';
import { ACTION, TYPE } from '../reducer';

import {
  getData,
  getDataSaga,
  getNotes,
  getNotesSaga,
} from '../sagas';

describe('getData Saga', () => {
  let getDataGenerator;
  let callDescriptor;
  const folders = [];
  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getDataGenerator = getData();
    callDescriptor = getDataGenerator.next().value;
  });

  it('should call api at first', () => {
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the getSuccess action if it requests the data successfully', () => {
    const response = folders;
    const putDescriptor = getDataGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(ACTION.getSuccess(folders)));
  });

  it('should call the getError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getDataGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(ACTION.getError(response)));
  });
});

describe('getDataSaga Saga', () => {
  const getDataSagaGenerator = getDataSaga();
  const mockedTask = createMockTask();

  it(`should start task to watch for ${TYPE.GET} action`, () => {
    const takeLatestDescriptor = getDataSagaGenerator.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(TYPE.GET, getData));
  });
});

describe('getNotesData Saga', () => {
  let getDataGenerator;
  let callDescriptor;
  const notes = [];
  const action = {
    payload: 'id'
  };
  beforeEach(() => {
    getDataGenerator = getNotes(action);
    callDescriptor = getDataGenerator.next().value;
  });

  it('should call api at first', () => {
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the getNotesSuccess action if it requests the data successfully', () => {
    const response = notes;
    const putDescriptor = getDataGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(ACTION.getNotesSuccess(notes)));
  });

  it('should call the getNotesError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getDataGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(ACTION.getNotesError(response)));
  });
});

describe('getNotesSaga Saga', () => {
  const getDataSagaGenerator = getNotesSaga();
  const mockedTask = createMockTask();

  it(`should start task to watch for ${TYPE.GET_NOTES} action`, () => {
    const takeLatestDescriptor = getDataSagaGenerator.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(TYPE.GET_NOTES, getNotes));
  });
});
