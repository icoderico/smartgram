import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../App";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
const [isLoading, setIsLoading] = useState(false);

const showToastMessage = (message, type = "success") => {
  toast[type](message, {
    position: "top-right",
  });
};
  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/users`, data)
      .then((res) => {
        console.log(res.data, "user created");
        navigate("/login");
        setIsLoading(false);
        showToastMessage("user created", "success");
      })
      .catch((err) => {

        setIsLoading(false);
        showToastMessage("User already exists or email already exists", "error");
      });
  };

  return (
    <>
    <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2">
    <div className="w-full h-full flex justify-center items-center bg-gray-50 p-6">
     <div className="flex flex-col gap-9 justify-center items-center">
     <div className="self-start">
      <h1 className="text-3xl font-bold">Get Started Now!</h1>
     </div>
     <form
       className="flex flex-col gap-8 w-full max-w-md"
       onSubmit={handleSubmit(onSubmit)}
     >
       <div>
         <label
           htmlFor="name"
           className="block text-lg font-semibold text-gray-700 mb-2"
         >
           Name
         </label>
         <input
           type="text"
           id="name"
           className="mt-4px h-[36px] block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
           placeholder="Enter your name"
         />
       </div>
       <div>
         <label
           htmlFor="email"
           className="block text-lg font-semibold text-gray-700 mb-2"
         >
           Email address
         </label>
         <input
           type="email"
           id="email"
           className="mt-4px h-[36px] block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
           placeholder="Enter your email"
         />
       </div>
       <div>
         <label
           htmlFor="password"
           className="block text-lg font-semibold text-gray-700 mb-2"
         >
           Password
         </label>
         <input
           type="password"
           id="password"
           className="mt-4px h-[36px] block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
           placeholder="Enter your password"
         />
       </div>
       <div className="flex items-center">
         <input
           type="checkbox"
           id="terms"
           className="h-5 w-5"
         />
         <label
           htmlFor="terms"
           className="ml-2 text-lg text-gray-700"
         >
           I agree to the terms & policy
         </label>
       </div>
       <button
         className={`bg-green-800 text-white p-2 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none ${
           isLoading ? "opacity-50 cursor-not-allowed" : ""
         }`}
         type="submit"
         disabled={isLoading}
       >
         {isLoading ? "signing up..." : "Signup"}
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
       Have an account?{" "}
       <a href="/login" className="text-green-600 hover:underline">
         Sign in
       </a>
     </p>
     </div>
   </div>

   <div className="hidden md:block w-full h-full">
     <img
       src="/media/login1.png"
       alt="picture"
       className="w-full h-screen"
     />
   </div>
 </div>
 <ToastContainer/>
    </>
  );
};

export default Register;


