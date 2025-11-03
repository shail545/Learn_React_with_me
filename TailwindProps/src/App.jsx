import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let MyName={
    username:"shailedra",
    age:22
  }

  return (
    <>
    <Card username="shail"/>
    <Card username="sexa"/>
    </>
  )
}

export default App
