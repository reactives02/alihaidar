"use client";
import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import { useInView } from 'react-intersection-observer';
import Project from './project'
import { useActiveSectionContext } from '@/context/active-section'
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const  {ref} = useSectionInView({sectionName:'Projects',thresholdValue:0.2})
  return (
    <section ref={ref} id='projects' className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'>
        <SectionHeading>My Projects</SectionHeading>
        <div>
             {
                projectsData.map((project,index)=>(
                    <React.Fragment key={index}>
                        <Project  {...project}/>
                    </React.Fragment>
                ))
             }
        </div>
    </section>
  )
}
