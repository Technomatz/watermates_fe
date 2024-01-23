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
        state.splice(existingIndex, 1);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
