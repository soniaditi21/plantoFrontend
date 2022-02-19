import * as actionType from '../constants/ceramicpotConstant';


export const getCeramicPotsReducers = (state = { ceramicpots : []}, action) => {
    switch (action.type){
        case actionType.GET_CERAMIC_POT_SUCCESS:
            return {ceramicpots: action.payload }
        case actionType.GET_CERAMIC_POT_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}

export const getCeramicPotDetailsReducers = (state = {ceramicpot: {}}, action) => {
    switch (action.type){
        case actionType.GET_CERAMIC_POT_DETAIL_SUCCESS:
            return {ceramicpot: action.payload }
        case actionType.GET_CERAMIC_POT_DETAIL_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}