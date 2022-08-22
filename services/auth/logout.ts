import appAxios from "../appAxios";
import cookieService from "./cookie";
import localStorageService from "./localStorage";

/**
 * It removes the token from the cookie and the user from the local storage, then it makes a request to
 * the server to sign out the user.
 * @param {Function} [next] - Function; This is a function that will be called after the logout is
 * complete.
 * @returns The response.data is being returned.
 */
export default async function logout(next?: Function) {
  cookieService.removeCookie("token");
  localStorageService.removeItem("user");
  if (next) {
    next();
  }

  const response = await appAxios.get("/signout");
  return response.data;
}
