import appAxios from "../appAxios";
import cookieService from "./cookie";
import localStorageService from "./localStorage";

export default async function logout(next?: Function) {
  cookieService.removeCookie("token");
  localStorageService.removeItem("user");
  if (next) {
    next();
  }

  const response = await appAxios.get("/signout");
  return response.data;
}
