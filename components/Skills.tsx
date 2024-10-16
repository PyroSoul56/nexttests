"use client";

import React from "react";
import Skill from "./Skill";
import ScrambleText from "./ui/ScrambleText";

import { skills } from "@/lib/data";


const Skills = () => {
    return (
        <div 
        className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center pt-40">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-accent hover:text-accent-hover text-2xl">
                <ScrambleText text="Skills" duration={3000} />
            </h3>

            <h3 className="absolute top-36 uppercase tracking-[3px] text-accent hover:text-accent-hover text-sm">
                <ScrambleText text="Hover over skill for profficiency" duration={3500} />
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">

                {skills.map((skill, index) => (
                    <Skill key={index} image={skill.image} percentage={skill.percentage} />
                ))}

            </div>
        </div>
    )
  }
  
  export default Skills