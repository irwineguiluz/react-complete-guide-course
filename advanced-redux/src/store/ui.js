import { createSlice } from '@reduxjs/toolkit';

const initialState = { toggleCart: false, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart(state) {
      state.toggleCart = !state.toggleCart;
    },
    showNotification(state, action) {
      state.notifiaction = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
