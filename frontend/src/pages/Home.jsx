import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from "reactstrap"

import heroImg from "../assets/images/hero-img01.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import heroImg02 from "../assets/images/hero-img02.jpg"
import Subtitle from '../shared/Subtitle'
import worldImg from "../assets/images/world.png"
import experience from '../assets/images/experience.png'

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/featured-tour/FeaturedTourList'
import MasonryImagesGallery from '../components/images-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'


const Home = () => {
    return (<>
{/* {.....hero section start.......} */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='hero__content'>
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Konw before you go'}/>
                                <img
                                src={worldImg}
                                alt='worldImage'
                                />
                            </div>
                            <h1>Traveling opens the door to creating
                                <span className='highlight'>  memories</span>
                            </h1>
                            <p>Traveling opens the door to a world of endless possibilities and new perspectives. Each journey is an invitation to explore diverse cultures, witness breathtaking landscapes, and connect with people from all walks of life. As you step beyond the familiar, you unlock opportunities for personal growth, adventure, and discovery</p>
                        </div>
                    </Col>

                    <Col lg='2'>
                    <div className='hero__image-box'>
                        <img src={heroImg} alt="" />
                    </div>
                    </Col>
                    <Col lg='2'>
                    <div className='hero__image-box mt-4'>
                        <video src={heroVideo} alt="" controls />
                    </div>
                    </Col>
                    <Col lg='2'>
                    <div className='hero__image-box mt-5'>
                        <img src={heroImg02} alt="" />
                    </div>
                    </Col>
                    <SearchBar/>
                </Row>
            </Container>

        </section>
{/* {.....hero section start.......} */}

        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                    <h5 className="services__subtitle">What  we serve</h5>
                    <h2 className="services__title">We offer our best services</h2>
                    </Col>
                    <ServiceList/>
                </Row>
            </Container>
        </section>


        {/* {.........feature tour selection start..........} */}

        <section>
            <Container>
                <Row>
                <Col lg='12' className='mb-5'>
                <Subtitle subtitle={'Explore'}/>
                <h2 className="featured__tour-title">Our Feature Tour</h2>
                </Col>
                <FeaturedTourList/>
                </Row>
            </Container>
        </section>
        {/* {.........feature tour selection end..........} */}
        {/* {::::::::::::::experience section start::::::::::} */}

        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                    <div className="experience__content">
                        <Subtitle subtitle={'Experience'}/>

                        <h2>With our all experience <br /> we will serve you</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque 
                            <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam animi autem, 
                        </p>
                    </div>

                    <div className="counter__wrapper d-flex align-items-center gap-5">
                        <div className="counter__box">
                            <span>12K+</span>
                            <h6>Successful Trip</h6>
                        </div>
                        <div className="counter__box">
                            <span>2K+</span>
                            <h6>Regular Client</h6>
                        </div>
                        <div className="counter__box">
                            <span>15K+</span>
                            <h6>Yearly Client</h6>
                        </div>
                    </div>
                    </Col>
                    <Col lg='6'>
                    <div className="experience__img">
                        <img src={experience} alt=''/>

                    </div>
                    </Col>

                </Row>
            </Container>
        </section>
        {/* {::::::::::::::experience section end::::::::::} */}

        {/* {:::::::::::::gallery section start::::::::::} */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                        <Subtitle subtitle={'Gallery'}/>
                        <h2 className="gallery__title">
                            Visit our customers tour gallery
                        </h2>
                        </Col>
                        <Col lg='12'>
                        <MasonryImagesGallery/>
                        </Col>
                    </Row>
                </Container>
            </section>



        {/* {:::::::::::::gallery section end::::::::::} */}
        {/* {:::::;::::testimonial section start::::::::::::::} */}

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                        <Subtitle subtitle={"Fans Love"}/>
                        <h2 className='testimonial__title'>What our fans say about us</h2>
                        </Col>

                        <Col lg='12'>
                        <Testimonials/>
                        </Col>
                    </Row>
                </Container>
            </section>


        {/* {:::::;::::testimonial section end::::::::::::::} */}
        
        <Newsletter/>






    </>

    )
}

export default Home