import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'


import NewsModal from './NewsModal';

function News(props) {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }

    return (
        <div className='mb-4 col-lg-3 col-md-4 col-sm-6'>
            <Card className='news-card' onClick={openModal} >
                {/* <Card.Img className='card-image' src={props.image} /> */}
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <p className='card-date'>{props.date}</p>
                    <Card.Text>
                    <p className='text-muted' dangerouslySetInnerHTML={ {__html: props.text} } ></p>
                    </Card.Text>
                    <div className='card-read-more'>
                        <a >Czytaj więcej {'>'}</a>
                    </div>
                    <NewsModal
                            title={props.title}
                            imagePath={props.imagePath}
                            alt={props.alt}
                            text={props.text}
                            date={props.date}
                            show={showModal}
                    />
                </Card.Body>
            </Card>
        </div>

    )
}

export default News
