import React from 'react'
import { Container } from 'react-bootstrap'

function Section(props) {

    const paralax = (props.paralax !== undefined ? 'paralax' : '');

    return (
        <section id={props.name}>
            <div className={`${props.name + '-wrapper'} ${paralax}`}>
                <Container>
                    {props.children}
                </Container>
            </div>
        </section>
    )
}


export default Section
