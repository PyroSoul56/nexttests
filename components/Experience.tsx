

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react';
import ScrambleText from './ui/ScrambleText';
import { experience } from '@/lib/data';





const Experience = () => {
    return <section id="experience">
            <div className='flex relative flex-col text-center xl:flex-row max-w-[2000px] min-h-screen justify-center xl:space-y-0 mx-auto items-center pt-40'>
                <h3 className="absolute top-24 uppercase tracking-[20px] text-accent hover:text-accent-hover text-2xl justify-center">
                    <ScrambleText text="My experience" duration={2500} />
                </h3>

                <VerticalTimeline lineColor='white'>
                    {
                        experience.map((item, index) => (

                            <React.Fragment key={index}>
                                <VerticalTimelineElement
                                visible={true}
                                className='custom-timeline-element'
                                contentStyle={{ 
                                    background: 'var(--default)', 
                                    boxShadow: "none", 
                                    textAlign: "left", 
                                    padding: "1rem 2rem", 
                                    border: "1px solid var(--accent)",
                                    position: "relative"
                                }}
                                contentArrowStyle={{ borderRight: '0.4rem solid #9ca3af', }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{ background: 'var(--primary)', fontSize: '1.5rem' , color: 'var(--purple-500)' }}
                                >
                                    <h3 className='font-semibold capitalize'>{item.title}</h3>
                                    <p className=' font-normal !mt-0'>{item.location}</p> 
                                    <p className=' !font-normal !mt-1 text-gray-300'>{item.description}</p>
                                </VerticalTimelineElement>
                            </React.Fragment>
                        ))
                    }
                </VerticalTimeline>
            </div>
    </section>
};

export default Experience;