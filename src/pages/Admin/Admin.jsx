import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import Profile from "../../Components/Profile/Profile";
import Body from "../../Components/Body/Body";

const Admin = () => {
  const { user } = useContext(AuthContext);
  console.log("am admin");
  return (
    <div className="text-black">
      <div className=" mb-5 flex flex-col gap-3">
        <Profile />
        <Body />
      </div>
    </div>
  );
};

export default Admin;
