import React from 'react'

function EmptyCart() {
   return (
      <div className='container mt-4'>
         <div className='col-10 mx-auto, text-center text-title'>
            <h1>Your cart is currently empty</h1>
            <h4 className='color'>Add something in your wishlist</h4>
         </div>
      </div>
   )
}

export default EmptyCart