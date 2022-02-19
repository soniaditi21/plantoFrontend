import * as actionTypes from '../constants/cartConstant';

export const cartReducer = (state = { cartItems: []}, action) => {

    switch(action.type) {
           case actionTypes.ADD_TO_CART:

         const item = action.payload;

         const exist =  state.cartItems.find(product  => product.id === item.id)
         const apExist = state.cartItems.find(airpurifyingitems => airpurifyingitems.id === item.id)
         const ipExist = state.cartItems.find(indoorplant => indoorplant.id === item.id )
         const lmExist = state.cartItems.find(lowmaintenanceplant => lowmaintenanceplant.id === item.id)
         const gfExist = state.cartItems.find(giftingproduct => giftingproduct.id === item.id)
         const cpExist = state.cartItems.find(ceramicpot => ceramicpot.id === item.id)
         const vsExist = state.cartItems.find(seed => seed.id === item.id)
         const hsExist = state.cartItems.find(herbseed => herbseed.id === item.id)
         const smExist = state.cartItems.find(soilManure => soilManure.id === item.id)
          if(exist || apExist || ipExist || lmExist || gfExist || cpExist || vsExist || hsExist || smExist)  return;
          return{ ...state ,cartItems: [...state.cartItems, item] }

    case actionTypes.REMOVE_FROM_CART:
         return{ ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload )}
          default: 
          return state;
    }
}
