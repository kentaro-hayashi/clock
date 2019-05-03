import { LOGOUT, COMPLETE_LOGOUT } from './constants';

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function completeLogout() {
  return {
    type: COMPLETE_LOGOUT,
  };
}
