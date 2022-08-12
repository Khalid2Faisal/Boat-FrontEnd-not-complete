import cookieService from "./cookie";
import localStorageService from "./localStorage";

interface Data {
  token: string;
  user: object;
  message?: string;
}

export default function authenticate(data: Data, next?: Function) {
  const { token, user } = data;
  cookieService.setCookie("token", token);
  localStorageService.setItem("user", user);
  if (next) {
    next();
  }
}
