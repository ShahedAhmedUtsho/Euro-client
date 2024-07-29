import { Children, useContext } from "react"
import { AuthContext } from "../Provider/Provider"
import { useNavigate } from "react-router-dom";



const VerifyUser = ({children} )=>{
    const navigate = useNavigate()
    const {user,loading} = useContext(AuthContext) ; 
    if(loading){
      return  <div>Loadin from user</div>
    }


 if(user && user?.role === "user"){
    return children
 }


 navigate('/login');
 return null;






    
}


export default VerifyUser;