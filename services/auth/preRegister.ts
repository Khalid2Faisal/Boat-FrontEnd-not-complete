import appAxios from "../appAxios";

import { PreRegisterData } from "../../features/auth/authTypes";

export default async function preRegister(user: PreRegisterData) {
  const data = {
    name: user.name,
    email: user.email,
    password: user.password,
  };

  const response = await appAxios.post(`/pre-signup`, JSON.stringify(data));
  return response.data;
}
