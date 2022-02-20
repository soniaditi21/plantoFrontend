// eslint-disable-next-line

import NavbarHead from './NavbarHead.jsx';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import { TemplateProvider } from './TemplateProvider';
import  ContextProvider  from './context/ContextProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailView from './product/DetailView';
import AirPurifyingDetailView from './product/AirPurifyingDetailView'
import IndoorPlantDetailView from './product/IndoorPlantDetailView'
import AirPurifying from './allProduct/AirPurifying.jsx';
import CeramicPots from './allProduct/CeramicPots.jsx';
import CeramicPotDetailView from './product/CeramicPotDetailView.jsx';
import IndoorPlants from './allProduct/IndoorPlants';
import LowMaintenancePlants from './allProduct/LowMaintenancePlants.jsx';
import LowMaintenanceDetailView from './product/LowMaintenanceDetailView';

import Gifting from './allProduct/Gifting.jsx';
import GiftingProductDetailView from './product/GiftingProductDetailView.jsx';

import VegetableSeeds from './allProduct/VegetableSeeds.jsx';
import SeedDetailView from './product/SeedDetailView.jsx';

import HerbSeeds from './allProduct/HerbSeeds.jsx';
import HerbSeedDetailView from './product/HerbSeedDetailView.jsx';

import SoilsManure from './allProduct/SoilsManure.jsx';
import SoilManureDetailView from './product/SoilManureDetailView.jsx';

import PlantCare from './plantCare/PlantCare.jsx';
import GardenerNearYou from './plantCare/GardenerNearYou.jsx';
import {useHistory} from 'react-router-dom';

function App() {

  const history = useHistory();

  return (
    <TemplateProvider>
    <ContextProvider>
    <BrowserRouter>

     <NavbarHead />
     <Switch history={ history }>
       <Route exact path="/" component={Home} />
       <Route path="/cart" component={Cart} />
       <Route exact path="/product/:id" component={DetailView} />

       <Route exact path="/AirPurifying" component={AirPurifying} />
       <Route exact path="/airpurifyingitem/:id" component={AirPurifyingDetailView} />

       <Route exact path="/IndoorPlants" component={IndoorPlants} />
       <Route exact path="/indoorplant/:id" component={IndoorPlantDetailView}/>
       
       <Route exact path='/LowMaintenancePlants' component={LowMaintenancePlants} />
      <Route exact path='/lowmaintenanceplant/:id' component={LowMaintenanceDetailView}/>

      <Route exact path="/Gifting" component={Gifting}/>
      <Route exact path="/giftingproduct/:id" component={GiftingProductDetailView} />

       <Route exact path='/CeramicPots' component={CeramicPots} />
       <Route exact path='/ceramicpot/:id' component={CeramicPotDetailView} />

       <Route exact path='/VegetableSeeds' component={VegetableSeeds} /> 
       <Route exact path='/seed/:id' component={SeedDetailView}/>
         
         <Route exact path='/HerbSeeds' component={HerbSeeds}/>
         <Route exact path='/herbseed/:id' component={HerbSeedDetailView}/>
  
  <Route exact path='/SoilsManure' component={SoilsManure}/>
  <Route exact path="/soilManure/:id" component={SoilManureDetailView}/>


  <Route exact path='/PlantCare' component={PlantCare}/>
  <Route exact path='/GardenerNearYou' component={GardenerNearYou}/>

     </Switch>

    </BrowserRouter>
    </ContextProvider>
    </TemplateProvider>
  );
}

export default App;