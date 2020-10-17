import React, {useState} from 'react'


export default function ConterHooks({initialCount}){
  const [count, setState] = useState(initialCount)

    return(
        <div>

            <button onClick={ () => setState (prevCount => prevCount - 1) }>-</button>
            <span>{count}</span>
            <button onClick={ () => setState (prevCount => prevCount + 1) }>+</button>
            
            
            </div>

    )
}