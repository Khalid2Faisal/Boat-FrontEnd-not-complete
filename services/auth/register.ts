import appAxios from "../appAxios";

interface UserData {
  token: string;
}

/**
 * It takes a user object, and sends it to the server.
 * The server then returns a response, which is then returned by the function.  *  *
 * @param {UserData} user - UserData
 * @returns The response.data is an object with a property called "token"
 */
export default async function register(user: UserData) {
  const data = {
    token: user.token,
  };

  const response = await appAxios.post(`/signup`, JSON.stringify(data));
  return response.data;
}
