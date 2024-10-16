import React from 'react'
import Link from 'next/link'
import { socials } from '@/lib/data'

type Props = {
    containerStyles: string
    iconStyles: string
}

const Socials = (props: Props) => {
  return (
    

    <div className={props.containerStyles}>
        {socials.map((social, index) => (
            <Link href={social.url} key={index} target="_blank" className={props.iconStyles}>
                <social.icon className='w-10 h-10'/>
            </Link>
        ))}
            
    </div>


  )
}

export default Socials