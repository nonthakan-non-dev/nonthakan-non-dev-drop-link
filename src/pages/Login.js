import React from "react";

function Login() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[95%] md:w-[60%] lg:w-[50%] xl:w-[40%]">
        <div className="flex items-end justify-between mb-8">
          <h1 className="font-bold text-2xl lg:text-4xl">Sign in</h1>
          <p className="text-sm lg:text-lg">or <a className="font-bold text-blue-500 hover:text-blue-800" href="/">create an account</a></p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
          <p className="text-red-500 text-xs italic mt-3">Please choose a email.</p>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic mt-3">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/"
          >
            Forgot Password?
          </a>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
