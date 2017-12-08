import { constants, actions } from 'ducks-helpers';
import handleActions from 'redux-actions/lib/handleActions';
import _ from 'common/helpers';

export const TYPE = constants('home', [
  '~GET',
  //†type
]);
export const ACTION = actions(TYPE);

// The initial state
export const initialState = _.fromJS({
  folders: []
});

export default handleActions({
  [TYPE.GET_SUCCESS]: getSuccess,
  //†handler
}, initialState);

function getSuccess(state, { payload }) {
  return state.set('folders', _.fromJS(payload));
}
//†reducer
