// eslint-disable-next-line

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { makeStyles, Box, Button, Typography, Divider } from '@material-ui/core';
import Countdown from 'react-countdown';
import {Link } from 'react-router-dom'; 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const useStyle = makeStyles({

  component: {
  backgroundColor: '#00403C',
  '&:hover': {
    color:'white',
    boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
  },
  borderRadius: '25px',
 display: 'block',
 position: 'relative',
 margin: '10% 3% 10% 3%',
 fontSize: '17px',
 lineHeight: '28px',
   padding: '1%',
   justifyContent: 'space-between'
  },


  dealText: {
   fontSize: 22,
   fontWeight: 600,
   marginRight: 25,
   marginTop: 13,
   marginLeft: '25px',
   display: 'flex',
   color: 'ivory',
  },
  viewallbtn: {

     backgroundColor: 'ivory',
     color: '#00403C',
     boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
     '&:hover': {
       color:'#3fb9b1',
       backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
       fontWeight: 600,
       boxShadow: '#88DAD2 0px 15px 15px, #88DAD2 0px -1px 3px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
     },
     marginLeft: 'auto',
     marginRight: '2%',
     padding: '1%',
     width: '10%',
     marginTop: 10,
     marginBottom: 10,
     borderRadius: 8
  },
  text: {
    marginTop: '5',
    marginBottom: 0
  },
  timer: {
    color: 'ivory',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
  },
  productCard: {
    backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
    margin: '5%',
    borderRadius: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    '&:hover': {
      color:'white',
      boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
     width: '90%',
     height:'100%',
    padding: '2%',
    textAlign: "center" 
  },
  image: {
    width: '90%',
    height: '65%'
  },

})

const Slide = ({ products}) => {

const classes = useStyle();
const renderer = ({hours, minutes, seconds}) => {
  return <span className={classes.timer}>{hours} : {minutes}: {seconds} Left</span>
}

const timeUrl= 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  return (
    <Box className={classes.component}>


      <Box className={classes.dealText}>
           <Typography className={classes.dealText}>Deal of the day</Typography>
           <img src={timeUrl} style={{width: '24px'}} alt='timeurl' />
           <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
           <Button className={classes.viewallbtn}>View All</Button>
      </Box>
  <Divider />
    <Carousel
      responsive={responsive}
      infinite={true}
      draggable={false}
      swipable={true}
      centerMode={true}
      autoPlay={true}
      autoPlaySpeed={10000}
      keyBoardControl={true}
      showDots={false}
      removeArrowOnDeviceType={[]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
       containerClass="carousel-container"
    >
      {
        products.map(product => (
          <Link to={`product/${product.id}`} style={{textDecoration: 'none'}}>

          <Box className={classes.productCard}>

          <img  src = { product.url1 } className={classes.image} alt='productImg'/>
          <Typography className={classes.text} style={{fontWeight: 600, color:'#04A89A', fontSize: '20px', opacity: '0.9'}}>{product.title.shortTitle}</Typography>
          <Typography className={classes.text} style={{ color:'grey'}}><strike>{product.price.strikeprice}</strike> {product.price.actualprice}</Typography>
          <Typography className={classes.text} style={{ color:'#04A89A', opacity: '0.6'}}>Deal of the Day</Typography>
          </Box>
          </Link>
        ))
      }
    </Carousel>
    </Box>
  );
}

export default Slide;
