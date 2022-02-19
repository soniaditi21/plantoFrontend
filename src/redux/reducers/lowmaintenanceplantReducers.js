import * as actionType from '../constants/lowmaintenanceplantConstant.js';


export const getLowMaintenancePlantsReducers = (state = { lowmaintenanceplants : []}, action) => {
    switch (action.type){
        case actionType.GET_LOW_MAINTENANCE_PLANT_SUCCESS:
            return {lowmaintenanceplants: action.payload }
        case actionType.GET_LOW_MAINTENANCE_PLANT_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}

export const getLowMaintenancePlantDetails = (state = { lowmaintenanceplant: {} }, action) => {
    switch(action.type){

        case actionType.GET_LOW_MAINTENANCE_PLANT_DETAILS_SUCCESS:
            return {lowmaintenanceplant: action.payload }
        case actionType.GET_LOW_MAINTENANCE_PLANT_DETAILS_FAIL:
            return {error: action.payload}
        default: 
        return state
    }
}