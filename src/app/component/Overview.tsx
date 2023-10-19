
import {Button, Image} from 'react-bootstrap'
import React from 'react'
import { useRouter } from 'next/navigation'

const Overview = () => {
    let navigate=useRouter();
  return (
    <div className='overview'>
        <div className="overview-mask">
            <div className="details-o">
                <h1>{'القرآن الكريم'}</h1>
                <Button onClick={()=>navigate.push('/al-quran')} className='mt-3 btn-Q anim'>إقرأ واستمع</Button>
            </div>
        </div>
     <Image
      src="https://waseelah.me/wp-content/uploads/2018/03/5-2-780x470.jpg"
      alt="Landscape picture"
      className='img-fluid'
    />
        </div>
  )
}

export default Overview