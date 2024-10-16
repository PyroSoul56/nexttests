"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const HomeImage = (props: Props) => {
  return (
    <div className='w-full h-full relative'>
        <motion.div>
            <div className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] rounded-full'>
                <img src='/images/profile-placeholder.jpg' alt='A' className='w-full h-full object-cover rounded-full' />
            </div>
        </motion.div>
    </div>
  )
}

export default HomeImage