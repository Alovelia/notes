import { is, fromJS } from 'immutable';
import reducer, { ACTION, TYPE, initialState } from '../reducer';

describe('home reducer', () => {
  it('should return the initial state', () => {
    const newState = reducer(undefined, {});
    expect(newState).to.equal(initialState);
  });

  it(`should handle ${TYPE.GET_SUCCESS}`, () => {
    const folders = [];
    expect(
      reducer(initialState, {
        type: TYPE.GET_SUCCESS,
        payload: folders
      }).get('folders')
    ).to.equal(fromJS(folders));
  });
});
