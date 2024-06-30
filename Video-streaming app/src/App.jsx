import { useState } from 'react'
import Slider from './Component/Slider/Slider'
import Navigation from './Component/Navigation/Navigation'
import Share from './Component/Share_Section/Share'
import Cards from './Component/Cards/Cards'
import Mostviewed from './Component/MostViewed/Mostviewed'
import Footer from './Component/Footer/Footer'


function App() 
{
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="firstbg">
        <div className="firstlite">
        <Slider/>
        <Navigation/>
        <Share/>
        <Cards/>
        </div>
      </div>

      <div className="secondbg">
        <Mostviewed/>
      </div>

      <div className="thirdbg">
        <div className="thirdlite">
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App