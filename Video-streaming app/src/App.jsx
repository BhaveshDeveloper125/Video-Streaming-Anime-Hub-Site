import { useState } from 'react'
import Slider from './Component/Slider/Slider'
import Navigation from './Component/Navigation/Navigation'
import Share from './Component/Share_Section/Share'
import Cards from './Component/Cards/Cards'
import Mostviewed from './Component/MostViewed/Mostviewed'


function App() 
{
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="firstbg">
        <Slider/>
        <Navigation/>
        <Share/>
        <Cards/>
      </div>

      <div className="secondbg">
        <Mostviewed/>
      </div>
    </>
  )
}

export default App