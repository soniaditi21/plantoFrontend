
import { useSelector, useDispatch } from "react-redux";
import Bounce from 'react-reveal/Bounce';
import { useEffect } from 'react';
import { getSeedDetails } from "../redux/actions/seedActions";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
//import { authenticateLogin } from "../service/api";
// import { useParams } from 'react-router-dom';
import Footer from '../Footer';
import { vsAddToCart } from '../redux/actions/cartActions';
import Carousel from "react-multi-carousel";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
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
        backgroundColor: '#CFF3E9',
        boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
    topContainer: {
            width:  '90%',
            margin: 'auto',
            textAlign: 'center',
            backgroundColor: '#00403C',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '5px',
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
    borderRadius: '5px',

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
        backgroundColor: '#096C6E',
        color: 'ivory',
        boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      }
      
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
},
growthStages: {
  margin: '2% 5% 5% 5%',
},
gridItem: {
  borderRadius: '5px',
  backgroundColor: '#00403C',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
  '&:hover': {
    
    boxShadow: '#88DAD2 5px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

  },
},

container1: {
  display: 'flex',
  borderWidth: '7px', 
},
imgBox: {
  width: '50%',
  height: '50%',
  borderRadius: '35px',
  boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

  '&:hover': {
     color:'white',
     boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
   },
   
},
img1:{
  width: '100%',
  height: '100%',
  borderRadius: '35px',
},
top: {
  width: '50%',
  height: '100%',
  backgroundColor: '#00403C',
  color: 'ivory',
  margin: '5% 0% 5% 0',
  borderRadius: '0 35px 35px 35px',
  padding: '1%'
},
container2: {
 display: 'flex',
 borderWidth: '7px',

},
bottom: {
  backgroundColor: '#00403C',
 color: 'ivory',
 borderRadius: '35px 0 35px 35px',
  marginTop: '7%',
  marginBottom: '7%',
 width: '50%',
 height: '100%',
 padding: '1%'
},
imgBox2: {
 width: '100%',
 height: '90%',
 borderRadius: '35px',
 boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

 '&:hover': {
     color:'white',
     boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
   },
},
headline: {
  fontSize: '37px',
  marginTop: '0'
},
headline2: {
 fontSize: '37px',
marginTop: '10px'  
}
  
  

}));



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,

  textAlign: 'center',
  color: '#98BAB2',
  height: '100%',
  padding: '8%',
  borderRadius: '10px',
  fontSize: '30px',
  backgroundColor: '#00403C',
  borderWidth: '1px',
  backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.0) 50%,rgba(0, 0, 0, 0.866) 100%)`,

}));


const SeedDetailView = ({ history, match,  }) =>  {
    
   const classes = useStyle();

    const { seed } = useSelector(state => state.getSeedDetails);

    const dispatch =  useDispatch();

    useEffect(() => {
        if(seed && match.params.id !== seed.id)   
            dispatch(getSeedDetails(match.params.id));
    }, [dispatch, match.params.id, seed]);

    const vsAddToCartItems = (id) => {
        dispatch(vsAddToCart(id));
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
               seed && Object.keys(seed).length && 
               <Box className={classes.component}>
                   
                  <Box className={classes.topContainer}>                          
                       <Typography className={classes.productshortTitle}>{seed.title.shortTitle}</Typography>
                
                       
                       <Carousel responsive={responsive}>
                       <img className={classes.mainIMG} src={seed.url1} alt='mainIMg'/>
                       <img className={classes.mainIMG} src={seed.url2} alt='mainIMg'/>
                       <img className={classes.mainIMG} src={seed.url3} alt='mainIMg'/>
                      
                       </Carousel>

                </Box>


                    <Box className={classes.bottomContainer}>


                          <Box style={{ margin: ' 1% 0 0 20%'}}><LocalOfferIcon fontSize='large' /></Box>
                          <Typography style={{fontSize: '35px', color: 'grey', marginLeft: '3%'}}><strike>₹{seed.price.strikeprice}</strike></Typography>
                          <Typography style={{fontSize: '35px', marginLeft: '3%'}}>  ₹{seed.price.actualprice}</Typography>
                          <Button className={classes.addToCartBtn} onClick={() => vsAddToCartItems(seed.id)} >Add to Cart</Button>
                          <Button className={classes.addToCartBtn} onClick={() => buyNow()} >Buy Now</Button>  
                    </Box>


                    <Box className={classes.discription}><Typography style={{fontSize: '30px',fontFamily: 'Times New Roman, Times, serif'}}>{seed.description} </Typography></Box>

                 
                    <Box className={classes.LWA_container}>
                       <Typography className={classes.FirstHeading}>Lights, Water, Action</Typography>
                        <Typography className={classes.secondHeading}>Got the seeds, now, let'em shoot!</Typography>

                        <Box className={classes.LWA_discription}>
                        <Box className={classes.leftContainer}>


                        <Box style={{padding: '20px'}}>
                        <Box className={classes.one}>
                        <img style={{width: '15%', height: '2%' }}src='https://www.ugaoo.com/media/wysiwyg/sunlight.png' alt='endurl' />  <Typography className={classes.two}> Light</Typography>
                        </Box>
                        <Typography className={classes.three}>  {seed.lightsWaterAction.light}</Typography> 
                        </Box>

                          <Box  style={{padding: '20px'}}>
                        <Box className={classes.one}>
                        <img style={{width: '15%', height: '2%' }} src='https://www.ugaoo.com/media/wysiwyg/water.png' alt='endurl'/>  <Typography className={classes.two}>Watering</Typography>
                         </Box>
                         <Typography className={classes.three}>  {seed.lightsWaterAction.watering}</Typography> 
                         </Box>

                         <Box  style={{padding: '20px'}}>
                         <Box className={classes.one}>
                         <img style={{width: '15%', height: '2%' }} src='https://www.ugaoo.com/media/wysiwyg/indoor.png' alt='endurl'/>  <Typography className={classes.two}> Where To Grow </Typography>
                         </Box>
                         <Typography className={classes.three}>  {seed.lightsWaterAction.whereToGrow}</Typography> 
                         </Box>

                         <Box  style={{padding: '20px'}}>
                         <Box className={classes.one}>
                         <img style={{width: '15%', height: '2%' }} src='https://www.ugaoo.com/media/wysiwyg/timetillharvest_icon.png' alt='endurl'/> <Typography className={classes.two}> Maintenance</Typography>
                         </Box>
                         <Typography className={classes.three}>  {seed.lightsWaterAction.timeTillHarvest}</Typography> 
                         </Box>

                         <Box  style={{padding: '20px'}}>
                         <Box className={classes.one}>
                         <img style={{width: '15%', height: '2%' }} src='https://www.ugaoo.com/media/wysiwyg/seasonalinformation_icon.png' alt='endurl'/> <Typography className={classes.two}> Special lightsWaterAction </Typography>
                         </Box>
                         <Typography className={classes.three}>  {seed.lightsWaterAction.seasonalInformation}</Typography> 
                         </Box>

                      </Box>

                     <Box>
                        <img className={classes.rightContainer} src={seed.lightsWaterAction.url} alt="endurl"/>
                   </Box>
            

</Box>
</Box>



<Box className={classes.growthStages}>

<Typography className={classes.FirstHeading}>Growth stages</Typography>
                        <Typography className={classes.secondHeading}>One step at a time, with a lil water and light.</Typography>
      <Grid container spacing={4}>
         <Grid item xs={4} >
           <Item className={classes.gridItem}><img  className={classes.gridImg}src={seed.growthStages.oneUrl} alt="" /><Typography>{seed.growthStages.one}</Typography></Item>
         </Grid>
         <Grid item xs={4}>
           <Item className={classes.gridItem}><img src={seed.growthStages.twoUrl} alt="" /><Typography >{seed.growthStages.two}</Typography></Item>
         </Grid>
         <Grid item xs={4}>
           <Item className={classes.gridItem}><img src={seed.growthStages.threeUrl} alt="" /><Typography>{seed.growthStages.three}</Typography></Item>
         </Grid>
         <Grid item xs={4}>
           <Item className={classes.gridItem}><img src={seed.growthStages.fourUrl} alt="" /><Typography>{seed.growthStages.four}</Typography></Item>
         </Grid>
         <Grid item xs={4}>
           <Item className={classes.gridItem}><img src={seed.growthStages.fiveUrl} alt="" /><Typography>{seed.growthStages.five}</Typography></Item>
         </Grid>
      </Grid>
  

</Box>
                 
                  

              <Box style={{ margin: '2% 5% 5% 5%' }}>
              <Typography className={classes.FirstHeading}>Sow, Grow, Reap</Typography>
                        <Typography className={classes.secondHeading}>Good things take time and care</Typography>
                          
                        <Box className={classes.container1}>
                <Box className={classes.imgBox}>
                    <Bounce left>
                    
                    <img className={classes.img1} src={seed.sowing.url} alt='plantOnFleek' />
                   
                    </Bounce>
                </Box>

                <Box className={classes.top}>

                   <Bounce right>
                   <h2 className={classes.headline}> Sowing</h2>
                   <p style={{fontSize: '16px'}}>{seed.sowing.para}</p>
                 
                   </Bounce>

                </Box>
            </Box>
            <Box className={classes.container2}>
                   
                 
                   <Box className={classes.bottom}> 
                   <Bounce left>
                       <h2 className={classes.headline2}>Caring</h2>
                     <p style={{fontSize: '16px'}}>{seed.caring.para}</p>
                   </Bounce>
                   </Box>
 
                   <Box>
                   <br/>
                   <Bounce right>
                
                   <img className={classes.imgBox2}  src={seed.caring.url} alt='giftPlant' />
                 
                   </Bounce>
                   </Box> 
             </Box>
             <Box className={classes.container1}>
                <Box className={classes.imgBox}>
                    <Bounce left>
                    
                    <img className={classes.img1} src={seed.commonProblem.url} alt='plantOnFleek' />
                   
                    </Bounce>
                </Box>

                <Box className={classes.top}>

                   <Bounce right>
                   <h2 className={classes.headline}>Common Problems</h2>
                   <p style={{fontSize: '20px', fontWeight: 600}}>{seed.commonProblem.heading1}</p>
                   <p style={{fontSize: '16px'}}>{seed.commonProblem.para1}</p>
                   <p style={{fontSize: '20px', fontWeight: 600}}>{seed.commonProblem.heading2}</p>
                   <p style={{fontSize: '16px'}}>{seed.commonProblem.para2}</p>
                   <p style={{fontSize: '20px', fontWeight: 600}}>{seed.commonProblem.heading3}</p>
                   <p style={{fontSize: '16px'}}>{seed.commonProblem.para3}</p>
                   </Bounce>

                </Box>
            </Box>

                </Box> 


                <Box style={{ margin: '2% 5% 5% 5%' }}>
              <Typography className={classes.FirstHeading}>Spill the tea</Typography>
                        <Typography className={classes.secondHeading}>All the plant gossip, through the grapevine. Pun intended</Typography>
                          
                        <Box className={classes.container1}>
                <Box className={classes.imgBox}>
                    <Bounce left>
                    
                    <img className={classes.img1} src={seed.plantsWithBenefit.url} alt='plantOnFleek' />
                   
                    </Bounce>
                </Box>

                <Box className={classes.top}>

                   <Bounce right>
                   <h2 className={classes.headline}> Sowing</h2>
                   <p style={{fontSize: '16px'}}>{seed.plantsWithBenefit.para}</p>
                 
                   </Bounce>

                </Box>
            </Box>
            <Box className={classes.container2}>
                   
                 
                   <Box className={classes.bottom}> 
                   <Bounce left>
                       <h2 className={classes.headline2}>Caring</h2>
                     <p style={{fontSize: '16px'}}>{seed.whatYouGet.para}</p>
                   </Bounce>
                   </Box>
 
                   <Box>
                   <br/>
                   <Bounce right>
                
                   <img className={classes.imgBox2}  src={seed.whatYouGet.url} alt='giftPlant' />
                 
                   </Bounce>
                   </Box> 
             </Box>
             <Box className={classes.container1}>
                <Box className={classes.imgBox}>
                    <Bounce left>
                    
                    <img className={classes.img1} src={seed.greenTrivia.url} alt='plantOnFleek' />
                   
                    </Bounce>
                </Box>

                <Box className={classes.top}>

                   <Bounce right>
                   <h2 className={classes.headline}>Common Problems</h2>
        
                   <p style={{fontSize: '16px'}}>{seed.greenTrivia.para1}</p>
                   <p style={{fontSize: '16px'}}>{seed.greenTrivia.para2}</p>
                   <p style={{fontSize: '16px'}}>{seed.greenTrivia.para3}</p>
                   </Bounce>

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


export default SeedDetailView;