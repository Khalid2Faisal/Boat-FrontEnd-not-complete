/* Checking if the window object is available. If it is, then it is a browser. If it is not, then it is
not a browser. */
const isBrowser = typeof window !== "undefined";

/**
 * If the user is in a browser, then set the item in localStorage.
 * @param {string} key - string - The key to store the value under.
 * @param {any} value - any - The value to be stored in the local storage.
 */
const setItem = (key: string, value: any) => {
  if (isBrowser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

/**
 * If the current environment is a browser, then parse the value of the key in localStorage as a string
 * and return it
 * @param {string} key - string - The key of the item you want to get from localStorage
 * @returns the value of the key in localStorage.
 */
const getItem = (key: string) => {
  if (isBrowser) {
    return JSON.parse(localStorage.getItem(key) as string);
  }
};

/**
 * If the browser is available, remove the item from localStorage.
 * @param {string} key - string - The key of the item you want to remove from localStorage.
 */
const removeItem = (key: string) => {
  if (isBrowser) {
    localStorage.removeItem(key);
  }
};

export default { getItem, setItem, removeItem };
