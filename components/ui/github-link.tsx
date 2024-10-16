import Link from 'next/link'
import React from 'react'
import {FaGithub} from 'react-icons/fa'

type Props = {
    link: string
}

function GithubLink(props: Props) {
  return (
    <div className='flex gap-6 z-[100]'>
        <Link href={props.link} key='' target="_blank" className='w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'>
            <FaGithub className='w-10 h-10'/>
        </Link>
    </div>
  )
}

export default GithubLink