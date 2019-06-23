import {
  CHANGE_LOCATION,
  UPDATE_FROM_LOCATION,
  UPDATE_TO_LOCATION,
  CHANGE_DATE,
} from './constants';

export function changeLocation(location, fromOrTo) {
  return {
    type: CHANGE_LOCATION,
    location,
    fromOrTo,
  };
}

export function updateFromLocation(location) {
  return {
    type: UPDATE_FROM_LOCATION,
    location,
  };
}

export function updateToLocation(location) {
  return {
    type: UPDATE_TO_LOCATION,
    location,
  };
}

export function changeDate() {
  return {
    type: CHANGE_DATE,
  };
}
