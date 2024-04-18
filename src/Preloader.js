import React from 'react';
import logo from './logo.png'; // Импортируйте ваш логотип

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={logo} alt="Logo" />
      <h1>Loading...</h1>
    </div>
  );
};

export default Preloader;
