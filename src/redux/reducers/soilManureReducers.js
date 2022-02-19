import * as actionType from '../constants/soilManureConstant.js';


export const getSoilManuresReducers = (state = { soilManures : []}, action) => {
    switch (action.type){
        case actionType.GET_SOIL_MANURE_SUCCESS:
            return {soilManures: action.payload }
        case actionType.GET_SOIL_MANURE_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}

export const getSoilManureDetailsReducers = (state = {soilManure: {}}, action) => {
    switch (action.type){
        case actionType.GET_SOIL_MANURE_DETAIL_SUCCESS:
            return {soilManure: action.payload }
        case actionType.GET_SOIL_MANURE_DETAIL_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}