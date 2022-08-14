import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

import GoogleAuth from "./GoogleAuth";
import RegisterForm from "../Forms/RegisterForm";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  toggleRegisterModal,
  toggleLoginModal,
} from "../../features/navigation/navigationSlice";

export default function RegisterUser() {
  const dispatch = useAppDispatch();
  const { isError, isSuccess, message } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      dispatch(toggleRegisterModal());
    }
  }, [isSuccess, isError, message]);

  const onClose = () => {
    dispatch(toggleRegisterModal());
  };

  return (
    <div className="fixed transition ease-in duration-1000 bg-slate-100 inset-0 bg-opacity-50 backdrop-blur-md">
      <div
        className="fixed transition top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-1/2 xl:w-2/6 z-60 overflow-y-auto"
        id="registerUserModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="registerUserModalLabel"
        aria-hidden="true"
      >
        {/* <div className="w-full h-full bg-gray-900 z-0 absolute inset-0" /> */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-white h-full shadow rounded w-full p-6 xl:p-8">
            <div className="cursor-pointer absolute top-5 right-2 m-3 text-gray-800 transition duration-150 ease-in-out">
              <IoMdClose className="text-2xl" onClick={onClose} />
            </div>
            <p
              tabIndex={0}
              role="heading"
              aria-label="Login to your account"
              className="text-2xl font-extrabold leading-6 text-gray-800"
            >
              Create new account
            </p>
            <p className="text-sm mt-4 font-medium leading-none text-gray-500">
              You already have an account?{" "}
              <span
                tabIndex={0}
                role="link"
                aria-label="Sign up here"
                className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
                onClick={() => dispatch(toggleLoginModal())}
              >
                {" "}
                login here
              </span>
            </p>
            <GoogleAuth />
            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                OR
              </p>
              <hr className="w-full bg-gray-400  " />
            </div>
            <RegisterForm isError={isError} />
          </div>
        </div>
      </div>
    </div>
  );
}
