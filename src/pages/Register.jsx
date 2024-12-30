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
    <div className="w-screen h-screen flex flex-col  justify-center items-center">
      <h1 className="text-4xl font-bold py-5">Register</h1>
      <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border text-2xl  p-2 "
          {...register("username")}
          placeholder="Username"
          required
        />
        <input
          className="border text-2xl  p-2 "
          {...register("email")}
          placeholder="Email"
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
          Register
        </button>
      </form>

      <Link to={"/login"} className=" text-blue-400 text-xl py-5">
        Login{" "}
      </Link>
    </div>
  );
};

export default Register;
