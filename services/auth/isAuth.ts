import cookieService from "./cookie";
import localStorageService from "./localStorage";

/* Checking if the window object is defined. If it is not defined, it means that the code is running on
the server. */
const isBrowser = typeof window !== "undefined";

/**
 * If the user is not on the browser, return false. If the user is on the browser, check if the token
 * and user are in the cookie and local storage. If they are, return the user. If they are not, return
 * false.
 * @returns The user object.
 */
export default function isAuth() {
  if (!isBrowser) {
    return false;
  }
  const token = cookieService.getCookie("token");
  const user = localStorageService.getItem("user");
  if (!token || !user) {
    return false;
  }
  return user;
}
