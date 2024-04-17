import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import handIcon from './hand-icon.svg'; // Import the hand icon
import './ThirdBlock.css'

const ThirdBlock = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['1.jpg', '2.jpg', '3.jpg']; // Path to images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]); // Add images.length to useEffect dependencies

  return (
    <div className="third-block">
      {/* Wrap the image and text in a Link component */}
      <Link to="/real-estate-catalog" className="link-wrapper">
        {/* Display the image and content */}
        <div className="background-image" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
          {/* Display the hand icon */}
          <img src={handIcon} alt="Hand Icon" className="hand-icon" />
          {/* Display the heading */}
          <h2>ИНДИВИДУАЛЬНОЕ ЖИЛИЩНОЕ СТРОИТЕЛЬСТВО</h2>
        </div>
        {/* Add a button below the images */}
        <button className="navigate-button">Перейти</button>
      </Link>
    </div>
  );
};

export default ThirdBlock;


