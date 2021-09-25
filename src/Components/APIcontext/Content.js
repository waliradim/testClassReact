import React from 'react'
import HoverCounter from '../RenderProps/HoverCounter'
import Counter from '../RenderProps/Counter'
import ThemeContext from './themeContext'
import UseContextApi from './UseContextApi'

export default class Content extends React.Component {
    render() {
        const { theme, switchTheme } = this.context
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
}
Content.contextType = ThemeContext;
