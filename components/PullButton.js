import React, {useEffect}from 'react'
import { pullData } from '../lib/pullData'
export default function PullButton() {

    useEffect(() =>{
        const data = pullData().then((d)=>{
            return d;
        });
    
    })

  return (
    <div>
        <button>Pull data</button>
    </div>
  )
}
