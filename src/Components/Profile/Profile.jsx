import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Provider/Provider";
import { useQuery } from "@tanstack/react-query";
import { Mail, Phone } from "lucide-react";

const fetchBalance = async () => {
  const response = await fetch("http://localhost:3000/balance", {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [showBalance, setShowBalance] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const {
    data: balance,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["balance"],
    queryFn: fetchBalance,
    enabled: false,
  });

  useEffect(() => {
    let timer;
    if (showBalance) {
      setAnimationClass("balance-slide-in");
      timer = setTimeout(() => {
        setAnimationClass("balance-slide-out");
        setTimeout(() => setShowBalance(false), 1000);
      }, 4000);
    } else {
      setAnimationClass("");
    }
    return () => clearTimeout(timer);
  }, [showBalance]);

  const handleCheckBalance = () => {
    if (!showBalance) {
      setShowBalance(true);
      refetch();
    }
  };

  return (
    <div className="bg-white border border-black rounded-t-lg  overflow-hidden flex flex-col md:flex-row justify-between md:items-center md:gap-5 p-6 relative ">
      <div className="flex md:gap-5 gap-3 items-start border md:items-center">
        <div className="bg-gray-100 rounded-full md:w-20 h-16 w-16 md:h-20 lg:w-28 lg:h-28 flex justify-center items-center text-base md:text-2xl lg:text-3xl font-bold text-gray-800 uppercase">
          {user?.name.slice(0, 2)}
        </div>
        <div>
          <h4 className="text-gray-900 text-base md:text-2xl capitalize font-semibold leading-tight mb-1 md:mb-2">
            {user?.name}
          </h4>
          <p className="text-gray-600 text-xs md:text-lg leading-snug mb-1 flex items-center">
            <span className="text-gray-500 mr-2">
              <Phone className="w-4 md:w-10" />
            </span>{" "}
            {user?.phone}
          </p>
          <p className="text-gray-600 text-xs md:text-lg leading-snug flex items-center">
            <span className="text-gray-500 mr-2">
              {" "}
              <Mail className="w-4 md:w-10" />
            </span>{" "}
            {user?.email}
          </p>
        </div>
      </div>
      <div className="text-center md:text-right mt-4  md:mt-0 relative">
        <button
          onClick={handleCheckBalance}
          className={` transition-all rounded-md   min-w-44 border border-black  duration-500  syne py-2 px-4   hover:bg-slate-100  ease-in-out`}
        >
          {!showBalance ? (
            "Check Balance"
          ) : (
            <div className={`balance-container ${animationClass} `}>
              {balance}
            </div>
          )}
        </button>

        {isFetching && (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
