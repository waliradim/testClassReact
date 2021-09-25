import React from 'react'
import HoverCounter from '../RenderProps/HoverCounter'
import Counter from '../RenderProps/Counter'
import ThemeContext from './themeContext'

export default function Content() {
    return (
        <div>
            <h1>This Content from Content Component</h1>
            <Counter>
                {(count, incrementCount) => {
                    return <ThemeContext.Consumer>{({ theme }) => <HoverCounter
                        count={count}
                        incrementCount={incrementCount}
                        theme={theme} />}</ThemeContext.Consumer>
                }}
            </Counter>
        </div>
    )
}
