import * as actionType from '../constants/herbseedConstant.js';


export const getHerbSeedsReducers = (state = { herbseeds : []}, action) => {
    switch (action.type){
        case actionType.GET_HERB_SEED_SUCCESS:
            return {herbseeds: action.payload }
        case actionType.GET_HERB_SEED_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}

export const getHerbSeedDetailsReducers = (state = {herbseed: {}}, action) => {
    switch (action.type){
        case actionType.GET_HERB_SEED_DETAIL_SUCCESS:
            return {herbseed: action.payload }
        case actionType.GET_HERB_SEED_DETAIL_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}