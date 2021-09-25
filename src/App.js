import React from 'react'
import Counter from './Components/RenderProps/Counter'
import ClickCounterProp from './Components/RenderProps/ClickCounter'
import HoverCounterProp from './Components/RenderProps/HoverCounter'
import Section from './Components/APIcontext/Section'
import ThemeContext from './Components/APIcontext/themeContext'

export default class App extends React.Component {
  state = {
    theme: 'dark'
  }

  render() {
    const { theme } = this.state;
    return (
      <div>

        <ThemeContext.Provider value={{ theme: theme }}>
          <Section />
        </ThemeContext.Provider>

      </div >
    )
  }
}

