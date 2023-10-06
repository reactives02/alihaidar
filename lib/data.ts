import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FoodApp from "@/public/foodapp.png";
import DevApp from "@/public/devapp.png";
import wordanalyticsImg from "@/public/iptv.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Undergraduated",
    location: "Samanabad, FSD",
    description:
      "after several months of studying. I found a web bootcamp. As i love to code, So i decided to join the bootcamp for front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developement Bootcamp",
    location: "Udemy, Online",
    description:
      "After completion of bootcamp i'm able to create stunnig website or web app using React & Next js along with Firebase. But I'm still learning more to beccome a Full-Stack Developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "Faisalabad",
    description:
      "I'm working as a front-end developer at Thinkers IT Solution.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "StreamX IPTV Web",
    description:
      "A public web app for entertainning people with world wide tv shows or tv channels.",
    tags: ["React", "Tailwind", "Toastify", "hls player", "axios"],
    imageUrl: wordanalyticsImg,
    webLink:"https://iptvstreamx.netlify.app/",
  },
  
  {
    title: "DevConnector Clone",
    description:
      "Community web app for developer. It has features like authentication, posts and dashboard.",
    tags: ["React", "Tailwind", "Firebase", "Toastify", "Formik", "axios"],
    imageUrl: DevApp,
    webLink:""
  },
  {
    title: "Food Ninja",
    description:
      "I worked as a front-end developer on this startup project. Users can order or  give public feedback to companies.",
    tags: [
      "React",
      "React Native",
      "Tailwind",
      "Reanimation",
      "React Navigation",
    ],
    imageUrl: FoodApp,
    webLink:""
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Firebase",
  "Appwrite",
  "Framer Motion",
  "Python",
  "selenium",
  "playwright",
] as const;
