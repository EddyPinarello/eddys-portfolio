import React from 'react'
import ProjectCard from '../components/ProjectCard'
import corsaIdealeHome from '../assets/corsaIdeale/corsaIdealeHome.webp'
import sensorManagement from '../assets/sensorManagement/sensorManagementHome.webp'


function Projects() {
  return (
    <div className='cards-container'>
        <ProjectCard title="ewbapp" text="lorem ipsum asdmapdomap odmapdomap domapsdomapsddomapsdomapsdomom aposmd paoasdasndoasdoadns" image={corsaIdealeHome} link="/project" tags={["SWE", "ML", "REACT"]}/>
        <ProjectCard title="ewbapp" text="adasdsad" image={sensorManagement} link="/project" tags={["SWE", "ML", "C++"]}/>
        <ProjectCard title="ewbapp" text="adasdsad" image={corsaIdealeHome} link="/project" tags={["SWE", "ML", "python"]}/>
        <ProjectCard title="ewbapp" text="adasdsad" image={corsaIdealeHome} link="/project" tags={["SWE", "ML"]}/>

    </div>
  )
}

export default Projects