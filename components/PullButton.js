import React, {useEffect}from 'react'
import { pullData } from '../lib/pullData'
export default function PullButton() {

    useEffect(() =>{
      let data = pullData();
      console.log(data);
    })


    const yo = () => {
        let p = pullData();
        console.log(p)
    }
  return (
    <div>
        <button onClick={() => yo()}>Pull data</button>
    </div>
  )
}
