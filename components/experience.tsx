"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import './style.css'
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
    const  {ref} = useSectionInView({sectionName:'Experience',thresholdValue:0.5})
    const  {theme,toggleTheme} = useTheme();
  return (
    <section ref={ref} id='experience' className='mb-28 scroll-mt-28 sm:mb-40'>
        <SectionHeading>My Experience</SectionHeading>
         <VerticalTimeline lineColor='#e5e7eb'>
             {
                experiencesData.map((item,idx)=>(
                    <React.Fragment key={idx}>
                    <VerticalTimelineElement 
                    className='vertical-timeline-element--work'
                   icon= {item.icon}
                   iconStyle={ {
                    background: theme === "light" ? "white" : "rgba(255,255,255,0.15)"
                   }}
                   date= {item.date}
                    contentStyle={ {
                        background: theme === "light" ? "#f3f4f6":"rgba(255,255,255,0.05)",
                        boxShadow:"none",
                        border:"1px solid rgba(0,0,0,0,05)",
                        textAlign:"left",
                        padding:"1.3rem 2rem"               
                    }}
                    contentArrowStyle={ {
                        borderRight: theme === "light" ? "0.4rem solid #9ca3af":"0.4rem solid rgba(255,255,255,0.5)"
                    }}
                    >
                        <h3 className='font-medium capitalize'>{item.title}</h3>
                        <p className='!font-normal !mt-0'>{item.location}</p>
                        <p className='!mt-1 !font-normal text-gray-700 dark:text-white/40'>{item.description}</p>
                    </VerticalTimelineElement>
                    </React.Fragment>
                ))
             }
        </VerticalTimeline> 
   
  
    </section>
  )
}
