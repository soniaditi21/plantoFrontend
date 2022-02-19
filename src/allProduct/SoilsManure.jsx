
import {  Button, Grid, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box} from '@mui/system';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import { getSoilManures as listSoilManures } from '../redux/actions/soilManureActions';
import { makeStyles } from '@mui/styles';
import Footer from '../Footer';
import { smAddToCart } from '../redux/actions/cartActions';
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
  addToCart: {
     

    '&:hover': {
      backgroundColor: '#096C6E',
      color: 'ivory',
      boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    }
  }
})

function SoilsManure() {

  

 const classes=useStyle();
 const history = useHistory();

  const { soilManures } = useSelector(state => state.getSoilManures);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listSoilManures());
  }, [dispatch]);

  const smAddToCartItems = (id) => {
          dispatch(smAddToCart(id));
          history.push('/cart');
  }

  return (
    <Box>
      <Box className={classes.topContainer}>
        <Typography className={classes.title}><h1>Soils and Manure</h1></Typography>
      </Box>
    <Grid container rowSpacing={{ xs: 1, sm: 3, md: 3 }} 
    alignItems="center"
     className={classes.bottomGrid}
     direction="row"
  justifyContent="center"
     >
      {soilManures.map(soilManure => (
   
         <Grid item md={6} >
      
       
      <Link to= {`soilManure/${soilManure.id}`} style={{textDecoration: 'none'}}>
      <Item className={classes.itemContainer} style={{backgroundColor: '#00403C', padding: '5% 2% 7% 1%', backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`, borderRadius: '30px'}}>
          <Box > 
          <img className={classes.img} src={soilManure.url1} alt="" />
          <Typography className={classes.itemTitle}>{soilManure.title.shortTitle}</Typography>
          <Typography className={classes.price}><strike style={{color: 'grey', marginRight: '2%'}}>₹{soilManure.price.strikeprice}</strike> ₹{soilManure.price.actualprice}</Typography>
         <Link to='/cart' style={{textDecoration: 'none'}}>  <Button className={classes.addToCart} onClick={() => smAddToCartItems(soilManure.id)} style={{ 
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

export default SoilsManure;