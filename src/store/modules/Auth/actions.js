export function authRequest(email, password) {
  return {
    type: '@auth/REQUEST',
    payload: { email, password },
  };
}
export function authSuccess(token, user) {
  return {
    type: '@auth/SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
