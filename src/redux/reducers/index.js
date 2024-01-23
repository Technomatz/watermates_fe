import { combineReducers } from '@reduxjs/toolkit';
import authreducer from './authreducer';
import userReducer from './userReducer';
import FavoriteReducer from './FavoriteReducer';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
  auth: authreducer,
  user: userReducer,
  favorite: FavoriteReducer,
  cart: CartReducer,
});

export default rootReducer;
