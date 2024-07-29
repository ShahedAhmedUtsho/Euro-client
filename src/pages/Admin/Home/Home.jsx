import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/Provider';
import VerifyAgent from '../../../private/VerifyAgent';
import VerifyAdmin from '../../../private/VerifyAdmin';
import VerifyUser from '../../../private/VerifyUser';
import User from '../../User/User';
import Agent from '../../Agent/Agent';
import Admin from '../Admin';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { user, loading, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLogin,setIsLogin] = useState(false)

    // Function to get cookie value by name
    const getCookie = (name) => {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith(name))
            ?.split('=')[1];
        return cookieValue;
    };

    // Effect to log the 'token' cookie value on component mount
    useEffect(() => {
        const isLogin = getCookie('status');
        console.log(isLogin);
        setIsLogin(isLogin)
    }, []);

    // Effect to handle authentication and navigation
    useEffect(() => {
        if (!loading && !user) {
            console.log("User not authenticated, logging out.");
            logOut();
            navigate("/login");
        }
    }, [loading, user, logOut, navigate]);

    // Render based on user role
    if (loading) {
        if (isLogin == "true") {
            return <div>Loading... home</div>;
        } else {
            return <div>Home page</div>;
        }
    }

    if (user?.role === "admin") {
        return (
            <VerifyAdmin>
                <Admin />
            </VerifyAdmin>
        );
    } else if (user?.role === "agent") {
        return (
            <VerifyAgent>
                <Agent />
            </VerifyAgent>
        );
    } else if (user?.role === "user") {
        return (
            <VerifyUser>
                <User />
            </VerifyUser>
        );
    } else {
        return null; // Fallback or handle unexpected cases
    }
};

export default Home;
