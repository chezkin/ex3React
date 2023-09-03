import React, { useEffect, useRef, useState } from 'react'



const Counter = () => {
    const divCounter = useRef<HTMLHeadingElement>(null)
    const count = useRef(0)

    return (
        <>
            <h2 ref={divCounter}>{count.current}</h2>
            <button onClick={() => {
                count.current += 1;
                divCounter.current!.textContent = count.current.toString()
            }} type="button">add</button>
            <button onClick={() => {
                count.current = 0;
                divCounter.current!.textContent = count.current.toString()
            }} type="button">reset</button>
        </>
    )
}

export default Counter