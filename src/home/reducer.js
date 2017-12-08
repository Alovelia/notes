import { constants, actions } from 'ducks-helpers';
import handleActions from 'redux-actions/lib/handleActions';
import _ from 'common/helpers';

export const TYPE = constants('home', [
  '~GET',
  '~GET_NOTES',
  //†type
]);
export const ACTION = actions(TYPE);

// The initial state
export const initialState = _.fromJS({
  folders: [],
  notes: [],
});

export default handleActions({
  [TYPE.GET_SUCCESS]: getSuccess,
  [TYPE.GET_NOTES_SUCCESS]: getNotesSuccess,
  //†handler
}, initialState);

function getSuccess(state, { payload }) {
  return state.set('folders', _.fromJS(payload));
}
function getNotesSuccess(state, { payload }) {
  return state.set('notes', _.fromJS(payload));
}
//†reducer
