import { produce } from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};
export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/REQUEST': {
        draft.loadign = true;
        break;
      }
      case '@auth/SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loadign = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      case '@auth/FAILURE': {
        draft.loadign = false;
        break;
      }
      default:
    }
  });
}
