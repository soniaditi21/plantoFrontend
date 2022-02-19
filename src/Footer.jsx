import { Box,  Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';


const useStyle = makeStyles(theme => ({
    FirstHeading: {
        fontSize: '45px',
        color: '#00403C',
        fontWeight: '600',
        fontFamily: 'Times New Roman',
        margin: '1% 0 0 5%',
        
    },
    secondHeading: {
        fontSize: '22px',
        fontWeight: '555',
        fontFamily: 'Times New Roman',
        color: '#00403C',
        margin: '1% 0 0 5%'
    },
     firstContainer: {
           display: 'flex',
           justifyContent: 'space-between',
           margin: '5%'
     },
     imgContainer: {
        width: '25%', 
        padding: '5%',
        borderRadius: '25px',
        margin: '1%',
        boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
        '&:hover': {
            borderWidth: '5px',
            backgroundColor: '#00403C',
            color: 'ivory',
            boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
  
          },

     },
     secondContainer: {
         padding: '7%',
         textAlign: 'center',
         backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
         backgroundColor: '#00403C',
         boxShadow: '#88DAD2 0px 13px 10px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
         margin: '2%',
          borderRadius: '10px',
     
     },
     secFirstHeading: {
        fontSize: '45px',
        color: 'ivory',
      
        opacity: '0.8',
        fontFamily: 'Times New Roman',
        textShadow: '#00403C 5px 18px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

     },
     secsecondHeading: {
        fontSize: '25px',
        fontWeight: '555',
        fontFamily: 'Times New Roman',
        color: 'ivory',
        opacity: '0.7'
       
     },
     thirdContainer: {

         display: 'flex',
         padding: '2%',
       margin: '5% 0 5% 0',
         backgroundImage: `linear-gradient(to bottom,  rgba(4, 128, 134, 0.577) 0,rgba(5, 25, 55, 0.577) 70%), `,
     },
     iconsContainer: {
         display: 'flex',
         flexDirection: 'row',
         marginLeft: '36%',
         marginBottom: '2%',
         width: '28%',
         textAlign: 'center',
         justifyContent: 'space-between',
         
     },
     icons: {
       margin: '2%',
       boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
      borderRadius: '25px',
      padding: '3%',
      backgroundColor: '#00403C',
      color: 'ivory',
      '&:hover': {
        boxShadow: '#00403C 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

      },
     },
     fourthContainer: {
         padding: '2%',
         justifyContent: 'space-between'
     },
     fourComponent: {
       textAlign: 'center',
       display: 'flex',
      marginTop: '2%'
     },
     customerCare: {
        fontSize: '22px',
        fontFamily: 'Times New Roman',
        color: '#00403C',
        boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
        padding: '1%',
        borderRadius: '5px',
     },
     email: {
        fontSize: '22px',
        marginLeft: 'auto',
        padding: '1%',
        borderRadius: '5px',
        fontFamily: 'Times New Roman',
        float: 'right',
        boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
        color: '#00403C'
     },
     lastContainer: {
         display: 'flex',
         justifyContent: 'space-between',
         margin: '3%',
     },
     lastComponent: {
         display: 'flex'
     }
}));



const Footer = () => {
    const classes = useStyle();

    return (
      
        <Box>

            <Typography className={classes.FirstHeading}>Why Our Plants?</Typography>
            <Typography className={classes.secondHeading}>Healthy organically grown plants delivered to your doorstop</Typography>

           <Box className={classes.firstContainer}>

               <Box className={classes.imgContainer}>
                   <img src="https://www.ugaoo.com/media/wysiwyg/icons-why-buy-from-us-safe-packaging-and-delivery1.png" alt='imgg'/>
                   <Typography>Safe Packaging and Guaranteed Quick Delivery</Typography>
               </Box>

               
               <Box className={classes.imgContainer}>
                   <img src="https://www.ugaoo.com/media/wysiwyg/icons-why-buy-from-us-expert-handholding1.png" alt='imgg'/>
                   <Typography>Guidance from Gardening Experts and Hand-holding</Typography>
               </Box>
               
               <Box className={classes.imgContainer}>
                   <img src="https://www.ugaoo.com/media/wysiwyg/icons-why-buy-from-us-replacement1.png" alt='imgg'/>
                   <Typography>Assured Replacement In-case of Transit Damage</Typography>
               </Box>
               
               <Box className={classes.imgContainer}>
                   <img src="https://www.ugaoo.com/media/wysiwyg/icons-why-buy-from-us-curated1.png" alt='imgg'/>
                   <Typography>Home Grown Plants Curated Just For You</Typography>
               </Box>
           </Box>

           <Box className={classes.secondContainer}>

           <Typography className={classes.secFirstHeading}>At Planto, we firmly believe that we do not inherit the earth from our ancestors, but borrow it from our children.</Typography>
           <Typography className={classes.secsecondHeading}>Let's pass it on cleaner, better, and greener.</Typography>

           </Box>

           <Box className={classes.fourthContainer}>
                
         
                    <Box className={classes.iconsContainer}>
                <Box className={classes.icons}> <FacebookRoundedIcon/>  </Box>
              <Box className={classes.icons}> <TwitterIcon /></Box>
              <Box className={classes.icons}> <InstagramIcon/></Box>
              <Box className={classes.icons}><YouTubeIcon/></Box>
              <Box className={classes.icons}><PinterestIcon/></Box>
              <Box className={classes.icons}> <LinkedInIcon/>  </Box>
              </Box>
             
             <Divider/>
               <Box className={classes.fourComponent}>
                    <Typography className={classes.customerCare}>Customer Care: +91 987654321</Typography>
                    <Typography className={classes.email} >Email Us: support@planto.com</Typography>
                    </Box> 
                        
           </Box>

         <Divider/>
           <Box className={classes.lastContainer}>
             
             <Box className={classes.lastComponent}>
                 <img src="https://static.ugaoo.com/version1633302848/frontend/Agnie/Ugaoo/en_US/images/icons/india.svg" alt="Made In India" />
                 <Typography>Made In India</Typography>
             </Box>

             <Box className={classes.lastComponent}>
                 <img src="https://static.ugaoo.com/version1633302848/frontend/Agnie/Ugaoo/en_US/images/icons/grown.svg" alt="Grown With Love" />
                 <Typography>Grown With Love</Typography>
             </Box>

             <Box className={classes.lastComponent}>
                 <img src="https://static.ugaoo.com/version1633302848/frontend/Agnie/Ugaoo/en_US/images/icons/genuine.svg" alt="Premium Quality" />
                 <Typography>Premium Quality</Typography>
             </Box>

             <Box className={classes.lastComponent}>
                 <img src="https://static.ugaoo.com/version1633302848/frontend/Agnie/Ugaoo/en_US/images/icons/delivered.svg" alt="Delivered With Care" />
                 <Typography>Delivered With Care</Typography>
             </Box>

             <Box className={classes.lastComponent}>
                 <img src="https://static.ugaoo.com/version1633302848/frontend/Agnie/Ugaoo/en_US/images/icons/secure.svg" alt="Secure Payment" />
                 <Typography>Secure Payment</Typography>
             </Box>
           </Box>

           <Divider/>

              <Box style={{textAlign: 'center', marginTop: '2%'}}><Typography style={{fontSize: '12px'}}>Made By Aditi Soni.</Typography></Box>
        </Box>
    );
}

export default Footer; 