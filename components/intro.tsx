"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section";

export default function Intro() {
 const  {ref} = useSectionInView({sectionName:'Home',thresholdValue:0.5})
 const  {setActiveSection,setTimeOfClick} = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={"/pic.jpg"}
              alt="Ali Haidar Portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-2 right-2 text-2xl"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ali Haidar.</span> I'm a{" "}
        <span className="font-bold">front-end developer</span> with{" "}
        <span className="font-bold">1 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>
      <motion.div
      initial= {{ opacity:0, y:100 }}
      animate= {{ opacity:1, y:0 }}
      transition={{
        delay:0.1
      }}
      className="flex flex-col sm:flex-row justify-center text-lg px-4 font-medium items-center gap-4">
        <Link href="#contact"
         onClick={() =>  {
          setActiveSection("Contact")
          setTimeOfClick(Date.now())
        }}
      
        className="bg-gray-900 group text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a href="/Ali Haidar.pdf" 
        className="bg-white group text-gray-900 dark:bg-white/10 dark:text-white dark:font-normal px-7 py-3 border border-black/10 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all"
        download
        >Download CV <HiDownload className="opacity-70 group-hover:translate-y-1 transition" /></a>
        <a href="https://www.linkedin.com/in/ali-haidar-b1a56024b" target="_blank" className="bg-white dark:bg-white/10 dark:text-white/60 dark:font-normal border border-black/10 text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all"><BsLinkedin/></a>
        <a href="https://wa.me/923154846093" target="_blank" className="bg-white dark:bg-white/10 dark:text-white/60 dark:font-normal border border-black/10 text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all"><BsWhatsapp/></a>
      </motion.div>
    </section>
  );
}
