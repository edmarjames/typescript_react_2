import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { openModal } from "../modal/modalSlice";
import axios from "axios";

const url = 'https://corsproxy.io/' + encodeURIComponent('https://course-api.com/react-useReducer-cart-projects');

const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true
};

// export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
//   return fetch(url)
//   .then(res => res.json())
//   .catch(err => console.error(err));
// });

export const getCartItems = createAsyncThunk('cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());

      const res = await axios(url);
      return res.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue('something went wrong!');
    }
});

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
      if (cartItem) cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem && cartItem?.amount > 0) cartItem.amount = cartItem.amount - 1;
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
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  }
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;