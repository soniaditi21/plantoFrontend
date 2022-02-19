import axios from 'axios';
import * as action from '../constants/lowmaintenanceplantConstant.js';

//const url = 'http://localhost:5000';
const url = 'https://plantobyaditi.herokuapp.com';

export const getLowMaintenancePlants = () =>  async (dispatch) => {
   try{ 
        const { data } =  await axios.get(`${url}/lowmaintenanceplants`);
        dispatch({type: action.GET_LOW_MAINTENANCE_PLANT_SUCCESS, payload: data});

   } catch(error){
         dispatch({type: action.GET_LOW_MAINTENANCE_PLANT_FAIL, payload: error.response });
   }
}

export const getLowMaintenancePlantDetails = (id) => async (dispatch) => {
      try{
            const { data } =  await axios.get(`${url}/lowmaintenanceplant/${id}`);
         dispatch({type: action.GET_LOW_MAINTENANCE_PLANT_DETAILS_SUCCESS, payload: data});
      } catch(error){
         dispatch({type :action.GET_LOW_MAINTENANCE_PLANT_DETAILS_FAIL, payload: error.response});
      }
}