import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducers, getProductDetailsReducers  } from './reducers/productReducers';

import {cartReducer } from './reducers/cartReducer';
import { getAirPurifyingItemsReducers, getAirPurifyingDetailsReducers } from './reducers/airpurifyingitemReducer';
import { getIndoorPlantsReducers, getIndoorPlantDetailsReducers } from './reducers/indoorplantReducers';
import { getLowMaintenancePlantsReducers,  getLowMaintenancePlantDetails} from './reducers/lowmaintenanceplantReducers';
import {getGiftingProductsReducers, getGiftingProductDetailsReducers} from './reducers/giftingproductReducers';
import {getCeramicPotsReducers,getCeramicPotDetailsReducers  } from './reducers/ceramicpotReducers';
import {getSeedsReducers, getSeedDetailsReducers} from './reducers/seedReducers';
import { getHerbSeedsReducers, getHerbSeedDetailsReducers } from './reducers/herbseedReducers';
import {getSoilManuresReducers, getSoilManureDetailsReducers} from './reducers/soilManureReducers';

const reducer= combineReducers({
    getProducts: getProductsReducers,
    getProductDetails: getProductDetailsReducers,

    getGiftingProducts: getGiftingProductsReducers,
    getGiftingProductDetails: getGiftingProductDetailsReducers,

    cart: cartReducer,

    getAirPurifyingItems: getAirPurifyingItemsReducers,
    getAirPurifyingDetails: getAirPurifyingDetailsReducers,

    getIndoorPlants: getIndoorPlantsReducers,
    getIndoorPlantDetails: getIndoorPlantDetailsReducers,

    getLowMaintenancePlants: getLowMaintenancePlantsReducers,
    getLowMaintenancePlantDetails: getLowMaintenancePlantDetails,

    getCeramicPots: getCeramicPotsReducers,
    getCeramicPotDetails: getCeramicPotDetailsReducers,

    getSeeds: getSeedsReducers,
    getSeedDetails: getSeedDetailsReducers,

    getHerbSeeds: getHerbSeedsReducers,
    getHerbSeedDetails: getHerbSeedDetailsReducers,

    getSoilManures: getSoilManuresReducers,
    getSoilManureDetails: getSoilManureDetailsReducers

})

const middleware= [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

);

export default store;