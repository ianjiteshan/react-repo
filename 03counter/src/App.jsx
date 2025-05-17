import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(4)
 const addValue=()=>{ 
  //counter=counter+1
  if(counter>=20){console.log("upper limit reached")}
  else{
  setcounter(counter+1)
  console.log(counter)}
 }
 const removeValue=()=>{
  //counter=counter-1
  if(counter<=0){console.log("lower limit reached")}
  else{setcounter(counter-1)
  console.log(counter)}
 }
  return (
    <>
     <h1>Anji learning react</h1> 
     <h3>counter value: {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      
    </>
  )
}

export default App
