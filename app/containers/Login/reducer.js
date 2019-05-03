import { fromJS } from 'immutable';
import { LOGIN } from './constants';

function loginReducer(state = fromJS({}), action) {
  switch (action.type) {
    case LOGIN:
      return state
        .set('displayName', action.user && action.user.displayName)
        .set('uid', action.user && action.user.uid)
        .delete('logout');
    default:
      return state;
  }
}

export default loginReducer;
