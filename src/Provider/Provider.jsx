import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext()

const Provider = ({children}) => {
   
const a = "utsho";


const [user,setUser] = useState(null)

const [loading,setLoading] = useState(true)

 useEffect(() => {

    try {
        const res = axios.get(`${import.meta.env.VITE_SITE_URL}/dashboard`,{withCredentials:true})
        .then(res => {
           setUser(res.data)
            console.log( "this is res data ", res.data)
            setUser(res.data)
            setLoading(false)
        })
        
    } catch (error) {
        console.log(error.response) ; 
        
            setLoading(false);
        
    }

   
    
    //  return ()=>{
    //     res()
    //  }

 }, [])
 
console.log("this is user" ,user)
const logOut = async()=>{
    try {

      await  axios.get(`${import.meta.env.VITE_SITE_URL}/logout`,{withCredentials:true})
       .then(res=>{
        console.log(res)
        setUser(null)
    
    
    })
       

    } catch (err) {
        console.log(err.response); 
    }
    

}

let share = {a,loading,user,logOut,setUser,setLoading}
    return (
        <AuthContext.Provider value={share}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;