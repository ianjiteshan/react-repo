import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import  {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contacts/Contact.jsx'
import Github ,{ githubLoader} from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader ={githubLoader} //loader is faster and more optimised than simple fetch action in github.jsx...instead we have used loader to fetch ap..store the data and then make a connection between main and github.jsx
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    //wont be usinf app.jsx at all..so ive deleted it already..learning react router
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
