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
        console.log(res.data, "user logged in");
        navigate("/");
      })
      .catch((err) => {
        alert("Invalid username or password");
      });
  };

  return (
    <div className="w-screen h-screen flex flex-col  justify-center items-center">
      <h1 className="text-4xl font-bold py-5">Login</h1>
      <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border text-2xl  p-2 "
          {...register("username")}
          placeholder="Username"
          required
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="border text-2xl  p-2"
          required
        />
        <button className="bg-blue-500 text-white p-2 rounded-lg" type="submit">
          Login
        </button>
      </form>

      <Link to={"/register"} className=" text-blue-400 text-xl py-5">
        Register
      </Link>
    </div>
  );
};

export default Login;
