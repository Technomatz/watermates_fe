import { combineReducers } from '@reduxjs/toolkit';
import authreducer from './authreducer';
import FavoriteReducer from './FavoriteReducer';
import CartReducer from './CartReducer';
import UserAddress from './UserAddress';

const rootReducer = combineReducers({
  auth: authreducer,
  user: UserAddress,
  favorite: FavoriteReducer,
  cart: CartReducer,
});

export default rootReducer;
