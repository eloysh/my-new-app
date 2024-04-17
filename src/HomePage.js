import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Oprosnik from './oprosnik';
import Straniza from './Straniza';
import FAQ from './FAQ'; // Import FAQ component
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = () => {

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
    <div>
      <div className="container">
        <Straniza />
        <div className="tn-atom" style={{ top: '160px', left: '128px', width: '185px', height: '40px', zoom: '1.016' }}>
        </div>
      </div>

      <div className="homepage-container">
        <h1 className="homepage-heading">Пройди опрос и получи бесплатную консультацию!</h1>
        <Oprosnik />
        <div className="faq-container">
        
          <FAQ />
        </div>
        <div className="property-list"></div>
      </div>
   
      <footer className="footer">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div className="footer-contact">
                <h3>Контакты</h3>
                <p>Телефон: +7 (984) 192-50-69</p>
                <p>Email: eloysh8814@gmail.com</p>
                <p>Адрес: г. Владивосток, ул. Светланская, дом 65</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="footer-menu">
                <h4>ATARI</h4>
                <ul>
                 
                    <Link to="/" className="footer-link">
                      <Button variant="outline-dark">О компании</Button>
                    </Link>
               
                    <Link to="/property/:id" className="footer-link">
                      <Button variant="outline-dark">Контакты</Button>
                    </Link>
               
                    <Link to="/homepage-catalog" className="footer-link">
                      <Button variant="outline-dark">Дома</Button>
                    </Link>
                  
                    <Link to="/real-estate-catalog" className="footer-link">
                      <Button variant="outline-dark">Новостройки</Button>
                    </Link>
               
                </ul>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="footer-social">
                <Button variant="outline-primary" className="whatsapp-button" onClick={openWhatsApp}>
                  <img src="whatsapp.png" alt="WhatsApp" width="50" height="50"/>
                </Button>
                <Button variant="outline-primary" className="telegram-button" onClick={openTelegram}>
                  <img src="telegram.png" alt="Telegram" width="50" height="50"/>
                </Button>
                <Button variant="outline-primary" className="instagram-button" onClick={openInstagram}>
                  <img src="instagram.svg" alt="Instagram" width="50" height="50"/>
                </Button>
                <Button variant="outline-primary" className="telegram-button" onClick={openTelegramcanal}>
                  <img src="telegram.png" alt="Telegram" width="50" height="50"/>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;