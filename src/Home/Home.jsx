// eslint-disable-next-line

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NavImg from './NavImg.jsx';
import Slide from './Slide.jsx';
import BirdContainer from './BirdContainer.jsx';
 import { getProducts as listProducts } from '../redux/actions/productActions';

import Container2 from './Container2.jsx';
import Footer from '../Footer.jsx'


function Home(){

  const { products } = useSelector(state => state.getProducts)


const dispatch= useDispatch();

 useEffect(() => {
   dispatch(listProducts())
   
 }, [dispatch])




  return(
     <div>
       
     <BirdContainer />

     <NavImg />
    
     <Slide 
     products= {products} />
    
     <Container2 />
     <Footer />
     </div>
  );
}

export  default Home;



