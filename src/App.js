import React from 'react'
import Clock from './Components/Clock'
import ClockList from './Components/ClockList'

export default function App() {
  
  const ara =[1,2];

  return (
    <div>
      <Clock />
      
      <ClockList ara = {ara} />
    </div>
  )
}

