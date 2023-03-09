import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import about_image from '../../assets/images/e35344d7ef62003c5973.jpg';
import './about.scss';
const About = () => {
  return (
    <div className="about">
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={5}>
            <div className="about-image">
                <img src={about_image} alt="About Image" />
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <div className="about-detail">
              <h1>About <span>Me</span></h1>
              <p className='detail'>My name is Trần Nguyễn Kim Long - I'm a fresher Web Developer and UX/UI Designer based in Ho Chi Minh City.
                I am looking for a full-time position in the industry in which I can put into practice my knowledge and experience, ultimately benefiting the operations of the organization that I work for.
              </p>
              <ul>
                <li>
                  <p><span>Name: </span></p>
                    <p>Trần Nguyễn Kim Long</p>
                </li>
                <li>
                    <p><span>Date of birth: </span></p>
                    <p>06/01/2001</p>
                </li>
                <li>
                    <p><span>Based in: </span></p>
                    <p>Ho Chi Minh City</p>
                </li>
                <li>
                    <p><span>Email: </span></p>
                    <p>kimlongt40@gmail.com</p>
                </li>
                <li>
                    <p><span>Phone: </span></p>
                    <p>+84373380709</p>
                </li>
              </ul>
              <button className='about-detail__btn'>Contact Me</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About