import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Section from './Section'

import SectionTitle from './SectionTitle'

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'

function SectionBuildingSchedule() {
    return (
        <Section id='wstęp' name='building-schedule'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='Jak pracujemy' />
                <Fade bottom>
                    <p className='margined'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo. Aenean lacinia, nunc nec euismod tincidunt, velit neque hendrerit urna, ac tempor lorem ex quis ex.</p>
                </Fade>

            </div>
        </Section>
    )
}

export default SectionBuildingSchedule