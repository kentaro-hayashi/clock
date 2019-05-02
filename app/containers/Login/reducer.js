import { fromJS } from 'immutable';
import { LOGIN } from './constants';

function loginReducer(state = fromJS({}), action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        displayName: action.user.displayName,
        uid: action.user.uid,
      };
    default:
      return state;
  }
}

export default loginReducer;
