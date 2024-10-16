"use client";

import React, { useEffect, useState } from 'react'
import { projects } from '@/lib/data'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image';
import {motion} from 'framer-motion'
import GithubLink from './ui/github-link';


function ProjectGrid() {

    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) {
        return null; // or a loading spinner
    }

  return (
    <section>
        
        <div className='flex flex-wrap items-center justify-center gap-6'>

            {
                projects.map(({id, title, img, description, iconList, projectInfo, projectLink}, index) => (
                    <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: (1.5 + index*0.5) }}
                    >
                        <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-92 w-[80vw]'>
                            <PinContainer title='See more' href={projectInfo}>
                                <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-primary' />
                                    
                                    <Image src={img} alt={title} layout='fill' objectFit='cover' className='absoulte bottom-0'/>
                                </div>

                                <h1 className='text-accent font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                   {title} 
                                </h1>

                                <p className='lg:font-normal font-light text-sm'>
                                    {description}
                                </p>

                                <div className='flex items-center justify-between mt-7 mb-3'>
                                    <div className='flex items-center'>
                                        {iconList.map((icon, index) => (
                                            <div key={index} className='border border-accent rounded-full w-12 h-12 flex justify-center items-center' style={{ transform: `translateX(-${5*index*2}px)`}}>
                                                <Image src={icon} alt='' className='p-2 ' />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <GithubLink link={projectLink} />
                                    </div>
                                </div>

                            </PinContainer>
                        </div>
                    </motion.div>
            ))}

        </div>

    </section>
  )
}

export default ProjectGrid