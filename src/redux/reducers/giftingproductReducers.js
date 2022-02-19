import * as actionType from '../constants/giftingproductConstant';


export const getGiftingProductsReducers = (state = { giftingproducts : []}, action) => {
    switch (action.type){
        case actionType.GET_GIFTING_PRODUCT_SUCCESS:
            return {giftingproducts: action.payload }
        case actionType.GET_GIFTING_PRODUCT_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}

export const getGiftingProductDetailsReducers = (state = {giftingproduct: {}}, action) => {
    switch (action.type){
        case actionType.GET_GIFTING_PRODUCT_DETAIL_SUCCESS:
            return {giftingproduct: action.payload }
        case actionType.GET_GIFTING_PRODUCT_DETAIL_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}