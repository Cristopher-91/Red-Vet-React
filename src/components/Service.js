import React, { useState } from 'react'
import ServiceModal from './ServiceModal'
import { Col } from 'react-bootstrap'

import Flip from 'react-reveal/Flip';

function Service(props) {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }

    return (
        <Col xs="6" lg="3" className='mb-4'>
            <Flip bottom>
                <div className='services-box' onClick={openModal}>
                    <div className="services-box-icon">
                        <img src={`../images/services/${props.imagePath}`} alt={props.alt}/>
                    </div>
                    <div className="services-box-content">
                        <h4>{props.title}</h4>
                        <ServiceModal
                            title={props.title}
                            imagePath={props.imagePath}
                            show={showModal}
                            text={props.text}
                        />
                    </div>
                </div>
            </Flip>

        </Col>
    )
}

export default Service
