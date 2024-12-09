import { configureStore } from '@reduxjs/toolkit';
import * as UserSlice from './lib/user.slice';

export const reduxStore = configureStore({
  reducer: {
    user: UserSlice.userReducer,
  },
});


export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;