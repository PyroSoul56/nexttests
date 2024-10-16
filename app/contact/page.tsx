"use client";
import React from "react";
import {motion} from "framer-motion";
import {TypeAnimation} from 'react-type-animation';
import Socials from "@/components/Socials";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


const Contact = () => {
    return (
      <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
      opacity: 1,
      transition: { delay : 2, duration:1, ease: 'easeIn' }
      }}
      className="py-6">

      <div className="mx-auto">
        <div className="justify-center gap-[30px]">
            <form className=" gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="md:text-4xl text-xl text-center">
                    Do you have a project in mind? <br />
                    <span className="text-accent text-center">
                        <TypeAnimation 
                            sequence={[
                                'Let\'s talk!',
                                1000,
                                'Let\'s work together!',
                                1000,
                                'I\'d love to help!',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </span>
                </h3>
                <Socials containerStyles="flex py-4 gap-6 justify-center" iconStyles="w-12 h-12 border border-purple-500 rounded-full flex justify-center items-center text-purple-500 text-base hover:bg-purple-500 hover:text-primary hover:transition-all duration-500"/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="firstname" placeholder="First name" />
                    <Input type="lastname" placeholder="Last name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="number" placeholder="Phone number" />
                </div>
                <div className="py-6">   
                    <Textarea className='h-[100px]' placeholder="Type your message here." />
                </div>
                <div className="flex justify-center">
                    <Button size="lg" className="max-w-40 rounded-full">
                        Send message
                    </Button>
                </div>
            </form>
        </div>
      </div>

      </motion.section>
    )
  }
  
  export default Contact
