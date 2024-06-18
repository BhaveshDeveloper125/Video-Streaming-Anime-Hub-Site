import { useState } from 'react'
import Slider from './Component/Slider/Slider'
import Navigation from './Component/Navigation/Navigation'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slider/>
      <Navigation/>
    </>
  )
}

export default App
