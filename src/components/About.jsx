import React from 'react'

export default function About() {
  return (
    <div className='w-full h-screen bg-[#393939]'>
        <p className='absolute left-60 flex items-center h-screen
         text-[#FFD9D0] w-[450px] font-inria font-medium text-[18px]'>
            I am a dedicated B.Tech Computer Engineering student with a passion for technology and a resolute commitment to making contributions to the field.  Currently looking for work as an Intern so get experience and to make a change in real world.
        </p>
    <span className='absolute h-screen w-full'>

    <div className='text-[#FFD9D0] h-screen flex items-center'>
    <div className='absolute items-center right-[150px] h-[400px] w-[400px] grid grid-rows-2'>
        
            <div className='w-36 grid grid-cols-2 items-center'>
            <a href='https://github.com/Roshanlj'>
        <img src='github.svg'
        className='w-12 h-12'/>
         </a>
            Github
        </div>
       
        
        <div className='w-36 grid grid-cols-2 items-center'>
        <a href='https://www.linkedin.com/in/roshanlj07/'>
        <img src='linkedin.svg'
        className='w-12 h-12'/>
        </a>
            LinkedIn
        </div>
        
    </div>
    </div>








    <div className='text-[#FFD9D0] absolute w-full flex justify-center bottom-24 text-[14px] font-extralight font-inria'>
        Projects
    </div>
    <div className='w-full flex justify-center'>
    <img src='pointer.svg'
        className='absolute bottom-12 w-3 h-10'/>
    </div>
    </span>
    </div>
  )
}
