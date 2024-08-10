import React,{useState} from 'react'
import '../styles/login.css'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'

import loginImg from '../assets/images/login.png'
import userImg from "../assets/images/user.png"
import { Link } from 'react-router-dom'

const Login = () => {
    //from booking.jsx component
    const [credentials,setCredentials]=useState({
      email:undefined,
      password:undefined
    })

    const handleChange=e=>{
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    };

    const handleClick=e=>{
        e.preventDefault()
    }






  return (
    <section className=' pt-0'>
        <Container>
            <Row>
                <Col lg='8' className=' m-auto'>
                <div className="login__container d-flex justify-content-between">
                    <div className="login__img">
                    <img src={loginImg} alt=''/>
                    </div>
              

                <div className="login__form">
                    <div className="user">
                        <img src={userImg} alt=''/>
                    </div>
                    <h2>login</h2>

                    <Form>
                        <FormGroup>
                            <input type='email' placeholder='Email' required id='email' onChange={handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <input type='password' placeholder='Password' required id='password' onChange={handleChange}/>
                        </FormGroup>
                        <Button className='btn secondary__btn auth__btn'  type='submit'>
                            Login
                        </Button>
                    </Form>
                    <p>Don't have account?<Link to='/register'>Create</Link></p>
                </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Login