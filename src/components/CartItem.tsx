import React from 'react'
import { type CartItems as CartItemProps } from "../utils/types";
import { removeItem, increase, decrease } from '../features/cart/cartSlice';

import { useDispatch } from 'react-redux';


export default function CartItem({ id, img, title, price, amount}: CartItemProps) {

  const dispatch = useDispatch();
  const handleDecrease = () => {
    if (amount === 1) {
      dispatch(removeItem(id));
      return;
    };
    dispatch(decrease({ id }));
  };


  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => dispatch(increase({ id }))}>Up</button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() => handleDecrease()}>Down</button>
      </div>
    </article>
  )
}
