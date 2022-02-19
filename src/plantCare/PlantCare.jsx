import { Box, Button, makeStyles, TextField, Typography} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import HailIcon from '@mui/icons-material/Hail';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import GrassIcon from '@mui/icons-material/Grass';
import { Link } from "react-router-dom";
import Footer from '../Footer.jsx';
import React, {  useState } from 'react';


const useStyle = makeStyles({

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
        textAlign: 'center'
    },
    centerdiv: {
        margin: 'auto',
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
    heading2: {
        fontSize: '30px',
        color: '#CFF3E9',
        fontFamily: 'Times New Roman',
        textShadow: '#00403C 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

    },
    insideTypo: {
 fontSize: '25px',
 fontFamily: 'Times New Roman',
 color: '#00403C',
 textShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

    },
    inputarea: {
       margin: '5% 0 1% 0 ',
       
    },
    srchBtn: {
  
        padding: '1%',
        width: '40%',
        height: '56px',
        margin: '0 1% 0 3%',
        backgroundColor: '#00403C',
        color: '#CFF3E9',
        boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,

        '&:hover': {
            backgroundColor: '#00403C',
         color: 'ivory',
         boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
       }
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
      
        margin: '1% 15% 5% 15%',

    },
    paraImg: {
        width: '70%',
        borderRadius: '25px',
        boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,

    },
    fourthContainer: {
        display: 'flex',
        backgroundColor: '#CFF3E9',
        padding: '2% 5% 2% 5%',
        boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
        color: '#88DAD2',
        margin: '0 2% 0 2%'
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
});

 const PlantCare = () => {
    const classes=useStyle();

    const [zip, setZip] = useState('');

   const  onValueChange = (e) => {
        setZip({...zip, [e.target.name]: e.target.value});
      
      console.log(zip.length);
    }

    const openLocationDetail = () => {
        
        if(zip !== ''){
            window.open('./gardenerNearYou'); 
        }
        else{
            alert('Enter Valid Zip Code');
        }
       
    }

     return(
         <Box className={classes.root}>
             <Box className={classes.topImg}>
             <Typography className={classes.gardeningMadeEasy}>Gardening Services Made Easy</Typography>
             <Typography className={classes.heading2}>Find a local gardener in minutes</Typography>
                    <Box className={classes.centerdiv}>
                        <Typography className={classes.insideTypo}>Backed by a total satisfaction guarantee and amazing customer support.</Typography>

                        <Box className={classes.inputarea}>
                        <TextField onChange={(e) => onValueChange(e)} id="outlined-basic"  variant="outlined"  name='zip' label='Enter Zip' /> 
                        <Button className={classes.srchBtn} onClick={() => openLocationDetail()}>Search</Button>
                        </Box>
                    </Box>
             </Box>
             <Box className={classes.bottomContainer}>
                         <Box className={classes.card}><SearchIcon/><Typography >Search for the location</Typography></Box>
                         <Box className={classes.card}><PersonSearchIcon/><Typography>Choose the desired gardener</Typography></Box>
                         <Box className={classes.card}><AvTimerIcon/><Typography>Choose your time-slot</Typography></Box>
                         <Box className={classes.card}><HailIcon/><Typography>Hassle-free service</Typography></Box>
                    </Box>

                    <Box className={classes.thirdContainer}>
                        <Typography style={{fontSize: '40px',fontWeight: 600, fontFamily: 'Times New Roman'}}><AddLocationAltIcon fontSize="large"/> Find the best garden services near you</Typography>
                        <p style={{fontSize: '20px'}}>Here at Planto, we are taking a new approach to an age-old industry. Our skilled planto technicians have years of gardening experience.</p>
                        <p style={{fontSize: '20px'}}>With Planto, we know that you will love your lawn and garden. That’s why we offer a total satisfaction guarantee.</p>

                        <Typography style={{fontSize: '30px', fontWeight: 600,fontFamily: 'Times New Roman'}}>Looking for a gardening service?</Typography>
                        <p style={{fontSize: '20px'}}>A beautiful garden can transform a property. Whether you're trying to recreate the gardens at Versailles, or something a bit less extravagant, Lawn Love can help.</p>
                        <p style={{fontSize: '20px'}}>We'll pair you with a skilled local gardener who will get your garden looking just the way you like it, and ensure it stays that way. Our skilled, independent gardeners have an average of 10 years of experience caring for gardens of all shapes and sizes.</p>

                        
                        <Typography style={{fontSize: '35px', fontWeight: 600,fontFamily: 'Times New Roman'}}><GrassIcon fontSize="large"/> What exactly is included in a gardening service?</Typography>
                        <p style={{fontSize: '20px'}}>Your lawn pro can help take care of any gardening service, some of which include:</p>
                    
                        <ul>
                            <li style={{fontSize: '20px'}}>Bush and shrub trimming</li>
                            <li style={{fontSize: '20px'}}>Weeding</li>
                            <li style={{fontSize: '20px'}}>Green waste disposal</li>
                            <li style={{fontSize: '20px'}}>Mowing</li>
                            <li style={{fontSize: '20px'}}>Edging</li>
                            <li style={{fontSize: '20px'}}>And more!</li>
                        </ul>
                      
                       <p style={{fontSize: '20px'}}>Gardener maintenance work comes in all kinds of different shapes and sizes.</p>
                       <img className={classes.paraImg} src="https://cdn.lawnlove.com/assets/blocks/farmer-hands.jpg" alt=""/>
                    </Box>

                    <Box className={classes.fourthContainer}>
                        <Box className={classes.fourBoxes}>
                           <img className={classes.footerimg} src="https://www.ugaoo.com/media/wysiwyg/curated-55.png" alt=""/>
                           <Box>
                               <Typography style={{fontSize: '25px'}}>Our Total Guarantee</Typography>
                               <p style={{fontSize: '20px'}}>If you're not completely satisfied we'll come back and fix it, free of charge.</p>
                               <Link to='/'>Learn More</Link>
                           </Box>
                          
                         
                        </Box>
                        <Box>
                        <Box className={classes.fourBoxes}>
                        <img className={classes.footerimg2} src="https://static.ugaoo.com/version1633302848/frontend/Agnie/Ugaoo/en_US/images/icons/genuine.svg" alt=""/>
                           <Box>
                               <Typography style={{fontSize: '25px'}}>Bonded & Insured</Typography>
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

 export default PlantCare;