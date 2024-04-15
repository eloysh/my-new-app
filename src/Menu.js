import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logoImage from './logo.png';

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      <Link to="/">
        <img src={logoImage} alt="Логотип" className="menu-logo" />
      </Link>
      <div className={`hamburger-menu ${showMobileMenu ? 'active' : ''}`} onClick={toggleMobileMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`menu-container ${showMobileMenu ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMobileMenu}>Главная</Link></li>
          <li><Link to="/real-estate-catalog" onClick={toggleMobileMenu}>Новостройки</Link></li>
          <li><Link to="/homepage-catalog" onClick={toggleMobileMenu}>Дома от застройщиков</Link></li> {/* Use toggleMobileMenu here */}
          <li><Link to="/mortgage-program" onClick={toggleMobileMenu}>Ипотека</Link></li> {/* Use toggleMobileMenu here */}
          <li><Link to="/mortgage" onClick={toggleMobileMenu}>Калькулятор</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
