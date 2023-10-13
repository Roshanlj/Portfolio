import React from 'react'

export default function Home() {
  return (
    <div className='bg-[#292929] w-full h-screen'>
      {/* Logo -----------------------------------------------------------------*/}
      <div className='text-[#FFD9D0] absolute left-5 top-4 text-xl font-inter font-semibold'>
        Roshan
      </div>
      <div className='text-[#FFD9D0] absolute left-11 top-10 text-xl font-inter font-semibold'>
        Jadhav
      </div>
      {/* Logo -----------------------------------------------------------------*/}
      {/* Home -----------------------------------------------------------------*/}
      <div className='text-[#FFD9D0] w-full absolute flex justify-center top-40 text-[16px] font-semibold'>
        Hi, I Develop
      </div>
      <div className='text-[#FFD9D0] w-full absolute flex justify-center top-48 text-[80px] text-center font-lexend font-bold'>
        WEBSITES AND SOFTWARES
      </div>
      <div className='text-[#FFD9D0] w-full absolute flex justify-center bottom-52 text-[30px] font-normal font-marck'>
        in JavaScript, Python, MERN, etc.
      </div>
      <div className='text-[#FFD9D0] w-full absolute flex justify-center bottom-24 text-[14px] font-light font-inria'>
        About Me
      </div>
      <div className='w-full flex justify-center'>
      <img src='pointer.svg'
        className='absolute bottom-12 w-3 h-10'/>
      </div>
      {/* Home -----------------------------------------------------------------*/}
    </div>
  )
}
