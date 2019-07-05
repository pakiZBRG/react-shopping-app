import React from 'react'

function CartColumns() {
   return (
      <div className='container-fluid text-center d-none d-lg-block'>
         <div className='row item mx-auto'>
            <div className='col-10 mx-auto col-lg-2'>
               <p className='text-uppercase font-weight-bold'>product</p>
            </div>

            <div className='col-10 mx-auto col-lg-2'>
               <p className='text-uppercase font-weight-bold'>name</p>
            </div>

            <div className='col-10 mx-auto col-lg-2'>
               <p className='text-uppercase font-weight-bold'>price</p>
            </div>

            <div className='col-10 mx-auto col-lg-2'>
               <p className='text-uppercase font-weight-bold'>quantity</p>
            </div>

            <div className='col-10 mx-auto col-lg-2'>
               <p className='text-uppercase font-weight-bold'>total</p>
            </div>

            <div className='col-10 mx-auto col-lg-2'>
            
            </div>
         </div>
      </div>
   )
}

export default CartColumns;