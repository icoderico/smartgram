import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../App";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post(`${BASE_URL}/login`, data)
      .then((res) => {
        const { token } = res.data;
        if (data.rememberMe) {
          Cookies.set("authToken", token, { expires: 30 });
        } else {
          sessionStorage.setItem("authToken", token);
        }
        console.log(res.data, "user logged in");
        navigate("/");
      })
      .catch((err) => {
        alert("Invalid username or password");
      });
  };

  return (
    <div className="w-screen h-screen grid grid-cols-2">
      <div className="w-full h-full flex flex-col gap-12 justify-center items-center">
        <div>
          <h1 className="text-4xl font-bold py-5">Welcome back!</h1>
          <p className="text-xl font-semibold">
            Enter your Credentials to access your account
          </p>
        </div>
        <form
          className="flex flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="flex flex-col gap-2 text-lg font-semibold">
            {" "}
            Username
            <input
              className="border text-xl p-2 w-96 rounded-lg font-normal"
              {...register("username")}
              placeholder="Username"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-lg font-semibold">
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
              className="border text-xl w-96 rounded-lg font-normal p-2"
              required
            />
          </label>
          <label className="flex items-center gap-2 text-lg">
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="w-5 h-5"
            />
            Remember me for 30 days
          </label>

          <button
            className="bg-green-800 text-white p-2 rounded-lg"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-gray-400">_____________________<b className="text-black">Or</b>_____________________</p>
        <div className="grid grid-cols-2 gap-5">
          <Link to={"/register"} className="flex gap-2 border px-3 p-2 rounded-lg">
            <img src="/media/googleic.png" alt="icon"/> Sign in with Google
          </Link>
          <Link to={"/register"} className="flex gap-2 border px-3 p-2 rounded-lg">
            <img src="/media/appleicon.png" alt="icon"/> Sign in with Apple
          </Link>
        </div>
        <Link to={"/register"} className=" text-blue-700 text-xl flex gap-4">
          <p className="text-black">Don’t have an account?</p> 
          Sign Up
        </Link>
      </div>
      <div className="w-full h-full">
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
