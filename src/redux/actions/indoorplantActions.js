import axios from 'axios';
import * as action from '../constants/indoorplantConstant';

//const url = 'http://localhost:5000';
const url = 'https://plantobyaditi.herokuapp.com';
export const getIndoorPlants = () => async (dispatch) => {
          try{
             const {data} = await axios.get(`${url}/indoorplants`);
             dispatch({type: action.GET_INDOOR_PLANT_SUCCESS, payload: data});

          } catch(error){
            dispatch({type: action.GET_INDOOR_PLANT_FAIL, payload: error.response});
          }
}

export const getIndoorPlantDetails = (id) => async(dispatch) => {
        try{
          const {data} = await axios.get(`/indoorplant/${id}`);
          dispatch({type: action.GET_INDOOR_PLANT_DETAIL_SUCCESS, payload: data});

        } catch(error){
          dispatch({type: action.GET_INDOOR_PLANT_DETAIL_FAIL, payload: error.response});
        }
}