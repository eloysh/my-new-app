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

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
    setMenuHeight('0px');
  };

  return (
    <div>
      <Link to="/" onClick={closeMobileMenu}>
        <img src={logoImage} alt="Логотип" className="menu-logo" />
      </Link>
      <div className={`hamburger-menu ${showMobileMenu ? 'active' : ''}`} onClick={toggleMobileMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`menu-container ${showMobileMenu ? 'active' : ''}`} style={{ height: menuHeight }}>
        <ul>
          <li>
            <Link to="/" className="menu-link" onClick={() => { scrollToTop(); closeMobileMenu(); }}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/real-estate-catalog" className="menu-link" onClick={() => { scrollToTop(); closeMobileMenu(); }}>
              Новостройки
            </Link>
          </li>
          <li>
            <Link to="/homepage-catalog" className="menu-link" onClick={() => { scrollToTop(); closeMobileMenu(); }}>
              Дома от застройщиков
            </Link>
          </li>
          <li>
            <Link to="/mortgage-program" className="menu-link" onClick={() => { scrollToTop(); closeMobileMenu(); }}>
              Ипотека
            </Link>
          </li>
          <li>
            <Link to="/mortgage" className="menu-link" onClick={() => { scrollToTop(); closeMobileMenu(); }}>
              Калькулятор
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
