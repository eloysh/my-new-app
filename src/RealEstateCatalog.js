import React, { useState } from 'react';
import ConstructionCard from './ConstructionCard';
import ConstructionDetailsModal from './ConstructionDetailsModal';
import propertiesData from './propertiesData';
import './RealEstateCatalog.css';

const RealEstateCatalog = () => {
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleCardClick = (index) => {
    setSelectedPropertyIndex(index);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPropertyIndex(null);
    setIsOpen(false);
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? propertiesData[selectedPropertyIndex].images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % propertiesData[selectedPropertyIndex].images.length);
  };

  return (
    <div className="real-estate-catalog">
      <h1>Каталог недвижимости</h1>
      <div className="property-list">
        {propertiesData.map((property, index) => (
          <ConstructionCard key={property.id} property={property} onClick={() => handleCardClick(index)} />
        ))}
      </div>
      {isOpen && (
        <ConstructionDetailsModal
          property={propertiesData[selectedPropertyIndex]}
          onClose={handleCloseModal}
          imageIndex={imageIndex}
          onPrevImage={handlePrevImage}
          onNextImage={handleNextImage}
        />
      )}
    </div>
  );
};

export default RealEstateCatalog;
