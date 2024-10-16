"use client";
import React from 'react'
import { socials } from '@/lib/data';
import { Link } from 'lucide-react';


type Props = {
    projectLink?: string

}

const ProjectInfo = (props: Props) => {
  return (
    <div className="flex">
        <Link 
        href={props.projectLink} 
        key='' 
        className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        >
        
        </Link>
    </div>
  )
}

export default ProjectInfo