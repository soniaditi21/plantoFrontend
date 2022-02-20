import { Button, Card, Typography } from "@mui/material";
import { Box} from "@mui/system";
//import { makeStyles } from "@mui/styles";
import GroupButtons from "./GroupButtons";

//const useStyle = makeStyles ({
    // component: {
    //   display: 'flex',
    //   margin: '3%',
    //   backgroundColor: 'ivory',
    //   borderRadius: '20px',
    //   '&:hover': {
    //     boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

    // },
    // },
    // leftComponent: {
    //     width: '30%',
    //     border: 'solid ivory',
    //     backgroundColor: '#CFF3E9',
    //     borderRadius: '15px',
    //     borderWidth: '1px',
    //     boxShadow: 'rgba(0, 0, 0, 0.0) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.0) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',

    // },
    // rightComponent: {
        
    //     display: 'flex',
    //     flexDirection: 'column',
    //    width: '70%',
    //    padding: '1% 0 1% 1%',
    //    backgroundColor: '#00403C',
    //     },
    // itemImg: {
    //     width: '100%',
    //     height: '100%'
    // },
    // removeBtn: {
    //     width: '5%',
    //     height: '50px',
    //     backgroundColor: '#CFF3E9',
    //     color: '',
    //     '&:hover': {
    //         color: '#00403C',
    //         backgroundColor: '#00403C',
    //         opacity: '0.9',
    //         boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

    //     },
        
   // }
//})
const CartItem = ({item, removeItemFromCart}) => {
  
    //const classes = useStyle();

    return(
        <Card style={{ display: 'flex', margin: '3%', backgroundColor: 'ivory', borderRadius: '20px', '&:hover': { boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}}>
           <Box style={{ width: '30%', border: 'solid ivory', backgroundColor: '#CFF3E9', borderRadius: '15px', borderWidth: '1px', boxShadow: 'rgba(0, 0, 0, 0.0) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.0) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px', }}>
              <img  style={{ width: '100%', height: '100%' }} src={item.url1}  alt='cartImg'/>
           </Box>
           <Box style={{ display: 'flex', flexDirection: 'column', width: '70%', padding: '1% 0 1% 1%', backgroundColor: '#00403C', }}>
               <Box>
           <Typography style={{fontSize: '35px', fontFamily: 'Times New Roman, Times, serif', color: 'ivory'}}>{item.title.shortTitle}</Typography>
            <Typography style={{margin: '0 0 2% 5%', fontSize: '23px', fontFamily: 'Times New Roman, Times, serif', color: 'ivory'}}>{item.title.longTitle}</Typography>
         
            <Typography style={{marginLeft: '5%', fontSize: '19px', color: 'ivory'}}>Price: <b>₹{item.price.strikeprice}</b></Typography>
            <Typography style={{marginLeft: '5%', fontSize: '21px', color: 'ivory'}}>Discount Price: <b>₹{item.price.actualprice}</b></Typography>
            </Box>
            <Box style={{display: 'flex', margin: '10% 1% 1% 1%'}}>
            <GroupButtons />
            <Button variant='contained'  onClick={() => removeItemFromCart(item.id)} style={{ 
            backgroundColor: '#096C6E',
           
                    height: '55px',
        color: 'ivory',
            boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
            fontWeight: 600,
            float: 'right',
            margin: '0 2% 0 5%',
            padding: '5% 18% 5% 18%',
            '&:hover': {
              color: 'ivory',
            }}}>Remove</Button>
            </Box>
           </Box>
        </Card>
    );
     

} 

export default CartItem;