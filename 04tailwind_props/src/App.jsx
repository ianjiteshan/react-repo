import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
const myobject={
  name:"Anji",
  age:20
}
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 mb-4
      rounded-xl ">Tailwind CSS</h1>
          
        <Card name="'Shan'"/>
         <Card />
        
    </>
  )
}

export default App
