

import axios from 'axios';
import products from '../../../server/model/productSchema';


const url = 'https://plantobyaditi.herokuapp.com';


export const authenticateSignup = async (user) => {
  try{
    return await axios.post(`${url}/signup`, user);
  } catch(error){
    console.log('Error while calling signup API',error);
  }
  }


export const authenticateLogin = async (user) => {

  try{
    return await axios.post(`${url}/login`,user);
  } catch(error){
    console.log('Error while calling login api',error);
  }
}

export const getProductById = async (id) => {
  try {
    console.log(url);
      return await axios.get(`${url}/product/${id}`);
   
  } catch (error) {
      console.log('Error while getting product by id response', error);
  }
}
export const getAirPurifyingDetails = async (id) => {
  try {
      return await axios.get(`${url}/oneItemAirPurifying/${id}`);
  } catch (error) {
      console.log('Error while getting air purifying  by id response', error);
  }
}
export const getIndoorPlantById = async (id) => {
  try {
      return await axios.get(`${url}/indoorplant/${id}`);
  } catch (error) {
      console.log('Error while getting indoor plant by id response', error);
  }
}
export const getLowMaintenancePlantById = async (id) => {
  try {
      return await axios.get(`${url}/lowmaintenanceplant/${id}`);
  } catch (error) {
      console.log('Error while getting lowMaintenance by id response', error);
  }
}
export const getSeedById = async (id) => {
  try {
      return await axios.get(`${url}/seed/${id}`);
  } catch (error) {
      console.log('Error while getting seed by id response', error);
  }
}
export const getSoilManureById = async (id) => {
  try {
      return await axios.get(`${url}/soilManure/${id}`);
  } catch (error) {
      console.log('Error while getting soilManure by id response', error);
  }
}
export const getGiftingProductById = async (id) => {
  try {
      return await axios.get(`${url}/giftingproduct/${id}`);
  } catch (error) {
      console.log('Error while getting giftingt by id response', error);
  }
}

export const getCeramicPotById = async (id) => {
  try {
      return await axios.get(`${url}/ceramicpot/${id}`);
  } catch (error) {
      console.log('Error while getting ceramin by id response', error);
  }
}
export const getHerbSeedById = async (id) => {
  try {
      return await axios.get(`${url}/herbseed/${id}`);
  } catch (error) {
      console.log('Error while getting herb by id response', error);
  }
}
export const payUsingPaytm =  async (data) => {
  try{
    let response=  await  axios.post(`${url}/payment`,data);
     return response.data;
  } catch(error) {
    console.log('Error while calling paytm api',error);
  }
}