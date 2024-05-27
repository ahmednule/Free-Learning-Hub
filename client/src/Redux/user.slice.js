import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  cubes: 500,
  userCubes: 0,
  userData: '',
  userProgress: '',
  htmlCss: 31,
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
    },
    updateCubesState(state, action) {
      state.userCubes = action.payload.userCubes;
    }
  }
});

export const getReduxUserData = (state) => state.user;

export const {
  updateUserState,
  updateProgressState,
  updateCubesState,
} = userSlice.actions;

export default userSlice.reducer;
