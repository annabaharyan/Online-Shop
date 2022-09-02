import { useEffect } from "react";
import LI from "./liComp";
export default function UL({defStat,setDefStat}){
   useEffect(() => {
       setDefStat(defStat)
   }, [defStat]);
   return(
        <ul>
           <LI state={defStat} setState={function(res){
               setDefStat(res) 
               }}
           />
        </ul>
   )
}