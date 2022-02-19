import * as actionType from '../constants/airpurifyingitemsConstant';


export const getAirPurifyingItemsReducers = (state = { airpurifyingitems: [] }, action) => {
        switch (action.type){
           case actionType.GET_AIR_PURIFYING_ITEMS_SUCCESS:
               return { airpurifyingitems: action.payload }
           case actionType.GET_AIR_PURIFYING_ITEMS_FAIL:
            return { error: action.payload }

            default:
                return state
        } 
};

export const getAirPurifyingDetailsReducers = (state = {airpurifyingitem: {} }, action) => {
      switch (action.type){
          case actionType.GET_AIR_PURIFYING_DETAILS_SUCCESS:
            return { airpurifyingitem: action.payload }
         case actionType.GET_AIR_PURIFYING_DETAILS_FAIL:
             return { error: action.payload }
 
             default:
                 return state
      }
}