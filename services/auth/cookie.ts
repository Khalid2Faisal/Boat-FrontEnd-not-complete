const isBrowser = typeof window !== "undefined";

const setCookie = (key: string, value: string, expDays: number = 10) => {
  if (isBrowser) {
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${key}=${value};${expires};path=/`;
  }
};

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

const removeCookie = (key: string) => {
  if (isBrowser) {
    setCookie(key, "", -1);
  }
};

export default { setCookie, getCookie, removeCookie };
