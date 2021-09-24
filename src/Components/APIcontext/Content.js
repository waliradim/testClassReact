import React from 'react'
import HoverCounter from '../RenderProps/HoverCounter'
import Counter from '../RenderProps/Counter'
import ThemeContext from './themeContext'

export default function Content({ theme }) {
    return (
        <div>
            <h1>This Content from Content Component</h1>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter
                        count={count}
                        incrementCount={incrementCount}
                        theme={theme} />
                )}
            </Counter>
        </div>
    )
}
