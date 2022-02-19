import { Box,  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Bounce from 'react-reveal/Bounce';


const useStyles = makeStyles(() => ({
    root: {
        margin: '5%',
    
        width: '90%'
    },
     container1: {
         display: 'flex',
         borderWidth: '7px',
         
     },
     imgBox: {
         width: '100%',
         height: '100%',
         borderRadius: '35px',
         '&:hover': {
            color:'white',
            boxShadow: '#88DAD2 0px 44px 145px, #88DAD2 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          },
          boxShadow: 'rgba(0,0,0,2.5)'
     },
     img1:{
         width: '100%',
         height: '100%',
         borderRadius: '35px',
         boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,

     },
     top: {
         width: '50%',
         height: '100%',
         backgroundColor: '#00403C',
         boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,

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
        boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
        borderRadius: '35px 0 35px 35px',
         marginTop: '7%',
        width: '50%',
        height: '100%',
        padding: '1%'
     },
     imgBox2: {
        width: '100%',
        height: '100%',
        borderRadius: '35px',
        boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,

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


function Container2 ()  {
     const classes= useStyles();
    return(
        <Box  className={classes.root}>
            <Box className={classes.container1}>
                <Box className={classes.imgBox}>
                    <Bounce left>
                    <Link to='/CeramicPots'>
                    <img className={classes.img1} src="https://media.ugaoo.com/wysiwyg/tile-plantersnewjan.jpg" alt='plantOnFleek' />
                    </Link>
                    </Bounce>
                </Box>

                <Box className={classes.top}>

                   <Bounce right>
                   <h2 className={classes.headline}> Planters on fleek! </h2>
                   <p style={{fontSize: '16px'}}>The perfect companions for your green members and also decor pieces in their own right, our planters truly amp up your space. There is a plant for every home and a planter for every plant. Browse our extensive in-house collection to find your match.</p>
                   <Link to='/CeramicPots'><h3>Explore More..</h3></Link>
                   </Bounce>

                </Box>
            </Box>
         
            <Box className={classes.container2}>
                   
                 
                  <Box className={classes.bottom}> 
                  <Bounce left>
                      <h2 className={classes.headline2}>Gifts that grow</h2>
                 
                  <p style={{fontSize: '16px'}}>Be it festivals, birthdays or anniversaries, gifting plants signifies hope - for the future. What's better than gifts that grow with you and remind you of happy times. You select, we deliver, and happiness is guaranteed.</p>
                  <Link to='/Gifting'><h3>Gift Now..</h3></Link>
                  </Bounce>
                  </Box>

                  <Box>
                  <br/>
                  <Bounce right>
                  <Link to='/Gifting'>
                  <img className={classes.imgBox2}  src="https://media.ugaoo.com/wysiwyg/tile-giftingnewjan.jpg" alt='giftPlant' />
                  </Link>
                  </Bounce>
                  </Box> 
            </Box>
        </Box>
    )

}

export default Container2;