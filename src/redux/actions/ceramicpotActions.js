import axios from 'axios';
import * as action from '../constants/ceramicpotConstant';

//const url = 'http://localhost:5000';
const url = 'https://plantobyaditi.herokuapp.com';

export const getCeramicPots = () =>  async (dispatch) => {
   try{ 
        const { data } =  await axios.get(`${url}/ceramicpots`);
        dispatch({type: action.GET_CERAMIC_POT_SUCCESS, payload: data});

   } catch(error){
         dispatch({type: action.GET_CERAMIC_POT_FAIL, payload: error.response });
   }
}



export const getCeramicPotDetails = (id) => async (dispatch) => {
      try{
            const { data } =  await axios.get(`/ceramicpot/${id}`);
            dispatch({type: action.GET_CERAMIC_POT_DETAIL_SUCCESS, payload: data});
      } catch(error){
            dispatch({type: action.GET_CERAMIC_POT_DETAIL_FAIL, payload: error.response });
      }
}