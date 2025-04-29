import { createSlice } from '@reduxjs/toolkit';

const initialState = { toggleCart: false };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state) {
      state.toggleCart = !state.toggleCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
