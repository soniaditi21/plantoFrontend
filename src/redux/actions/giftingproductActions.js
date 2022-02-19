import axios from 'axios';
import * as action from '../constants/giftingproductConstant';

//const url = 'http://localhost:5000';
const url = '';

export const getGiftingProducts = () =>  async (dispatch) => {
   try{ 
        const { data } =  await axios.get(`${url}/giftingproducts`);
        dispatch({type: action.GET_GIFTING_PRODUCT_SUCCESS, payload: data});

   } catch(error){
         dispatch({type: action.GET_GIFTING_PRODUCT_FAIL, payload: error.response });
   }
}



export const getGiftingProductDetails = (id) => async (dispatch) => {
      try{
            const { data } =  await axios.get(`/giftingproduct/${id}`);
            dispatch({type: action.GET_GIFTING_PRODUCT_DETAIL_SUCCESS, payload: data});
      } catch(error){
            dispatch({type: action.GET_GIFTING_PRODUCT_DETAIL_FAIL, payload: error.response });
      }
}