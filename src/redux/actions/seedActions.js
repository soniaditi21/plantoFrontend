import axios from 'axios';
import * as action from '../constants/seedConstant';


//const url = 'http://localhost:5000';
const url = '';
export const getSeeds = () =>  async (dispatch) => {
   try{ 
        const { data } =  await axios.get(`${url}/seeds`);
        dispatch({type: action.GET_SEED_SUCCESS, payload: data});

   } catch(error){
         dispatch({type: action.GET_SEED_FAIL, payload: error.response });
   }
}



export const getSeedDetails = (id) => async (dispatch) => {
      try{
            const { data } =  await axios.get(`/seed/${id}`);
            dispatch({type: action.GET_SEED_DETAIL_SUCCESS, payload: data});
      } catch(error){
            dispatch({type: action.GET_SEED_DETAIL_FAIL, payload: error.response });
      }
}