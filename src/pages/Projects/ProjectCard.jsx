import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col';


const ProjectCard = props => {
  return (
    <Col xs={6} md={6} xl={4}>   
        <div className="project-card">
            <img src={props.img} alt={props.name} />
            <h5 className="project-card__title">
                {props.name}
            </h5>
            <div className="project-card__detail">
                <p><span>Size: </span>{props.size}</p>
                <p><span>Technology used: </span>{props.technology}</p>
                <p><span>Detail: </span>{props.detail}</p>
            </div>
            <div className="project-card__link">
                <a href={props.demo}>
                    <button className='btn-demo'>
                        Demo
                    </button>
                </a>
                <a href={props.source}>
                    <button className='btn-link'>
                        Link Source
                    </button>
                </a>
            </div>
        </div>
    </Col>
  )
}

ProjectCard.propTypes = {}

export default ProjectCard