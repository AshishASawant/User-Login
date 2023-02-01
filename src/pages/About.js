import React, { useState } from 'react'

const About = ({data}) => {
  const [about, setAbout] = useState(true)

console.log(data)
  return (
    <div className='flex-1 flex items-center flex-col justify-center'>
      <div className='w-4/6 flex-col shadow-2xl px-14 py-8 bg-white '>
        <div className='h-64 flex items-center flex-row w-full'>
          <div className='h-full w-[230px]  rounded-md overflow-hidden mr-14  relative'>
            <p className='w-full text-center text-lg p-1 z-20 text-white bg-black bottom-0 left-0 absolute opacity-50 text-opacity-100'>Change Photo</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg" alt="user" className='w-full z-10 h-full object-fill'/>
          </div>
          <div className='h-full w-4/6 relative'>
            <p className='text-[1.5rem] font-bold mt-2 mb-0'>{data.name || 'Ashish Sawant'}</p>
            <p className='mytext font-semibold text-lg mb-2 mt-0'>Developer</p>
            <p className='text-sm '>RANKINGS:<span className='font-semibold'>1/2</span></p>
          <button className='absolute right-0 top-0 bg-slate-400 py-2 px-4 rounded-lg text-white'>
            Edit Profile
          </button>
          <div className='w-full absolute bottom-2 left-0'>
          <button onClick={()=>setAbout(true)} className={`py-2 px-2 mx-1 font-bold text-xl ${about?'border-b-4 border-blue-900 mytext':''}`}>
            About
          </button>          
          <button onClick={()=>setAbout(false)} className={`py-2 px-2 mx-1 font-bold text-xl ${!about?'border-b-4 border-blue-900 mytext':''}`}>
            Timeline
          </button>          
          </div>
          </div>
        </div>
        <div className=' flex flex-row w-full'>
        <div className='h-full w-[230px]  rounded-md overflow-hidden  relative'>
          <ul className='list-inside list-disc pt-2'>
            <li className='mb-1'>Youtuber</li>
            <li className='mb-1'>Instagram</li>
            <li className='mb-1'>code with harry</li>
            <li className='mb-1'>website git mian.com</li>
            <li className='mb-1'>Mern Development</li>
            <li className='mb-1'>figma</li>
            <li className='mb-1'>Software develoment</li>
            </ul>
          </div>
          <div className='flex-1 w-[50%] ml-4 flex flex-row'>
            {about?
            <>
            <div className='w-1/2 flex flex-col justify-between py-2 px-2'>
              <p className='font-semibold text-[18px]'>User ID</p>
              <p className='font-semibold text-[18px]'>Name</p>
              <p className='font-semibold text-[18px]'>Email</p>
              <p className='font-semibold text-[18px]'>Phone</p>
              <p className='font-semibold text-[18px]'>Profession</p>
            </div>
            <div className='w-1/2  flex flex-col justify-between py-2 px-2 mytext'>
              <p className='font-semibold text-[18px]'>{data._id}</p>
              <p className='font-semibold text-[18px]'>{data.name}</p>
              <p className='font-semibold text-[18px]'>{data.email}</p>
              <p className='font-semibold text-[18px]'>{data.phoneno}</p>
              <p className='font-semibold text-[18px]'>{data.work}</p>
            </div></>
            :
            <>
            <div className='w-1/2 flex flex-col justify-between py-2 px-2'>
              <p className='font-semibold text-[18px]'>Experience</p>
              <p className='font-semibold text-[18px]'>Hourly Rate</p>
              <p className='font-semibold text-[18px]'>Total Project</p>
              <p className='font-semibold text-[18px]'>English Level</p>
              <p className='font-semibold text-[18px]'>Availability</p>
            </div>
            <div className='w-1/2  flex flex-col justify-between py-2 px-2 mytext'>
              <p className='font-semibold text-[18px]'>Expert</p>
              <p className='font-semibold text-[18px]'>10$/hr</p>
              <p className='font-semibold text-[18px]'>15</p>
              <p className='font-semibold text-[18px]'>Intermediate</p>
              <p className='font-semibold text-[18px]'>3 Months</p>
            </div></>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About