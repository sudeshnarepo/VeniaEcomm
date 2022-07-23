import React from 'react';
import "./EmptyCart.scss"

const EmptyCart = () => {
  return (
    <>
        <div className='empty__cart_wrapper'>
            <h4 className='empty__cart_title'>Your Shopping Bag is Empty</h4>
        </div>
    </>
  )
}

export default EmptyCart