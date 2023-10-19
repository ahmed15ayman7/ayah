"use client"
import { Col, Container, Row } from 'react-bootstrap'
import ContainerAzkar from './component/ContainerAzkar'
import Overview from './component/Overview'
import SwiperQ_A from './component/SwiperQ_A'
export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between">
      <Container fluid style={{padding:'0'}}>
      <Overview/>
      <Row style={{justifyContent:'center'}}>
      <Col lg={12} md={12} sm={12} xs={12} className='text-center text-white mt-5' style={{fontFamily: 'Reem Kufi , sans-serif',textShadow:'1px 2px #000000'}}><h1>«« {'القرآن الكريم'}  »»</h1></Col>
      </Row>
      <div style={{direction:'ltr'}}>
      <SwiperQ_A n={0}/>
      </div>
      <SwiperQ_A n={40}/>
      <ContainerAzkar/>
      
      <div style={{direction:'ltr'}}>

      <SwiperQ_A n={-11}/>
      </div>
      </Container>
    </main>
  )
}
