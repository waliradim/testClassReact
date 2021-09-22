import React from 'react'
import Clock from './Components/Clock'
import ClockList from './Components/ClockList'
import Form from './Components/Form'
import Calculator from './Components/LiftingStateUp/Calculator'
import Child from './Components/Inheritance/Child'
import Text from './Components/Composition/Text'
import AddText from './Components/Composition/AddText'
import AddBracket from './Components/Composition/AddBracket'
import ClickCounter from './Components/HOC/ClickCounter'
import HoverCounter from './Components/HOC/HoverCounter'
import Counter from './Components/RenderProps/Counter'
import ClickCounterProp from './Components/RenderProps/ClickCounter'
import HoverCounterProp from './Components/RenderProps/HoverCounter'


export default function App() {

  // const ara =[1,2];

  return (
    <div>
      {/* <Clock />
      <Form />
      <ClockList ara = {ara} />
      <Calculator />
      <Child /> */}

      {/* <AddText>
        {
          ({ addText }) => (
            <AddBracket>
              {({ addBracket }) => <Text addText={addText} addBracket={addBracket} />}
            </AddBracket>
          )
        }
      </AddText> */}

      {/* <ClickCounter />
      <HoverCounter /> */}

      <Counter render={(count, incrementCount) => (
        <ClickCounterProp count={count} incrementCount={incrementCount} />
      )} />
      <Counter render={(count, incrementCount) => (
        <HoverCounterProp count={count} incrementCount={incrementCount} />
      )} />
    </div>
  )
}

