import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Straniza from './Straniza';
import OtherPage from './OtherPage';
import RealEstateCatalog from './RealEstateCatalog';
import HomePage from './HomePage';
import MortgageDescription from './MortgageDescription';
import Menu from './Menu';
import Preloader from './Preloader'; // Import Preloader component
import PrivateRoute from './PrivateRoute';
const App = () => {
  return (
    <Router>
      <Menu />
      <Suspense fallback={<Preloader />}>
        <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Straniza} />
          <Route path="/mortgage" component={OtherPage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/real-estate-catalog" component={RealEstateCatalog} />
          <Route path="/homepage-catalog" component={Homepagecatalog} />
          <Route path="/mortgage-program" component={MortgageDescription} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
