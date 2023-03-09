import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './skills.scss';

import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import react from '../../assets/images/react.png';
import sass from '../../assets/images/bootstrap.png';
import skills from '../../data/skills';
const Skill = () => {
  return (
    <div className="skills">
      <Container>
        <div className="skill-title">
          <h1>My <span>Skills</span></h1>
        </div>
        <Row className='align-items-center'>
          {/* row 1 */}
          {/* <Col xs={6} md={4} xl={2}>
            <div className="skill-card">
              <div className="skill-card__image">
                <img src={html} alt="HTML5" />
              </div>
              <div className="skill-card__name">
                <h5>HTML5</h5>
              </div>
            </div>
          </Col> */}
          
            {
              skills.map((item,index) => (
                <Col xs={6} md={4} xl={2}>
                  <div className="skill-card" key={index}>
                    <div className="skill-card__image">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="skill-card__name">
                      <h5>{item.name}</h5>
                    </div>
                  </div>
                </Col>
              )) 
            }
          
        </Row>
      </Container>
    </div>
  )
}

export default Skill