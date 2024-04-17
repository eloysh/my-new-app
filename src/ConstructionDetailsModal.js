import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ConstructionDetailsModal.css';

const ConstructionDetailsModal = ({ property, onClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768, // Порог для мобильных устройств
        settings: {
          arrows: false, // Скрыть стрелки на мобильных устройствах
        }
      }
    ]
  };

  // Стили для фиксированного размера изображений
  const imageStyle = {
    width: '400px', // Установите необходимую ширину
    height: '300px', // Установите необходимую высоту
    objectFit: 'cover', // Позволяет изображению занимать все доступное пространство, сохраняя пропорции
    borderRadius: '5px', // Для закругленных углов (по желанию)
  };

  return (
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
           <div>
        <img src="1.jpg" alt="Slide 1" style={imageStyle} />
    
      </div>
        </Slider>
        <div className="property-info">
          <p>Буден сдан: II квартал 2024 года {property.status}</p>
          <p>Сроки строительства: 1 год {property.constructionTimeline}</p>
          <p>Количество квартир: 20 шт {property.numberOfApartments}</p>
          {/* Дополнительная информация о недвижимости */}
        </div>
      </div>
    </div>
  );
};

export default ConstructionDetailsModal;
