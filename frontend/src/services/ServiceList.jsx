import React from 'react'

import {Col} from'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import ServiceCard from './ServiceCard'

const serviceData=[
    {
        imageUrl:weatherImg,
        title:" Calculate Weather",
        desc:"Weather predict"
    },
    {
        imageUrl:guideImg,
          title:" Bets Tour Guide",
        desc:"make a way"
    },
    {
        imageUrl:customizationImg,
          title:"Customization",
        desc:"Customize a way"
    }

]

const ServiceList = () => {
    
  return <>
    {serviceData.map((item,index)=>
    (
    <Col lg='3' key={index}>
        <ServiceCard item={item}/>
    </Col>
    ))}
    
    </>
  
  
}

export default ServiceList