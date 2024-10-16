"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import profile from '../images/profile.jpg'

const HomeImage = () => {
  return (
    <div className='w-full h-full relative'>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2, duration: 1, ease: 'easeInOut' },
        }}
        >
            <div className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] rounded-full bg-black flex justify-center items-center border border-accent'>
                <Image src={profile} alt='Profile' className='w-[70%] h-[70%] object-cover rounded-full' />
            </div>
        </motion.div>
    </div>
  )
}

export default HomeImage