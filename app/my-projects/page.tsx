
import React from 'react'
import { Projects } from '../constants'
import ProjectsCard from '../component/ProjectsCard'

const Page = () => {
  return (
    <div style={{backgroundImage:"url(Mountains.jpg)"}} 
    className='w-screen h-screen flex items-center justify-center bg-cover bg-center'>
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]/">
      {Projects.map((project,index)=>(
        <ProjectsCard
        key={index}
        title={project.title}
        text={project.text}
        image={project.src}
        />
      ))}</div>
    </div>
  )
}

export default Page
