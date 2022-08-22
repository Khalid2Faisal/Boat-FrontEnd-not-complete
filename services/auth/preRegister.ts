import appAxios from "../appAxios";

import { PreRegisterData } from "../../features/auth/authTypes";

/**
 * It takes in a user object, and sends it to the server.
 * @param {PreRegisterData} user - PreRegisterData
 * @returns The response.data is an object with a property called data.
 */
export default async function preRegister(user: PreRegisterData) {
  const data = {
    name: user.name,
    email: user.email,
    password: user.password,
  };

  const response = await appAxios.post(`/pre-signup`, JSON.stringify(data));
  return response.data;
}
