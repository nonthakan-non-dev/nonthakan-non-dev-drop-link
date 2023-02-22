import { useNavigate } from "react-router-dom";

import Menus from "./Menu";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-row justify-between bg-white min-h-[50px] px-[5%] py-2">
      <div
        className="flex items-center justify-center ml-3 cursor-pointer"
        onClick={() => navigate("/", { replace: true })}
      >
        <div className="h-[30px]">
          <img
            src={process.env.PUBLIC_URL + "/images/droplink-logo.png"}
            alt=""
            className="object-cover h-full w-auto"
          />
        </div>
        <h1 className="text-sm lg:text-lg ml-4 select-none">Drop Link</h1>
      </div>
      <Menus />
    </div>
  );
};

export default Nav;
