import axios from 'axios';
import * as action from '../constants/soilManureConstant';

//const url = 'http://localhost:5000';
const url = 'https://plantobyaditi.herokuapp.com';

export const getSoilManures = () =>  async (dispatch) => {
   try{ 
        const { data } =  await axios.get(`${url}/soilManures`);
        dispatch({type: action.GET_SOIL_MANURE_SUCCESS, payload: data});

   } catch(error){
         dispatch({type: action.GET_SOIL_MANURE_FAIL, payload: error.response });
   }
}



export const getSoilManureDetails = (id) => async (dispatch) => {
      try{
            const { data } =  await axios.get(`${url}/soilManure/${id}`);
            dispatch({type: action.GET_SOIL_MANURE_DETAIL_SUCCESS, payload: data});
      } catch(error){
            dispatch({type: action.GET_SOIL_MANURE_DETAIL_FAIL, payload: error.response });
      }
}