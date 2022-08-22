const isBrowser = typeof window !== "undefined";

/**
 * "If the current environment is a browser, then create a new date, set the time to the current time
 * plus the number of days passed in, create an expires string, and set the cookie."
 *
 * The first line of the function is a guard clause. It checks to see if the current environment is a
 * browser. If it is, then the function continues. If it isn't, then the function returns.
 *
 * The next line creates a new date.
 *
 * The next line sets the time of the date to the current time plus the number of days passed in.
 *
 * The next line creates an expires string.
 *
 * The next line sets the cookie.
 *
 * The function is easy to read and understand.
 * @param {string} key - The name of the cookie
 * @param {string} value - The value of the cookie.
 * @param {number} [expDays=10] - number = 10
 */
const setCookie = (key: string, value: string, expDays: number = 10) => {
  if (isBrowser) {
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${key}=${value};${expires};path=/`;
  }
};

/**
 * It takes a key as an argument, and returns the value of the cookie with that key.
 * @param {string} key - The key of the cookie you want to get.
 * @returns The value of the cookie.
 */
const getCookie = (key: string) => {
  if (isBrowser) {
    const name = key + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    let res;
    ca.forEach((val) => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res;
  }
};

/**
 * If we're in the browser, set the cookie to an empty string and set the expiration date to yesterday.
 * @param {string} key - The name of the cookie
 */
const removeCookie = (key: string) => {
  if (isBrowser) {
    setCookie(key, "", -1);
  }
};

export default { setCookie, getCookie, removeCookie };
