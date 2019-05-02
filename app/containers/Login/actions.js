import { LOGIN } from './constants';

export function login(user) {
  return {
    type: LOGIN,
    user,
  };
}
