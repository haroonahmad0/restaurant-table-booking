import logo from './logo.svg';
import './App.css';

import Home from './containers/home'
import RestaurantListingPage from './containers/restaurantsListing'
import RestaurantDetailPage from './containers/restaurantDetails'
import Header from './components/layout/header'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router>
      <div style={{width: '100vw',height:'100vh'}}>
        <div>
        <Header/>
        </div>

        <div style={{height:'100%',width:'100%',position:'relative'}}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/restaurants">
            <RestaurantListingPage />
          </Route>
          <Route exact path="/detail">
            <RestaurantDetailPage />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
