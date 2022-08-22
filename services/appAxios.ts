import axios from "axios";

/* Creating an axios instance with the baseURL and headers. */
export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});
