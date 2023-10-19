"use client"
import { ItemsQ } from '@/app/assets/Quran-Json/Quran';
import  {useParams, useRouter}  from 'next/navigation'
import React, { useRef, useState } from 'react'
import { Howl } from 'howler';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh ,faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
const QSora = ({type}:{type:string}) => {
    let navigate=useRouter()
    let parm= useParams();
    let id= parm.id;
    let sora=ItemsQ.filter(e=>e.id===+id)[0]
    let bsm=ItemsQ[0].array[0].ar;
    let s=0
    let SoraSoundPlay=(src:string,a:number)=>{
      let sound=new Howl({
        src: [src],
        html5: true,
      })
      if (a===0) {
        sound.play();
      }else{
        sound.stop();
      }
    }
    let SoraSound=sora.array.map((e,i)=>{
    let s=0;
    return(<span key={i} >
      {e.ar}
      {<FontAwesomeIcon  icon={faVolumeHigh} size='sm' style={{cursor:'pointer'}} onClick={(a)=>{
        
        if(s===0){
          a.currentTarget.style.color='#069E06'
          SoraSoundPlay(e.path,s);
          s=1
        }else{
          a.currentTarget.style.color='#000000'
          SoraSoundPlay(e.path,s);
          s=0
        }

      }}/>}
      {'«'+e.id+'»'}
    </span>
    )} )
  return (
      <>
    <Container className='pt-18 mb-5' fluid>
        <Row style={{justifyContent:'center'}} className='mb-3 pt-3'>
            <div className="col-11 d-flex" style={{justifyContent:'end',gap:'2'}}>

                <FontAwesomeIcon icon={faUpRightFromSquare} beat size="lg" onClick={()=>navigate.push(type==='R'?'/al-tlawa/'+id:'/al-quran/'+id)} style={{cursor:'pointer'}}/>
            <div className="ms-1"></div>
              {type==='R' && <FontAwesomeIcon icon={faVolumeHigh}  size="lg" />}
            <h4 className='ms-3'>{type==='R'?'إقرأ واستمع':'إقرأ'}</h4>
            </div>
        </Row>
        <Row style={{justifyContent:'center'}}>
            <Col lg={11} md={11}>
            <Card className='text-center CardQ CS'>
            <Card.Header style={{fontSize:'30px'}}>{'سورة'}{sora.name}</Card.Header>
            <Card.Body className='p-lg-5'>
                {+id!==9&&<Card.Title style={{fontSize:'30px'}}>{bsm}{type!=='R'&&<FontAwesomeIcon  icon={faVolumeHigh} size='sm' style={{cursor:'pointer',marginRight:'3px'}} onClick={(a)=>{
                  if(s===0){
                    a.currentTarget.style.color='#069E06'
                    SoraSoundPlay('/audio/001/001.mp3',s)
                    
                    s=1
                  }else{
                    a.currentTarget.style.color='#000000'
                    SoraSoundPlay('/audio/001/001.mp3',s)
                    s=0
                  }
                  }} />}</Card.Title>}
                {
                  type==='R'?
                  <Card.Text style={{fontSize:'20px',lineHeight:'50px',wordSpacing:'3px',letterSpacing:'1px'}}>{sora.ar.split('').map(e=>e==='('?'«':e===')'?'»':e)}</Card.Text>:
                <Card.Text style={{fontSize:'20px',lineHeight:'50px',wordSpacing:'3px',letterSpacing:'1px',display:'inline-block'}}>{SoraSound}</Card.Text>
                }
            </Card.Body>
            <Card.Footer>{"عدد الايات"} : {sora.array.length}</Card.Footer>
        </Card>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default QSora