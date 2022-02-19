import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useEffect } from "react";
const useStyle = makeStyles({
    header: {
        color: '#CFF3E9',
        fontSize: '25px',
        fontFamily: 'Times New Roman',
        marginBottom: '10%',
        fontWeight: 600,
        borderBottom: '1px solid #CFF3E9',
   
    },
    content: {
        color: '#CFF3E9',
        fontFamily: 'Times New Roman',
        fontSize: '20px',
        margin: '1% 3% 5% 0'

    },
    price: {
        float: 'right'
    },
    totalAmount:{
        margin: '2% 0 4% 0',
        color: '#CFF3E9',
        fontFamily: 'Times New Roman',
        fontSize: '28px',
        borderTop: '1px dashed #CFF3E9',
        borderBottom: '1px dashed #CFF3E9',
    }
})

const TotalView = ({cartItems}) => {
   const classes= useStyle();

   const [price, setPrice ] = useState(0);
   const [discount, setDiscount] = useState(0);
   const[totalPrice, setTotalPrice]= useState(0);
   const [saved,setSaved] = useState(0);
   useEffect(() => {
       totalAmount();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[cartItems]);

   const totalAmount = () => {
       let price = (0), discount = 0,totalPrice=0,saved=0;
       // eslint-disable-next-line array-callback-return
       cartItems.map(item => {
           price += parseInt(item.price.strikeprice);
           discount += parseInt(item.price.actualprice);
           totalPrice += parseInt(item.price.actualprice)+40;
           saved += item.price.strikeprice-item.price.actualprice;
       });
       setPrice(price);
       setDiscount(discount);
       setTotalPrice(totalPrice);
       setSaved(saved);
   } 
    return(
       <Box className={classes.component}>
           <Box>
              <Typography className={classes.header}>PRICE DETAILS</Typography>
           </Box>
           <Box>
           <Typography className={classes.content}>Price ({cartItems.length}) <span className={classes.price}>₹{price}</span></Typography>
           <Typography className={classes.content}>Discount Price <span className={classes.price}>₹{discount}</span></Typography>
           <Typography className={classes.content}>Delivery <span className={classes.price}>₹40</span></Typography>
           <Typography className={classes.totalAmount}>Total Amount <span className={classes.price}>₹{totalPrice}</span></Typography>
           <Typography className={classes.content} style={{color: '#096C6E'}}>You will save <span><b>₹{saved}</b> on this order</span></Typography>
           </Box>
       </Box>
    )
}

export default TotalView;