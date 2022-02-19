import { Typography, Menu, MenuItem } from '@material-ui/core';
import React, {  useState } from 'react';
import { makeStyles } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from 'react-router-dom';
const useStyle = makeStyles({


component: {
  marginTop: 40
},
  userStyle: {
    margin: 6,
    color: '#DCE5AE',
    fontWeight: 600,
    marginRight: 15,
    fontSize: 17
  }

});

const Profile = ({account, setAccount}) => {


  const [open, setOpen ] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

 const handleClick = (event) => {

   setOpen(event.currentTarget);
 }
  const classes = useStyle();

  const logout = () => {
    setAccount('');
  }
  return (
  <>
    <Link to='/' style={{textDecoration: 'none'}}> <Typography onClick={handleClick} className={classes.userStyle} >{account}</Typography>
    </Link>
     <Menu

   anchorEl={open}
   open={Boolean(open)}
   onClose={handleClose}
   className={classes.component}
     >
   <MenuItem onClick={() => {handleClose(); logout();}}>
   <PowerSettingsNewIcon fontSize='small' />
   Log Out</MenuItem>
 </Menu>
  </>
  )
}

export default Profile;
