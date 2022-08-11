import appAxios from "../appAxios";

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
