import React from 'react'

export default function PortFolioPage() {
  return (
    <div className=''>
      <p className='mt-20 text-center text-4xl text-black font-bold'>Contact Us</p>

      <div className='flex flex-col items-center'>
        <input
          type='text'
          placeholder='Name'
          className='w-full md:w-1/2 h-12 border border-gray-200 drop-shadow-sm rounded-lg mt-10 mx-3 p-1 outline-none'
        ></input>

        <input
          type='text'
          placeholder='Email'
          className='w-full md:w-1/2 h-12 border border-gray-200 drop-shadow-sm rounded-lg mt-10 mx-3 p-1 outline-none'
        ></input>

        <input
          type='tel'
          placeholder='Phone Number'
          className='w-full md:w-1/2 h-12 border border-gray-200 drop-shadow-sm rounded-lg mt-10 mx-3 p-1 outline-none'
        ></input>

        <input
          type='text'
          placeholder='Tech Stack'
          className='w-full md:w-1/2 h-12 border border-gray-200 drop-shadow-sm rounded-lg mt-10 mx-3 p-1 outline-none'
        ></input>

        <textarea
          placeholder='Message'
          className='w-full md:w-1/2 h-32 border border-gray-200 drop-shadow-sm rounded-lg mt-10 mx-3 p-1 outline-none'
        ></textarea>

        <button 
        className={
          `w-full md:w-80 h-14 border border-gray-200 
          drop-shadow-sm rounded-lg mt-10 mx-3 p-1 outline-none bg-[#68E4FF]
          text-white hover:scale-110 hover:shadow-2xl	delay-75 transition-all duration-300 ease-in-out
          `}>
          Submit
        </button>
      </div>
    </div>
  )
}
