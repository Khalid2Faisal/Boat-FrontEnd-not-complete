import appAxios from "../appAxios";

/**
 * It takes an email address as a parameter, and sends a request to the server to send a password reset
 * email to that address
 * @param {string} email - string
 * @returns The response.data is an object with a message property.
 */
export default async function forgotPassword(email: string) {
  try {
    const response = await appAxios.put(
      "/forgot-password",
      JSON.stringify(email)
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
