import React, { useState } from 'react';
import './homepagecatalog.css';

const Homepagecatalog = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('characteristics'); // Default active tab

  const properties = [
    {
      id: 1,
      title: 'Проект "МАГНАТ"',
      description: 'Блочный дом',
      price: ' 3 938 058 млн руб',
      location: 'Приморский край',
      squaremeter: '69 кв.м',
      images: ['/House-1.png', '/House-1_1.png', '/House-1_2.png', '/House-1_3.png'],
      characteristics: 'Характеристики: монолитная плита, стены-газаблок 300 мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 58 кв.м, Общая площадь: 69 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: Коробка дома - 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '5 659 358 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь -337 900 руб,Гипсовая штукатурка стен - 321 400 руб,Распределительный щит с внутренней электропроводкой 230 200 руб, Биологическая станция - 350 00 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 480 000 руб.'
    },
   
    {
      id: 2,
      title: 'Проект "ТУХАС"',
      description: 'Блочный дом',
      price: ' 3 859 034 млн руб',
      location: 'Приморский край',
      squaremeter: '72 кв.м',
      images: ['/House_2.png', '/House_2_2.png', '/House_2_3.png', '/House_2_4.png'],
      characteristics: 'Характеристики: монолитная плита, стены-газаблок 300 мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 63 кв.м, Общая площадь: 72 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: Коробка дома - 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '5 755 824 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь -414 950 руб,Гипсовая штукатурка стен - 319 840 руб,Распределительный щит с внутренней электропроводкой 232 000 руб, Биологическая станция - 350 00 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 480 000 руб.'
    },
    {
      id: 3,
      title: 'Проект "ВЕГАС"',
      description: 'Блочный дом',
      price: ' 4 487 176 млн руб',
      location: 'Приморский край',
      squaremeter: '79 кв.м',
      images: ['/House-3.png', '/House-3_1.png', '/House-3_2.png', '/House-3_3.png'],
      characteristics: 'Характеристики: монолитная плита, стены-газаблок 300 мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 73 кв.м, Общая площадь: 79 кв.м.',
      payment:'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '6 568 846 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь -340 120 руб,Гипсовая штукатурка стен - 447 050 руб,Распределительный щит с внутренней электропроводкой 292 000 руб, Биологическая станция - 350 00 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 652 500 руб.'
    },
    {
      id: 4,
      title: 'Проект "ЛАЗУРНЫЙ"',
      description: 'Блочный дом',
      price: ' 3 798 057 млн руб',
      location: 'Приморский край',
      squaremeter: '74 кв.м',
      images: ['/House-4.png', '/House-4_1.png', '/House-4_2.png', '/House-4_3.png'],
      characteristics: 'Характеристики: Коробка дома 6Х6, монолитная плита, стены-газаблок 300 мм, внутрение стены 100мм, перекрытие-монолитное, лестница-монолитная, кровельный материал-металлочерепица ',
      projectComposition: 'Жилая площадь: 74 кв.м, Общая площадь: 74 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '5 747 957 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь -340 000 руб,Гипсовая штукатурка стен - 420 700 руб,Распределительный щит с внутренней электропроводкой 325 600 руб, Биологическая станция - 350 00 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 504 600 руб.'
    },
    // Другие объекты с данными о свойствах
  ];

  const handleTitleClick = (property) => {
    setSelectedProperty(property);
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
    setSelectedProperty(null);
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? properties[selectedProperty.id - 1].images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % properties[selectedProperty.id - 1].images.length);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-heading">ТОП проектов домов от застройщиков</h1>
      <div className="property-list">
        <div className="property-cards">
          {properties.map(property => (
            <div key={property.id}>
              <div className="property-card">
                <h3 onClick={() => handleTitleClick(property)}>{property.title}</h3>
                <p>{property.description}</p>
                <p>{property.price}</p>
                <img src={property.images[0]} alt="Property" onClick={() => handleTitleClick(property)} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProperty && isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseForm}>&times;</span>
            
            <div className="gallery">
            <div className="property-info">
              <h3>{selectedProperty.title}</h3>
              <div className="tabs">
              <img src={properties[selectedProperty.id - 1].images[imageIndex]} alt="Property" />
             
              <button className="prev-btn" onClick={handlePrevImage}>{'<'}</button>
              <button className="next-btn" onClick={handleNextImage}>{'>'}</button>
            </div>
           
                <button className={activeTab === 'characteristics' ? 'active' : ''} onClick={() => handleTabClick('characteristics')}>Характеристики</button>
                <button className={activeTab === 'projectComposition' ? 'active' : ''} onClick={() => handleTabClick('projectComposition')}>Площадь дома</button>
                <button className={activeTab === 'payment' ? 'active' : ''} onClick={() => handleTabClick('payment')}>Как купить?</button>
                <button className={activeTab === 'terms' ? 'active' : ''} onClick={() => handleTabClick('terms')}>Сроки строительства</button>
                <button className={activeTab === 'whiteBoxPrice' ? 'active' : ''} onClick={() => handleTabClick('whiteBoxPrice')}>White box цена</button>
                <button className={activeTab === 'option' ? 'active' : ''} onClick={() => handleTabClick('option')}>Что входит в White box</button>
              </div>
             
              <p>{selectedProperty[activeTab]}</p>
              <button className="buy-btn">Купить проект</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepagecatalog;
