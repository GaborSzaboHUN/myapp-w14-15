//rfc

import React, { useState } from 'react'

export default function Timer2() {
    function incrementTimer() {
        setTime(
            time + 1
        )
    }

    const [time, setTime] = useState(0)

    return (
        <>

            <h1>
                {time}
            </h1>

            {/* 
            <button onClick={() => { incrementTimer() }}>Click me</button>
            */}

            <button onClick={incrementTimer}>Click me</button>

        </>
    )
}
