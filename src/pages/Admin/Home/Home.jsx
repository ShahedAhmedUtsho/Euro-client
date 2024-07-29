import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../Provider/Provider';
import VerifyAgent from '../../../private/VerifyAgent';
import VerifyAdmin from '../../../private/VerifyAdmin';
import VerifyUser from '../../../private/VerifyUser';
import User from '../../User/User';
import Agent from '../../Agent/Agent';
import Admin from '../Admin';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const { user, loading, logOut } = useContext(AuthContext);

    useEffect(() => {
        console.log("User in Home component: ", user);
    }, [user]);

    useEffect(() => {
        if (!loading && !user) {
            // Logout and navigate if user is not authenticated
            console.log("log log log ")
            logOut();
            navigate("/login");
        }
    }, [loading, user, logOut, navigate]);

    if (loading) {
        return <div>Loading... home</div>;
    }

    if (user?.role === "admin") {
        console.log("enter admin");
        return (
            <VerifyAdmin>
                <Admin />
            </VerifyAdmin>
        );
    } else if (user?.role === "agent") {
        console.log("enter agent");
        return (
            <VerifyAgent>
                <Agent />
            </VerifyAgent>
        );
    } else if (user?.role === "user") {
        console.log("enter user");
        return (
            <VerifyUser>
                <User />
            </VerifyUser>
        );
    } else {
        // Return null or a fallback UI if needed
        return null;
    }
};

export default Home;
