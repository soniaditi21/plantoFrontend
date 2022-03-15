import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
//import { makeStyles  } from '@mui/styles';
import CartItem from "./CartItem";
import { removeFromCart } from "../redux/actions/cartActions";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import TotalView from "./TotalView";
import { payUsingPaytm } from "../service/api";
import { post } from "../utils/paytm";

// const useStyle = makeStyles({
// component:{
// marginTop: '5%',
// display: 'flex' ,
// backgroundColor: '#EEFCFA',
// width: '100%',

// },
// emptyContainer: {
//   margin: '10%',
//   width: '100%',
//   padding: '2%',
//   display: 'flex',
//   flexDirection: 'column',
//   textAlign: 'center',
//   borderRadius: '20px',
//   backgroundColor: '#00403C',
//   backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,

//   boxShadow: `#88DAD2 0px 50px 100px -20px, #88DAD2 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
// },
// shopNowBtn: {
//   width: '30%',
//   height: '60%',
//   backgroundColor: '#00403C',
//   color: '#00403C',
//   '&:hover': {
//     backgroundColor: '#00403C',
//     color: '#EEFCFA'
//   },
//   margin: '2% auto 2% auto'
// },
// leftContainer:
// {
//   margin: '2% 0 0 2%',
//   width: '70%',
//   padding: '2%',
//   borderRadius: '20px',
//   backgroundColor: '#00403C',
//   backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,

//   boxShadow: `#88DAD2 0px 50px 100px -20px, #88DAD2 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,

// }
// rightContainer: {
//   width: '30%',
//   height: '50%',
//   margin: '2% 2% 0 4%',
//   padding: '2%',
//   backgroundColor: '#00403C',
//   backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
//   borderRadius: '25px',
//   boxShadow: `#88DAD2 0px 50px 100px -20px, #88DAD2 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
// },
// header: {
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   margin: '0 0 1% 0'
// },
// placeOrder: {
//   marginLeft: '50%',
//   width: '50%',
//   height: '50px',
//   backgroundColor: '#CFF3E9',
//   color: '#096C6E',
//   fontWeight: 600,
//   '&:hover': {
//     backgroundColor: '#096C6E',
//     color: 'ivory',
//     boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
//   }
// }

//})
const Cart = () => {
  // const classes = useStyle();
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cartItems);
  });

  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "soniaditi207@gmail.com",
    });

    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };

    post(information);
  };

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      {cartItems.length ? (
        <Box
          style={{
            marginTop: "5%",
            display: "flex",
            backgroundColor: "#EEFCFA",
            width: "100%",
          }}
        >
          <Box
            style={{
              margin: "2% 0 0 2%",
              width: "70%",
              padding: "2%",
              borderRadius: "20px",
              backgroundColor: "#00403C",
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
              boxShadow: `#88DAD2 0px 50px 100px -20px, #88DAD2 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
            }}
          >
            <Box
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                margin: "0 0 1% 0",
              }}
            >
              <Typography
                style={{ fontWeight: 600, fontSize: "28px", color: "ivory" }}
              >
                My Cart ({cartItems.length})
              </Typography>
            </Box>

            <Box>
              {cartItems.map((item) => (
                <CartItem item={item} removeItemFromCart={removeItemFromCart} />
              ))}
            </Box>
            <Box>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#096C6E",
                  color: "ivory",
                  boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
                  fontWeight: 600,

                  padding: "3% 7% 3% 7%",
                  marginTop: "5%",
                  "&:hover": {
                    color: "ivory",
                    boxShadow:
                      "#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  },
                }}
                onClick={() => buyNow()}
              >
                Place Order
              </Button>
            </Box>
          </Box>
          <Box
            style={{
              width: "30%",
              height: "50%",
              margin: "2% 2% 0 4%",
              padding: "2%",
              backgroundColor: "#00403C",
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
              borderRadius: "25px",
              boxShadow: `#88DAD2 0px 50px 100px -20px, #88DAD2 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
            }}
          >
            <TotalView cartItems={cartItems} />
          </Box>
        </Box>
      ) : (
        <Box
          style={{
            marginTop: "5%",
            display: "flex",
            backgroundColor: "#EEFCFA",
            width: "100%",
          }}
        >
          <Box
            style={{
              margin: "10%",
              width: "100%",
              padding: "2%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              borderRadius: "20px",
              backgroundColor: "#00403C",
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
              boxShadow: `#88DAD2 0px 50px 100px -20px, #88DAD2 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
            }}
          >
            <Box>
              <ShoppingCartOutlinedIcon
                fontSize="large"
                color="inherit"
                sx={{ fontSize: 100, color: "#096C6E" }}
              />
            </Box>
            <typography
              style={{
                fontSize: "40px",
                fontFamily: "Times New Roman, Times, serif",
                fontWeight: 600,
                color: "white",
              }}
            >
              Your Cart is Empty
            </typography>
            <typography
              style={{
                fontSize: "30px",
                fontFamily: "Times New Roman, Times, serif",
                color: "white",
              }}
            >
              Add items to it now.
            </typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#096C6E",
                  color: "ivory",
                  boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
                  fontWeight: 600,

                  padding: "1%",
                  marginTop: "5%",
                  "&:hover": {
                    color: "ivory",
                    boxShadow:
                      "#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  },
                }}
              >
                {" "}
                Shop Now{" "}
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Cart;
