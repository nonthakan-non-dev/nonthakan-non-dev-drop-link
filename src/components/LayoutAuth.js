import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Menus from "./Menu";
// boxicons

const LayoutAuth = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="w-screen">
      <div className="bg-white min-h-screen	w-full bg-gradient-to-r from-silver to-white px-[1rem] box-border">
        <div className="sticky top-[15px] pr-[15px] w-full flex flex-row justify-between">
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
        <div className="px-[5%]">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutAuth;
