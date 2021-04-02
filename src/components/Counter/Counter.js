import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <button onClick={() => setCount(prevCount => prevCount - 1)} disabled={count === 0} >-</button>
            <h1>{ count }</h1>
            <button onClick={() => setCount(prevCount => prevCount  + 1)}>+</button>
        </div>
    )
}

export default Counter
