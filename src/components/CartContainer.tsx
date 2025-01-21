// react imports
import React                           from 'react';

// external imports
import {
  useDispatch,
  useSelector
}                                      from 'react-redux';

// internal imports
import { openModal }                   from '../features/modal/modalSlice';
import { type CartItems }              from '../utils/types';
import CartItem                        from './CartItem';

export default function CartContainer() {

  const {
    cartItems,
    total,
    amount
  }: {
    cartItems: CartItems,
    total: number,
    amount: number
  } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>Your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className='cart'>
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item: CartItems) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>total <span>${total.toFixed(2)}</span></h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>Clear cart</button>
      </footer>
    </section>
  )
}
