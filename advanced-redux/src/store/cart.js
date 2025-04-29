import { createSlice } from '@reduxjs/toolkit';

const initialState = { toggleCart: false };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggle(state) {
      state.toggleCart = !state.toggleCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
