const isBrowser = typeof window !== "undefined";

const setItem = (key: string, value: any) => {
  if (isBrowser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const getItem = (key: string) => {
  if (isBrowser) {
    return JSON.parse(localStorage.getItem(key) as string);
  }
};

const removeItem = (key: string) => {
  if (isBrowser) {
    localStorage.removeItem(key);
  }
};

export default { getItem, setItem, removeItem };
