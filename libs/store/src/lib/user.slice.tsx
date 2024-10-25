import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface UserState {
  name: string | null;
  email: string | null;
}

// Define the initial state
const initialState: UserState = {
  name: null,
  email: null,
};

// Create the slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.name = null;
      state.email = null;
    },
  },
});

// Export actions and reducer
export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
