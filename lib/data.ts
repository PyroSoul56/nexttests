//imagenes
import javaIcon from "../images/java-icon.png"
import typescriptIcon from "../images/typescript-icon.png"
import pythonIcon from "../images/python-icon.png"
import postgresIcon from "../images/postgres-icon.png"
import nestIcon from "../images/nest-icon.png"
import mongodbIcon from "../images/mongodb-icon.png"
import quickSurvival from "../images/quick-survival.png"
import cat from "../images/profile-placeholder.jpg"
import { LuGraduationCap } from "react-icons/lu"
import React from "react"

import { FaGithub } from "react-icons/fa"




export const skills = [
    {
        name: 'Java',
        image: javaIcon,
        percentage: 60
    },
    {
        name: 'TypeScript',
        image: typescriptIcon,
        percentage: 50
    },
    {
        name: 'Python',
        image: pythonIcon,
        percentage: 20
    },
    {
        name: 'Postgres',
        image: postgresIcon,
        percentage: 50
    },
    {
        name: 'MongoDB',
        image: mongodbIcon,
        percentage: 40
    },
    {
        name: 'NestJS',
        image: nestIcon,
        percentage: 65
    }
    
] as const;

export const experience = [
    {
        title: 'Systems Engineer',
        location: 'EIA university',
        description: 'Currently studying Systems Engineering at the EIA University in Colombia.',
        icon: React.createElement(LuGraduationCap),
        date: '2021 - Present'
    }

] as const;

export const socials = [
    {
        name: 'Github',
        url: 'https://github.com/PyroSoul56',
        icon: FaGithub
    },
] as const;

export const projects = [
    {
        id: 1,
        title: 'QuickSurvival',
        description: 'A minecraft plugin that unifies most of the survival quality of life plugins in one, with a special GUI to config all of them with much less commands and no config file editing needed.',
        img: quickSurvival,
        iconList: [javaIcon],
        projectInfo: '/projects/quicksurvival'
    },
    {
        id: 2,
        title: 'Typescript Compiler',
        description: 'A typescript interpreter and compiler capable of storing and declaring variables, creating functions, and recursion',
        img: cat,
        iconList: [typescriptIcon],
        projectInfo: '/projects/typescriptcompiler'
    },
] as const;