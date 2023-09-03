import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const StyleChanger = (props: Props) => {
    const div = useRef<HTMLDivElement[]>([])
    // const divred = useRef<HTMLDivElement>(null)
    return (
        <>
            <div ref={(el : HTMLDivElement) => { div.current[0] = el }} style={{ background: 'blue' }}>i am blue</div>
            <div ref={(el : HTMLDivElement) => { div.current[1] = el }} style={{ background: 'red' }}>i am red</div>
            <button onClick={() => {
                div.current[0]!.style.background = 'white';
                div.current[1]!.style.background = 'white';
                div.current[0]!.style.color = 'black';
                div.current[1]!.style.color = 'black';
            }}>Style Changer to white</button>

        </>
    )
}

export default StyleChanger