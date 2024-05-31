"use client"; // This is a client component 👈🏽

import { useState } from 'react'

const CounterComponent = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    This is the counter component!
                </p>
            </div>
        </>
    )
}

export default CounterComponent
