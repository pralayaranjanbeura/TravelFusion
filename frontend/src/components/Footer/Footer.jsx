import React from 'react'
import './footer.css'

import { Container,Row ,Col,ListGroup,ListGroupItem } from 'reactstrap'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'



const quick_links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
        display:'About'
    },
    {
        path:'/tour',
        display:'Tours'
    },
]



const quick_links2=[
    {
        path:'/gallery',
        display:'Gallery'
    },
    {
        path:'/login',
        display:'Login'
    },
    {
        path:'/register',
        display:'Register'
    },
]
const Footer = () => {

    const year=new Date().getFullYear();
  return (
    <footer className='footer'>
        <Container >
            <Row>
                <Col lg='3'>
                    <div className="logo">
                        <img src={logo} alt=''/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, accusantium.</p>

                        <div className="social__links d-flex align-items-center gap-4">
                                <span>
                                    <Link to='#'><i class="ri-youtube-fill"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-github-fill"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-facebook-circle-fill"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-instagram-fill"></i></Link>
                                </span>
                        </div>
                    </div>
                </Col>

                <Col lg='3'>
                <h5 className="footer__Link-title">Discover</h5>

                <ListGroup className='footer__quick-link'>
                    {
                        quick_links.map((item,index)=>(
                            <ListGroupItem className=' ps-0 border-0' key={index} >
                                <Link to={item.path}>
                                {item.display}
                                </Link>
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                </Col>

                <Col lg='3'>
                <h5 className="footer__Link-title">Quick Links</h5>

                <ListGroup className='footer__quick-link'>
                    {
                        quick_links2.map((item,index)=>(
                            <ListGroupItem className=' ps-0 border-0' key={index} >
                                <Link to={item.path}>
                                {item.display}
                                </Link>
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                </Col>


                
                <Col lg='3'>
                <h5 className="footer__Link-title">Contacts</h5>

                <ListGroup className='footer__quick-link'>
                            <ListGroupItem className=' ps-0 border-0 d-flex align-items-center gap-3' >
                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-map-pin-line"></i></span>
                                    Address:
                                </h6>

                                <p className=' mb-0'>Cuttack , Odisha</p>
                            </ListGroupItem>

                            <ListGroupItem className=' ps-0 border-0 d-flex align-items-center gap-3' >
                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-mail-line"></i></span>
                                    Email:
                                </h6>

                                <p className=' mb-0'>pralayranjanbeura435@gmail.com</p>
                            </ListGroupItem>
                            <ListGroupItem className=' ps-0 border-0 d-flex align-items-center gap-3' >
                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-phone-line"></i></span>
                                    Phone:
                                </h6>

                                <p className=' mb-0'>+917377569652</p>
                            </ListGroupItem>

                            
                </ListGroup>
                </Col>

                <Col lg='12' className='text-center pt-5'>
                <p className="copyright"><i class="ri-copyright-line"></i> Copyright {year},design and development by Pralaya,All rights reserved.</p>
                </Col>
            </Row>

        </Container>

    </footer>
  )
}

export default Footer