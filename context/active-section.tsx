"use client";
import React, { createContext, useContext, useState } from "react";
import { links } from "@/lib/data";
import { SectionId } from "@/lib/types";

type ActiveSectionContextProviderProps = { children: React.ReactNode };
type ActiveSectionContextType = { 
    activeSection: SectionId 
    setActiveSection : React.Dispatch<React.SetStateAction<SectionId>>
    timeOfClick: number
    setTimeOfClick: React.Dispatch<React.SetStateAction<number>>
};
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionId>("Home");
  const [timeOfClick,setTimeOfClick] = useState(0);
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection , timeOfClick,setTimeOfClick}}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
    const context= useContext(ActiveSectionContext)
    if(context === null) {
        throw new Error(
            "useActiveSectionContext must be used whithin a ActiveSectionContextProvider"
        )
    }
    return context;
}