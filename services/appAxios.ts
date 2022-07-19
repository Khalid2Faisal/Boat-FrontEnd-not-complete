import axios from "axios";

export default axios.create({
  baseURL: "https://boat2boat.herokuapp.com/api",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});
