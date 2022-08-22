import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch } from "../../app/hooks";
import { preRegister } from "../../features/auth/authThunk";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

export default function RegisterForm({ isError }: { isError: boolean }) {
  const dispatch = useAppDispatch();

  /* Destructuring the useForm hook. */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  /* Resetting the form when the isError prop is true. */
  useEffect(() => {
    if (isError) {
      reset();
    }
  }, [isError]);

  /**
   * OnFormSubmit is a function that takes in a data object of type IFormInput and returns a dispatch
   * function that takes in a preRegister function that takes in a data object of type IFormInput
   * @param data - IFormInput
   */
  const onFormSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(preRegister(data));
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label className="text-sm font-medium leading-none text-gray-800">
          Name
        </label>
        <input
          aria-label="enter email adress"
          role="input"
          type="text"
          id="name"
          className={`transition bg-gray-200 border rounded focus:outline-gray-800 focus:bg-gray-100 text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 ${
            errors.name && "focus:outline-red-600 border-red-600 bg-gray-100"
          }`}
          {...register("name", {
            required: "Name must be provided.",
            pattern: {
              value: /^[a-zA-Z\s]{3,}$/,
              message:
                "Name must be at least 3 characters long, and can only contain letters.",
            },
          })}
        />
        <span className="transition-opacity ease-in duration-300 pt-2 inline-block leading-4 text-xs text-red-600">
          {errors.name?.message}
        </span>
      </div>
      <div className="mt-6 w-full">
        <label className="text-sm font-medium leading-none text-gray-800">
          Email
        </label>
        <input
          aria-label="enter email adress"
          role="input"
          type="email"
          id="register_email"
          className={`transition bg-gray-200 border rounded focus:outline-gray-800 focus:bg-gray-100 text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 ${
            errors.email && "focus:outline-red-600 border-red-600 bg-gray-100"
          }`}
          {...register("email", {
            required: "Email must be provided.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address.",
            },
          })}
        />
        <span className="transition-opacity ease-in duration-300 pt-2 inline-block leading-4 text-xs text-red-600">
          {errors.email?.message}
        </span>
      </div>
      <div className="mt-6  w-full">
        <label className="text-sm font-medium leading-none text-gray-800">
          Password
        </label>
        <input
          aria-label="enter Password"
          role="input"
          type="password"
          id="password"
          className={`transition bg-gray-200 border rounded focus:outline-gray-800 focus:bg-gray-100 text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 ${
            errors.password &&
            "focus:outline-red-600 border-red-600 bg-gray-100"
          }`}
          {...register("password", {
            required: "Password must be provided.",
            pattern: {
              value:
                /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
              message:
                "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character.",
            },
          })}
        />
        <span className="transition-opacity ease-in duration-300 pt-2 inline-block leading-4 text-xs text-red-600">
          {errors.password?.message}
        </span>
      </div>
      <div className="mt-8">
        <button
          role="button"
          aria-label="create my account"
          className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
}
