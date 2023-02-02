import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

export default function Header() {
  const navigation = useNavigate();
  return (
    <div className='flex justify-center'>
      <div className='h-14 fixed top-0 w-4/5 md:w-3/4  bg-blue-400 flex items-center px-4 md:px-20 rounded-lg mt-2'>
        <div className='w-full flex justify-between'>
          <h1 className='text-white text-2xl'>InFlairs</h1>

          <div className='flex text-white gap-5'>
            <p
              className='cursor-pointer'
              onClick={() => navigation('/')}
            >Home</p>
            {/* <p
            className='cursor-pointer'
            onClick={() => navigation('/about')}
          >About</p> */}
            {/* <p
              className='cursor-pointer'
              onClick={() => navigation('/portfolio')}
            >Portfolio</p> */}
            <p
              className='cursor-pointer ml-2'
              onClick={() => navigation('/project')}
            >Project</p>
          </div>
        </div>
      </div>
    </div>
  )
}
