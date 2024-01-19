// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    toggleCart: (state, action) => {
      const existingItem = state.findIndex(
        (cartItem) => cartItem.id === action.payload.id,
      );

      if (existingItem !== -1) {
        // If the item already exists in the cart, remove it
        state.splice(existingItem, 1);
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      // Remove the item from the cart by filtering out items with the provided id
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
    },
  },
});

export const { toggleCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
