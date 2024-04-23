import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ConstructionDetailsModal.css';
import Config from './config.js';

const ConstructionDetailsModal = ({ property, onClose }) => {
  const [formData, setFormData] = useState({ name: '', phoneNumber: '' });
  const [showForm, setShowForm] = useState(true); // State to manage form visibility
  console.log('CMS URL:', Config.CMS_URL);
  console.log('Admin email:', Config.ADMIN_EMAIL);
  console.log('Admin password:', Config.ADMIN_PASSWORD);
  console.log('Admin login:', Config.ADMIN_LOGIN);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowForm(false); // Hide the form after submission
    // Call function to send WhatsApp message
    handleSendWhatsApp();
  };

  const handleSendWhatsApp = () => {
    // WhatsApp message content
    const message = `Заявка:
    Имя: ${formData.name}
    Номер телефона: ${formData.phoneNumber}
    Информация о свойстве:
    Название: ${property.title}
    Описание: ${property.description}
    Цена: ${property.price}`;

    const recipientPhoneNumber = '79841925069'; // Replace with your WhatsApp number
    const whatsappLink = `https://api.whatsapp.com/send?phone=${recipientPhoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank'); // Open WhatsApp in a new tab
  };

  if (!property) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true, // Center the slides
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false, // Disable center mode on mobile
        }
      }
    ]
  };

  const imageStyle = {
    width: '300px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '2px',
    margin: 'auto', // Center the image horizontally
  };
  
  // Adjust image height for mobile devices
  settings.responsive[0].settings.slidesToShow = 1;
  settings.responsive[0].settings.slidesToScroll = 1;
  imageStyle.height = '300px'; // Update image height for mobile

  return (
    <div className="construction-details-modal-container">
      <div className="construction-details-modal" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <span className="close" onClick={onClose}>&times;</span>
          <h2>{property.title}</h2>
          <Slider {...settings}>
            {property.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={property.title} style={imageStyle} />
              </div>
            ))}
          </Slider>
          <div className="property-info">
            <p>Адрес: {property.address}</p>
            <p>Срок сдачи: {property.deliveryDate}</p>
            <p>Класс: {property.class}</p>
            <p>Этажность: {property.floors}</p>
            <p>Количество корпусов: {property.buildingCount}</p>
            <p>Тип дома: {property.houseType}</p>
            <p>Высота потолков: {property.ceilingHeight}</p>
            <p>Варианты отделки: {property.finishOptions}</p>
            <p>Парковка: {property.parking}</p>
          </div>
          {/* Conditional rendering for form and send button */}
          {showForm ? (
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Имя" value={formData.name} onChange={handleInputChange} required />
              <input type="tel" name="phoneNumber" placeholder="Номер телефона" value={formData.phoneNumber} onChange={handleInputChange} required pattern="(\+7|8)9\d{9}" />
              <button type="submit">Подробне</button>
            </form>
          ) : (
            <button onClick={() => setShowForm(true)}>Подробнее</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConstructionDetailsModal;
