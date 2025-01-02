import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../App";
import axios from "axios";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post(`${BASE_URL}/users`, data)
      .then((res) => {
        console.log(res.data, "user created");
        navigate("/login");
      })
      .catch((err) => {
        alert("User already exists or email already exists");
      });
  };

  return (
    <div className="w-screen h-screen grid grid-cols-2">
      <div className="w-full h-full flex flex-col gap-8 justify-center items-center bg-gray-50 p-10">
      <h1 className="text-3xl font-semibold mb-6">Get Started Now!</h1>
      <form className="flex flex-col gap-8 w-full max-w-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-4px h-[32px] block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your name"
            />
        </div>
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              className="mt-4px h-[32px] block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-4px h-[32px] block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">I agree to the terms & policy</label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
          >
            Signup
          </button>
      </form>
      <div className="grid grid-cols-2 gap-5">
          <Link to={"/register"} className="flex gap-2 border px-3 p-2 rounded-lg">
            <img src="/media/googleic.png" alt="icon"/> Sign in with Google
          </Link>
          <Link to={"/register"} className="flex gap-2 border px-3 p-2 rounded-lg">
            <img src="/media/appleicon.png" alt="icon"/> Sign in with Apple
          </Link>
      </div>
      <p className="mt-6 text-sm text-gray-500">
          Have an account? <a href="/login" className="text-green-600 hover:underline">Sign in</a>
      </p>
      
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

export default Register;
