import appAxios from "../appAxios";

interface UserData {
  tokenId: string;
}

/**
 * It takes a user object, sends it to the server, and returns the response from the server
 * @param {UserData} user - {
 * @returns The response.data is the user object that was created in the server.
 */
export default async function googleLogin(user: UserData) {
  const response = await appAxios.post("/google-login", JSON.stringify(user));
  return response.data;
}
