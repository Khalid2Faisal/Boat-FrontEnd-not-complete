import appAxios from "../appAxios";

interface ResetInfo {
  password: string;
  resetPasswordLink: string;
}

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
