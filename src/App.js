import React from 'react'
import Clock from './Components/Clock'
import ClockList from './Components/ClockList'
import Form from './Components/Form'
import Calculator from './Components/LiftingStateUp/Calculator'
import Child from './Components/Inheritance/Child'
import Text from './Components/Composition/Text'
import AddText from './Components/Composition/AddText'
import AddBracket from './Components/Composition/AddBracket'


export default function App() {

  // const ara =[1,2];

  return (
    <div>
      {/* <Clock />
      <Form />
      <ClockList ara = {ara} />
      <Calculator />
      <Child /> */}

      <AddText>
        {
          ({ addText }) => (
            <AddBracket>
              {({ addBracket }) => <Text addText={addText} addBracket={addBracket} />}
            </AddBracket>
          )
        }
      </AddText>

    </div>
  )
}

