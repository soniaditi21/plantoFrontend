import axios from 'axios';
import * as action from '../constants/airpurifyingitemsConstant';


const url = 'https://plantobyaditi.herokuapp.com';

export const getAirPurifyingItems = () => async (dispatch) => {
          try{
             const {data} = await axios.get(`${url}/airpurifyingitems`);
             dispatch({type: action.GET_AIR_PURIFYING_ITEMS_SUCCESS, payload: data});

          } catch(error){
            dispatch({type: action.GET_AIR_PURIFYING_ITEMS_FAIL, payload: error.response});
          }
}

export const getAirPurifyingDetails = (id) => async(dispatch) => {
        try{
          const {data} = await axios.get(`${url}/airpurifyingitem/${id}`);
          dispatch({type: action.GET_AIR_PURIFYING_DETAILS_SUCCESS, payload: data});

        } catch(error){
          dispatch({type: action.GET_AIR_PURIFYING_DETAILS_FAIL, payload: error.response});
        }
}