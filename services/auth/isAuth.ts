import cookieService from "./cookie";
import localStorageService from "./localStorage";

const isBrowser = typeof window !== "undefined";

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
