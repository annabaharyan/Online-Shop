import Button from "./buttons"
export default function Tbody({productArr, status,setStatus}){

   
      return  productArr.filter(item=>item.status===status).map(prod=>(
        <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.status}</td>
                <td>
                    <Button st={status} id={prod.id} item={prod} setSt={(res)=>setStatus(res)}/>
                   
                </td>
           </tr>
        ))
     
      
}
