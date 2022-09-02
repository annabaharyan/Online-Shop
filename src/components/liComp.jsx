import { useEffect } from "react";
 
export default function LI({state,setState}){
   useEffect(() => {
    setState(state)
   }, [state]);

   return(
     <>
       <li className={state === "progress" ? "myActive" : ""} onClick={() => setState("progress")}>Progress</li>
       <li className={state === "completed" ? "myActive" : ""} onClick={() => setState("completed")}>Completed</li>
       <li className={state === "cancel" ? "myActive" : ""} onClick={() => setState("cancel")}>Cancel</li>
       <li className={state === "reject" ? "myActive" : ""} onClick={() => setState("reject")}>Reject</li> 
       </> 
   )
}