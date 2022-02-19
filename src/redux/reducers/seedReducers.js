import * as actionType from '../constants/seedConstant.js';


export const getSeedsReducers = (state = { seeds : []}, action) => {
    switch (action.type){
        case actionType.GET_SEED_SUCCESS:
            return {seeds: action.payload }
        case actionType.GET_SEED_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}

export const getSeedDetailsReducers = (state = {seed: {}}, action) => {
    switch (action.type){
        case actionType.GET_SEED_DETAIL_SUCCESS:
            return {seed: action.payload }
        case actionType.GET_SEED_DETAIL_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}