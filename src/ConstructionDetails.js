import React from 'react';
import ConstructionDetailsModal from './ConstructionDetailsModal.js';
const handleCloseModal = () => {
  // Assuming you have some state to control the visibility of the modal
  // Set the state to hide or close the modal


  const propertiesData = [
    {
      id: 1,
      title: 'ЖК «Гармония»',
      images: ["/17.jpg", "/18.jpg", "/19.jpg"],
      address: "Приморский край, Артём, улица Кировамости 1",
      deliveryDate: "Сдача в 3 кв. 2025, есть сданные",
      class: "Эконом",
      floors: "16",
      buildingCount: "3 корпуса",
      houseType: "Кирпичный",
      ceilingHeight: "2,7 м",
      finishOptions: "Без отделки",
      parking: "Гостевая"
    }
 
  ];

  return (
    <>
      {propertiesData.map(property => (
        <ConstructionDetailsModal
          key={property.id}
          property={{
            title: property.title,
            images: property.images,
            address: property.address,
            deliveryDate: property.deliveryDate,
            class: property.class,
            floors: property.floors,
            buildingCount: property.buildingCount,
            houseType: property.houseType,
            ceilingHeight: property.ceilingHeight,
            finishOptions: property.finishOptions,
            parking: property.parking
          }}
          onClose={handleCloseModal}
        />
      ))}
    </>
  );
};

export default ConstructionDetails;
