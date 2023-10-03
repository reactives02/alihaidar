"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { BiMailSend } from "react-icons/bi";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendMail } from "@/actions/sendEmail";
export default function Contact() {
  const { ref } = useSectionInView({
    sectionName: "Contact",
    thresholdValue: 0.4,
  });

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      ref={ref}
      id="contact"
      className="mb-28 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-20"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80 flex justify-center items-center">
        You can contact me directly at  
        <a
          className="bg-white dark:bg-white/10 p-1 group hover:scale-[1.2] transition border border-black/10 rounded-full mx-1"
          href="mailto:alihaidar158008@gmail.com
"
        >
          <BiMailSend className="text-[1.2rem] dark:text-white/60 dark:font-normal dark:group-hover:text-white/80 group-hover:text-gray-950 transition text-gray-700" />
        </a>{" "}
        or through this form.
      </p>
      <form action= {sendMail} className="flex flex-col dark:text-black mt-10 gap-2">
        <input
        name="senderMail"
          placeholder="Your Email"
          required
          maxLength={500}
          type="email"
          className="h-14 px-4 bg-white dark:bg-opacity-80 transition dark:focus:bg-opacity-100 rounded-lg border border-black/10 "
        />
        <textarea
        name="senderMessage"
          required
          maxLength={2000}
          placeholder="Your Message"
          className="h-52 p-4 my-3 bg-white dark:bg-opacity-80 transition dark:focus:bg-opacity-100 rounded-lg border border-black/10"
        />
        <button
          type="submit"
          className="group dark:bg-white dark:bg-opacity-10 hover:bg-gray-950 hover:scale-110 flex items-center justify-center outline-none h-[3rem] w-[8rem] transition-all bg-gray-900 text-white rounded-full gap-1 "
        >
          Send{" "}
          <FaPaperPlane className=" group-hover:-translate-y-1 group-hover:translate-x-1 text-xs opacity-70 transition-all" />
        </button>
      </form>
    </motion.section>
  );
}
