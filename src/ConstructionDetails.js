import React, { useState } from 'react';
import ConstructionDetailsModal from './ConstructionDetailsModal'; // Импортируем ConstructionDetailsModal

const ConstructionDetails = ({ propertiesData }) => { // Принимаем propertiesData как свойство
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };


  return (
    <>
      {propertiesData.map(property => (
        <div key={property.id}>
          <h3 onClick={() => setSelectedProperty(property)}>{property.title}</h3>
        </div>
      ))}
      {selectedProperty && (
        <ConstructionDetailsModal
          property={selectedProperty}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default ConstructionDetails;