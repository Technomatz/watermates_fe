import { combineReducers } from '@reduxjs/toolkit';
import authreducer from './authreducer';


const rootReducer = combineReducers({
  auth: authreducer,
});

export default rootReducer;
