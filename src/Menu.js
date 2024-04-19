import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logoImage from './logo.png';

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div>
      <Link to="/" onClick={closeMobileMenu}>
        <img src={logoImage} alt="Логотип" className="menu-logo" />
      </Link>
      {windowWidth < 768 ? (
        
        <div className={`hamburger-menu ${showMobileMenu ? 'active' : ''}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
           
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      ) : null}
      {windowWidth >= 768 || showMobileMenu ? (
        <nav className={`menu-container ${showMobileMenu ? 'active' : ''}`}>
         
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
      ) : null}
    </div>
  );
};

export default Menu;
