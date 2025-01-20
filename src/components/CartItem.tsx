import React from 'react'
import { type CartItems as CartItemProps } from "../utils/types";
import { removeItem } from '../features/cart/cartSlice';

import { useDispatch } from 'react-redux';


export default function CartItem({ id, img, title, price, amount}: CartItemProps) {

  const dispatch = useDispatch();

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>
      <div>
        <button className='amount-btn'>Up</button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn'>Down</button>
      </div>
    </article>
  )
}
