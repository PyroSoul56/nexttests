import { motion } from 'framer-motion'
import { Percent } from 'lucide-react'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

type Props = {
    directionLeft?: boolean;
    image: StaticImageData;
    percentage: number;
};

function Skill({ directionLeft, image, percentage }: Props) {
  return <div className='group relative flex cursor-pointer'>
    <div
        
        className='rounded-full border-accent object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition-duration-300'
      >
        <Image src={image} alt="Skill Image" layout="fill" objectFit="cover" className='rounded-full' />
      </div>
    

    <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">
                {percentage}%
            </p>
        </div>
    </div>

  </div>
}

export default Skill