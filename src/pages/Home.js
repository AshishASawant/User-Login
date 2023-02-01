import React from 'react'

const Home = ({data}) => {

  return (
    <div className=' flex-1 flex items-center justify-center flex-col w-full libg'>
      <h1 className='font-bold text-[5.4rem] p-0 leading-none'>Welcome </h1>
      {data && <p className='font-bold text-[5rem] pt-0 leading-tight'>{data.name}</p>}
        <p className='mytext font-semibold text-[2rem] mt-2'>The Mern Stack Developer</p>
    </div>
  )
}

export default Home
