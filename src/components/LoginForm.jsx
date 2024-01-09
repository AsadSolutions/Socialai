import React, { useState } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import Button from "./Button";

import toast from "react-hot-toast";
import axios from "axios";
import useFormType from "../hooks/formType";
import useUser from "../hooks/useUser";

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { setUser } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const { formType, setFormType } = useFormType();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      setUser("user");
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        "
    >
      <div
        className="
            bg-white
            mx-2
            rounded-md
            px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10
            "
      >
        <h2
          className="
       mb-2
        text-center
        text-2xl
        font-bold
        tracking-tight
        text-lightblack
       
        "
        >
          Login
        </h2>

        <form className="space-y-6">
          <Input
            id="email"
            label="Email"
            required
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            required
            register={register}
            errors={errors}
          />
          <div className="w-[90%] mx-auto">
            <Button
              disabled={isLoading}
              label="Login"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </form>

        <div className="flex row text-gray-500 mx-auto mt-3 items-center justify-center">
          Don't have an Account?{" "}
          <span
            onClick={() => {
              setFormType("register");
            }}
            className="ml-1 font-bold text-gray-700 cursor-pointer "
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
