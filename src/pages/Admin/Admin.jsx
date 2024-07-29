import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';

const Admin = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            i am admin
            
        </div>
    );
};

export default Admin;