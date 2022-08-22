import cookieService from "./cookie";
import localStorageService from "./localStorage";

interface Data {
  token: string;
  user: object;
  message?: string;
}

/**
 * It takes in a data object with a token and user property, sets the token in a cookie and the user in
 * local storage, and then calls the next function if it exists
 * @param {Data} data - { token: string, user: User }
 * @param {Function} [next] - Function -&gt; This is the function that will be called after the
 * authentication is done.
 */
export default function authenticate(data: Data, next?: Function) {
  const { token, user } = data;
  cookieService.setCookie("token", token);
  localStorageService.setItem("user", user);
  if (next) {
    next();
  }
}
