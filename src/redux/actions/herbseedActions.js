import axios from 'axios';
import * as action from '../constants/herbseedConstant';

//const url = 'http://localhost:5000';
const url = '';

export const getHerbSeeds = () =>  async (dispatch) => {
   try{ 
        const { data } =  await axios.get(`${url}/herbseeds`);
        dispatch({type: action.GET_HERB_SEED_SUCCESS, payload: data});

   } catch(error){
         dispatch({type: action.GET_HERB_SEED_FAIL, payload: error.response });
   }
}



export const getHerbSeedDetails = (id) => async (dispatch) => {
      try{
            const { data } =  await axios.get(`/herbseed/${id}`);
            dispatch({type: action.GET_HERB_SEED_DETAIL_SUCCESS, payload: data});
      } catch(error){
            dispatch({type: action.GET_HERB_SEED_DETAIL_FAIL, payload: error.response });
      }
}