// eslint-disable-next-line

import React from 'react';
import Box from '@material-ui/core/Box';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const useStyle = makeStyles({

   container: {
     margin: '2%',
     padding: '10% 1% 1% 10%',
     borderRadius: '20px',
     color:'ivory',
     boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,

     '&:hover': {
      color:'ivory',
      borderRadius: '20px',
      boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
  
   },
   imgs: {
       width: '90%',
       marginLeft: 'auto',
       marginRight: 'auto'
   },
   forBox: {
        margin: '5% 1% 5% 1%',
        justifyContent: 'space-between',
        backgroundColor: '#00403C',
        boxShadow: `#88DAD2 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
         padding: '1%',
        borderRadius: '20px'
   }
});

function NavImg(){
  const classes = useStyle();

  return(
        <Box className={classes.forBox}>
        <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipable={true}
        centerMode={false}
        autoPlay={false}
        keyBoardControl={true}
        showDots={false}
        dotListClass="custom-dot-list-style"
         containerClass="carousel-container"
        >
          
          <Link to='/IndoorPlants' style={{textDecoration:'none'}}><Box className={classes.container}><img className={classes.imgs} src="https://media.ugaoo.com//wysiwyg/category-1-indoor-plants1-600.png" alt=""/><Typography>Indoor Plants</Typography></Box></Link>
          <Link to='/AirPurifying' style={{textDecoration:'none'}}> <Box className={classes.container}><img  className={classes.imgs}src="https://media.ugaoo.com//wysiwyg/category-2-air-purifying1-600.png" alt=""/><Typography>Air Purifying</Typography></Box></Link>
          <Link to='/LowMaintenancePlants' style={{textDecoration:'none'}}> <Box className={classes.container}><img className={classes.imgs} src="https://media.ugaoo.com//wysiwyg/category-3-low-maintenance1-600.png" alt=""/><Typography>Low Maintenance</Typography></Box></Link>
          <Link to='/Gifting' style={{textDecoration:'none'}}> <Box className={classes.container} style={{textAlign: 'center'}}><img className={classes.imgs} src="https://media.ugaoo.com/wysiwyg/category-4-plant-bundles1-600.png" alt=""/><Typography>Gifting</Typography></Box></Link>
          <Link to='/CeramicPots' style={{textDecoration:'none'}}> <Box className={classes.container}><img className={classes.imgs} src="https://media.ugaoo.com//wysiwyg/category-5-ceramic-pots1-600.png" alt=""/><Typography>Ceramic Pots</Typography></Box></Link>
          <Link to='/HerbSeeds' style={{textDecoration:'none'}}> <Box className={classes.container}><img  className={classes.imgs} src="https://media.ugaoo.com//wysiwyg/category-6-herb-seeds1-600.png" alt=""/><Typography>Herb Seeds</Typography></Box></Link>
          <Link to='/VegetableSeeds' style={{textDecoration:'none'}}> <Box className={classes.container}><img  className={classes.imgs} src="https://media.ugaoo.com//wysiwyg/category-7-vegetable-seeds1-600.png" alt=""/><Typography>Vegetable Seeds</Typography></Box></Link>
          <Link to='/SoilsManure' style={{textDecoration:'none'}}> <Box className={classes.container}><img className={classes.imgs} src="https://media.ugaoo.com/wysiwyg/category-8-soil-and-manure1-600.png" alt="" /><Typography>Soil & Manure</Typography></Box></Link>
        </Carousel>

    
        </Box>
  );
}

export default NavImg;
