// external imports
import { configureStore }              from '@reduxjs/toolkit';

// internal imports
import cartReducer                     from '../features/cart/cartSlice';
import modalReducer                    from '../features/modal/modalSlice';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;