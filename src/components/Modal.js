import React from 'react';
import {ProductConsumer} from '../context';
import {ModalContainer, ButtonContainer2, ButtonContainer3} from './Style';
import {Link} from 'react-router-dom';

class Modal extends React.Component {
   render() {
      return (
         <ProductConsumer>
            {(value) => {
               const { modalOpen, closeModal } = value
               const {title, price} = value.modalProduct;

               if(!modalOpen){
                  return null;
               } else {
                  return(
                  <ModalContainer>
                     <div className='container'>
                        <div className='row'>
                           <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-3'>
                              <i className="fa fa-check checked"></i>
                              <h5><strong>{title}</strong> added to cart</h5>
                              <h5 className='text-muted'>Price: <strong>{price}€</strong></h5>
                              <Link to='/'>
                                 <ButtonContainer2 onClick={() => closeModal()}>
                                    Store
                                 </ButtonContainer2>
                              </Link>
                              <Link to='/cart'>
                                 <ButtonContainer3 onClick={() => closeModal()}>
                                    Go To Cart
                                 </ButtonContainer3>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </ModalContainer>
                  );
               }
            }}
         </ProductConsumer>
      )
   }
}

export default Modal