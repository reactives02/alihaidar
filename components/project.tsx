"use client";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  webLink,
}: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress , [0,1] , [0.8,1])
  const opacityProgress = useTransform(scrollYProgress , [0,1] , [0.6,1])
  return (
    <motion.section
      style={ {
        scale:scaleProgress,
        opacity:opacityProgress
      }}
      
      ref={ref}
      className="group sm:even:pl-8 rounded-lg bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 hover:bg-gray-200 transition mb-3 sm:mb-8 last:mb-0 max-w-[42rem] text-left border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]"
    >
        <a href= {webLink} target="_blank">
      <div className="group-even:sm:ml-[18rem] flex flex-col h-full pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:w-1/2">
        <h3 className="text-2xl font-semibold"> {title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70"> {description} </p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, idx) => (
            <li
              className="bg-black/[0.7] uppercase tracking-wider px-3 py-0 text-[0.7rem] dark:text-white/70 text-white rounded-full"
              key={idx}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        className="group-even:right-[initial] hidden sm:block transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:-left-40 absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
      />
    </a>
    </motion.section>
  );
}
