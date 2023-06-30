import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [initial, setInitial] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>

            <input
                type='number'
                value={initial}
                onChange={(e) => setInitial(parseInt(e.target.value))}
            />
            <button onClick={() => setCount(initial)}>set</button>
        </div>
    )
}
