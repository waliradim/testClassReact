import React from 'react'
import HoverCounter from '../RenderProps/HoverCounter'
import Counter from '../RenderProps/Counter'
import ThemeContext from './themeContext'
import { useContext } from 'react'


export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
    return (
        <div>
            <h1>This Content from Content Component</h1>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter
                        count={count}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div >
    )
}


