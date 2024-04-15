import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Straniza from './Straniza';
import OtherPage from './OtherPage';
import RealEstateCatalog from './RealEstateCatalog';
import HomePage from './HomePage'; // Добавляем импорт для компонента HomePage
import MortgageDescription from './MortgageDescription.js'; // Добавляем импорт для страницы ипотеки
const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Straniza} />
        <Route path="/mortgage" component={OtherPage} />
        <Route path="/home" exact component={HomePage} /> {/* Добавляем маршрут для компонента HomePage */}
        <Route path="/real-estate-catalog" component={RealEstateCatalog} />
        <Route path="/honapage-catalog" component={ Homepagecatalog } /> 
        <Route path="/mortgage-program" component={MortgageDescription } /> {/* Добавляем маршрут для страницы ипотеки */}
      </Switch>
    </Router>
  );
}

export default App;
