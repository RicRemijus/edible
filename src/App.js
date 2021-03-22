import React from 'react';
import {  BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import { ProductData, ProductData2, ProductData3 } from './components/Products/Data';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading ='Choose your favorite' Data ={ProductData}/>
      <Features/> 
      <Products heading='Make you choice for a nice treat' Data={ProductData2}/>  
      <Products heading='Yummy soups also available' Data={ProductData3}/> 
      <Footer/>
    </Router>
  )
}

export default App
