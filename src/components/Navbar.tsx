import React from 'react';
import { useSelector } from 'react-redux';

export default function Navbar() {

  const { amount } = useSelector((store) => store.cart);
  // console.log(useSelector((store) => console.log(store)));

  return (
    <>
      <nav>
        <div className='nav-center'>
          <h3>redux toolkit</h3>
          <div className='nav-container'>
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
