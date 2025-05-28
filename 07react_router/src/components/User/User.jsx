import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid}=useParams()
  return (
    <div className='bg-slate-400 text-amber-200 text-2xl p-4 justify-self-center'>User:{userid} </div>
  )
}
 
export default User