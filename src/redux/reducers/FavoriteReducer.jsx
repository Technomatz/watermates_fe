// reducers/FavoriteReducer.js

import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const existingIndex = state.findIndex(
        (fav) => fav.id === action.payload.id,
      );

      if (existingIndex !== -1) {
        // Remove the item if it's already in favorites
        state.splice(existingIndex, 1);
      } else {
        // Add the item to favorites if it's not already there
        state.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
