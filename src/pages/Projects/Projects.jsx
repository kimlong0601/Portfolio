import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import './project.scss';
import TabPane from 'react-bootstrap/esm/TabPane';
import web from './../../data/web';
import ProjectCard from './ProjectCard';
import landingpage from './../../data/landingpage';
import design from './../../data/design';
const Projects = () => {
  return (
    <div className="project">
      <Container>
          <Row className='align-items-center'>
            <Col>
              <h1>My <span>Projects</span></h1>
              <p>These are all the projects I've worked on over the years, from the website to the landing page and design. Now then, let's take a look at it</p>
              <Tab.Container id='projects-tabs' defaultActiveKey="first">
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Website</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Landing Page</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Design</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        web.map((item,index) => (
                          <ProjectCard 
                            key={index}
                            img={item.img}
                            name={item.name}
                            source={item.source}
                            demo={item.demo}
                            size={item.size}
                            technology={item.technology}
                            detail={item.detail}
                          />
                        ))
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                      <Row>
                        {
                          landingpage.map((item,index) => (
                            <ProjectCard
                            key={index}
                            img={item.img}
                            name={item.name}
                            source={item.source}
                            demo={item.demo}
                            size={item.size}
                            technology={item.technology}
                            detail={item.detail}
                            />
                          ))
                        }
                      </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                      <Row>
                        {
                          design.map((item,index) => (
                            <ProjectCard
                            key={index}
                            img={item.img}
                            name={item.name}
                            source={item.source}
                            demo={item.demo}
                            size={item.size}
                            technology={item.technology}
                            detail={item.detail}
                            />
                          ))
                        }
                      </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
      </Container>
    </div>
  )
}

export default Projects