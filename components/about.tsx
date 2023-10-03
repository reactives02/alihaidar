'use client';
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section';
import { useSectionInView } from '@/lib/hooks';
export default function About() {
  const  {ref} = useSectionInView({sectionName:'About',thresholdValue:0.5})

  return (
    <motion.section 
    ref={ref}
    id='about'
    initial={{ opacity:0,y:100 }}
    animate={{ opacity:1,y:0 }}
    transition={{
        delay:1.175
    }}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-48 scroll-mt-28'>
        <SectionHeading>about me</SectionHeading>
        <p className="mb-3">
        While Undergraduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">front-end development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, React Native, and Firebase
        </span>
        . I am also familiar with TypeScript and Appwrite. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
         I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Node js and MongoDB</span>. I'm also
        learning Express js and Electron js.
      </p>
    </motion.section>
  )
}
