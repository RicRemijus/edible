import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './navElem';

function Navbar({toggle}) {
    return (
        <>
           <Nav>
            <NavLink to='/'>Welcome to Mama's Edible cuisine</NavLink>
            <NavIcon onClick={toggle} >
                <p>Menu</p>
                <Bars/>
            </NavIcon>
           </Nav> 
        </>
    )
}

export default Navbar;
