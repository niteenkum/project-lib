import React from 'react'
import ProjectsDetailsCard from '../HomePage/Components/ProjectsDetailsCard'

export default function ProjectPage() {
  return (
    <div className=''>
    <p className='mt-20 text-center text-4xl text-black font-bold'>Project Name (Current Projects)</p>
    <p className='mt-2 text-center text-base text-slate-500 font-bold'>Enroll in if you like:</p>

    <div className="flex flex-row flex-wrap justify-between">
          <ProjectsDetailsCard />
          <ProjectsDetailsCard />
          <ProjectsDetailsCard />
          <ProjectsDetailsCard />
          <ProjectsDetailsCard />
          <ProjectsDetailsCard />
        </div>
    </div>
  )
}
