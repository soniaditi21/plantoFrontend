
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getAirPurifyingDetails } from "../redux/actions/airpurifyingitemActions";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
//import { authenticateLogin } from "../service/api";
import { useParams } from 'react-router-dom';
import Footer from '../Footer';
// import { addToCart } from "../redux/actions/cartActions";
import Carousel from "react-multi-carousel";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { apAddToCart } from '../redux/actions/cartActions';
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
        fontSize: 60,
        fontFamily: 'Times New Roman',
        fontWeight: 600,
        color: 'white',
        textShadow: '2px 2px #1A3C40'
    },
   productlongTitle: {
    fontSize: 23,
    fontFamily: 'Times New Roman',
    color: 'white',
    fontStyle: 'italic'
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
   LWA_container: {
       margin: '50px',
       color: '#00403C',
       fontFamily: 'Times New Roman',
       
   },
   FirstHeading: {
       fontSize: '45px',
       color: '#00403C',
       fontWeight: '600',
       fontFamily: 'Times New Roman'
   },
   secondHeading: {
       fontSize: '22px',
       fontWeight: '555',
       fontFamily: 'Times New Roman',
       color: '#00403C',
       marginTop: 0,
       marginBottom: '3%'
   },
   LWA_discription: {
       display: 'flex'
   },
   leftContainer: {
     padding: '20px 80px 20px 20px',
     borderRadius: '20px',
     backgroundColor: '#00403C',
     backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
     boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
     marginRight: 100,
     width: '50%',

     '&:hover': {
       
       boxShadow: '#88DAD2 5px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

     },
   },
   one: {
       display: 'flex',
       padding: '2%',
       fontFamily: 'Times New Roman',

   },
  
   two: {
    fontSize:'20px', fontWeight: 600, marginLeft: '5%', color: 'ivory',
    fontFamily: 'Times New Roman, Times, serif'

   },
   three: {
       marginLeft: '20%',
       fontSize: '20px',
       color: '#98BAB2',
       fontFamily: 'Times New Roman, Times, serif'

   },
   rightContainer:{
       width: '100%',
       height: '100%',
       borderRadius: '20px',
       boxShadow: '#88DAD2 0px 54px 55px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

       '&:hover': {
         
         boxShadow: '#88DAD2 5px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

       },
   },
   PCS: {
    borderRadius: '20px',
    backgroundColor: '#00403C',
    backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
    color: '#98BAB2',
    fontFamily: 'Times New Roman, Times, serif',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    marginBottom: '4%',
    padding: '2%',
    width: '75%',
    '&:hover': {
        
        boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

      },
   },
   allHeadings:{
       fontWeight: 600,
       fontFamily: 'Times New Roman, Times, serif',
       color: 'ivory'
   }

}));

const DetailView = ({ history, match,  }) =>  {
    
   const classes = useStyle();

    const { airpurifyingitem } = useSelector(state => state.getAirPurifyingDetails);

    const dispatch =  useDispatch();
    const { id } = useParams();

    useEffect(() => {
        if(airpurifyingitem && id !== airpurifyingitem.id)   
            dispatch(getAirPurifyingDetails(id));
    }, [dispatch, id, airpurifyingitem]);

    const apAddToCartItems = (item) => {
        dispatch(apAddToCart(item));
        history.push({
            pathanme: '/cart'
        });
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
               airpurifyingitem && Object.keys(airpurifyingitem).length && 
               <Box className={classes.component}>
                      
               <Box className={classes.topContainer}>                          
                    <Typography className={classes.productshortTitle}>{airpurifyingitem.title.shortTitle}</Typography>
                     <Typography className={classes.productlongTitle}>{airpurifyingitem.title.longTitle}</Typography>
                    
                    <Carousel responsive={responsive}>
                    <img className={classes.mainIMG} src={airpurifyingitem.url1} alt='mainIMg'/>
                    <img className={classes.mainIMG} src={airpurifyingitem.url2} alt='mainIMg'/>
                    <img className={classes.mainIMG} src={airpurifyingitem.url3} alt='mainIMg'/>
                    <img className={classes.mainIMG} src={airpurifyingitem.url4} alt='mainIMg'/>
                    </Carousel>

             </Box>


                 <Box className={classes.bottomContainer}>


                       <Box style={{ margin: ' 1% 0 0 20%'}}><LocalOfferIcon fontSize='large' /></Box>
                       <Typography style={{fontSize: '35px', color: 'grey', marginLeft: '3%'}}><strike>₹{airpurifyingitem.price.strikeprice}</strike></Typography>
                       <Typography style={{fontSize: '35px', marginLeft: '3%'}}>  ₹{airpurifyingitem.price.actualprice}</Typography>
                       <Button className={classes.addToCartBtn} onClick={() => apAddToCartItems(airpurifyingitem.id)} >Add to Cart</Button>
                       <Button className={classes.addToCartBtn} onClick={() => buyNow()} >Buy Now</Button>                 </Box>


                 <Box className={classes.discription}><Typography style={{fontSize: '30px',fontFamily: 'Times New Roman, Times, serif'}}>{airpurifyingitem.discription} </Typography></Box>

                   <Box className={classes.LWA_container}>
                       <Typography className={classes.FirstHeading}>Lights, Water, Action</Typography>
                        <Typography className={classes.secondHeading}>Get your plants ready to slay!</Typography>

                        <Box className={classes.LWA_discription}>
                        <Box className={classes.leftContainer}>


                        <Box style={{padding: '20px'}}>
                        <Box className={classes.one}>
                        <img style={{width: '15%', height: '2%' }}src='https://www.ugaoo.com/media/wysiwyg/sunlight.png' alt='endurl' />  <Typography className={classes.two}>Light</Typography>
                        </Box>
                        <Typography className={classes.three}>  {airpurifyingitem.features.light}</Typography> 
                        </Box>

                          <Box  style={{padding: '20px'}}>
                        <Box className={classes.one}>
                        <img style={{width: '15%', height: '2%' }} src='https://www.ugaoo.com/media/wysiwyg/water.png' alt='endurl'/>  <Typography className={classes.two}>Watering</Typography>
                         </Box>
                         <Typography className={classes.three}>  {airpurifyingitem.features.watering}</Typography> 
                         </Box>

                         <Box  style={{padding: '20px'}}>
                         <Box className={classes.one}>
                         <img style={{width: '15%', height: '2%' }} src='https://www.ugaoo.com/media/wysiwyg/indoor.png' alt='endurl'/>  <Typography className={classes.two}> Where To Grow </Typography>
                         </Box>
                         <Typography className={classes.three}>  {airpurifyingitem.features.whereTogrow}</Typography> 
                         </Box>

                         <Box  style={{padding: '20px'}}>
                         <Box className={classes.one}>
                         <img style={{width: '15%', height: '2%' }} src='https://www.ugaoo.com/media/wysiwyg/warmth.png' alt='endurl'/> <Typography className={classes.two}> Maintenance</Typography>
                         </Box>
                         <Typography className={classes.three}>  {airpurifyingitem.features.maintenance}</Typography> 
                         </Box>

                         <Box  style={{padding: '20px'}}>
                         <Box className={classes.one}>
                         <img style={{width: '15%', height: '2%' }} src='https://www.ugaoo.com/media/wysiwyg/maintenanace.png' alt='endurl'/> <Typography className={classes.two}> Special Features </Typography>
                         </Box>
                         <Typography className={classes.three}>  {airpurifyingitem.features.specialFeature}</Typography> 
                         </Box>

                      </Box>

                     <Box>
                        <img className={classes.rightContainer} src={airpurifyingitem.endurl} alt="endurl"/>
                   </Box>
            

</Box>
</Box>
                 
         
               
               <Box style={{margin: '50px'}}>
                   <Typography className={classes.FirstHeading}>Size Me Up</Typography>
                   <Typography className={classes.secondHeading}>See me, before you see me</Typography>
                   <img  className={classes.rightContainer} src={airpurifyingitem.sizeMeUpUrl} alt="SizeMeUp" />
               </Box>


               <Box style={{margin: '50px'}}>
                   <Typography className={classes.FirstHeading}>Spill the tea</Typography>
                   <Typography className={classes.secondHeading}>All the plant gossip, through the grapevine. Pun intended</Typography>

                   <Box>
                        <Box className={classes.PCS}>
                            <Typography style={{color: 'ivory', fontSize: '25px',marginBottom: '1%'}}>Plant Essentials</Typography>
                           <Typography className={classes.allHeadings}>{airpurifyingitem.plantEssentials.heading1}</Typography>
                            <Typography>{airpurifyingitem.plantEssentials.para1}</Typography>

                            <Typography className={classes.allHeadings}>{airpurifyingitem.plantEssentials.heading2}</Typography>
                            <Typography>{airpurifyingitem.plantEssentials.para2}</Typography>

                            <Typography className={classes.allHeadings}>{airpurifyingitem.plantEssentials.heading3}</Typography>
                            <Typography>{airpurifyingitem.plantEssentials.para3}</Typography>

                        </Box>
                        
                        <Box style={{marginLeft: '20%'}} className={classes.PCS}>
                            <Typography style={{color: 'ivory', fontSize: '25px',marginBottom: '1%'}}>Common Problems</Typography>
                        <Typography className={classes.allHeadings}>{airpurifyingitem.commmonProblems.heading1}</Typography>
                            <Typography>{airpurifyingitem.commmonProblems.para1}</Typography>

                            <Typography className={classes.allHeadings}>{airpurifyingitem.commmonProblems.heading2}</Typography>
                            <Typography>{airpurifyingitem.commmonProblems.para2}</Typography>

                            <Typography className={classes.allHeadings}>{airpurifyingitem.commmonProblems.heading3}</Typography>
                            <Typography>{airpurifyingitem.commmonProblems.para3}</Typography>
                        </Box>

                        <Box className={classes.PCS}>
                           <Typography style={{color: 'ivory', fontSize: '25px',marginBottom: '1%'}}>Style And Decor</Typography>
                           <Typography className={classes.allHeadings}>{airpurifyingitem.styleAndDecor.heading1}</Typography>
                            <Typography>{airpurifyingitem.styleAndDecor.para1}</Typography>

                            <Typography className={classes.allHeadings}>{airpurifyingitem.styleAndDecor.heading2}</Typography>
                            <Typography>{airpurifyingitem.styleAndDecor.para2}</Typography>

                            <Typography className={classes.allHeadings}>{airpurifyingitem.styleAndDecor.heading3}</Typography>
                            <Typography>{airpurifyingitem.styleAndDecor.para3}</Typography>

                        </Box>
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


export default DetailView;