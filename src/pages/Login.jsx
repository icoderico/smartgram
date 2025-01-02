import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../App";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/login`, data)
      .then((res) => {
        console.log(res.data, "user logged in");
        setIsLoading(false);
        // navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        alert("Invalid username or password");
      });
  };

  return (
    <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-full flex flex-col gap-12 justify-center items-center bg-gray-50">
        <div>
          <h1 className="text-3xl font-bold py-5">Welcome back!</h1>
          <p className="text-xl font-semibold">
            Enter your Credentials to access your account
          </p>
        </div>
        <form
          className="flex flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="flex flex-col gap-2 text-lg font-semibold text-gray-700">
            {" "}
            Username
            <input
              className="mt-4px h-[36px] block w-[404px] border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              {...register("username")}
              placeholder="Username"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-lg font-semibold text-gray-700">
            <div className="flex justify-between items-center">
              <span>Password</span>
              <a href="/forgot-password" className="text-blue-700 text-sm">
                Forgot Password?
              </a>
            </div>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="mt-4px h-[36px] block w-[404px] border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </label>
          <label className="flex items-center gap-2 text-lg text-gray-700">
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="w-5 h-5"
            />
            Remember me for 30 days
          </label>

          <button
            className={`bg-green-800 text-white p-2 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={isLoading} 
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-gray-400">
          _____________________<b className="text-black">Or</b>
          _____________________
        </p>
        <div className="grid grid-cols-2 gap-5">
          <Link
            to={"/register"}
            className="flex gap-2 border px-3 p-2 rounded-lg hover:bg-slate-400"
          >
            <img src="/media/googleic.png" alt="icon" /> Sign in with Google
          </Link>
          <Link
            to={"/register"}
            className="flex gap-2 border px-3 p-2 rounded-lg hover:bg-slate-400"
          >
            <img src="/media/appleicon.png" alt="icon" /> Sign in with Apple
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="/register" className="text-green-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
      <div className="hidden md:block w-full h-full">
        <img
          src="/media/login1.png"
          alt="picture"
          className="w-full h-screen"
        />
      </div>
    </div>
  );
};

export default Login;
