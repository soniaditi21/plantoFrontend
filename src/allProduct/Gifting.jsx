
import {  Button, Grid, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box} from '@mui/system';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import { getGiftingProducts as listGiftingProducts } from '../redux/actions/giftingproductActions';
import { makeStyles } from '@mui/styles';
import Footer from '../Footer';
import { gfAddToCart } from '../redux/actions/cartActions';
import { useHistory } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyle = makeStyles({
    
  topContainer:{
    margin: '5% 2% 2% 2%',
    width: '100%',
    padding: '4%',
    textAlign: 'center'
  },
  title:{
    fontSize: '40px',
    fontFamily: 'Times Roman',
    textShadow: '#00403C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

  },
  titleDescription:{
    fontSize: '20px',
    fontFamily: 'Times Roman',
    textShadow: '#00403C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

  },
  bottomGrid:{
    padding: '2%',
    backgroundColor: '#00403C',
    backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
    boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

    margin: '1% 2% 1% 2%',
    borderRadius: '25px'
  },
  itemContainer:{
    width: '90%',
    marginRight: '2%',
    backgroundColor: '#00403C',
    borderRadius: '24px',
    backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
    '&:hover': {
      color:'white',
      boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
  },
  img:{
    width: '80%',
    
  },
  itemTitle:{
    color: 'ivory',
    fontSize: '24px',
    fontFamily: 'Times Roman'
  },
  price: {
    color: 'ivory',
    fontSize: '20px'
  },
  // addToCart: {
     
  //   margin: '5% 0 5% 0',
  //   width: '50%',
  //   height: '45px',
  //   backgroundColor: '#CFF3E9',
  //   color: '#096C6E',
  //   fontWeight: 600,
  //   '&:hover': {
  //     backgroundColor: '#096C6E',
  //     color: 'ivory',
  //     boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
  //   }
  // }
})

function Gifting() {

  

 const classes=useStyle();
 const history = useHistory();

  const { giftingproducts } = useSelector(state => state.getGiftingProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listGiftingProducts());
  }, [dispatch]);

  const gfAddToCartItems = (id) => {
          dispatch(gfAddToCart(id));
          history.push('/cart');
  }

  return (
    <Box>
      <Box className={classes.topContainer}>
        <Typography className={classes.title}><h1><b>Gifting Plants</b></h1></Typography>
        <Typography className={classes.titleDescription}><h3>Gifting plants are a package of benefits. Planting them is the most cost-effective and healthy way to breathe pure and better air. It also helps improve the atmosphere and productivity around you.</h3></Typography>
      </Box>
    <Grid container rowSpacing={{ xs: 1, sm: 3, md: 3 }} 
    alignItems="center"
     className={classes.bottomGrid}
     direction="row"
  justifyContent="center"
     >
      {giftingproducts.map(giftingproduct => (
   
         <Grid item md={6} >
      
       
      <Link to= {`giftingproduct/${giftingproduct.id}`} style={{textDecoration: 'none'}}>
      <Item className={classes.itemContainer} style={{backgroundColor: '#00403C', padding: '5% 1% 7% 1%', backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`, borderRadius: '30px'}}>
          <Box > 
          <img className={classes.img} src={giftingproduct.url1} alt="" />
          <Typography className={classes.itemTitle}>{giftingproduct.title.shortTitle}</Typography>
          <Typography className={classes.price}><strike style={{color: 'grey', marginRight: '2%'}}>₹{giftingproduct.price.strikeprice}</strike> ₹{giftingproduct.price.actualprice}</Typography>
         <Link to='/cart' style={{textDecoration: 'none'}}>  <Button className={classes.addToCart} onClick={() => gfAddToCartItems(giftingproduct.id)} style={{ 
            backgroundColor: '#096C6E',
        color: 'ivory',
            boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
            fontWeight: 600,
            
            padding: '3% 7% 3% 7%',
            marginTop: '5%',
            '&:hover': {
             
              color: 'ivory',
              boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}}>Add to Cart</Button></Link>
          </Box>
          </Item>
          </Link>
      </Grid>
      
      ))}

    </Grid>
    <Footer/>
    </Box>
  );
}

export default Gifting;