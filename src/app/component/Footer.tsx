'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Footer = () => {
    let navigate=useRouter();
    let img='https://firebasestorage.googleapis.com/v0/b/access-point-images.appspot.com/o/uploadMy%2Flogo.png?alt=media&token=9b1e8559-9311-4e56-9aef-46af612f0fa1&_gl=1*ure0k*_ga*NDk4NDIwODA2LjE2OTcyNDA0MDk.*_ga_CW55HF8NVT*MTY5NzI0MDQwOS4xLjEuMTY5NzI0MDU3OS40NS4wLjA.'
    let pages=[
        {title:'القرآن الكريم',link:'al-quran'},
        {title:'أذكار المسلم',link:'azkar'},
        {title:'أستمع الي القرآن',link:'al-tlawa'},
        {title:'نبزه عنا',link:'about'},
    ]
  return (
    <Container fluid>

    <Row className='footer'>
        <Col lg={7} className='pe-5 pt-4'>
        <Image src={img} alt='' style={{height:'100px', width:'100px'}} fluid className='rounded-circle' ></Image>
        <h5>١-{' يتيح الموقع الوصول إلى نصوص القرآن الكريم بكافة آياته وسوره باللغة العربية'}</h5>
        <h5>٢-{' يتيح الموقع  تلاوات للقرآن الكريم بصوت راقي ، مما يساعد في الاستماع إلى القرآن بشكل جميل'}</h5>
        <h5>٣- {'يوجد أذكار المسلم وأدعية قرآنية وأدعية الأنبياء'}</h5>
        </Col>
        <Col lg={3} className='pe-5 pt-4 pages' style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
            <h1>الصفحات</h1>
            {pages.map((e,i)=>
            <h4 onClick={()=>navigate.push('/'+e.link)} key={i}>{e.title}</h4>
            )}
            
        </Col>
        <div className="col-12 text-center mb-3">&copy; بواسطة أحمد أيمن ٢٠٢٤</div>
    </Row>
            </Container>
  )
}

export default Footer