import axios from 'axios';
import * as action from '../constants/herbseedConstant';

//const url = 'http://localhost:5000';
const url = 'https://plantobyaditi.herokuapp.com';

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
            const { data } =  await axios.get(`${url}/herbseed/${id}`);
            dispatch({type: action.GET_HERB_SEED_DETAIL_SUCCESS, payload: data});
      } catch(error){
            dispatch({type: action.GET_HERB_SEED_DETAIL_FAIL, payload: error.response });
      }
}