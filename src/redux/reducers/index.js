import { combineReducers } from '@reduxjs/toolkit';
import authreducer from './authreducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  auth: authreducer,
  user: userReducer,
});

export default rootReducer;
