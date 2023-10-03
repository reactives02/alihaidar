'use client';
import React from 'react'
import { motion } from "framer-motion";
export default function SectionDivider() {
  return (
    <motion.div 
    initial= {{ opacity:0, y:100 }}
    animate= {{ opacity:1, y:0 }}
    transition={{ 
        delay:1.125
    }}
    className='bg-gray-200 dark:bg-gray-700 h-16 w-1 my-24 rounded-full hidden sm:block'></motion.div>
  )
}
