import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { registerWithEmailAndPassword } from "../firebase";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await registerWithEmailAndPassword(data?.email, data?.password);
      navigate("/", { replace: true })
    } catch (error) {
      Swal.fire({
        text: "Email already in use.",
        icon: "error",
        confirmButtonColor: "#3B82F6",
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
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
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="name@gmail.com"
            {...register("email", {
              required: "Please type your email.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address.",
              },
            })}
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
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="????????????????????????"
            {...register("password", {
              required: "Please type your password.",
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
          {errors.password && (
            <p className="text-red-500 text-xs italic mt-3">
              {errors?.password?.message}
            </p>
          )}
        </div>
        <div className="w-full mt-5">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>

        <div className="flex items-center justify-center mt-8 text-sm ">
          <p className="mr-2">Already have an account?</p>
          <a className="text-blue-500 hover:text-blue-800" href="/">
            Login
          </a>
        </div>
      </form>
    </div>
  );
}

export default Register;
