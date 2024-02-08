import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: [] };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUserAddress: (state, action) => {
      state.isLoggedIn = true;
      state.user = [...state.user, action.payload];
    },
    updateUserAddress: (state, action) => {
      const { id, updatedAddress } = action.payload;
      const existingIndex = state.user.findIndex((user) => user.id === id);

      if (existingIndex !== -1) {
        state.user[existingIndex] = {
          ...state.user[existingIndex],
          ...updatedAddress,
        };
      }
    },
    clearUserAddress: (state, action) => {
      const existingIndex = state.user.findIndex(
        (user) => user.id === action.payload.id,
      );
      if (existingIndex !== -1) {
        state.user.splice(existingIndex, 1);
      }
    },
  },
});

export const { createUserAddress, updateUserAddress, clearUserAddress } =
  userSlice.actions;
export default userSlice.reducer;
