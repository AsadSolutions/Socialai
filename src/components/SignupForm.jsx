import React, { useState } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import Button from "./Button";

import toast from "react-hot-toast";
import axios from "axios";
import useFormType from "../hooks/formType";

function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const { setFormType } = useFormType();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

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
          Register
        </h2>

        <form className="space-y-6">
          <Input
            id="firstName"
            label="First Name"
            required
            register={register}
            errors={errors}
          />
          <Input
            id="lastName"
            label="Last Name"
            required
            register={register}
            errors={errors}
          />
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
              label="Register"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </form>

        <div className="flex row text-gray-500 mx-auto mt-3 items-center justify-center">
          Already have an Account?{" "}
          <span
            onClick={() => {
              setFormType("login");
            }}
            className="ml-1 font-bold text-gray-700 cursor-pointer "
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
