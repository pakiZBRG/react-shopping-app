import styled from 'styled-components';

export const ButtonContainer = styled.button`
   text-transform: capitalize;
   color: #fff;
   background: transparent;
   border: 2px solid var(--mainWhite);
   border-radius: 7px;
   padding: 4px 10px;
   font-size: 1.3rem;
   transition: .3s ease-in;
   font-weight:700;
   &:hover{
      background: #fff;
      color: var(--mainBlue);
   }
`

export const ButtonContainer2 = styled.button`
   color: var(--mainWhite);
   background: #2f2f2f;
   border: none;
   padding: 1px 9px;
   border-radius: 5px;
   font-size: 1.2rem;
   margin: 10px;
`

export const ButtonContainer3 = styled.button`
   color: var(--mainWhite);
   background: var(--mainRed);
   border: none;
   padding: 1px 9px;
   border-radius: 5px;
   font-size: 1.2rem;
   margin: 10px;
`

export const NavWrapper = styled.nav`
   background: var(--mainBlue);
   .nav-link{
      color: var(--mainWhite) !important;
      font-size: 1.5rem;
   }
`

export const ProductWrapper = styled.div`
   .card{
      border: transparent;
      transition: .5s;
   }
   .card-footer{
      border-top: transparent;
      background: #dcdcdc;
   }

   &:hover{
      .card{
         box-shadow: 7px 7px 50px 10px inset #dcdcdc;
      }
   }

   .img-container{
      position: relative;
      overflow: hidden;
   }

   .cart-btn{
      position:absolute;
      bottom: 0;
      left: 0;
      color:var(--mainWhite);
      background: var(--mainBlue);
      padding: 1px 9px;
      border: none;
      width: 100%;
      font-size: 1.1rem;
   }

   .title{
      font-size: 1.1rem;
   }
`

export const ModalContainer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0,0,0, .3);
   display: flex;
   align-items: center;
   justify-content: center;
   #modal{
      background: var(--mainWhite);
   }
`