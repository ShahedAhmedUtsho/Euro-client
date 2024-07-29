import { Children, useContext } from "react"
import { AuthContext } from "../Provider/Provider"
import { useNavigate } from "react-router-dom";



const VerifyAgent = ({children} )=>{
    const navigate = useNavigate()
    const {user,loading} = useContext(AuthContext) ; 
    if(loading){
      return  <div>Loadin from user</div>
    }


 if(user && user?.role === "agent"){
    return children
 }
 navigate('/login');
 return null;






    
}



export default VerifyAgent