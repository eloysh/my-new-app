import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logoImage from './logo.png';

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState('0px');

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setMenuHeight(showMobileMenu ? '0px' : '1000px');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <Link to="/" onClick={toggleMobileMenu}>
        <img src={logoImage} alt="Логотип" className="menu-logo" />
      </Link>
      <div className={`hamburger-menu ${showMobileMenu ? 'active' : ''}`} onClick={toggleMobileMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`menu-container ${showMobileMenu ? 'active' : ''}`} style={{ height: menuHeight }}>
        <ul>
          <li><Link to="/" onClick={(event) => { toggleMobileMenu(); scrollToTop(); }} className="menu-link">Главная</Link></li>
          <li><Link to="/real-estate-catalog" onClick={(event) => { toggleMobileMenu(); scrollToTop(); }} className="menu-link">Новостройки</Link></li>
          <li><Link to="/homepage-catalog" onClick={(event) => { toggleMobileMenu(); scrollToTop(); }} className="menu-link">Дома от застройщиков</Link></li>
          <li><Link to="/mortgage-program" onClick={(event) => { toggleMobileMenu(); scrollToTop(); }} className="menu-link">Ипотека</Link></li>
          <li><Link to="/mortgage" onClick={(event) => { toggleMobileMenu(); scrollToTop(); }} className="menu-link">Калькулятор</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
