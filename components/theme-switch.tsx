"use client";
import { useTheme } from "@/context/theme-context";
import { type } from "os";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
    const  {theme,toggleTheme} = useTheme();
  return (
    <button onClick={toggleTheme} className="fixed bottom-5 right-5 bg-white dark:bg-gray-950 active:scale-100 border border-white border-opacity-40 flex justify-center items-center hover:scale-110 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl rounded-full">
       {
           theme === "light" ? (
            <BsSun />
        ):(
            <BsMoon/>
        )
       }
    </button>
  );
}
