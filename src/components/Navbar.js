import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import{ButtonContainer, NavWrapper} from './Style';

class Navbar extends React.Component{
   render(){
      return(
         <NavWrapper className='navbar py-3 navbar-expand-sm navbar-dark px-sm-5'>
            <Link to='/'>
               <img src={logo} width='50px' alt='store' className='navbar-brand-sm'/>
            </Link>
            <span className='nav-item ml-5'>
               <Link to='/' className='nav-link'>
                  Products
               </Link>
            </span>
            <Link to='/cart' className='ml-auto'>
               <ButtonContainer>
                  <i className='fa fa-shopping-cart mr-2'/>My cart
               </ButtonContainer>
            </Link>
         </NavWrapper>
      )
   }
}

export default Navbar