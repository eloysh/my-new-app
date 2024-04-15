import React from 'react';
import './MortgageDescription.css'; // Подключаем CSS для стилизации

const MortgageProgram = () => {
      
  
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
  return (
    <div className="mortgage-program-container">
    <h2>Программы господдержки ипотеки в 2024 году</h2>
    
    <div className="mortgage-program-section">
      <h3>Льготная ипотека под 8% годовых</h3>
      <p>
        Льготная ипотека под 8% годовых — не единственная возможность купить жильё в кредит с поддержкой от государства. 
        В России действует ещё несколько программ, которые помогают семьям обзавестись недвижимостью.
      </p>
      <p>
        Вот какие виды льготной ипотеки ещё доступны в 2024 году:
      </p>
      <ul>
        <li><strong>Семейная ипотека под 6%</strong>: Поддерживает семьи с детьми и инвалидами.</li>
        <li><strong>Дальневосточная ипотека под 2%</strong>: Для молодых семей, родителей с несовершеннолетними детьми, владельцев гектара на Дальнем Востоке, педагогов, врачей и граждан, переехавших в ДФО для работы.</li>
        <li><strong>Сельская ипотека под 3%</strong>: Для покупки жилья в сельской местности.</li>
        <li><strong>Материнский капитал</strong>: Для семей, получивших материнский капитал.</li>
      </ul>
    </div>

    {/* Дополнительные разделы и программы господдержки могут быть добавлены по аналогии */}

    <div className="how-to-apply-section">
      <h3>Как получить ипотеку с господдержкой</h3>
      <p>
        Оформить льготную ипотеку можно в одном из банков-участников. Всего в программе 80 кредиторов.
      </p>
      <p>
        Для обращения в банк потребуются:
      </p>
      <ul>
        <li>паспорт;</li>
        <li>СНИЛС;</li>
        <li>справка о доходах по форме 2-НДФЛ;</li>
        <li>для мужчин до 27 лет — военный билет;</li>
        <li>в некоторых случаях понадобится свидетельство о заключении (или расторжении) брака.</li>
      </ul>
      {/* Добавьте дополнительные сведения о процессе получения ипотеки */}
    </div>
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

export default MortgageProgram;
