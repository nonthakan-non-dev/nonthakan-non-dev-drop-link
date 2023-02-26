import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Menus from "./Menu";

const Nav = ({ searchLink, setSearchLink }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const handleUpdateSearch = (keyword) => {
    setSearchLink(keyword.trim());
  };
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      if (!active) return;
      setActive(false);
      const keyword = data?.keyword ?? "";
      handleUpdateSearch(keyword);
    } catch (error) {}
    setActive(true);
  };
  const onChangeKeyword = () => {
    try {
      if (!active) return;
      setActive(false);
      const keyword = watch("keyword") ?? "";
      handleUpdateSearch(keyword);
    } catch (error) {}
    setActive(true);
  };

  return (
    <div className="w-full flex flex-row justify-between bg-white min-h-[50px] px-[1%] sm:px-[5%] py-2">
      <div
        className="flex items-center justify-center ml-3 cursor-pointer w-[15%] sm:w-auto noSelect"
        onClick={() => navigate("/", { replace: true })}
      >
        <div className="h-[30px]">
          <img
            src={process.env.PUBLIC_URL + "/images/droplink-logo.png"}
            alt=""
            className="object-cover h-full w-auto"
          />
        </div>
        <h1 className="text-sm lg:text-lg ml-4 select-none hidden md:inline">
          Drop Link
        </h1>
      </div>

      <div className="w-[200px] sm:w-[300px] lg:w-[360px] xl:w-[400px]">
        <form className="w-full md:w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <input
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search link"
              autoComplete="off"
              value={searchLink}
              {...register("keyword", {
                onChange: onChangeKeyword,
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic mt-3">
                {errors?.email?.message}
              </p>
            )}
          </div>
        </form>
      </div>
      <div className="w-[15%] sm:w-auto">
        <Menus />
      </div>
    </div>
  );
};

export default Nav;
