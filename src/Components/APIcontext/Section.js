import React from 'react'
import Content from './Content'

export default function Section({ theme }) {
    return (
        <div>
            <h1>This Section Component</h1>
            <Content theme={theme} />
        </div>
    )
}
