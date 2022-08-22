import appAxios from "../appAxios";

interface UserData {
  email: string;
  password: string;
}

/**
 * It takes a user object, sends it to the server, and returns the response
 * @param {UserData} user - UserData
 * @returns {token: string, user: User}
 */
export default async function login(user: UserData) {
  const data = {
    email: user.email,
    password: user.password,
  };

  const response = await appAxios.post(`/signin`, JSON.stringify(data));
  return response.data;
}
