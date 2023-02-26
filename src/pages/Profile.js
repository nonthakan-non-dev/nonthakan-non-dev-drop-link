import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Nav from "../components/Nav";
import { changePassword } from "../firebase";

function Profile({ userData }) {
  const [active, setActive] = useState(true);
  const { email = "" } = userData;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      if (!active) return;
      setActive(false);
      const { oldPassword, newPassword } = data;
      await changePassword(email, oldPassword, newPassword);
      setValue("oldPassword", "");
      setValue("newPassword", "");
    } catch (error) {}
    setActive(true);
  };
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 border-b-2 border-silver">
        <Nav showNav={false} />
      </div>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <form
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-[95%] md:w-[60%] lg:w-[50%] xl:w-[35%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="h-[65px] ">
              <img
                src={process.env.PUBLIC_URL + "/images/droplink-logo.png"}
                alt=""
                className="object-cover h-full w-auto"
              />
            </div>
            <h1 className="text-2xl lg:text-4xl ml-4 select-none">Drop Link</h1>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="name@gmail.com"
              value={email}
              disabled
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic mt-3">
                {errors?.email?.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="oldPassword"
            >
              Old Password
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="oldPassword"
              type="password"
              placeholder="••••••••"
              {...register("oldPassword", {
                required: "Please type your old password.",
              })}
            />
            {errors.oldPassword && (
              <p className="text-red-500 text-xs italic mt-3">
                {errors?.oldPassword?.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="newPassword"
              type="password"
              placeholder="••••••••"
              {...register("newPassword", {
                required: "Please type your new password.",
                minLength: {
                  message: "Password has a minimum length of 6.",
                  value: 6,
                },
                maxLength: {
                  message: "Password has a maximum length of 200.",
                  value: 200,
                },
              })}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-xs italic mt-3">
                {errors?.newPassword?.message}
              </p>
            )}
          </div>

          <div className="w-full mt-5">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
