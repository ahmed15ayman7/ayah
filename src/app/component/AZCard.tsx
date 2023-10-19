import { useRouter } from 'next/navigation'
import React from 'react'
import { Card } from 'react-bootstrap'

const AZCard = ({title,id}:{title:string,id:string}) => {
  let navigate=useRouter();
  return (
    <Card className='text-center CardQ mb-3 mt-3' onClick={()=>navigate.push('/azkar/'+id)}>
            <Card.Body className='p-3'>
                <Card.Title style={{fontSize:'40px'}}>{title}</Card.Title>
            </Card.Body>
        </Card>
  )
}

export default AZCard