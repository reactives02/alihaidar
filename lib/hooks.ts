import { useInView } from 'react-intersection-observer';
import React, { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section";
import { SectionId } from './types';

type useSectionInViewProps =  {
sectionName : SectionId
thresholdValue:number
}
export function useSectionInView( {
    sectionName,thresholdValue
}:useSectionInViewProps) {
    const {ref,inView} = useInView({
        threshold:thresholdValue,
      });
      const  {setActiveSection,timeOfClick} = useActiveSectionContext()
      useEffect(()=> {
      if (inView && Date.now() - timeOfClick > 1000) {
        setActiveSection(sectionName)
      }
      },[inView,setActiveSection,timeOfClick])
      return  {
        ref
      }
}