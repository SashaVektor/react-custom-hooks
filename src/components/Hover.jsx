import React, { useRef } from 'react'
import useHover from '../hooks/useHover'

const Hover = () => {
    const ref1 = useRef()
    const ref2 = useRef()
    const isHovering = useHover(ref1)
    const isHover = useHover(ref2)
    return (
        <>
            <div style={{ cursor: "pointer", width: 100, height: 100, background: isHovering ? "black" : "red" }}
                ref={ref1}>
            </div>
            <div style={{ cursor: "pointer", width: 100, height: 100, background: isHover ? "green" : "blue" }}
                ref={ref2}>
            </div>
        </>
    )
}

export default Hover
