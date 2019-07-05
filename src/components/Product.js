import React from 'react';
import {ProductWrapper} from './Style';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

class Product extends React.Component {
   render() {
      const {id, title, img, price, inCart} = this.props.product;

      return (
         <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-2'>
            <div className='card'>
               <ProductConsumer>
                  {(value) => (
                     <div className='img-container p-5' onClick={() => value.handleDetail(id)}>
                     <Link to='/details'>
                        <img src={img} alt='product' className='card-img-top'/>
                     </Link>
   
                     <button 
                        className='cart-btn' 
                        disabled={inCart ? true: false}  
                        onClick={() => {
                           value.addToCart(id);
                           value.openModal(id);
                        }}
                     >
                        {inCart ? <span disabled ><i>Added</i></span> : <span>Add to Cart</span>}
                     </button>
                  </div>
                  )}
               </ProductConsumer>
               <div className='card-footer d-flex justify-content-between'>
                  <p className='align-self-centr mb-0 title'>{title}</p>
                  <h5 className='font-weight-bold mb-0'>{price}€</h5>
               </div>
            </div>
         </ProductWrapper>
      )
   }
}

Product.propTypes = {
   product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inCart: PropTypes.bool.isRequired
   })
}

export default Product