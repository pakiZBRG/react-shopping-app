import React from 'react'

function Title({name, title}) {
   return (
      <div className='row'>
         <div className='col-10 mx-auto text-center text-title'>
            <h1 className='text-capitalize font-weight-bold'>
               {name} <strong className='text-red'>{title}</strong>
            </h1><hr/>
         </div> 
      </div>
   )
}

export default Title;
