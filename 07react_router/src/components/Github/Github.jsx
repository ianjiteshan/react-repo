import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data= useLoaderData();
  //method 1 of api call and usage
  // //jo api call h wo as object return horha hai idhr that is why data ka format object set krdiua hai in useState 
  // const [data,setData]= useState({});
  // useEffect(() => {
  //   fetch('https://api.github.com/users/ianjiteshan')
  //   .then(response => response.json())
  //   .then(data => {
  //        console.log(data);
  //       setData(data)
  //     })
  //   }, [])

//method 2 loader concept based
//in main.jsx file  we have created a loader for this component
  return (
   <> <div className='text-center m-4 bg-gray-400 text-amber-50 p-4 text-3xl'>Github Followers:{data.followers} </div>
     <div className='text-center m-4 bg-gray-400 text-amber-50 p-4 text-3xl'>Github Location:{data.location}
      <img src={data.avatar_url} alt="picture" width={200} />
     </div>
     </>
  ) 
}

export default Github



export const githubLoader = async () => {
  const response = await fetch('https://api.github.com/users/ianjiteshan');
  return response.json();
}