import appAxios from "../appAxios";

interface UserData {
  email: string;
  password: string;
}

export default async function login(user: UserData) {
  const data = {
    email: user.email,
    password: user.password,
  };

  const response = await appAxios.post(`/signin`, JSON.stringify(data));
  return response.data;
}
