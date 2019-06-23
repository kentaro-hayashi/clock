import { fromJS } from 'immutable';
import { UPDATE_FROM_LOCATION, UPDATE_TO_LOCATION } from './constants';

function mainpageReducer(state = fromJS({}), action) {
  switch (action.type) {
    case UPDATE_FROM_LOCATION:
      return state.set('fromLocation', action.location);
    case UPDATE_TO_LOCATION:
      return state.set('toLocation', action.location);
    default:
      return state;
  }
}

export default mainpageReducer;
