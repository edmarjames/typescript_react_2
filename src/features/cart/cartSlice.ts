import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../utils/constants";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId: string = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem?.amount > 0) cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
      let amount: number = 0;
      let total: number = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    }
  },
});

// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;