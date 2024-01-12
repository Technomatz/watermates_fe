import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  mobile: '',
  currLocation: '',
  selectAddress: '',
  pinCode: '',
  city: '',
  state: '',
  roomNumber: '',
  roadName: '',
  locality: '',
  alternateMobileNumber: '',
  landmark: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUserAddress: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    updateUserAddress: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    clearUserAddress: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { createUserAddress, updateUserAddress, clearUserAddress } =
  userSlice.actions;
export default userSlice.reducer;
