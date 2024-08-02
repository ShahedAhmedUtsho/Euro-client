import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const Agent = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <>
      <div>i am agent</div>
      <button onClick={logOut}>logout</button>
    </>
  );
};

export default Agent;
