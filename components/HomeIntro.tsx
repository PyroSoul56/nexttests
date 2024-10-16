import React from 'react'
import Socials from './Socials'

type Props = {}

const HomeIntro = (props: Props) => {
  return (
    <div className='text-center xl:text-left'>
        
        <div className='text-[48px] xl:text-[64px]'>
            <p className='h-[70px]'>I'm</p>
            <p className=' text-accent '>Tomás Quevedo</p>
        </div>
        <h3 className='text-[20px]'>
            <p className='max-w-[600px] mb-4'>
                An aspiring software engineer with a deep passion for learning new technologies and creating innovative solutions.  
            </p>
        </h3>
        {/* w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 */}
        <div>
          <Socials containerStyles="flex gap-6" iconStyles="w-12 h-12 border border-purple-500 rounded-full flex justify-center items-center text-purple-500 text-base hover:bg-purple-500 hover:text-primary hover:transition-all duration-500"/>
        </div>
    </div>
  )
}

export default HomeIntro