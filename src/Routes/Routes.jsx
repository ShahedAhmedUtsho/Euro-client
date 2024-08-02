import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const Routes = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className=" w-full min-h-screen">
      <br />
      <div className="max-w-[1200px] mx-5 lg:mx-auto mt-5  min-h-screen">
        {/* {user && (
          <button
            onClick={logOut}
            className="bg-black p-3 text-white bg-opacity-25"
          >
            logOut
          </button>
        )} */}
        <Outlet />
      </div>
    </div>
  );
};

export default Routes;
