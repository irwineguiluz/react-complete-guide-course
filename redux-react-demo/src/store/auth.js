import { createSlice } from '@reduxjs/toolkit';

const initialState = { isAuth: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state) {
      state.isAuth = true;
    },
    setLogout(state) {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
