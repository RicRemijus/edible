import React, {useState} from 'react';
import Navbar from '../navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElem';

const Hero = () => {
    const [isOpen, setIsOpen] =  useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    return (
        <HeroContainer>
           <Navbar toggle={toggle}/> 
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <HeroContent>
               <HeroItems>
                   <HeroH1>Greatest Cuisine Ever</HeroH1>
                   <HeroP>Ready in 60 seconds</HeroP>
                   <HeroBtn>Place Your Order Now</HeroBtn>             
               </HeroItems>
           </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
