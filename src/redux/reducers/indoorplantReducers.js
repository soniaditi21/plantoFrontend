import * as actionType from '../constants/indoorplantConstant';


export const getIndoorPlantsReducers = (state = { indoorplants : []}, action) => {
    switch (action.type){
        case actionType.GET_INDOOR_PLANT_SUCCESS:
            return {indoorplants: action.payload }
        case actionType.GET_INDOOR_PLANT_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}

export const getIndoorPlantDetailsReducers = (state = {indoorplant: {}}, action) => {
    switch (action.type){
        case actionType.GET_INDOOR_PLANT_DETAIL_SUCCESS:
            return {indoorplant: action.payload }
        case actionType.GET_INDOOR_PLANT_DETAIL_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}