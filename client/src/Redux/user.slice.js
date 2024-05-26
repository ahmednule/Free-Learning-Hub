import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userData: '',
  userProgress: '',
  htmlCss: 5,
  python: 1,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserState(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userData = action.payload.userData;
    },
    updateProgressState(state, action) {
      state.userProgress = action.payload.userProgress;
    }
  }
});

export const getReduxUserData = (state) => state.user;

export const { updateUserState, updateProgressState } = userSlice.actions;

export default userSlice.reducer;
