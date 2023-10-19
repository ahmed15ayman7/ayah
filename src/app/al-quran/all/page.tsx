'use client'
import { ItemsQ } from '../../assets/Quran-Json/Quran'
import QCard from '../../component/QCard'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AllQ = () => {
  return (
    <Container  style={{padding:'0'}}>
        <Row style={{justifyContent:'space-evenly'}} className='p-lg-1 p-md-1 p-sm-1 p-3'>
        <Col lg={12} md={12} sm={12} xs={12} className='text-center text-white mt-3' style={{fontFamily: 'Reem Kufi , sans-serif',textShadow:'1px 2px #000000'}}><h1>«« {'القرآن الكريم'}  »»</h1></Col>
            {ItemsQ.map((e,i)=>
            <Col key={i} lg={3} md={4} sm={6} className='mt-3'>
                <QCard id={e.id} title={e.name} type={e.type} numAyat={e.array.length}/>
            </Col>)}
        </Row>
    </Container>
  )
}

export default AllQ