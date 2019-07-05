import React from 'react'

function CartItem({ item, value }) {
   const{id, title, img, price, total, count} = item
   const{increment, decrement, removeItem} = value;

   return (
      <div className='row my-3 text-capitalize text-center mx-auto my-3 bordera'>
         <div className='col-10 mx-auto col-lg-2'>
            <img src={img} style={{width:'4rem'}} className='img-fluid' alt='telephone'/>
         </div>

         <div className='col-10 mx-auto col-lg-2'>
            <h5>{title}</h5>
         </div>

         <div className='col-10 mx-auto col-lg-2'>
            <h5><span className='d-lg-none text-muted'>Price: </span>{price}€</h5>
         </div>

         <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
            <div className='d-flex justify-content-center'>
               <span className='btn btn-black mx-1' onClick={() => decrement(id)}>
                  -
               </span>
               <span className='btn btn-black mx-1'>{count}</span>
               <span className='btn btn-black mx-1' onClick={() => increment(id)}>
                  +
               </span>
            </div>
         </div>
      
         <div className='col-10 mx-auto col-lg-2'>
            <strong>item total: {total}€</strong>
         </div>
         
         <div className='col-10 mx-auto col-lg-2'  onClick={() => removeItem(id)}>
            <strong style={{cursor: 'pointer'}}><i className='fa fa-trash size'></i></strong>
         </div>
      </div>
   )
}

export default CartItem