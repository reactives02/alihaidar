"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = "light" | "dark";
type ThemeContextProviderProps = {
    children: React.ReactNode
}
type ThemeContextProps =  {
    theme : Theme
    toggleTheme:()=>void
}
const ThemeContext = createContext<ThemeContextProps | null>(null)
function ThemeContextProvider( {
    children
}:ThemeContextProviderProps) {
    const [theme,setTheme] = useState<Theme>("light")
    function toggleTheme() {
        
        if (theme === "light") {
            setTheme("dark")
            localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark")
        }
        else {
            setTheme("light")
            localStorage.setItem("theme","light")
            document.documentElement.classList.remove("dark")
        }
    }
    useEffect(()=> {
        const localtheme = localStorage.getItem("theme") as Theme | null;
        if (localtheme) {
            setTheme(localtheme)
            if (localtheme === "dark") {
                document.documentElement.classList.add("dark")
            }
            
        }else if( window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
            document.documentElement.classList.add("dark")

        }
    },[])
  return (
    <ThemeContext.Provider value={{
        theme,
        toggleTheme
    }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider

export function useTheme() {
    const context = useContext(ThemeContext);
        if(context === null) {
        throw new Error(
            "useTheme must be used whithin a ThemeContextProvider"
        )
    }
    return context;
}