import React, { useState } from 'react';
import ConstructionCard from './ConstructionCard'; // Проверьте путь к этому компоненту
import ConstructionDetailsModal from './ConstructionDetailsModal'; // Проверьте путь к этому компоненту
import propertiesData from './propertiesData'; // Проверьте путь к файлу с данными о недвижимости

import './RealEstateCatalog.css';

const RealEstateCatalog = () => {
 

  
   
   
   
  
    const openWhatsApp = () => {
      window.open('https://api.whatsapp.com/send?phone=79510050002', '_blank');
    };
  
    const openInstagram = () => {
      window.open('https://www.instagram.com/buying_a_property?igsh=MWY3NnN2dTdqemQ2Zw==', '_blank');
    };
  
    const openTelegram = () => {
      window.open('https://t.me/+79510050002', '_blank');
    };
  
    const openTelegramcanal = () => {
      window.open('https://t.me/buying_a_property', '_blank');
    };
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleCardClick = (property) => {
    setSelectedProperty(property);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
    setIsOpen(false);
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? selectedProperty.images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % selectedProperty.images.length);
  };

  return (
    <div className="real-estate-catalog">
      <h1>Каталог недвижимости</h1>
      <div className="property-list">
        {propertiesData.map((property) => (
          <ConstructionCard key={property.id} property={property} onClick={handleCardClick} />
        ))}
      </div>
      {isOpen && (
        <ConstructionDetailsModal
          property={selectedProperty}
          onClose={handleCloseModal}
          imageIndex={imageIndex}
          onPrevImage={handlePrevImage}
          onNextImage={handleNextImage}
        />
      )}
       <footer className="footer">
      <div className="footer-section">
      <button className="logo-link" onClick={() => window.scrollTo(0, 0)}>
  <img src="./logo.jpg" alt="Логотип" />
</button>
</div>

  <div className="footer-section">
 <h4 style={{ color: 'blue', fontFamily: 'cursive' }}>Агенство недвижимости</h4>

    <ul>
      <li><a href="/search">О компании</a></li>
      <li><a href="property/:id">Контакты</a></li>
      
      <li><a href="real-estate-catalog">Новостройки</a></li>
      <li><a href="mortgage">Дома от застройщиков</a></li>
    </ul>
  </div>
  <div className="footer-section contact-info">
   
    <div>
      <h4>Контакты</h4>
      <p>Телефон: +7 (984) 192-50-69</p>
      <p>Email: eloysh8814@gmail.com</p>
      <p>Адрес: г. Владивосток, ул. Светланская, дом 65</p>
    </div>
  </div>
  
  <div className="map-container">
  <iframe
  title="Location Map"
  width="100%"
  height="200"
  frameBorder="0"
  style={{ border: '0' }}
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.6122090024026!2d132.18651827426833!3d43.35233584086432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb3b05d61f64e27%3A0xe5253588e6436795!2s%D1%83%D0%BB.+%D0%A4%D1%80%D1%83%D0%BD%D0%B7%D0%B5%2C%2072%2C%20%D0%90%D1%80%D1%82%D0%B5%D0%BC%2C%20%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9%2C%20692760!5e0!3m2!1sru!2sru!4v1618560779283!5m2!1sru!2sru"
  allowFullScreen
></iframe>






  </div>
  
  <div className="chat-buttons-container">
    <button className="whatsapp-button" onClick={openWhatsApp}>
      <img src="whatsapp.png" alt="WhatsApp" width="50" height="50"/>
    </button>
    <button className="telegram-button" onClick={openTelegram}>
      <img src="telegram.png" alt="Telegram" width="50" height="50"/>
    </button>
    <button className="instagram-button" onClick={openInstagram}>
      <img src="instagram.svg" alt="Instagram" width="50" height="50"/>
    </button>
    <button className="telegram-button" onClick={openTelegramcanal}>
      <img src="telegram.png" alt="Telegram" width="50" height="50"/>
    </button>
  </div>
</footer>
    </div>
    
  );
};

export default RealEstateCatalog;
