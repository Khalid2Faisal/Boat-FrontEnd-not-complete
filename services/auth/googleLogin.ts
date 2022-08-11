import appAxios from "../appAxios";

interface UserData {
  tokenId: string;
}

export default async function googleLogin(user: UserData) {
  const response = await appAxios.post("/google-login", JSON.stringify(user));
  return response.data;
}
