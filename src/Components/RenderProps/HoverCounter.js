import React from 'react'

export default function HoverCounter({ count, incrementCount, theme }) {
    const style = theme === 'dark' ? { backgroundColor: '#F1E999', color: '#38A6F1' } : null;

    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Click {count} time</h1>
        </div>
    )
}
