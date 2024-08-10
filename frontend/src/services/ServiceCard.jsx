import React from 'react'
import './service-card.css'


const ServiceCard = ({item}) => {

const {imageUrl,title,desc}=item;

  return <div className="service__item">
        <div className="service__img">
            <img  src={imageUrl} alt=''/>
            </div> 
            <h5>{title}</h5>
            <p>{desc}</p>
    </div>
  
}

export default ServiceCard