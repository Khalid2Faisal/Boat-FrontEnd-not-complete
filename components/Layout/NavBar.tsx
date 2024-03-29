import React, { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { IoMdBoat, IoMdClose, IoMdSearch } from "react-icons/io";
import { BiUser, BiMenu, BiUserPlus, BiCategoryAlt } from "react-icons/bi";
import { FiSettings, FiLogOut, FiChevronDown } from "react-icons/fi";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  toggleMobileMenu,
  toggleNavMenu,
  closeNavMenu,
  toggleRegisterModal,
  toggleLoginModal,
} from "../../features/navigation/navigationSlice";
import { logout } from "../../features/auth/authThunk";
import { reset } from "../../features/auth/authSlice";
import { BsPen } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import Search from "../Forms/Search";

export default function NavBar() {
  const dispatch = useAppDispatch();

  const [isSSR, setIsSSR] = useState(true);
  const { showMobileMenu, showNavMenu } = useAppSelector(
    (state) => state.navigation.layout
  );
  const { user, isError, isLoading, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );

  /* Setting the isSSR state to false. */
  useEffect(() => {
    setIsSSR(false);
  }, []);

  /* Checking if the isSuccess or isError is true, if it is true then it will dispatch the reset()
  function and then it will display a toast message. */
  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      toast.success(message);
      dispatch(closeNavMenu());
    }
    if (isError) {
      dispatch(reset());
      toast.error(message);
      dispatch(closeNavMenu());
    }
  }, [isSuccess, isError, message]);

  /**
   * ToggleRegister is a function that dispatches the toggleRegisterModal action.
   */
  const toggleRegister = () => {
    dispatch(toggleRegisterModal());
  };
  /**
   * ToggleLogin is a function that dispatches the toggleLoginModal action.
   */
  const toggleLogin = () => {
    dispatch(toggleLoginModal());
  };

  /**
   * OnLogout() is a function that dispatches the logout() action and the closeNavMenu() action.
   */
  const onLogout = () => {
    dispatch(logout());
    dispatch(closeNavMenu());
  };

  return (
    <div className={`bg-gray-200 ${showMobileMenu && "navbar"}`}>
      <div className=" h-full relative">
        <div className="bg-white">
          <div className="2xl:container 2xl:mx-auto">
            <nav className="shadow-sm">
              <div className=" flex flex-row justify-between">
                <Link href="/">
                  <div className=" flex space-x-3 items-center lg:pl-7 sm:pl-6 py-6 pl-4 pr-8">
                    <IoMdBoat className="text-gray-700 text-4xl cursor-pointer" />
                    <h1 className=" font-normal text-2xl leading-6 text-gray-800 cursor-pointer">
                      Boat Travel
                    </h1>
                  </div>
                </Link>
                {/* For large (i.e. desktop and laptop sized screen) */}
                <div className="lg:flex hidden flex-auto justify-between flex-row px-7 border-l border-r border-gray-200 py-6">
                  {!isSSR && user && (
                    <div>
                      <p className=" font-normal text-xs leading-3 text-gray-600">
                        Hi {user?.name}
                      </p>
                      <h3 className=" font-bold text-xl leading-5 text-gray-800 mt-2">
                        Welcome Back
                      </h3>
                    </div>
                  )}

                  <Search />
                </div>
                {!isSSR && user ? (
                  <div className=" hidden sm:flex justify-end flex-row lg:pr-7 sm:pr-6 py-6 pr-4 pl-8">
                    <div
                      aria-haspopup="true"
                      className=" flex justify-center items-center flex-row relative"
                    >
                      <ul
                        className={`p-2 w-40 border-r bg-white absolute right-0 rounded z-40  shadow mt-64 ${
                          !showNavMenu && "hidden"
                        }`}
                      >
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                          <div className="flex items-center">
                            <BiUser className="text-xl text-current" />
                            <span className="ml-2">My Profile</span>
                          </div>
                        </li>
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                          <FiSettings className="text-xl text-current" />
                          <span className="ml-2">Account Settings</span>
                        </li>
                        <li className="cursor-pointer transition-colors ease-in text-red-500 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-red-700 focus:text-red-700 focus:outline-none flex items-center">
                          <div className="flex items-center" onClick={onLogout}>
                            <FiLogOut className="text-xl text-current" />
                            <span className="ml-2">Log out</span>
                          </div>
                        </li>
                      </ul>
                      <div className="ml-2">
                        <p className="text-lg leading-4 font-semibold text-gray-800">
                          {user?.name}
                        </p>
                        <p className=" font-normal text-xs leading-3 text-gray-600 mt-1">
                          {user?.email}
                        </p>
                      </div>

                      <FiChevronDown
                        onClick={() => {
                          dispatch(toggleNavMenu());
                        }}
                        className={`${
                          showNavMenu ? "rotate-180" : ""
                        } cursor-pointer text-xl transform duration-100 xl:ml-7 lg:ml-3.5 ml-2 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800`}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="hidden sm:flex flex-row space-x-4 px-6 items-center">
                    <button
                      onClick={toggleRegister}
                      className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center"
                    >
                      Register
                    </button>
                    <button
                      onClick={toggleLogin}
                      className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center"
                    >
                      Login
                    </button>
                  </div>
                )}

                {/* Burger Icon */}
                <div
                  id="bgIcon"
                  onClick={() => dispatch(toggleMobileMenu())}
                  className="self-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 block sm:hidden cursor-pointer lg:pr-7 sm:pr-6 py-6 pr-4"
                >
                  <BiMenu
                    className={`text-2xl text-gray-700 ${
                      showMobileMenu ? "hidden" : ""
                    }`}
                  />
                  <IoMdClose
                    className={`text-2xl text-gray-700 ${
                      showMobileMenu ? "" : "hidden"
                    } `}
                  />
                </div>
              </div>
              {/* for medium-sized devices */}
              <div className="lg:hidden hidden sm:flex flex-col lg:px-7 sm:px-6 px-4 ">
                <hr className=" w-full bg-gray-200 " />
                <div className="lg:hidden flex flex-auto justify-between mt-3 flex-row pb-4">
                  {!isSSR && user && (
                    <div>
                      <p className=" font-normal text-xs leading-3 text-gray-600">
                        Hi {user?.name}
                      </p>
                      <h3 className=" font-bold text-xl leading-5 text-gray-800 mt-2">
                        Welcome Back
                      </h3>
                    </div>
                  )}

                  <Search />
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Mobile and Small devices Navigation */}
        <div
          id="MobileNavigation"
          className={`${
            showMobileMenu ? "" : "hidden"
          } transform duration-150 sm:hidden h-full bg-white shadow-lg`}
        >
          <div className=" flex flex-col justify-between h-full ">
            <div className=" flex flex-col lg:px-7 sm:px-6 px-4">
              <hr className=" w-full bg-gray-200 " />

              {!isSSR && user && (
                <div className="lg:hidden flex flex-auto justify-between mt-3 flex-row pb-4">
                  <div>
                    <p className=" font-normal text-xs leading-3 text-gray-600">
                      Hi {user?.name}
                    </p>
                    <h3 className=" font-bold text-xl leading-5 text-gray-800 mt-2">
                      Welcome Back
                    </h3>
                  </div>
                </div>
              )}

              <Search />
            </div>
            {!isSSR && user ? (
              <ul className="flex flex-col justify-between items-start p-4 absolute bottom-20 left-0 w-full bg-gray-50">
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                  <div className="flex items-center">
                    <BsPen className="text-xl text-current" />
                    <span className="ml-2">Write Post</span>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                  <div className="flex items-center">
                    <FaHashtag className="text-xl text-current" />
                    <span className="ml-2">Tags</span>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                  <div className="flex items-center">
                    <BiCategoryAlt className="text-xl text-current" />
                    <span className="ml-2">Categories</span>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <BiUser className="text-xl text-current" />
                    <span className="ml-2">My Profile</span>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <FiSettings className="text-xl text-current" />
                    <span className="ml-2">Account Settings</span>
                  </div>
                </li>
                <li className="cursor-pointer text-red-600 text-sm leading-3 tracking-normal py-2 hover:text-red-700 focus:text-red-700 focus:outline-none flex items-center">
                  <div onClick={onLogout} className="flex items-center">
                    <FiLogOut className="text-xl text-current" />
                    <span className="ml-2">Log out</span>
                  </div>
                </li>
              </ul>
            ) : (
              <ul className="flex flex-col justify-between items-start p-4 absolute  bottom-0 left-0 w-full bg-gray-50">
                <li className="cursor-pointer text-indigo-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                  <div onClick={toggleLogin} className="flex items-center">
                    <FiLogOut className="text-xl text-current" />
                    <span className="ml-2">Login</span>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                  <div onClick={toggleRegister} className="flex items-center">
                    <BiUserPlus className="text-xl text-current" />
                    <span className="ml-2">Register</span>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                  <div className="flex items-center">
                    <BsPen className="text-xl text-current" />
                    <span className="ml-2">Write Post</span>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                  <div className="flex items-center">
                    <FaHashtag className="text-xl text-current" />
                    <span className="ml-2">Tags</span>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                  <div className="flex items-center">
                    <BiCategoryAlt className="text-xl text-current" />
                    <span className="ml-2">Categories</span>
                  </div>
                </li>
              </ul>
            )}
            {!isSSR && user ? (
              <div className=" flex items-center flex-row py-6 px-2 bg-gray-100 absolute bottom-0 left-0 w-full">
                {/* <img
                  className="w-10 h-10 "
                  src="https://i.ibb.co/QMddNDb/Ellipse-14.png"
                  alt="individual person image-3"
                /> */}
                <div className="ml-2">
                  <p className="text-lg leading-4 font-semibold text-gray-800">
                    {user.name}
                  </p>
                  <p className=" font-normal text-xs leading-3 text-gray-600 mt-1">
                    {user.email}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
