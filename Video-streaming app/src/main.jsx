import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import ContactUs from './Component/ContactUs/ContactUs.jsx'
import About from './Component/About/About.jsx'
import Navigation from './Component/Navigation/Navigation.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/> </>
  },
  {
    path: "/about",
    element: <> <Navigation/> <About/> </>
  },
  {
    path: "/conatctus",
    element: <> <Navigation/> <ContactUs/> </>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
