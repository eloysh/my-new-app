import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './HomePage';
import Menu from './Menu';
import MortgageCalculator from './MortgageCalculator';
import RealEstateCatalog from './RealEstateCatalog';
import MortgageDescription  from './MortgageDescription.js'; // Включаем страницу ипотеки здесь
import Homepagecatalog from './homepagecatalog.js';



ReactDOM.render(
  <Router>
    <div>
      <Menu /> {/* Включаем компонент меню здесь */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/mortgage" element={<MortgageCalculator />} />
        <Route path="/homepage-catalog" element={< Homepagecatalog />}/>
        <Route path="/real-estate-catalog" element={<RealEstateCatalog />} /> {/* Включаем каталог недвижимости */}
        <Route path="/mortgage-program" element={<MortgageDescription  />} /> {/* Включаем страницу ипотеки */}
      

      </Routes>
    </div>
  </Router>,
  document.getElementById('root')
);
