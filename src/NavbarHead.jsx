// eslint-disable-next-line




import React, {  useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {  useSelector } from 'react-redux'
import Search from './Search.jsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Typography } from '@material-ui/core';

import Login from './Login';
import { LoginContext } from './context/ContextProvider.jsx';
import Profile from './Profile.jsx';
import { Box } from '@mui/system';
import { Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { getProducts as listProducts } from './redux/actions/productActions';

const useStyles = makeStyles((theme) => ({
    root: {
         textAlign: 'right'
    },
    // .carouseldiv{
    //   margin: 3%;
    //   width: 90%;
    //   height: 90%;
    
    
    // }
    
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    title: {
        color: '#003638'
    },
    logoContainer: {
      margin: '0 5% 0 5%'
    },
    logoname: {
         color: 'white',
         fontWeight: 500,
         fontFamily: 'Ephesis, cursive',
         fontSize: 40,  
         textShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

    },
    appBarTransparent: {
      backgroundColor: '#00403C',
      backgroundImage: `linear-gradient(to bottom,  rgba(4, 168, 154, 0.577) 0%,rgba(5, 25, 55, 0.577) 100%)`,
    },
    appBarSolid: {
        backgroundColor: '#00403C',
    },
    search: {
      borderRadius: theme.shape.borderRadius,
      boxShadow: 'rgba(0, 0, 0, 0.0) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.0) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      '&:hover': {
        backgroundColor:'rgba(0, 0, 0, 0)',
        boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

      },
      width: '100%',
      height: '100%',
      margin: 'auto'
     
    },
    searchIcon: {
      padding: theme.spacing(1, 1),
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#112031'
    },
    inputRoot: {
      color: 'black',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    topbtn: {
      
      color: 'white',
      fontWeight: 600,
      '&:hover': {
        color:'white',
        boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      },
    },
   
    buttonContainer: {
      display: 'flex',
      paddingLeft: '15%',
      width: '40%'
    },
    btns:{
        margin: '0 3% 0 3%',
    },
    component: {
      textDecoration: 'none'
    },
   
}));

function NavbarHead(){
   const classes = useStyles();
   const [open, setOpen ] = useState(false);
   const {account, setAccount} =useContext(LoginContext);
   
   const { cartItems } = useSelector(state => state.cart);

const openLoginDialog = () => {
  setOpen(true);
}
// const [ text, setText ] = useState();
// const [ on, setOn ] = useState(true);

// const getText = (text) => {
//     setText(text);
//     setOn(false);
// }

// const getProducts = useSelector(state => state.getProducts);
// const { products } = getProducts;

// const dispatch = useDispatch();

// useEffect(() => {
//     dispatch(listProducts())
// }, [dispatch])
  return (

    <div className={classes.root}>
           
           
                <AppBar position="fixed" className={classes.appBarTransparent}>
                <Toolbar>

                <Box style={{width: '60%', display: 'flex'}}>
      
                  
                 
                  <Box className={classes.logoContainer}>
                  <Link to="/" className={classes.component}>
                  <Typography className={classes.logoname}>Planto</Typography>
                  </Link>
                  </Box>
                  <Search/>
                  {/* <Box className={classes.search}>

                      <Box className={classes.searchIcon}>
                      <SearchIcon />
                     </Box>

                  <InputBase
                    placeholder="Search…"
                    classes={{
                     root: classes.inputRoot,
                    input: classes.inputInput,
                     }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => getText(e.target.value)}
                     />
                      {
              text && 
              <List className={classes.list} hidden={on}>
                {
                  products.filter(product => product.title.shortTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOn(true)}  
                      >
                        {product.title.shortTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </List>
            }
   </Box> */}

                 </Box>

               
              
                <Box className={classes.buttonContainer}>

               {
                 account ? <Profile account={account} setAccount={setAccount} /> :
                 <Box className={classes.btns}>
                <Link to='/' style={{textDecoration: 'none'}}>
                <Button className={classes.topbtn} onClick={() => openLoginDialog()}>Login</Button>
                </Link>
                </Box>

              }
                <Box className={classes.btns}>
                  <Link to="/PlantCare" style={{textDecoration: 'none'}}>
                <Button className={classes.topbtn} >Plant Care</Button>
                </Link>
                </Box>


                <Box  className={classes.btns}>
                  
                <Link to='/cart' className={classes.component}>
                <Button  className={classes.topbtn}>
                <Badge badgeContent={cartItems.length} color="success">
                  <ShoppingCartIcon/>
                  </Badge></Button>
                </Link>
                
                </Box>
     
                  <Login open={open} setOpen={setOpen} setAccount={setAccount}/>
                </Box>
               
            </Toolbar>
        </AppBar>
        
    </div>


  );
}

export default NavbarHead;
