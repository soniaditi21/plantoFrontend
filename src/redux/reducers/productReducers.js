import * as actionType from '../constants/productConstant';


export const getProductsReducers = (state = { products : []}, action) => {
    switch (action.type){
        case actionType.GET_PRODUCT_SUCCESS:
            return {products: action.payload }
        case actionType.GET_PRODUCT_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}

export const getProductDetailsReducers = (state = {product: {}}, action) => {
    switch (action.type){
        case actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return {product: action.payload }
        case actionType.GET_PRODUCT_DETAIL_FAIL:
            return { error: action.payload }
        default: 
          return state
    }
}