import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Testimonials = () => {

  const settings={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    resposive:[
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
          slideToScroll:1,
          infinite:true,
          dots:true,
        },
        
      },
      {
        breakpoint:576,
        settings:{
          slidesToShow:1,
          slideToScroll:1,
        },

      },
    ]
  }

  return (
    <Slider  {...settings}>
        <div className="testimonia py-4 px-3">
            <p>
            TravelFusion completely transformed the way I plan my trips. The intuitive interface made booking and organizing my travel plans a breeze. I particularly loved the personalized recommendations that made my vacation truly special. The seamless integration with local attractions and accommodations was a game changer. Highly recommend it for anyone looking to enhance their travel experience.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
              <img className='w-25 h-25 rounded-2' src={ava01} alt=''/>
              <div>
                <h6 className='mb-0 mt-3'>John Doe</h6>
                <p>Customer</p>
                
              </div>
            </div>
        </div>
        <div className="testimonia py-4 px-3">
            <p>
            From start to finish, TravelFusion provided an exceptional experience. The app's user-friendly design made finding and booking flights, hotels, and activities incredibly straightforward. The real-time updates and notifications kept me informed and stress-free throughout my trip. The customer support team was also incredibly responsive and helpful. TravelFusion has become my go-to travel companion.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
              <img className='w-25 h-25 rounded-2' src={ava02} alt=''/>
              <div>
                <h6 className='mb-0 mt-3'>Lia FrankLin</h6>
                <p>Customer</p>
                
              </div>
            </div>
        </div>
        <div className="testimonia py-4 px-3">
            <p>
            I was blown away by the comprehensive features of TravelFusion. The app's ability to consolidate all my travel details in one place was a lifesaver. The custom travel itineraries and suggestions based on my preferences made my trip planning effortless. I felt well taken care of every step of the way. This app is a must-have for any frequent traveler.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
              <img className='w-25 h-25 rounded-2' src={ava03} alt=''/>
              <div>
                <h6 className='mb-0 mt-3'>John Doe</h6>
                <p>Customer</p>
                
              </div>
            </div>
        </div>
        <div className="testimonia py-4 px-3">
            <p>
            TravelFusion exceeded my expectations with its innovative approach to travel planning. The app's sleek design and functionality made it easy to explore new destinations and book everything I needed in one place. The attention to detail and user-centric features made my travel experience smooth and enjoyable. I’ll definitely be using TravelFusion for all my future trips
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
              <img className='w-25 h-25 rounded-2' src={ava02} alt=''/>
              <div>
                <h6 className='mb-0 mt-3'>Lia FrankLin</h6>
                <p>Customer</p>
                
              </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials