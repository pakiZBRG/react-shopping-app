import React from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer2, ButtonContainer3} from './Style'

class Details extends React.Component {
   render() {
      return (
         <ProductConsumer>
            {(value) => {
               const {id, company, img, info, price, title, inCart} = value.detailProduct
               return (
                  <div className='container-fluid py-3'>
                     <div className='row'>
                        <div className='col-10 mx-auto text-center text-blue my-4'>
                           <h2>{title}</h2><hr/>
                        </div>
                     </div>
                     <div className='row'>
                        <div className='col-10 mx-auto col-md-6 my-2'>
                           <img src={img} alt='Telefon' className='img-fluid'/>
                        </div>
                     </div>
                     <div className='row'>
                        <div className='col-10 mx-auto col-md-6 €my-3 text-capitalize'>
                           <h3>Model: {title}</h3>
                           <h4 className='text-title text-uppercase text-muted my-2'>Made by: <span className='text-uppercase'>{company}</span></h4>
                           <h4 className='text-blue'>
                              <strong>
                                 price: {price}€
                              </strong>
                           </h4>
                           <p className='text-capitalize font-weight-bold mt-3 mb-0'>Information about product: </p>
                           <p className='text-muted lead'>{info}</p>
                           <div>
                              <Link to='/'>
                                 <ButtonContainer2>
                                    Back to Products
                                 </ButtonContainer2>   
                              </Link>
                              <ButtonContainer3 disabled={inCart? true:false}
                              onClick={() => {
                                 value.addToCart(id);
                                 value.openModal(id);
                              }}>
                                 {inCart ? 'In Cart':'Add to Cart'}
                              </ButtonContainer3>
                           </div>
                        </div>
                     </div>
                  </div>
               )
            }}
         </ProductConsumer>
      )
   }
}

export default Details