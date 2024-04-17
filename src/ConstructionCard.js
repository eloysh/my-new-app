import React from 'react';
import './ConstructionCard.css';

const ConstructionCard = ({ property, onClick }) => {
  return (
    <div className="construction-card" onClick={() => onClick(property)}>
      <img src={property.images[0]} alt={property.title} className="card-image" />
      <div className="card-details">
        <h3>{property.title}</h3>
        <p>{property.description}</p>
        <p>{property.price}</p>
      </div>
    </div>
  );
};

export default ConstructionCard;
