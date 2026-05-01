import React, { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSceham } from "../../schema/register.schema";

export default function RegisterPage() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [loginError, setloginError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSceham),
    mode: "onBlur",
  });

  async function submitForm(values) {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        values,
      );

      if (data?.message == "success") {
        toast("account created");
        navigate("/");
      }
    } catch (error) {
      toast(error?.message);
    }
  }
  return (
    <div>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        {/* Left: Image */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Create Account</h1>
          <Form
            onSubmit={handleSubmit(submitForm)}
            className="flex w-96 flex-col gap-4"
          >
            <div className="flex gap-5">
              <div className="w-1/2">
                <TextField name="firstName" type="text">
                  <Label>firstName</Label>
                  <Input
                    {...register("firstName")}
                    className="rounded-sm my-1 pr-10 w-full"
                  />
                  {errors?.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}{" "}
                </TextField>
              </div>
              <div className="w-1/2">
                <TextField name="lastName" type="text">
                  <Label>lastName</Label>
                  <Input
                    {...register("lastName")}
                    className="rounded-sm my-1 pr-10 w-full"
                  />
                  {errors?.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}{" "}
                </TextField>
              </div>
            </div>

            <TextField name="userName" type="text">
              <Label>userName</Label>
              <Input
                {...register("username")}
                className="rounded-sm my-1 pr-10 w-full"
              />
              {errors?.userName && (
                <p className="text-red-500 text-sm">
                  {errors.userName.message}
                </p>
              )}{" "}
            </TextField>

            <TextField name="email" type="email">
              <Label>Email</Label>
              <Input
                {...register("email")}
                placeholder="john@example.com"
                className="rounded-sm my-1 pr-10 w-full"
              />
              {errors?.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}{" "}
            </TextField>
            <TextField name="password" type="text" className="w-full">
              <Label htmlFor="password"> Password</Label>

              <div className="relative">
                <Input
                  {...register("password")}
                  id="password"
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  className="rounded-sm my-1 pr-10 w-full"
                />
                {errors?.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {show ? "🙈" : "👁"}
                </button>
              </div>
            </TextField>
            <TextField name="rePassword" type="password" className="w-full">
              <Label htmlFor="rePassword"> rePassword</Label>

              <div className="relative">
                <Input
                  {...register("rePassword")}
                  id="rePassword"
                  type={show ? "text" : "password"}
                  placeholder="Enter your rePassword"
                  className="rounded-sm my-1 pr-10 w-full"
                />
                {errors?.rePassword && (
                  <p className="text-red-500 text-sm">
                    {errors.rePassword.message}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {show ? "🙈" : "👁"}
                </button>
              </div>
            </TextField>
            <TextField name="phone" type="text">
              <Label>phone</Label>
              <Input
                {...register("phone")}
                className="rounded-sm my-1 pr-10 w-full"
              />
              {errors?.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}{" "}
            </TextField>

            <Button className="w-full" type="submit">
              Register
            </Button>
          </Form>
          {/* Sign up  Link */}
          <span className="mt-5 block text-gray-800 text-sm">
            Already Have an Account?
            <Link to="/" className=" text-blue-500 hover:underline">
              {" "}
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
