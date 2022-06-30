//rfc

import React, { useEffect, useState } from 'react'

export default function Timer2() {
    function incrementTimer() {
        setTime(
            time + 1
        )
    }

    const [time, setTime] = useState(0)

    useEffect(() => {
        // console.log("useEffect called")

        console.log("New interval set")

        const intervalId = setInterval(() => {
            incrementTimer()
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    })

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
