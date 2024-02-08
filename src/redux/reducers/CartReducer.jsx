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
        state.splice(existingItem, 1);
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
    },
  },
});

export const { toggleCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
