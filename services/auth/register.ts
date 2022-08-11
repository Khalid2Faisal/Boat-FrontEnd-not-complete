import appAxios from "../appAxios";

interface UserData {
  token: string;
}

export default async function register(user: UserData) {
  const data = {
    token: user.token,
  };

  const response = await appAxios.post(`/signup`, JSON.stringify(data));
  return response.data;
}
