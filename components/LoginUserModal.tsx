import React, { useState, useEffect, FormEvent } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  toggleChevronIcon,
  toggleLoginModal,
} from "../features/navigation/navigationSlice";
import { login } from "../features/auth/authThunk";
import { reset } from "../features/auth/authSlice";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default function LoginUser() {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { isSuccess, isError, isLoading, message } = useAppSelector(
    (state) => state.auth
  );

  const { email, password } = formData;

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      toast.success(message);
      dispatch(toggleLoginModal());
      dispatch(toggleChevronIcon());
    }
    if (isError) {
      dispatch(reset());
      toast.error(message);
      setFormData({ ...formData, email: "", password: "" });
    }
  }, [isSuccess, isError, message]);

  const onChange = (e: InputEvent) => {
    // e is the event object
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  const onClose = () => {
    dispatch(toggleLoginModal());
  };

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
        {/* <div className="w-full h-full bg-gray-900 z-0 absolute inset-0" /> */}
        <div className="flex flex-col items-center justify-center w-full">
          <form
            onSubmit={onFormSubmit}
            className="bg-white h-full shadow rounded w-full p-6 xl:p-8"
          >
            <div className="cursor-pointer absolute top-5 right-2 m-3 text-gray-800 transition duration-150 ease-in-out">
              <IoMdClose className="text-2xl" onClick={onClose} />
            </div>
            <p
              tabIndex={0}
              role="heading"
              aria-label="Login to your account"
              className="text-2xl font-extrabold leading-6 text-gray-800"
            >
              Login to your account
            </p>
            <p className="text-sm mt-4 font-medium leading-none text-gray-500">
              Don't have an account yet?{" "}
              <span
                tabIndex={0}
                role="link"
                aria-label="Sign up here"
                className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
              >
                {" "}
                register here
              </span>
            </p>
            <button
              aria-label="Continue with google"
              role="button"
              className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
            >
              <svg
                width={19}
                height={20}
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                  fill="#4285F4"
                />
                <path
                  d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                  fill="#34A853"
                />
                <path
                  d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                  fill="#EB4335"
                />
              </svg>
              <p className="text-base font-medium ml-4 text-gray-700">
                Continue with Google
              </p>
            </button>
            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                OR
              </p>
              <hr className="w-full bg-gray-400  " />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <input
                aria-label="enter email adress"
                role="input"
                type="email"
                id="email"
                name="email"
                value={email}
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                onChange={onChange}
              />
            </div>
            <div className="mt-6  w-full">
              <label className="text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  aria-label="enter Password"
                  role="input"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                role="button"
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
