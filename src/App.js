import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Straniza from './Straniza';
import OtherPage from './OtherPage';
import RealEstateCatalog from './RealEstateCatalog';
import HomePage from './HomePage';
import MortgageDescription from './MortgageDescription'; // Import the MortgageDescription component
import Menu from './Menu'; // Import the Menu component

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <Router>
      <Menu /> {/* Include the Menu component */}
      <Switch>
        <Route exact path="/" component={Straniza} />
        <Route path="/mortgage" component={OtherPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/real-estate-catalog" component={RealEstateCatalog} />
        <Route path="/homepage-catalog" component={Homepagecatalog} /> {/* Correct the path name */}
        <Route path="/mortgage-program" component={MortgageDescription} />
      </Switch>
    </Router>
  );
}

export default App;
