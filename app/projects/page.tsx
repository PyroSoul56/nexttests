import ProjectGrid from "@/components/ProjectGrid"
import { Metadata } from "next";

export const metadata: Metadata
 = {
    title: 'Projects',
    description:
      'Tomas\'s portfolio',
  };

const Projects = () => {
    return (
        
        <div>
            <ProjectGrid />
        </div>
    )
  }
  
  export default Projects