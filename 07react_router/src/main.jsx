import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contacts/Contact.jsx'

//method 1 of creating router
// const router = createBrowserRouter([
//     {path:'/',
//     element: <Root/>,
//     children:[
//         {path:"",
//         element:<Home/>
//     }, 
//     {path:"about",
//         element: <About/>
//     },
//   {path:"contact",
//         element: <Contact/>
//     }]
//     }
// ])


//method 2 of creating router

    

createRoot(document.getElementById('root')).render(
    //wont be usinf app.jsx at all..so ive deleted it already..learning react router
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
