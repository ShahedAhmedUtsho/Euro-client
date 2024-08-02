import { NavLink, Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="min-h-96 body p-4 md:p-6 grid grid-cols-3 justify-between gap-2 md:gap-4 border border-black rounded-b-md">
        <NavLink
          to="/sendmoney"
          className="border hoverShadow border-black rounded-lg flex justify-center items-center h-16 md:h-20 lg:h-32 flex-grow"
        >
          <h6 className="syne text-xs md:text-base lg:text-xl flex flex-col md:flex-row justify-center items-center gap-1 text-slate-800 font-medium leading-snug tracking-tight">
            <img
              className="w-4 h-4 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
              src="https://img.icons8.com/ios-filled/50/initiate-money-transfer.png"
              alt="money-transfer"
            />
            Send Money
          </h6>
        </NavLink>
        <NavLink
          to="/cashin"
          className="border hoverShadow border-black rounded-lg flex justify-center items-center h-16 md:h-20 lg:h-32 flex-grow"
        >
          <h6 className="syne text-xs md:text-base lg:text-xl flex flex-col md:flex-row justify-center items-center gap-1 text-slate-800 font-medium leading-snug tracking-tight">
            <img
              className="w-4 h-4 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
              src="https://img.icons8.com/external-others-inmotus-design/67/external-Cash-In-atm-others-inmotus-design-2.png"
              alt="external-Cash-In-atm-others-inmotus-design-2"
            />
            Cash In
          </h6>
        </NavLink>
        <NavLink
          to="/cashout"
          className="border hoverShadow border-black rounded-lg flex justify-center items-center h-16 md:h-20 lg:h-32 flex-grow"
        >
          <h6 className="syne text-xs md:text-base lg:text-xl flex flex-col md:flex-row justify-center items-center gap-1 text-slate-800 font-medium leading-snug tracking-tight">
            <img
              className="w-4 h-4 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
              src="https://img.icons8.com/external-others-inmotus-design/67/external-Cash-Out-atm-others-inmotus-design-3.png"
              alt="external-Cash-Out-atm-others-inmotus-design-3"
            />
            Cash Out
          </h6>
        </NavLink>
        <div className="border border-black p-4 col-span-3 md:p-6 min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
