"use client";
import Link from 'next/link'

import React from 'react';
import { Container, Nav,Image, Navbar, Offcanvas } from 'react-bootstrap';


const Header = () => {   
   let img='https://firebasestorage.googleapis.com/v0/b/access-point-images.appspot.com/o/uploadMy%2Flogo.png?alt=media&token=9b1e8559-9311-4e56-9aef-46af612f0fa1&_gl=1*ure0k*_ga*NDk4NDIwODA2LjE2OTcyNDA0MDk.*_ga_CW55HF8NVT*MTY5NzI0MDQwOS4xLjEuMTY5NzI0MDU3OS40NS4wLjA.'
  return (
    <>
            {['md'].map((expand,i) => (
                <Navbar key={i} style={{direction:'rtl',padding:'0',position:'fixed',top:'0' ,right:'0',left:'0' ,zIndex:100000}}  expand={expand}>
                <Container fluid className='CNAV ps-3 pe-3' >
                <Navbar.Brand  className='fw-bold'style={{cursor:'pointer'}} > <Link href={'/'} className='NB' ><Image src={img} alt='' style={{height:'70px', width:'100px'}} fluid ></Image></Link></Navbar.Brand>
                <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas 
                    style={{backgroundColor:'rgba(0,0,0,.3)',color:'#ffffff'}}
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                <Offcanvas.Header closeButton style={{}}>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end nv-link flex-grow-1 pe-3">
                        <Link href={'/'} className='nav-link'>{'الصفحه الرئيسية'}</Link>
                        <Link href={'/al-quran'} className='nav-link'>{'القرآن الكريم'}</Link>
                        <Link href={'/azkar'} className='nav-link'>{'أذكار المسلم'}</Link>
                    </Nav>
                    
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))}
        </>
    );
  
}

export default Header