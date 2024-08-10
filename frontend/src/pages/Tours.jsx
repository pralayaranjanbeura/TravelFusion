import React,{useState,useEffect} from 'react'
import CommonSection from '../shared/CommonSection'

import '../styles/tour.css'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
import Newsletter from '../shared/Newsletter'
import tourData from '../assets/data/tours'
import { Col, Container, Row } from 'reactstrap'


const Tours = () => {
   
  const [pageCount,setPageCount]=useState(0);
  const [page,setPage]=useState(0);

useEffect(()=>{
 const  pages=Math.ceil(5/4);
 setPageCount(pages)
},[page])




  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className=' pt-0'>
        <Container>
          <Row>
            {
              tourData?.map(tour => (
                <Col className=' mb-4' lg='3' key={tour}>
                  <TourCard tour={tour} />

                </Col>
              ))
            }
            <Col lg='12'>
            <div className="pagination d-flex aligm-items-center justify-content-center mt-4 gap-3">
              {[...Array(pageCount).keys()].map(number=>(
                <span key={number} onClick={()=>setPage(number)}
                className={page===number ? 'active__page':""}
                >
                  {number+1}
                </span>
              ))}

            </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default Tours