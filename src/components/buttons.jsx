import { changeStatusCanc, changeStatusComp, changeStatusRej, changeStatusProg} from './changeFunctions'
export default function Button({st,id,item,setSt}){
  
   return (
    <>
  
       <button onClick={() =>setSt(changeStatusProg(id,item,st)) } className={st === "progress" ? "myActiveButton" : ""}>Progress</button>
       <button onClick={() => setSt(changeStatusComp(id,item,st))} className={st === "completed" ? "myActiveButton" : ""}>Completed</button>
       <button onClick={() => setSt(changeStatusCanc(id,item,st))} className={st === "cancel" ? "myActiveButton" : ""}> Cancel</button>
       <button onClick={() => setSt(changeStatusRej(id,item,st))} className={st === "reject" ? "myActiveButton" : ""}>Reject</button>
   </>
   )

}