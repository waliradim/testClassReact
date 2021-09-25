import React from 'react'
import HoverCounter from '../RenderProps/HoverCounter'
import Counter from '../RenderProps/Counter'
import ThemeContext from './themeContext'
import UseContextApi from './UseContextApi'

export default function Content() {
    return (
        <div>
            <h1>This Content from Content Component</h1>
            <Counter>
                {(count, incrementCount) => {
                    return <ThemeContext.Consumer>{({ theme, switchTheme }) => (
                        <HoverCounter
                            count={count}
                            incrementCount={incrementCount}
                            theme={theme}
                            switchTheme={switchTheme}
                        />
                    )}
                    </ThemeContext.Consumer>
                }}
            </Counter>
            {<ThemeContext.Consumer>
                {({ theme, name }) => <UseContextApi theme={theme} name={name} />}
            </ThemeContext.Consumer>}

        </div>
    )
}
