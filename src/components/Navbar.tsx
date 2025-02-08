// react imports
import React                           from 'react';

// internal imports
import { useAppSelector }              from '../app/hooks';


export default function Navbar() {

  const { amount } = useAppSelector((store) => store.cart);

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
};
