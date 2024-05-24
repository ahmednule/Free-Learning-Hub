import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userData: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserState(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userData = action.payload.userData;
    }
  }
});

export const getReduxUserData = (state) => state.user;

export const { updateUserState } = userSlice.actions;

export default userSlice.reducer;
