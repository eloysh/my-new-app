import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Straniza from './Straniza';
import OtherPage from './OtherPage';
import RealEstateCatalog from './RealEstateCatalog';
import HomePage from './HomePage';
import MortgageDescription from './MortgageDescription';
import Menu from './Menu';
import ConstructionDetails from './ConstructionDetails'; // Импортируем ConstructionDetails
import propertiesData from './propertiesData'; // Импортируем propertiesData

const App = () => {
  return (
    <Router>
      <Menu />
      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path="/" component={Straniza} />
          <Route path="/mortgage" component={OtherPage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/real-estate-catalog" component={RealEstateCatalog} />
          <Route path="/homepage-catalog" component={Homepagecatalog} />
          <Route path="/mortgage-program" component={MortgageDescription} />
          <Route path="/construction-details"> {/* Добавляем маршрут для ConstructionDetails */}
            <ConstructionDetails propertiesData={propertiesData} /> {/* Передаем propertiesData */}
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
