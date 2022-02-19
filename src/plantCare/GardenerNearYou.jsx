import { makeStyles } from "@material-ui/styles";
import { Box, Button, Typography } from "@material-ui/core";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import HailIcon from '@mui/icons-material/Hail';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Link } from "react-router-dom";
import Footer from '../Footer.jsx';


const useStyle = makeStyles ({
    root: {
        width:'100%',
        marginTop: '5%',
        height: '100%',
        border: 'solid black',
        
      },
      topImg: {
        
          width: '100%',
          
          padding: '10% 5% 10% 5%',
          backgroundImage: `linear-gradient(to bottom,  rgba(4, 128, 134, 0.577) 0%,rgba(5, 25, 55, 0.577) 70%), url('https://media.ugaoo.com/wysiwyg/banners-veggie-seeds-web.jpg')`,
          
      },
      centerdiv: {
        
          marginTop: '4%',
          backgroundColor: '#CFF3E9',
          width: '55%',
          padding: '4% 2% 4% 2%',
          borderRadius: '10px',
          boxShadow: `#CFF3E9 0px 2px 4px, #CFF3E9 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
          '&:hover': {
             
           boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
         }
      },
      gardeningMadeEasy: {
          fontSize: '45px',
          color: '#CFF3E9',
          fontFamily: 'Times New Roman',
           textShadow: '#00403C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
         
      },
     lists: {
         fontSize: '28px',
         color: '#CFF3E9',
         fontFamily: 'Times New Roman',
         textShadow: '#00403C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
     },
     bottomContainer: {
        margin: '0 5% 0 5%',
        position: 'relative',
        bottom: '50px',
        left: '15px',
         display: 'flex',
         padding: '2%',
         borderRadius: '10px',
         justifyContent: 'space-evenly',
       backgroundColor: '#CFF3E9',
         boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
         backgroundImage: `linear-gradient(to bottom,  rgba(4, 128, 134, 0.577) 0,rgba(5, 25, 55, 0.577) 70%), `,
         '&:hover': {
            
             boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
           }
     },
     card: {
        margin: '1%',
        display: 'flex'
    },
    thirdContainer: {
        margin: '3% 5% 0 5%',
        backgroundColor: '#00403C',
        borderRadius: '20px',
        padding: '3%',
        width: '70%'
    },
    heading2: {
        fontSize: '22px',
        color: '#CFF3E9',
        opacity: '0.5',
        fontFamily: 'Times New Roman',
        textShadow: '#00403C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
    gardenersProfile: {
        display: 'flex',
        margin: '2%',
        backgroundColor: '#CFF3E9',
        borderRadius: '25px',
        padding: '2%',
        boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
        '&:hover': {
            boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          }
    },
    gardenerImg: {
        width: '24%',
        borderRadius: '50%',
        boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,

    },
    gardenerDetails: {
        margin: '1% 0 0 3%',
        padding: '1%',
        width: '100%'
    },
    name: {
        fontSize: '24px',
        color: '#00403C',
        fontWeight: '600',
        opacity: '0.9',
        fontFamily: 'Times New Roman',
        textShadow: '#00403C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
    address: {
        fontSize: '20px',
        color: '#00403C',
        opacity: '0.8',
        fontFamily: 'Times New Roman',
        textShadow: '#00403C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
    rating: {
        fontSize: '20px',
        color: 'orange',
        fontFamily: 'Times New Roman',
        textShadow: '#00403C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
    bookNow:{
        
        backgroundColor: '#096C6E',
        color: 'ivory',
        padding: '3% 5% 3% 5%',
        float: 'right',
            boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#096C6E',
              color: 'ivory',
              boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }
        },
        fourthContainer: {
            display: 'flex',
            backgroundColor: '#CFF3E9',
            padding: '2% 5% 2% 5%',
            boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
            color: '#88DAD2',
            margin: '5% 2% 0 2%'
        },
        fourBoxes: {
     
            display: 'flex',
            marginLeft: '5%',
        },
        footerimg: {
            margin: '8% 3%',
            width: '15%',
            height: '80px'
        },
        footerimg2: {
            margin: '8% 3%',
            width: '15%',
            height: '80px'
        }, 
})

const GardenerNearYou = () => {
    const classes = useStyle();
    return (
              <Box className={classes.root}>
  <Box className={classes.topImg}>
             <Typography className={classes.gardeningMadeEasy}>Best Gardeners Near You</Typography>
             <img style={{marginLeft: '2%'}} src="http://pragatigardening.com/images/our-services-line.png" alt="" />
             <ul>
                 <li className={classes.lists}>Quality Workers</li>
                 <li className={classes.lists}>Excellent Services</li>
                 <li className={classes.lists}>On-time Service</li>
             </ul>
             </Box>
             <Box className={classes.bottomContainer}>
                         <Box className={classes.card}><PersonSearchIcon/><Typography>Choose the desired gardener</Typography></Box>
                         <Box className={classes.card}><AvTimerIcon/><Typography>Choose your time-slot</Typography></Box>
                         <Box className={classes.card}><HailIcon/><Typography>Hassle-free service</Typography></Box>
                    </Box>

                    <Box className={classes.thirdContainer}>
                          <Box className={classes.heading}>
                              <Typography className={classes.gardeningMadeEasy}> Gardeners</Typography>
                              <Typography className={classes.heading2}>all available gardners near your area </Typography>
                          </Box>
                         

                          <Box className={classes.gardenersProfile}>
                              
                                   <img className={classes.gardenerImg} src="https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png" alt=""/>
                                
                                <Box className={classes.gardenerDetails}>
                                     <Typography className={classes.name}>Ganesh Gaitonde</Typography>
                                     <Typography className={classes.address}>3456 Moon Lane, XYZ, MH 30308</Typography>
                                     <Box style={{display: 'flex', marginTop: '1%'}}>
                                     <Typography className={classes.rating}> <StarRateIcon /> 4.7  </Typography>
                                     <Typography style={{fontSize: '18px', marginTop: '1%', marginLeft: '5%', color: 'grey'}}>(321 ratings)</Typography>
                                     </Box>
                                     <Button className={classes.bookNow}>Book Now</Button>
                                     </Box>
                          </Box>

                          


                          <Box className={classes.gardenersProfile}>
                              
                              <img className={classes.gardenerImg} src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb--people-icon-avatar.jpg" alt=""/>
                           
                           <Box className={classes.gardenerDetails}>
                                <Typography className={classes.name}>Meena Tripathi</Typography>
                                <Typography className={classes.address}>788 Mirzapur, XYZ, MH 30308</Typography>
                                <Box style={{display: 'flex', marginTop: '1%'}}>
                                <Typography className={classes.rating}> <StarRateIcon /> 4.8  </Typography>
                                <Typography style={{fontSize: '18px', marginTop: '1%', marginLeft: '5%', color: 'grey'}}>(549 ratings)</Typography>
                                </Box>
                                <Button className={classes.bookNow}>Book Now</Button>
                                </Box>

                     </Box>

                     <Box className={classes.gardenersProfile}>
                              
                              <img className={classes.gardenerImg} src="https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png" alt=""/>
                           
                           <Box className={classes.gardenerDetails}>
                                <Typography className={classes.name}>Guddu Pandit</Typography>
                                <Typography className={classes.address}>376 Mirzapur, XYZ, MH 30308</Typography>
                                <Box style={{display: 'flex', marginTop: '1%'}}>
                                <Typography className={classes.rating}> <StarRateIcon /> 4.7  </Typography>
                                <Typography style={{fontSize: '18px', marginTop: '1%', marginLeft: '5%', color: 'grey'}}>(321 ratings)</Typography>
                                </Box>
                                <Button className={classes.bookNow}>Book Now</Button>
                                </Box>
                     </Box>

                     


                     <Box className={classes.gardenersProfile}>
                         
                         <img className={classes.gardenerImg} src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb--people-icon-avatar.jpg" alt=""/>
                      
                      <Box className={classes.gardenerDetails}>
                           <Typography className={classes.name}> Ruby Matthews </Typography>
                           <Typography className={classes.address}>3456 Hanifan Lane, XYZ, MH 30308</Typography>
                           <Box style={{display: 'flex', marginTop: '1%'}}>
                           <Typography className={classes.rating}> <StarRateIcon /> 4.8  </Typography>
                           <Typography style={{fontSize: '18px', marginTop: '1%', marginLeft: '5%', color: 'grey'}}>(549 ratings)</Typography>
                           </Box>
                           <Button className={classes.bookNow}>Book Now</Button>
                           </Box>

                </Box>

                <Box className={classes.gardenersProfile}>
                              
                              <img className={classes.gardenerImg} src="https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png" alt=""/>
                           
                           <Box className={classes.gardenerDetails}>
                                <Typography className={classes.name}>Shrikant Tiwari</Typography>
                                <Typography className={classes.address}>788 Chabi Lane, XYZ, MH 30308</Typography>
                                <Box style={{display: 'flex', marginTop: '1%'}}>
                                <Typography className={classes.rating}> <StarRateIcon /> 4.7  </Typography>
                                <Typography style={{fontSize: '18px', marginTop: '1%', marginLeft: '5%', color: 'grey'}}>(321 ratings)</Typography>
                                </Box>
                                <Button className={classes.bookNow}>Book Now</Button>
                                </Box>
                     </Box>

                     
                     {/* https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png */}


                     <Box className={classes.gardenersProfile}>
                         
                         <img className={classes.gardenerImg} src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb--people-icon-avatar.jpg" alt=""/>
                      
                      <Box className={classes.gardenerDetails}>
                           <Typography className={classes.name}>Yennefer </Typography>
                           <Typography className={classes.address}>Vengerberg, XYZ, MH 30308</Typography>
                           <Box style={{display: 'flex', marginTop: '1%'}}>
                           <Typography className={classes.rating}> <StarRateIcon /> 4.8  </Typography>
                           <Typography style={{fontSize: '18px', marginTop: '1%', marginLeft: '5%', color: 'grey'}}>(549 ratings)</Typography>
                           </Box>
                           <Button className={classes.bookNow}>Book Now</Button>
                           </Box>

                </Box>

                <Box className={classes.gardenersProfile}>
                              
                              <img className={classes.gardenerImg} src="https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png" alt=""/>
                           
                           <Box className={classes.gardenerDetails}>
                                <Typography className={classes.name}>Lucifer Morningstar</Typography>
                                <Typography className={classes.address}>3456 Heaven Lane, XYZ, MH 30308</Typography>
                                <Box style={{display: 'flex', marginTop: '1%'}}>
                                <Typography className={classes.rating}> <StarRateIcon /> 4.7  </Typography>
                                <Typography style={{fontSize: '18px', marginTop: '1%', marginLeft: '5%', color: 'grey'}}>(321 ratings)</Typography>
                                </Box>
                                <Button className={classes.bookNow}>Book Now</Button>
                                </Box>
                     </Box>

                     


                     <Box className={classes.gardenersProfile}>
                         
                         <img className={classes.gardenerImg} src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb--people-icon-avatar.jpg" alt=""/>
                      
                      <Box className={classes.gardenerDetails}>
                           <Typography className={classes.name}>Millie Bobby Brown</Typography>
                           <Typography className={classes.address}>3456 Hawkins Lane, XYZ, MH 30308</Typography>
                           <Box style={{display: 'flex', marginTop: '1%'}}>
                           <Typography className={classes.rating}> <StarRateIcon /> 4.8  </Typography>
                           <Typography style={{fontSize: '18px', marginTop: '1%', marginLeft: '5%', color: 'grey'}}>(549 ratings)</Typography>
                           </Box>
                           <Button className={classes.bookNow}>Book Now</Button>
                           </Box>

                </Box>

                    </Box>
                    <Box className={classes.fourthContainer}>
                        <Box className={classes.fourBoxes}>
                           <img className={classes.footerimg} src="https://www.ugaoo.com/media/wysiwyg/curated-55.png" alt=""/>
                           <Box>
                               <Typography style={{fontSize: '25px', color: '#00403C'}}>Our Total Guarantee</Typography>
                               <p style={{fontSize: '20px'}}>If you're not completely satisfied we'll come back and fix it, free of charge.</p>
                               <Link to='/'>Learn More</Link>
                           </Box>
                          
                         
                        </Box>
                        <Box>
                        <Box className={classes.fourBoxes}>
                        <img className={classes.footerimg2} src="https://static.ugaoo.com/version1633302848/frontend/Agnie/Ugaoo/en_US/images/icons/genuine.svg" alt=""/>
                           <Box>
                               <Typography style={{fontSize: '25px', color: '#00403C'}}>Bonded & Insured</Typography>
                               <p style={{fontSize: '20px'}}>We carry a multimillion dollar liability insurance policy so you're fully covered.</p>
                               <Link to='/'>Learn More</Link>
                           </Box>

                         
                        </Box>
                        </Box>
                    </Box>
                    <Footer/>
              </Box>
    )
}

export default GardenerNearYou;