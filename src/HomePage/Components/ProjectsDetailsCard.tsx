import React from 'react'

export default function ProjectsDetailsCard() {
    return (
        <div className='w-80 bg-[#68E4FF] rounded-lg shadow-lg hover:bg-sky-600 hover:shadow-xl p-4 m-10 cursor-pointer'>
            <p className='mt-2 text-white text-xl font-bold text-center'>
                Tic Toe Game
            </p>

            <p className='mt-2 text-white text-lg font-bold'>
                Project Description: <span className='text-slate-400 ml-2 font-normal text-base'>Tic Toe Game</span>
            </p>
            <p className='mt-2 text-white text-lg font-bold'>
                Technologies Used: <span className='text-slate-400 text-base ml-2 font-normal'>React, Typescript, Tailwind CSS</span>
            </p>

            <img className='mt-2 rounded-lg' src="https://www.bambooevents.co.in/images/new/virtual/register-online-events.webp" alt="" />
        </div>
    )
}
