import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaPizzaSlice} from 'react-icons/fa';


export const Nav = styled.nav `
height : 80px;
display : flex;
font-weight : 700;
justify-content : center;
background : transparent;

`;
 export const NavLink = styled(Link)`
 color : #fff;
 display : flex;
 cursor : pointer;
 align-items : center;
 text-decoration : none;
 
 @media screen and (max-width: 400px){
 top :10px;
 left :25px;
 position : absolute;
 }
 `;

 export  const NavIcon = styled.div`
 top : 0;
 right : 0;
 color : #fff;
 display : block;
 cursor : pointer;
 position : absolute;
 
 p{
     font-weight : bold;
     transform : Translate(-175%, 100%);
 }
 `;
  export const Bars = styled(FaPizzaSlice)`
  font-size :2rem;
  transform : translate(-50%, -15%)
  `
