// external imports
import { configureStore }              from '@reduxjs/toolkit';

// internal imports
import cartReducer                     from './features/cart/cartSlice';
import modalReducer                    from './features/modal/modalSlice';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer
  }
});