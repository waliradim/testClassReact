import React from 'react'

export default function HoverCounter({ count, incrementCount }) {
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Click {count} time</h1>
        </div>
    )
}
