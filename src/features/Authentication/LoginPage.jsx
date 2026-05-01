import React, { useContext, useState } from "react";
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

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "./../../schema/login.schema";
import { auth } from "../../context/auth.context";

export default function LoginPage() {
  const {setLogin,decodeFun} = useContext(auth)
  const [show, setShow] = useState(false);
  const [loginError, setloginError] = useState(null);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  async function submitForm(values) {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signin`,
        values,
      );

      if (data?.message == "success") {
        toast("successfully login");
        setLogin(data?.token)
        localStorage.setItem('token',data?.token)
        navigate('/admin')
        decodeFun()
      } else {
        toast("InCorrect Email or Password");
      }
    } catch (error) {
      toast("InCorrect Email or Password");
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
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <Form
            onSubmit={handleSubmit(submitForm)}
            className="flex w-96 flex-col gap-4"
            render={(props) => <form {...props} data-custom="foo" />}
          >
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
            <span className="my-2  flex justify-end text-gray-800 text-sm">
              <a href="#" className=" text-blue-500 hover:underline">
                {" "}
                Forget Password
              </a>
            </span>
            {loginError && (
              <p className="text-red-500 text-sm text-center">{loginError}</p>
            )}
            <div className="">
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </div>
          </Form>
          {/* Sign up  Link */}
          <span className="mt-5 block text-gray-800 text-sm">
            Don't Have an Account?
            <Link
              to="/auth/register"
              className=" text-blue-500 hover:underline"
            >
              {" "}
              Create Account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
