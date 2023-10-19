import { useRouter } from 'next/navigation'
import React from 'react'
import {Card} from 'react-bootstrap'
type props={
    id:number,
    title:string,
    type:string,
    numAyat:number,
    
}
const QCard = ({id,title,type,numAyat}:props) => {
  let navigate=useRouter()
  return (
    <div>
        <h3 className='text-center mb-2 text-white' style={{textShadow:'1px 1px #000000',textDecoration:'overline'}}>{id}</h3>
        <Card className='text-center CardQ' onClick={()=>navigate.push('/al-quran/'+id)}>
            <Card.Body className='p-5 pb-3'>
                <Card.Title style={{fontSize:'24px'}}>{"سورة"} : {title}</Card.Title>
                <Card.Text>{"النوع"} : {type}</Card.Text>
            </Card.Body>
            <Card.Footer>{"عدد الايات"} : {numAyat}</Card.Footer>
        </Card>
    </div>
  )
}

export default QCard