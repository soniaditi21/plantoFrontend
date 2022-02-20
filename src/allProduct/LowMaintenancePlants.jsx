
import {  Button, Grid, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box} from '@mui/system';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import { getLowMaintenancePlants as listLowMaintenancePlant } from '../redux/actions/lowmaintenanceplantActions';
//import { makeStyles } from '@mui/styles';
import Footer from '../Footer';
import { lmAddToCart } from '../redux/actions/cartActions';
import { useHistory } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// const useStyle = makeStyles({
    
//   topContainer:{
//     margin: '5% 2% 2% 2%',
//     width: '100%',
//     padding: '4%',
//     textAlign: 'center'
//   },
//   title:{
//     fontSize: '40px',
//     fontFamily: 'Times Roman',
//     textShadow: '#00403C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

//   },
//   titleDescription:{
//     fontSize: '20px',
//     fontFamily: 'Times Roman',
//     textShadow: '#00403C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

//   },
//   bottomGrid:{
//     padding: '2%',
//     backgroundColor: '#00403C',
//     backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
//     boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

//     margin: '1% 2% 1% 2%',
//     borderRadius: '25px'
//   },
//   itemContainer:{
//     width: '90%',
//     marginRight: '2%',
//     backgroundColor: '#00403C',
//     borderRadius: '24px',
//     backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
//     '&:hover': {
//       color:'white',
//       boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
//     },
//   },
//   img:{
//     width: '80%',
    
//   },
//   itemTitle:{
//     color: 'ivory',
//     fontSize: '24px',
//     fontFamily: 'Times Roman'
//   },
//   price: {
//     color: 'ivory',
//     fontSize: '20px'
//   },
//   addToCart: {
     
//     margin: '5% 0 5% 0',
//     width: '50%',
//     height: '45px',
//     backgroundColor: '#CFF3E9',
//     color: '#096C6E',
//     fontWeight: 600,
//     '&:hover': {
//       backgroundColor: '#096C6E',
//       color: 'ivory',
//       boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
//     }
//   }
// })

function LowMaintenancePlants() {

  

//  const classes=useStyle();
 const history = useHistory();

  const { lowmaintenanceplants } = useSelector(state => state.getLowMaintenancePlants);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listLowMaintenancePlant());
  }, [dispatch]);

  const lmAddToCartItems = (id) => {
          dispatch(lmAddToCart(id));
          history.push('/cart');
  }

  return (
    <Box>
      <Box style={{ margin: '5% 2% 2% 2%', width: '100%', padding: '4%', textAlign: 'center' }}>
        <Typography style={{ fontSize: '40px', fontFamily: 'Times Roman', textShadow: '#00403C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}><b><h1>Low Maintenance Plants</h1></b></Typography>
        <Typography style={{ fontSize: '20px', fontFamily: 'Times Roman', textShadow: '#00403C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}><h3>We brings to you a diverse range of low maintenance plants online for both indoors and outdoors. Buy natural plants at the best price and start gardening enthusiastically.</h3></Typography>
      </Box>
    <Grid container rowSpacing={{ xs: 1, sm: 3, md: 3 }} 
    alignItems="center"
    style={{ padding: '2%', backgroundColor: '#00403C', backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`, boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', margin: '1% 2% 1% 2%', borderRadius: '25px' }}
    direction="row"
  justifyContent="center"
     >
      {lowmaintenanceplants.map(lowmaintenanceplant => (
   
         <Grid item xs={12} sm={12} md={4} >
      
       
          <Link to ={`lowmaintenanceplant/${lowmaintenanceplant.id}`} style={{textDecoration: 'none'}}>
          <Item  style={{backgroundColor: '#00403C', padding: '5% 2% 7% 1%', backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`, borderRadius: '30px',  width: '90%', marginRight: '2%', '&:hover': { color:'white', boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',  }}}>
          <Box > 
          <img style={{ width: '80%' }}  src={lowmaintenanceplant.url1} alt="" />
          <Typography style={{color: 'ivory', fontSize: '24px', fontFamily: 'Times Roman' }}>{lowmaintenanceplant.title.shortTitle}</Typography>
          <Typography style={{color: 'ivory', fontSize: '20px'}}><strike style={{color: 'grey', marginRight: '2%'}}>₹{lowmaintenanceplant.price.strikeprice}</strike> ₹{lowmaintenanceplant.price.actualprice}</Typography>
         <Link to='/cart' style={{textDecoration: 'none'}}>  <Button  onClick={() => lmAddToCartItems(lowmaintenanceplant.id)} style={{ 
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

export default LowMaintenancePlants;