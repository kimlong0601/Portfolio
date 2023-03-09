import React from 'react';
import './home.scss';
import Typewriter from 'typewriter-effect';


import banner_1 from '../../assets/images/6945a6ed6236b868e127.png';
import banner_2 from '../../assets/images/6945a6ed6236b868e127.jpg';



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
  const facebook_link = 'https://www.facebook.com/kimlong.trannguyen.585';
  const linkedin_link = 'https://www.linkedin.com/in/kim-long-tran-nguyen-37aa72267/';
  const github_link = 'https://github.com/kimlong0601';
  return (
    <div className="banner">
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
              <h5 className="title">
                Hi there, I'm <span>Long</span>
              </h5>
              <div className="animated-typing">
                <Typewriter
                    options={{
                      strings: ['I am Web Developer', 'I am UX/UI Designer'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
              </div>
              <p className="detail">
                    Hello there, my name is Long. I'm a Fresher Web Developer and UX/UI Designer
              </p>
              <button className='banner-btn'>
                My CV
              </button>
              <div className="banner-icons">
                <a href={facebook_link} className="icon">
                  <i class='bx bxl-facebook' ></i>
                </a>
                <a href='#' className="icon">
                  <i class='bx bxl-instagram' ></i>
                </a>
                <a href={linkedin_link} className="icon">
                  <i class='bx bxl-linkedin' ></i>
                </a>
                <a href={github_link} className="icon">
                  <i class='bx bxl-github'></i>
                </a>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={banner_2} alt="Banner" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home