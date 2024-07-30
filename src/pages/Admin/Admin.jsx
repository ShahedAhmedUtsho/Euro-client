import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';

const Admin = () => {
    const {user} = useContext(AuthContext) ; 
    console.log('am admin')
    return (
        <div className='text-black'>
            i am admin
            
        </div>
    );
};

export default Admin;