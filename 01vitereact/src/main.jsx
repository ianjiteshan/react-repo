import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

//direct object ka naam in createroot render
const anotherElement = (
<a href="https://google.com" target='_blank'>Visit google </a>)

// createRoot(document.getElementById('root')).render(
//     anotherElement
// )

//creating elements using react
const reactElement=React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_blank"
  },
  "Visit google"
)


// ReactDOM.createRoot(document.getElementById('root')).render(
    
//     reactElement
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    
   <App />
)

