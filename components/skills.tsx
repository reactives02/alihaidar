"use client";
import React from 'react'
import SectionHeading from './section-heading'
import  {skillsData} from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from "framer-motion";
const fadeInAnimationVarients = {
    initial :  {
        opacity:0,
        y:100
    },
    animate: (idx:number)=> ({
        opacity:1,
        y:0,
    transition: {
        delay:0.05 * idx
    }})
}
export default function Skills() {
    const  {ref} = useSectionInView({sectionName:'Skills',thresholdValue:0.6})
  return (
    <section ref={ref} id='skills' className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-48'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap gap-2 justify-center text-lg text-gray-800 '>
             {
                skillsData.map((skill,idx)=>(
                <motion.li 
                variants={fadeInAnimationVarients}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once:false
                }}
                custom={idx}
                className='bg-white dark:bg-white/10 dark:text-white/80 border border-black/[0.1] rounded-xl px-5 py-2' key={idx}>{skill}</motion.li>
                ))
             }
        </ul>
    </section>
  )
}
