import React, { useEffect, FormEvent } from "react";
import { useRouter } from "next/router";
import { IoMdBoat } from "react-icons/io";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  toggleLoginModal,
  toggleRegisterModal,
} from "../../features/navigation/navigationSlice";

interface ActivateProps {
  userName: string;
  handleSubmit: (e: FormEvent) => void;
}

export default function AccountActivation({
  userName,
  handleSubmit,
}: ActivateProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess) {
      router.push("/");
      dispatch(toggleLoginModal());
    }
    if (isError) {
      router.push("/");
      dispatch(toggleRegisterModal());
    }
  }, [isSuccess, isError, isLoading, message]);

  return (
    <div className="fixed transition-opacity ease-in bg-slate-100 inset-0 bg-opacity-50 backdrop-blur-md">
      <div
        className="fixed transition-opacity ease-in top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-1/2 xl:w-2/6 z-60 overflow-y-auto"
        id="registerUserModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="registerUserModalLabel"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <form className="bg-white h-full shadow rounded w-full p-6 xl:p-8">
            <div className="flex flex-col items-center justify-center w-full mb-8">
              <IoMdBoat className="text-gray-800 text-5xl xl:text-6xl cursor-pointer mb-4" />
              <h1 className=" font-normal text-2xl leading-6 text-gray-800 cursor-pointer">
                Boat Travel
              </h1>
            </div>
            <hr className="w-full bg-gray-400" />
            <p
              tabIndex={0}
              role="heading"
              aria-label="Activate your account"
              className="text-2xl font-extrabold leading-8 text-gray-800 mt-8"
            >
              Hey {userName}, Welcome to Boat Travel.
            </p>
            <p className="text-sm mt-8 font-medium text-gray-500 leading-5">
              Boat Travel added you as a new user. Activate your account to
              continue by clicking the button below.
            </p>
            <div className="mt-8">
              <button
                role="button"
                aria-label="activate my account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                onClick={handleSubmit}
                type="submit"
              >
                Activate Your Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
