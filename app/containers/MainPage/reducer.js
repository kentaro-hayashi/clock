import { fromJS } from 'immutable';
import {
  UPDATE_FROM_LOCATION,
  UPDATE_TO_LOCATION,
  UPDATE_DATE,
} from './constants';

function mainpageReducer(state = fromJS({}), action) {
  switch (action.type) {
    case UPDATE_FROM_LOCATION:
      return state.set('fromLocation', action.location);
    case UPDATE_TO_LOCATION:
      return state.set('toLocation', action.location);
    case UPDATE_DATE:
      return state.set('date', action.date);
    default:
      return state;
  }
}

export default mainpageReducer;
