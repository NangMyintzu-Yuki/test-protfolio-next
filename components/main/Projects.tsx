import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>My Project</h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
        src="/NextWebsite.png"
        title="Modern NExt.js Portfolio"
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam quos eius quod maiores voluptatem a, quidem id tempore qui sed amet saepe rerum ullam nisi veniam ab distinctio iure.'
        />
        <ProjectCard
        src="/CardImage.png"
        title="Interactive Website Cards"
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam quos eius quod maiores voluptatem a, quidem id tempore qui sed amet saepe rerum ullam nisi veniam ab distinctio iure.'
        />
        <ProjectCard
        src="/SpaceWebsite.png"
        title="Space Themed Website "
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam quos eius quod maiores voluptatem a, quidem id tempore qui sed amet saepe rerum ullam nisi veniam ab distinctio iure.'
        />
      </div>


    </div>
  )
}

export default Projects
