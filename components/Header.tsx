"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/moving-border'

// Components
import Nav from './Nav'
import MobileNav from './MobileNav'
import ScrambleText from './ui/ScrambleText'



const Header = () => {
    
    
  return (
    <header className='py-8 xl:py-12 text-white text-right'>
        <div className="container mx-auto flex justify-between items-center">
            <Link href='/'>
                <h1 className='text-4xl font-semibold'>
                    <span className='text-accent'>&#123;</span>Tomás<span className='text-accent'>&#125;</span>
                </h1>
            </Link>


            {/* desktop nav & hire me button*/}
            <div className='hidden lg:flex items-center gap-8'>
                <Nav />
                <Link href="/contact">
                        <Button borderClassName="opacity-[0.6] bg-[radial-gradient(var(--purple-400)_40%,transparent_60%)] relative">
                            <span className='text-xl text-accent hover:text-accent-hover'>Contact me</span>
                        </Button>
                </Link>
            </div>

            {/* mobile nav */}
            <div className="lg:hidden">
                <MobileNav />
            </div>

        </div>
    </header>
  )
}

export default Header