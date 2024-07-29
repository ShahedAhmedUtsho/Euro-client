import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';

const Routes = () => {
    const {user,logOut} = useContext(AuthContext)
    return (
        <div>
            
         {user &&  <button onClick={logOut} className='bg-black p-3 text-white bg-opacity-25'>logOut</button>}
            <Outlet/>
        </div>
    );
};

export default Routes;