
import axios from "axios";
import * as actionTypes from '../constants/cartConstant';

const url = 'https://plantobyaditi.herokuapp.com';

export const addToCart = (id)  => async (dispatch) => {
 
    try{
     
      const { data } = await axios.get(`${url}/product/${id}`);
      dispatch({ type: actionTypes.ADD_TO_CART, payload: data})
    } catch (error) {
        console.log('Error while calling product add to cart');
    }
}

export const apAddToCart = (id) => async (dispatch) => {
  try{
    const {data} =await axios.get(`${url}/airpurifyingitem/${id}`);
    dispatch({type : actionTypes.ADD_TO_CART, payload: data})
  } catch(error){
    console.log('Error while calling ap add to cart');
  }
}

export const ipAddToCart = (id) => async (dispatch) => {
  try{
    const {data} =await axios.get(`${url}/indoorplant/${id}`);
    dispatch({type : actionTypes.ADD_TO_CART, payload: data})
  } catch(error){
    console.log('Error while calling ip add to cart');
  }
}

export const gfAddToCart = (id) => async (dispatch) => {
  try{
    const {data} =await axios.get(`${url}/giftingproduct/${id}`);
    dispatch({type : actionTypes.ADD_TO_CART, payload: data})
  } catch(error){
    console.log('Error while calling gf add to cart');
  }
}


export const lmAddToCart = (id) => async (dispatch) => {
  try{
    const {data} =await axios.get(`${url}/lowmaintenanceplant/${id}`);
    dispatch({type : actionTypes.ADD_TO_CART, payload: data})
  } catch(error){
    console.log('Error while calling lm add to cart');
  }
}

export const cpAddToCart = (id) => async (dispatch) => {
  try{
    const {data} =await axios.get(`${url}/ceramicpot/${id}`);
    dispatch({type : actionTypes.ADD_TO_CART, payload: data})
  } catch(error){
    console.log('Error while calling cp add to cart');
  }
}

export const vsAddToCart = (id) => async (dispatch) => {
  try{
    const {data} =await axios.get(`${url}/seed/${id}`);
    dispatch({type : actionTypes.ADD_TO_CART, payload: data})
  } catch(error){
    console.log('Error while calling vs add to cart');
  }
}

export const hsAddToCart = (id) => async (dispatch) => {
  try{
    const {data} =await axios.get(`${url}/herbseed/${id}`);
    dispatch({type : actionTypes.ADD_TO_CART, payload: data})
  } catch(error){
    console.log('Error while calling hs add to cart');
  }
}

export const smAddToCart = (id) => async (dispatch) => {
  try{
    const {data} =await axios.get(`/soilManure/${id}`);
    dispatch({type : actionTypes.ADD_TO_CART, payload: data})
  } catch(error){
    console.log('Error while calling sm add to cart');
  }
}


export const removeFromCart = (id) => (dispatch) => {
      dispatch({type: actionTypes.REMOVE_FROM_CART, payload: id})
}