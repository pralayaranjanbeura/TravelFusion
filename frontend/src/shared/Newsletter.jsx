import React from 'react'
import './newsletter.css'


import {Row,Col,Container} from 'reactstrap' 
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                <div className="newsletter__content">
                    <h2> Subscribe now to get useful travelling information .</h2>

                    <div className="newsletter__input">
                        <input type='email' placeholder='Enter your emial'/>
                        <button className='btn newsletter__btn'>
                            Subscribe
                        </button>
                    </div>
                        <p>Join the TravelFusion community today and experience travel like never before. Download the app, plan your next adventure, and let us help you create memories that last a lifetime</p>
                </div>
                </Col>

                <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt=''/>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter