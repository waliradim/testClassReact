import React from 'react'
import Counter from './Components/RenderProps/Counter'
import ClickCounterProp from './Components/RenderProps/ClickCounter'
import HoverCounterProp from './Components/RenderProps/HoverCounter'
import Section from './Components/APIcontext/Section'
import ThemeContext from './Components/APIcontext/themeContext'
import Content from './Components/APIcontext/Content'
import UseContextApi from './Components/APIcontext/UseContextApi'


export default class App extends React.Component {
  state = {
    theme: 'light',
    name: 'Radim',
    switchTheme: () => {
      this.setState(({ theme }) => {
        if (theme === 'dark') {
          return {
            theme: 'light'
          }
        } else {
          return {
            theme: 'dark'
          }
        }
      });
    }
  }



  render() {

    return (
      <div>

        <ThemeContext.Provider value={this.state}>
          <Section />
        </ThemeContext.Provider>

      </div >
    )
  }
}

