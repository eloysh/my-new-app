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
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  const imageStyle = {
    width: '400px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '5px',
  };

  return (
    <div className="construction-details-modal">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        {property ? (
          <>
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
            
          </>
        ) : (
          <p>Нет данных для отображения</p> // Добавлено сообщение об отсутствии данных
        )}
      </div>
      <div className="modal-overlay" onClick={onClose}></div>
    </div>
  );
};

export default ConstructionDetailsModal;
