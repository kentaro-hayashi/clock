import { fromJS } from 'immutable';
import { COMPLETE_LOGOUT } from './constants';

function logoutReducer(state = fromJS({}), action) {
  switch (action.type) {
    case COMPLETE_LOGOUT:
      return state
        .delete('displayName')
        .delete('uid')
        .set('logout', true);
    default:
      return state;
  }
}

export default logoutReducer;
