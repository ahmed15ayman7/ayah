import { useRouter } from 'next/navigation'
import React from 'react'
import {Card} from 'react-bootstrap'
type props={
  refrance:string,
    title:string,
    des:string,
    count:string,
    
}
const AZkarCard = ({refrance,title,des,count}:props) => {
  return (
    <div>
        <Card className='text-center CardQ'>
          <Card.Header>{refrance}</Card.Header>
            <Card.Body className='p-5 pb-3'>
                <Card.Title style={{fontSize:'24px'}}>{title}</Card.Title>
                <Card.Text>{des}</Card.Text>
            </Card.Body>
            <Card.Footer>{"عدد المرات"} : {count}</Card.Footer>
        </Card>
    </div>
  )
}

export default AZkarCard