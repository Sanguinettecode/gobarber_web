import { combineReducers } from 'redux';
import auth from './Auth/reducer';
import user from './User/reducer';

export default combineReducers({ auth, user });
