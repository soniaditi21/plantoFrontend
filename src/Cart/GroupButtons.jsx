import { Button, ButtonGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
const useStyle = makeStyles ({
  component: {
      margin: '0 3% 0 0',
      
  },
  btn:{
      width: '70px',
      height: '85%',
      backgroundColor: '#096C6E',
      color: '#98D0BF',
      fontWeight: 600,
      '&:hover': {
        backgroundColor: '#98D0BF',
        color: '#096C6E',
        boxShadow: 'rgba(0, 0, 0, 0.0) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.0) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
      }
  }

})
const GroupButtons = () => {
    const classes = useStyle();
const [ counter, setCounter ] = useState(1);

const handleIncrement = () => {
    setCounter(counter => counter+1);
}

const handleDecrement = () => {
    setCounter(counter => counter-1);
}
    return (
          
              <ButtonGroup className={classes.component}>
                  <Button className={classes.btn} style={{
                      width: '70px',
                      height: '55px',
                      backgroundColor: '#096C6E',
                      color: '#98D0BF',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: '#98D0BF',
                        color: '#096C6E',
                        boxShadow: 'rgba(0, 0, 0, 0.0) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.0) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                      }
                  }}
                  onClick={() => handleDecrement()} disabled={counter===1}>-</Button>
                  <Button className={classes.btn}  style={{
                    width: '70px',
                    height: '55px',
                    backgroundColor: '#98D0BF',
                    color: '#096C6E',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#98D0BF',
                      color: '#096C6E',
                      boxShadow: 'rgba(0, 0, 0, 0.0) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.0) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                    }
                }}>{counter}</Button>
                  <Button className={classes.btn} 
                  style={{
                    width: '70px',
                    height: '55px',
                    backgroundColor: '#096C6E',
                    color: '#98D0BF',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#98D0BF',
                      color: '#096C6E',
                      boxShadow: 'rgba(0, 0, 0, 0.0) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.0) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                    }
                }} onClick={() => handleIncrement()}>+</Button>
              </ButtonGroup>
        
    )

}

export default GroupButtons;