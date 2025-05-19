import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLenght] = useState(4);
  const [numallow, setNumallow] = useState(false);
  const [Charallow, setCharallow] = useState(false);
  const [password, setPassword] = useState("");
  
//useref password
    const passwordRef = useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numallow)str+="0123456789";  //if number is allowed
    if(Charallow)str+="!@#$%^&*()"; //if character is allowed 
    for(let i=0;i<=length;i++){ //lenght condition
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,numallow,Charallow,setPassword])
  

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

useEffect(()=>{ //effect when some dependencies are ched chadd xd
  passwordGenerator();
},[length,numallow,Charallow,passwordGenerator])

  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-3xl text-center text-white my-3'> Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type='text' value={password} className='w-full bg-gray-200 text-black px-4 py-2 rounded-md my-2' placeholder='Password' readOnly ref={passwordRef}/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-2 rounded-md my-2'
        onClick={copyPasswordToClipboard} >Copy</button></div>
        

        
        <div className='flex text-sm gap-x-2'>
          <input 
         type="range"
         min={4} 
         max={40} 
         value={length} 
         className=" h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 " onChange={(e)=>setLenght(e.target.value)}/><label>
         Length : {length}
         </label>
         <div className='flex items-center gap-x-1'>
          <input 
         type="checkbox"
         defaultChecked={numallow} 
         id='numberInput'
          onChange={() => 
                  setNumallow((prev) => !prev )}/>
          <label htmlFor="numberInput">Numbers</label>
          <input
              type="checkbox"
              defaultChecked={Charallow}
              id="characterInput"
              onChange={() => {
                  setCharallow((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters
          </label>
        </div>
        </div>
        
        
      </div>
      
    </>
  )
}

export default App









  