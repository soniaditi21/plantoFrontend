
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getCeramicPotDetails } from "../redux/actions/ceramicpotActions";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
//import { authenticateLogin } from "../service/api";
// import { useParams } from 'react-router-dom';
import Footer from '../Footer';
import { cpAddToCart } from '../redux/actions/cartActions';
import Carousel from "react-multi-carousel";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { payUsingPaytm } from "../service/api";
import { post } from '../utils/paytm';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const useStyle = makeStyles(theme => ({
   
    root: {
   
    fontFamily: 'Times New Roman'
    },
    component: {
        marginTop: '5%',
      
        boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
    mainIMG: {
        display: 'block',
        margin: '2% auto 2% auto',
        width: '30%',
        height: '90%',
        borderRadius: '20px',
        backgroundColor: '#00403C',
        boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
    topContainer: {
            width:  '90%',
            margin: 'auto',
            textAlign: 'center',
            backgroundColor: '#00403C',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '20px',
            boxShadow: `#88DAD2 0px 0px 60px -12px inset, #88DAD2 0px 0px 7px -18px inset`,

            '&:hover': {
              
              boxShadow: '#88DAD2 5px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

            },
    },
    productName: {
            fontFamily: 'Ephesis, cursive',
            color: '#1A3C40',
            fontSize: 53,
            fontWeight: 600,
           
    },
    productshortTitle: {
        fontSize: 40,
        fontFamily: 'Times New Roman',
        fontWeight: 600,
        color: 'white',
        textShadow: '2px 2px #1A3C40'
    },
   bottomContainer: {
    margin: '2% 5% 5% 5%',
    padding: '1%',
    textAlign: 'center',
    color: '#CFF3E9',
    display: 'flex',
    backgroundColor: '#88DAD2',
    backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
    borderRadius: '20px',

    '&:hover': {
      
      boxShadow: '#88DAD2 5px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

    },
},

   addToCartBtn: {
     
       margin: '0 1% 0 10%',
       width: '364px',
       height:  '52px',
       backgroundColor: '#CFF3E9',
       '&:hover': {
           color: '#00403C',
           backgroundColor: '#CFF3E9',
           opacity: '0.9'
       },
      
   },


   discription: {
       margin: '50px',
       color: '#00403C',
   },
  additionalDetails: {
    margin: '2% 5% 5% 10%',
    borderRadius: '20px',
    backgroundColor: '#00403C',
    backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
    color: 'ivory',
    fontFamily: 'Times New Roman, Times, serif',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    marginBottom: '4%',
    padding: '2% 25% 1% 25%',
    width: '75%',
    '&:hover': {
        
        boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

      },
      
   },
   addHeading: {
       fontSize: '45px',
       fontFamily: 'Times New Roman',
       textColor: '#00403C',
       fontWeight: 600,
   },
   leftTD: {
       fontSize: '25px',
       fontFamily: 'Times New Roman',
       fontWeight: 600
   },
   rightTD: {
       float: 'right',
  
   }
  
  

}));

const CeramicPotDetailView = ({ history, match,  }) =>  {
    
   const classes = useStyle();

    const { ceramicpot } = useSelector(state => state.getCeramicPotDetails);

    const dispatch =  useDispatch();

    useEffect(() => {
        if(ceramicpot && match.params.id !== ceramicpot.id)   
            dispatch(getCeramicPotDetails(match.params.id));
    }, [dispatch, match.params.id, ceramicpot]);

    const cpAddToCartItems = (id) => {
        dispatch(cpAddToCart(id));
        history.push('/cart');
    }
    const  buyNow = async () => {
        let response =  await payUsingPaytm({amount: 500, email: 'soniaditi207@gmail.com'});
    
        let information = {
            action: "https://securegw-stage.paytm.in/order/process",
            params: response
        };
        
         post(information);
    }
    return(

       <Box className={classes.root}>
      
           {
               ceramicpot && Object.keys(ceramicpot).length && 
               <Box className={classes.component}>
                   
                  <Box className={classes.topContainer}>                          
                       <Typography className={classes.productshortTitle}>{ceramicpot.title.shortTitle}</Typography>
                
                       
                       <Carousel responsive={responsive}>
                       <img className={classes.mainIMG} src={ceramicpot.url1} alt='mainIMg'/>
                       <img className={classes.mainIMG} src={ceramicpot.url2} alt='mainIMg'/>
                       <img className={classes.mainIMG} src={ceramicpot.url3} alt='mainIMg'/>
                      
                       </Carousel>

                </Box>


                    <Box className={classes.bottomContainer}>


                          <Box style={{ margin: ' 1% 0 0 20%'}}><LocalOfferIcon fontSize='large' /></Box>
                          <Typography style={{fontSize: '35px', color: 'grey', marginLeft: '3%'}}><strike>₹{ceramicpot.price.strikeprice}</strike></Typography>
                          <Typography style={{fontSize: '35px', marginLeft: '3%'}}>  ₹{ceramicpot.price.actualprice}</Typography>
                          <Button className={classes.addToCartBtn} onClick={() => cpAddToCartItems(ceramicpot.id)} >Add to Cart</Button>
                          <Button className={classes.addToCartBtn} onClick={() => buyNow()} >Buy Now</Button>  
                    </Box>


                    <Box className={classes.discription}><Typography style={{fontSize: '30px',fontFamily: 'Times New Roman, Times, serif'}}>{ceramicpot.description} </Typography></Box>

                 
                   <Box style={{margin: '2% 5% 5% 5%',}}>
                       <Typography className={classes.addHeading}>Additional Details</Typography>
                    <Box className={classes.additionalDetails}>


                        <table>
                            <tr>
                            <td><Typography className={classes.leftTD}>SKU</Typography></td>
                           <td><Typography className={classes.rightTD}>{ceramicpot.additionalDetails.sku}</Typography></td> 
                            </tr>
                            <tr >
                                <td> <Typography className={classes.leftTD}>PotBackImage</Typography></td>
                                <td><Typography className={classes.rightTD}>{ceramicpot.additionalDetails.potBackImage}</Typography></td>
                            </tr>
                            <tr>
                                <td> <Typography className={classes.leftTD}>Product Weight</Typography></td>
                                <td><Typography className={classes.rightTD}>{ceramicpot.additionalDetails.productWeight}</Typography></td>
                            </tr>
                            <tr>
                                <td>  <Typography className={classes.leftTD}>Product Height</Typography></td>
                                <td><Typography className={classes.rightTD}>{ceramicpot.additionalDetails.productHeight}</Typography></td>
                            </tr>
                            <tr>
                                <td> <Typography className={classes.leftTD}>Product Width</Typography></td>
                                <td><Typography className={classes.rightTD}>{ceramicpot.additionalDetails.productWidth}</Typography></td>
                            </tr>
                            <tr>
                                <td><Typography className={classes.leftTD}>Product Depth</Typography></td>
                                <td><Typography className={classes.rightTD}>{ceramicpot.additionalDetails.productDepth}</Typography></td>
                            </tr>
                            <tr>
                                <td> <Typography className={classes.leftTD}>Category</Typography></td>
                                <td><Typography className={classes.rightTD}>{ceramicpot.additionalDetails.category}</Typography></td>
                            </tr>
                            <tr>
                                <td><Typography className={classes.leftTD}>Pots</Typography></td>
                                <td><Typography className={classes.rightTD}>{ceramicpot.additionalDetails.pots}</Typography></td>
                            </tr>
                            <tr>
                                <td><Typography className={classes.leftTD}>Material</Typography></td>
                                <td><Typography className={classes.rightTD}>{ceramicpot.additionalDetails.material}</Typography></td>
                            </tr>
                        </table>
                          
                    </Box>
                    </Box>
                  
               


                 


                  <Box >
                     <Footer />
                  </Box>
               </Box>
           }
        </Box>
  
    )
}


export default CeramicPotDetailView;