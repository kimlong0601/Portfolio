import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import contactImg from '../../assets/images/contact_img.png';
import contactImg2 from '../../assets/images/contact_img_2.png';
import contactImg3 from '../../assets/images/contact_img_3.png';

import './contact.scss';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_24ox32l', 'template_77d0cnm', form.current, 'W9PbEU_EJLvyrpmW2')
      .then((result) => {
          alert('Your email have been sent! I will contact as soon as possible. Thank you for your time')
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact">
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg2} alt="Contact Img" />
          </Col>
          <Col md={6}>
            <h1>Get In <span>Touch</span></h1>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={12} className="px-1">
                  <input type="text" name="name" placeholder='Your Full Name' required/>
                </Col>
                <Col sm={12} className="px-1">
                  <input type="email" name="email" placeholder='Your Email' required/>
                </Col>
                <Col className="px-1">
                  <textarea name="message" id="message" rows="8" placeholder='Message' required></textarea>
                  <button type='submit' value='Send'>Send</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact