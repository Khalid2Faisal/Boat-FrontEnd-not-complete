import appAxios from "../appAxios";

interface ResetInfo {
  password: string;
  resetPasswordLink: string;
}

/**
 * It takes in a ResetInfo object, stringifies it, and sends it to the server
 * @param {ResetInfo} resetInfo - ResetInfo
 * @returns The response.data is an object with a message property.
 */
export default async function resetPassword(resetInfo: ResetInfo) {
  try {
    const response = await appAxios.put(
      `/reset-password`,
      JSON.stringify(resetInfo)
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
