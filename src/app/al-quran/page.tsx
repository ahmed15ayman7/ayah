"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import SwiperQ_A from '../component/SwiperQ_A'

const AlQuran = () => {
  let navigate=useRouter();
  return (
    <Container fluid style={{padding:'0'}}>
      <Row>
      <Col lg={12} md={12} sm={12} xs={12} className='text-center text-white mt-3' style={{fontFamily: 'Reem Kufi , sans-serif',textShadow:'1px 2px #000000'}}><h1>«« {'القرآن الكريم'}  »»</h1></Col>
      </Row>
      <SwiperQ_A n={0}/>
      <div style={{direction:'ltr'}}>
      <SwiperQ_A n={40}/>
      </div>
      <SwiperQ_A n={70}/>
      <div style={{direction:'ltr'}}>
      <SwiperQ_A n={105}/>
      </div>
      <Row style={{justifyContent:'center'}}>
        <Col lg={3} md={5} sm={6} xs={7} className='text-center'>
        <Button className="btn-Q mb-5 mt-5 fs-4" style={{boxShadow:'0 0 20px 4px #000000'}} onClick={()=>navigate.push('/al-quran/all')} >{'الكل'}</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default AlQuran