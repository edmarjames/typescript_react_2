import React from 'react'
import CartItem from './CartItem'

import { clearCart } from '../features/cart/cartSlice';
import { type CartItems } from "../utils/types";
import { useDispatch, useSelector } from 'react-redux';

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
        <div className="cart-total">
          <h4>total <span>${total}</span></h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(clearCart())}>Clear cart</button>
      </footer>
    </section>
  )
}
