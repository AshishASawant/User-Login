import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate=useNavigate()
  return (
    <div className='flex-1 flex items-center justify-center w-full text-black '>
    <div className="flex items-center flex-col justify-center h-[28rem] bg-img w-5/6 px-40 shadow-2xl">
        <p className='text-[3.5rem] font-extrabold capitalize'>We are sorry, page not found </p>
        <p className='text-2xl font-semibold  capitalize'>You have entered a broken Link or the page you are looking for might had its name changed or is temporarily unavailable</p>
        <button onClick={()=>navigate('./home') } className='mt-9 font-semibold bg-blue-400 py-2 px-4 rounded-2xl'>Back To Homepage</button>
    </div>
    </div>
  )
}

export default ErrorPage