import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/user.slice';

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
});
