// eslint-disable-next-line

import  { Dialog, DialogContent, TextField, makeStyles, Button, Box, Typography} from '@material-ui/core';
import React, {  useState } from 'react';
import { authenticateSignup, authenticateLogin } from './service/api.js';

const useStyle = makeStyles({
  // body: {

  //   background-size: cover;
  //   margin:0;
  //   padding:0;
  //   box-sizing:border-box;
  //   color:white;
  // }
  
  container: {
    display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100%'
  },
    formBox: {
        width: '380px',
        height: '450px',
        backgroundColor: 'black',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        opacity: '0.5',
        bordeRadius: '2%'
    },
  headerForm: {
    marginBottom: '15px'
  },
  button: {
    marginTop: '40px',
    marginBottom: '10px'
  },
  message: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  social: {
    display:  'flex',
    justifyContent: 'space-around',
    padding: '30px',

    '&:i': {
      fontSize: '35px',

      '&:hover': {
        color: 'red',
        cursor: 'pointer'
      }
    },
  
  },

  
  component: {
    height: '100%',
    width: '95vh',
    backgroundImage: `linear-gradient(to bottom,  rgba(33, 139, 226, 0.222) 0%,rgba(214, 231, 231, 0.966) 100%),)`,
  },
  mainbox: {
    display: 'flex',

  },
  image: {
    backgroundImage: `linear-gradient(to bottom,  rgba(33, 139, 226, 0.514) 0%,rgba(214, 231, 231, 0.966) 100%), url('https://images.unsplash.com/photo-1446824505046-e43605ffb17f')`,
    height: '80vh',
    width: '40%',
    backgroundPosition: 'center 85%',
    padding: '45px'
    
  },
  login: {
    padding: '25px 35px',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',

  },
  text: {
    color: 'black',
    fontSize: 12,
    marginTop: 15,
    marginBottom: 15
  },
  loginBtn: {
      textTransform: 'none',
      backgroundColor: 'rgba(0,0,0,0.3)',
      color: 'black',
      height: 48,
      borderRadius: 2,
      '&:hover': {
        backgroundColor:'rgba(0, 0, 0, 0.5)',
      },
  },
  requestBtn: {
    textTransform: 'none',
    backgroundColor: ' rgba(0,0,0,0.3)',
    color: 'black',
    height: 48,
    borderRadius: 2,
    '&:hover': {
      backgroundColor:'rgba(0, 0, 0, 0.5)',
    },
  },
  createText: {
     textAlign: 'center',
     marginTop: 'auto',
     fontSize: 14,
     color: 'black',
     fontWeight: 600,
     cursor: 'pointer'
  }
})

const initialValue = {
  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
    view: 'Sign Up',
    heading: 'Login',
    subHeading: 'Look like, You are new here!'
  }
}

const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: '',
}

const loginInitialValues = {
 username: '',
 passwors: '',

}
const Login = ({ open, setOpen, setAccount }) => {

const classes = useStyle();


const [account, toggleAccount ] = useState(initialValue.login);
const [signup, setSignup] = useState(signupInitialValues);
const [login, setLogin ] = useState(loginInitialValues);
const [error, setError] = useState(false);

const handleClose = () => {
      setOpen(false);
      toggleAccount(initialValue.login);
  };

const toggleUserAccount = () => {
  toggleAccount(initialValue.signup);
}

const signupUser = async () => {
  let response = await authenticateSignup(signup);
  if(!response) return;
   handleClose();
   setAccount(signup.username);
}


const loginUser = async () => {
  let response = await authenticateLogin(login);
  if(!response) {
  setError(true);
  return;
}
  handleClose();
  setAccount(login.username);
}

const onInputChange = (e) => {
   setSignup({...signup, [e.target.name]: e.target.value});
}


const onValueChange = (e) => {
  setLogin({...login, [e.target.name]: e.target.value});
}


  return(
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component} >
        <Box className={classes.mainbox}>

          {/* <Box className={classes.image}>
          <Typography variant="h5" style={{color: 'black', fontWeight: 600}}>{account.heading}</Typography>
          <Typography style={{marginTop: '25px', color: 'black', fontWeight: 600}}>{account.subHeading}</Typography>
          </Box> */}
{
  account.view === 'login' ?
          <Box className={classes.login}>
           <TextField onChange={(e) => onValueChange(e) } name='username' label='Enter Email / Mobile Number'/>
           <TextField onChange={(e) => onValueChange(e) } name='password' label='Enter Password'/>
           {
             error && <Typography style={{color: 'red', fontSize: 14}}>Invalid Username or Password</Typography>
           }
           <Typography className={classes.text}>By continuing, you agree to our Terms of Use and Privacy Policy.</Typography>
           <Button onClick={() => loginUser()} variant='contained' className={classes.loginBtn} >Login</Button>
           {/* <Typography className={classes.text} style={{textAlign: 'center'}}>OR</Typography>
           <Button variant='contained' className={classes.requestBtn}>Request OTP</Button> */}
           <Typography onClick={() => toggleUserAccount()} className={classes.createText}> New User, Create an Account </Typography>
          </Box> :

          <Box className={classes.login}>
             <TextField onChange={(e) => onInputChange(e)}name='firstname' label='Enter First Name'/>
             <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Last Name'/>
             <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username'/>
             <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email'/>
             <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password'/>
             <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone Number'/>
              <Button variant='contained' onClick={() => signupUser()} className={classes.loginBtn} style={{marginTop: 'auto'}}>Sign Up</Button>
          </Box>

        }


        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default Login;
