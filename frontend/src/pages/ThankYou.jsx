import React from 'react'
import '../styles/thank-you.css'
import { Button, Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className=' pt-5 text-center'>
                <div className="thank__you">
                    <span>
                    <i class="ri-checkbox-circle-line"></i>
                    </span>
                    <h1 className="mb-3 fw-semibold">
                        Thank You
                    </h1>
                    <h3 className="mb-4">Your tour is booked</h3>

                    <Button className='btn primary__btn w-25'>
                        <Link to='/home'>Back to Home</Link>
                    </Button>
                </div>
                </Col>
            </Row>
        </Container>
    </section>

   
  )
}

export default ThankYou