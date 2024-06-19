import { useState } from 'react'
import Slider from './Component/Slider/Slider'
import Navigation from './Component/Navigation/Navigation'
import Share from './Component/Share_Section/Share'
import Cards from './Component/Cards/Cards'


function App() 
{
  const [count, setCount] = useState(0)

  return (
    <>
      <Slider/>
      <Navigation/>
      <Share/>
      <Cards/>
    </>
  )
}

export default App